import { Router } from "express";
const router = Router();

const { VERCEL_TOKEN, VERCEL_PROJECT_ID, VERCEL_TEAM_ID, ADMIN_KEY } = process.env;

const requireAdmin = (req, res, next) => {
  const key = req.header("x-admin-key");
  if (!ADMIN_KEY || key !== ADMIN_KEY) return res.status(401).json({ error: "unauthorized" });
  next();
};

router.get("/", requireAdmin, async (req, res) => {
  try {
    const qs = new URLSearchParams({ projectId: VERCEL_PROJECT_ID });
    if (VERCEL_TEAM_ID) qs.set("teamId", VERCEL_TEAM_ID);

    const resp = await fetch(`https://api.vercel.com/v6/deployments?${qs}`, {
      headers: { Authorization: `Bearer ${VERCEL_TOKEN}` }
    });
    const data = await resp.json();

    const deployments = (data.deployments || []).slice(0, 5).map(d => ({
      uid: d.uid,
      url: d.url,
      state: d.state,
      createdAt: d.createdAt
    }));

    res.json({ deployments });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "vercel_api_failed" });
  }
});

export default router;
