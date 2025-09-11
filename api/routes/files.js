import { Router } from "express";
import { S3Client, ListObjectsV2Command, DeleteObjectCommand } from "@aws-sdk/client-s3";
import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import crypto from "crypto";

const router = Router();

const {
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_REGION,
  S3_BUCKET,
  S3_PUBLIC_BASE_URL,
  ADMIN_KEY,
  MAX_UPLOAD_MB = "25"
} = process.env;

const s3 = new S3Client({
  region: AWS_REGION,
  credentials: { accessKeyId: AWS_ACCESS_KEY_ID, secretAccessKey: AWS_SECRET_ACCESS_KEY }
});

const requireAdmin = (req, res, next) => {
  const key = req.header("x-admin-key");
  if (!ADMIN_KEY || key !== ADMIN_KEY) return res.status(401).json({ error: "unauthorized" });
  next();
};

router.post("/presign", requireAdmin, async (req, res) => {
  try {
    const { filename } = req.body;
    if (!filename || !filename.toLowerCase().endsWith(".pdf")) {
      return res.status(400).json({ error: "Only .pdf allowed" });
    }
    const safe = filename.replace(/[^a-z0-9.\-_]/gi, "_").toLowerCase();
    const key = `docs/${new Date().toISOString().slice(0, 10)}/${Date.now()}-${crypto.randomUUID()}-${safe}`;
    const maxBytes = parseInt(MAX_UPLOAD_MB, 10) * 1024 * 1024;

    const { url, fields } = await createPresignedPost(s3, {
      Bucket: S3_BUCKET,
      Key: key,
      Conditions: [
        ["content-length-range", 0, maxBytes],
        ["starts-with", "$Content-Type", "application/pdf"]
      ],
      Expires: 60
    });

    res.json({ url, fields, key, publicUrl: `${S3_PUBLIC_BASE_URL}/${key}` });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "failed_to_presign" });
  }
});

router.get("/", requireAdmin, async (req, res) => {
  try {
    const out = await s3.send(new ListObjectsV2Command({ Bucket: S3_BUCKET, Prefix: "docs/" }));
    const items = (out.Contents || [])
      .sort((a, b) => b.LastModified - a.LastModified)
      .map(obj => ({
        key: obj.Key,
        size: obj.Size,
        lastModified: obj.LastModified,
        url: `${S3_PUBLIC_BASE_URL}/${obj.Key}`
      }));
    res.json({ items });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "list_failed" });
  }
});

router.delete("/:key", requireAdmin, async (req, res) => {
  try {
    const key = decodeURIComponent(req.params.key);
    await s3.send(new DeleteObjectCommand({ Bucket: S3_BUCKET, Key: key }));
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "delete_failed" });
  }
});

export default router;
