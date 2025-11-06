/* =========================================================
   Configurable Data (CMS-lite): edita acá para actualizar
========================================================= */
const siteData = {
  hero: [
    { img: "img/IMG_20250912_081359.jpg", title: "Formación Técnica con Excelencia", text: "Aprendizajes significativos conectados con la industria y el territorio." },
    { img: "img/IMG_20250915_165326.jpg", title: "Inclusión y Dignidad", text: "Un liceo público para todas y todos, sin discriminación." },
    { img: "img/IMG_20250923_073916.jpg", title: "Innovación Pedagógica", text: "Metodologías activas y proyectos con sentido." }
  ],
  academico: [
    {
      titulo: "Especialidades TP",
      slug: "especialidades-tp",
      media: { img: "img/acad/especialidades.jpg", caption: "Talleres y laboratorios • Referencial" },
      contenido: `
        <ul>
          <li>Electricidad</li>
          <li>Telecomunicaciones</li>
          <li>Mecánica Automotriz</li>
          <li>Mecánica Industrial</li>
          <li>Instalaciones Sanitarias</li>
          <li>Construcción</li>
          <li>Construcciones Metálicas</li>
        </ul>
        <p>Articulación con empresas locales, liceos y CFT/IP/Universidades.</p>
        <p>Puedes insertar fotos, videos (iframe) y más en esta página.</p>
      `
    },
    {
      titulo: "Asignaturas & Plan Común",
      slug: "asignaturas-plan-comun",
      media: { img: "img/acad/plan-comun.jpg", caption: "Plan común • Referencial" },
      contenido: `
        <ul>
          <li>Lengua y Literatura</li>
          <li>Inglés</li>
          <li>Química</li>
          <li>Física</li>
          <li>Biología</li>
          <li>Matemáticas</li>
          <li>Educación Física y Salud</li>
          <li>Laboratorio Vocacional</li>
          <li>Orientación</li>
          <li>Música</li>
          <li>Historia</li>
        </ul>
        <p>Recursos descargables y vínculos curriculares.</p>
      `
    },
    {
      titulo: "Apoyos al Aprendizaje",
      slug: "apoyos-aprendizaje",
      media: { img: "img/acad/apoyos.jpg", caption: "Acompañamiento • Referencial" },
      contenido: `
        <ul>
          <li>PIE: Programa de Integración Escolar</li>
          <li>ACLE: Talleres extraprogramáticos</li>
          <li>Convivencia Escolar & Orientación</li>
        </ul>
        <p>Protocolos, derivaciones y redes de apoyo.</p>
      `
    }
  ],
  estudiantes: [
    { icon: "📄", titulo: "Reglamento Interno", url: "#", desc: "Descarga en PDF" },
    { icon: "🗓️", titulo: "Horarios", url: "#", desc: "Jornadas y módulos" },
    { icon: "🧭", titulo: "Convivencia Escolar", url: "#", desc: "Protocolos de actuación" },
    { icon: "🧰", titulo: "Práctica Profesional", url: "#", desc: "Requisitos y convenios" },
    { icon: "💻", titulo: "Recursos Digitales", url: "#", desc: "Links útiles y plataformas" },
    { icon: "📝", titulo: "Documentos", url: "#", desc: "Formatos y solicitudes" }
  ],
  noticias: [
    {
      titulo: "Torneo De Futsal",
      slug: "torneo-de-futsal",
      fecha: "2025-03-03",
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRq8okiCfdbFbnLz9dgIwRaqdHYJa11rvG-T3O2XsHyMQPCeqiYb03kOlryV7FyEJ-bEVyc6E5PNnq2pd8onuXCFXPfIrXJU7zidbzt2DbJGSyW6EycTXvpn794KnMjzb9EoLMYZpiEjmw6JRSH_lfMselAlAQlH18PeYO6NhDG6d1pup3VMyGWhxfCkJg/w1600/Selecci%C3%B3n%20de%20Futsal%20Masculino%20del%20Liceo%20Polit%C3%A9cnico%20Cardenal%20Ra%C3%Bal%20Silva%20Henr%C3%ADquez%20obtiene%20el%20segundo%20lugar%20en%20campeonato%20interliceal.jpeg",
      resumen: "Estudiantes del liceo industrial brillan en el campeonato de futsal.",
      detalle: "La selección de futsal del Liceo Industrial Bicentenario de Excelencia Armando Quezada Acharán participó con entusiasmo en un torneo interliceano..."
    },
    {
      titulo: "Entrega Reconocimiento Academico",
      slug: "entrega-reconocimiento-academico",
      fecha: "2025-04-10",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpn-Al5F_RIXBU9zaa9jIjUDiOwrj01Gvq9w&s",
      resumen: "Establecimiento reconoce a estudiantes destacados del liceo.",
      detalle: "El Liceo Industrial Bicentenario de Excelencia AQ Acharán realizó una emotiva ceremonia..."
    },
    {
      titulo: "Fortaleciendo Habilidades Laborales",
      slug: "fortaleciendo-habilidades-laborales",
      fecha: "2025-05-22",
      img: "https://www.subirfoto.es/get/sRdVW5.jpg",
      resumen: "Ceremonia de inauguración del Programa Fortaleciendo Habilidades para el Mundo Laboral con ONG Canales y HIF.",
      detalle: "Contenido extendido (placeholder) para el detalle..."
    }
  ]
};

/* Páginas internas (detalle) de Quiénes Somos */
const qsPages = {
  "85-anios": {
    title: "+85 años de historia",
    body: "Nuestro liceo ha formado generaciones de técnicos y profesionales en Magallanes, construyendo una identidad basada en la excelencia, el respeto y el trabajo colaborativo.",
    img: "img/qs/85-anios.jpg",
    caption: "Archivo histórico institucional • Fotografía referencial"
  },
  "tp-excelencia": {
    title: "TP de Excelencia",
    body: "Somos parte de la red Bicentenario, con foco en gestión pedagógica, aprendizajes profundos y vinculación con el mundo productivo.",
    img: "img/qs/tp-excelencia.jpg",
    caption: "Laboratorio y equipamiento • Fotografía referencial"
  },
  "pie-acle": {
    title: "PIE & ACLE",
    body: "Acompañamiento especializado e inclusión efectiva. Sumamos talleres ACLE para potenciar talentos y la convivencia escolar.",
    img: "img/qs/pie-acle.jpg",
    caption: "Inclusión y participación • Fotografía referencial"
  },
  "vinculacion": {
    title: "Vinculación con Empresas",
    body: "Red de alianzas para prácticas, charlas técnicas y proyectos. Acercamos el aula a la industria para favorecer trayectorias formativas-laborales.",
    img: "img/qs/vinculacion.jpg",
    caption: "Visitas técnicas • Fotografía referencial"
  }
};

/* =========================================================
   Helpers
========================================================= */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("es-CL", { year: "numeric", month: "long", day: "numeric" });
}
const slugify = (s) => s.toLowerCase()
  .normalize("NFD").replace(/[\u0300-\u036f]/g,"")
  .replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"");

/* Asegurar slugs si faltan */
siteData.noticias.forEach(n => { if(!n.slug) n.slug = slugify(n.titulo); });
siteData.academico.forEach(a => { if(!a.slug) a.slug = slugify(a.titulo); });

/* =========================================================
   Theme toggle (persistente)
========================================================= */
const themeKey = "lic-institucional-theme";
function setTheme(mode) {
  document.documentElement.setAttribute("data-theme", mode);
  localStorage.setItem(themeKey, mode);
}
(function initTheme() {
  const saved = localStorage.getItem(themeKey);
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(saved || (prefersDark ? "dark" : "light"));
})();
$("#themeToggle")?.addEventListener("click", () => {
  const now = document.documentElement.getAttribute("data-theme");
  setTheme(now === "dark" ? "light" : "dark");
});

/* =========================================================
   Menú responsive
========================================================= */
const navToggle = $("#navToggle");
const mainnav = $("#mainnav");
navToggle?.addEventListener("click", () => {
  const open = mainnav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", open ? "true" : "false");
});
$$(".mainnav a").forEach(a => a.addEventListener("click", (e) => {
  e.preventDefault();
  const slug = a.getAttribute("href").replace("/", "");
  navigate(slug);
}));

/* =========================================================
   SPA Router con History API (modo slash)
========================================================= */
const ROUTES = {
  "": "inicio",
  "inicio": "inicio",
  "quienes-somos": "quienes-somos",
  "academico": "academico",
  "estudiantes": "estudiantes",
  "noticias": "noticias",
  "contacto": "contacto",
  "gracias": "gracias",
  // subrutas
  "qs/85-anios": "qs-detail",
  "qs/tp-excelencia": "qs-detail",
  "qs/pie-acle": "qs-detail",
  "qs/vinculacion": "qs-detail",
  // dinámicas:
  // noticias/<slug> -> news-detail
  // academico/<slug> -> acad-detail
};
const VIEWS = Object.values(ROUTES).map(id => document.getElementById(id)).filter(Boolean);
VIEWS.push(document.getElementById("news-detail"));
VIEWS.push(document.getElementById("acad-detail"));
VIEWS.forEach(sec => sec.classList.add("view"));

function showView(id) {
  VIEWS.forEach(sec => {
    const active = sec.id === id;
    sec.classList.toggle("is-active", active);
    sec.setAttribute("aria-hidden", active ? "false" : "true");
  });
  window.scrollTo({ top: 0, behavior: "auto" });
}
function setActiveNav(path) {
  $$(".mainnav a").forEach(a => a.classList.remove("active"));
  const root = "/" + (path.split("/")[0] || "");
  const link = document.querySelector(`.mainnav a[href='${root}']`);
  if (link) link.classList.add("active");
}

/* =========================================================
   Turnstile: render explícito cuando la vista está visible
========================================================= */
function mountTurnstileIfVisible() {
  const contactView = document.getElementById("contacto");
  if (!contactView) return;

  const isActive = contactView.classList.contains("is-active");
  const el = contactView.querySelector(".cf-turnstile");

  if (!isActive || !el) return;
  if (!window.turnstile) return; // librería aún no cargada

  // Evitar render duplicado
  if (el.dataset.tsRendered === "1") return;

  const sitekey = el.getAttribute("data-sitekey");
  if (!sitekey || sitekey === "TURNSTILE_SITE_KEY") {
    console.warn("Turnstile: data-sitekey no configurado.");
    return;
  }

  try {
    window.turnstile.render(el, {
      sitekey,
      theme: el.getAttribute("data-theme") || "auto",
    });
    el.dataset.tsRendered = "1";
  } catch (err) {
    console.error("Turnstile render error:", err);
  }
}

// callback global (desde el script con ?onload=onTurnstileLoaded)
window.onTurnstileLoaded = function() {
  mountTurnstileIfVisible();
};

function navigate(slug, replace = false) {
  // QS
  if (slug?.startsWith("qs/")) {
    const key = slug.split("/")[1];
    renderQSDetail(key);
    showView("qs-detail");
  }
  // Noticias detalle
  else if (slug?.startsWith("noticias/")) {
    const newsSlug = slug.split("/")[1];
    renderNewsDetail(newsSlug);
    showView("news-detail");
  }
  // Académico detalle
  else if (slug?.startsWith("academico/")) {
    const acadSlug = slug.split("/")[1];
    renderAcadDetail(acadSlug);
    showView("acad-detail");
  }
  else {
    const id = ROUTES[slug] || "inicio";
    showView(id);
  }

  setActiveNav(slug || "inicio");
  document.title = `Liceo Industrial – ${slug || "inicio"}`;
  const url = "/" + (slug || "");
  if (replace) history.replaceState({ slug }, "", url);
  else history.pushState({ slug }, "", url);
  mainnav?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");

  // 🔹 Si estamos en /contacto, renderiza Turnstile ahora
  if ((slug || "inicio") === "contacto") {
    setTimeout(mountTurnstileIfVisible, 0);
  }
}

window.addEventListener("popstate", (e) => {
  const slug = e.state?.slug || location.pathname.replace("/", "") || "inicio";
  if (slug.startsWith("qs/")) renderQSDetail(slug.split("/")[1]);
  if (slug.startsWith("noticias/")) renderNewsDetail(slug.split("/")[1]);
  if (slug.startsWith("academico/")) renderAcadDetail(slug.split("/")[1]);
  const id =
    slug.startsWith("qs/") ? "qs-detail" :
    slug.startsWith("noticias/") ? "news-detail" :
    slug.startsWith("academico/") ? "acad-detail" :
    (ROUTES[slug] || "inicio");
  showView(id);
  setActiveNav(slug);

  // 🔹 También al navegar con back/forward
  setTimeout(mountTurnstileIfVisible, 0);
});

(function bootRouter() {
  VIEWS.forEach(v => v.setAttribute("aria-hidden", "true"));
  const slug = location.pathname.replace("/", "");
  if (slug.startsWith("qs/")) renderQSDetail(slug.split("/")[1]);
  if (slug.startsWith("noticias/")) renderNewsDetail(slug.split("/")[1]);
  if (slug.startsWith("academico/")) renderAcadDetail(slug.split("/")[1]);
  const id =
    slug.startsWith("qs/") ? "qs-detail" :
    slug.startsWith("noticias/") ? "news-detail" :
    slug.startsWith("academico/") ? "acad-detail" :
    (ROUTES[slug] || "inicio");
  navigate(slug || "inicio", true);
  showView(id);

  // 🔹 Intento inicial (por si abriste directo /contacto y el script ya cargó)
  setTimeout(mountTurnstileIfVisible, 0);
})();

/* =========================================================
   Reveal on scroll
========================================================= */
const revealer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => revealer.observe(el));

/* =========================================================
   Hero Carousel
========================================================= */
function createCarousel({ root, slides, autoplay = true, interval = 6000 }) {
  const track = root.querySelector(".carousel-track");
  const indicators = root.querySelector(".carousel-indicators");
  let idx = 0, timer = null, isHover = false;

  track.innerHTML = "";
  indicators.innerHTML = "";
  slides.forEach((s, i) => {
    const li = document.createElement("div");
    li.className = "slide";
    li.innerHTML = `
      <img src="${s.img}" alt="${s.title}" loading="lazy">
      <div class="slide-caption">
        <h1>${s.title}</h1>
        <p>${s.text}</p>
      </div>
    `;
    track.appendChild(li);

    const dot = document.createElement("button");
    dot.addEventListener("click", () => go(i));
    indicators.appendChild(dot);
  });

  function update() {
    track.style.transform = `translateX(${-idx * 100}%)`;
    $$(".carousel-indicators button", root).forEach((b, i) => {
      b.setAttribute("aria-selected", i === idx ? "true" : "false");
    });
  }
  function next(dir = 1) { idx = (idx + dir + slides.length) % slides.length; update(); }
  function go(i) { idx = i % slides.length; update(); }

  root.querySelector(".prev").addEventListener("click", () => next(-1));
  root.querySelector(".next").addEventListener("click", () => next(1));

  function play() { if (!autoplay) return; stop(); timer = setInterval(() => { if (!isHover) next(1); }, interval); }
  function stop() { if (timer) clearInterval(timer); }
  root.addEventListener("mouseenter", () => { isHover = true; });
  root.addEventListener("mouseleave", () => { isHover = false; });

  update(); play();
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : play());

  return { next, go, stop, play };
}

/* =========================================================
   Académico: Tarjetas -> Subpágina
========================================================= */
function renderAcademicCards(root, items) {
  if (!root) return;
  root.innerHTML = items.map((it) => `
    <article class="acad-card" role="link" tabindex="0" data-slug="${it.slug}" aria-label="Abrir ${it.titulo}">
      <span class="acad-card__title">${it.titulo}</span>
    </article>
  `).join("");

  root.querySelectorAll(".acad-card").forEach(card => {
    const slug = card.dataset.slug;
    const go = () => navigate(`academico/${slug}`);
    card.addEventListener("click", go);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") go(); });
  });
}

/* Subpágina Académico */
function renderAcadDetail(slug) {
  const item = siteData.academico.find(a => a.slug === slug);
  const fallback = { titulo: "Información", contenido: "<p>Contenido no disponible.</p>", media: {} };
  const data = item || fallback;

  $("#acadDetailTitle").textContent = data.titulo || "Académico";
  $("#acadDetailBody").innerHTML = data.contenido || "<p>Contenido no disponible.</p>";

  const img = $("#acadDetailImg");
  if (data.media?.img) {
    img.src = data.media.img;
    img.alt = data.titulo || "Imagen académica";
    $("#acadDetailCaption").textContent = data.media.caption || "";
  } else {
    img.src = "";
    img.alt = "";
    $("#acadDetailCaption").textContent = "";
  }
}

/* =========================================================
   Estudiantes Quicklinks
========================================================= */
function renderStudentLinks(root, items) {
  root.innerHTML = items.map(it => `
    <a class="qcard" href="${it.url}">
      <span class="qicon">${it.icon}</span>
      <strong>${it.titulo}</strong>
      <span class="muted">${it.desc}</span>
    </a>
  `).join("");
}

/* =========================================================
   Noticias: Cards -> Subpágina
========================================================= */
function renderNews(root, items) {
  const sorted = [...items].sort((a,b) => new Date(b.fecha) - new Date(a.fecha));
  root.innerHTML = sorted.map((n) => `
    <article class="news-card" role="link" tabindex="0" data-slug="${n.slug}">
      <img src="${n.img}" alt="${n.titulo}" loading="lazy" />
      <div class="news-body">
        <h3>${n.titulo}</h3>
        <time datetime="${n.fecha}">${formatDate(n.fecha)}</time>
        <p>${n.resumen}</p>
      </div>
    </article>
  `).join("");

  root.querySelectorAll(".news-card").forEach(card => {
    const slug = card.dataset.slug;
    const go = (ev) => {
      const isTime = ev.target?.closest?.("time");
      if (isTime) return; // la fecha no navega
      navigate(`noticias/${slug}`);
    };
    card.addEventListener("click", go);
    card.addEventListener("keydown", (e) => { if (e.key === "Enter") navigate(`noticias/${slug}`); });
  });
}

/* Subpágina Noticias */
function renderNewsDetail(slug) {
  const item = siteData.noticias.find(n => n.slug === slug);
  const fallback = { titulo: "Noticia", fecha: new Date().toISOString(), img: "", resumen: "", detalle: "" };
  const data = item || fallback;

  $("#newsDetailTitle").textContent = data.titulo || "Noticia";
  $("#newsDetailSummary").textContent = data.resumen || "";
  $("#newsDetailBody").innerHTML = data.detalle ? `<p>${data.detalle}</p>` : "<p>Contenido no disponible.</p>";

  const img = $("#newsDetailImg");
  img.src = data.img || "";
  img.alt = data.titulo || "Imagen de la noticia";
  $("#newsDetailDate").textContent = formatDate(data.fecha);
}

/* =========================================================
   QS: navegación (se mantiene)
========================================================= */
function wireQSBadges() {
  $("#qsBadges")?.addEventListener("click", (e) => {
    const btn = e.target.closest(".badge-link");
    if (!btn) return;
    const key = btn.dataset.qs;
    navigate(`qs/${key}`);
  });
}
function renderQSDetail(key) {
  const data = qsPages[key] || { title: "Información", body: "Contenido no disponible.", img: "", caption: "" };
  $("#qsDetailTitle").textContent = data.title;
  $("#qsDetailBody").textContent = data.body;
  const img = $("#qsDetailImg");
  img.src = data.img || "";
  img.alt = data.title || "Imagen";
  $("#qsDetailCaption").textContent = data.caption || "";
}

/* =========================================================
   Contacto: validación, Turnstile y envío a /api/contact
========================================================= */

// Validación de formato de e-mail (cliente)
function looksLikeEmail(email){
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  return re.test(String(email).trim());
}

/* =========================================================
   Boot
========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  const hero = $("#heroCarousel");
  if (hero) {
    createCarousel({
      root: hero,
      slides: siteData.hero,
      autoplay: hero.dataset.autoplay === "true",
      interval: Number(hero.dataset.interval || 6000)
    });
  }
  renderMobileQuickNav();
  renderAcademicCards($("#academicoCards"), siteData.academico);
  renderStudentLinks($("#studentLinks"), siteData.estudiantes);
  renderNews($("#newsGrid"), siteData.noticias);
  wireQSBadges();

  // Botones Volver en páginas de detalle
  $("#newsBack")?.addEventListener("click", () => navigate("noticias"));
  $("#acadBack")?.addEventListener("click", () => navigate("academico"));
  $("#qsBack")?.addEventListener("click", () => navigate("quienes-somos"));
  $("#backHome")?.addEventListener("click", () => navigate("inicio")); // Para /gracias

  // CONTACTO: manejo del formulario
  const form = $("#contactForm");
  if(form){
    const msg = $("#formMsg");
    const emailInput = $("#correoInput");
    const emailHint = $("#emailHint");

    // UX validación en vivo del correo
    emailInput?.addEventListener("input", (e) => {
      const val = e.currentTarget.value;
      emailInput.classList.remove("error");
      if(!val){ emailHint.textContent = ""; return; }
      emailHint.textContent = looksLikeEmail(val) ? "Formato válido ✓" : "Revisa el formato del correo";
    });

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      msg.className = "form-msg";
      msg.textContent = "";

      const data = Object.fromEntries(new FormData(form));
      const nombre = (data.nombre || "").trim();
      const correo = (data.correo || "").trim();
      const mensaje = (data.mensaje || "").trim();

      // Validación básica
      if(!nombre || nombre.length < 2){
        msg.textContent = "Por favor, escribe tu nombre.";
        msg.classList.add("error");
        return;
      }
      if(!looksLikeEmail(correo)){
        msg.textContent = "Por favor, ingresa un correo válido.";
        msg.classList.add("error");
        emailInput?.classList.add("error");
        emailHint.textContent = "Ejemplo: nombre@dominio.cl";
        return;
      }
      if(!mensaje || mensaje.length < 10){
        msg.textContent = "El mensaje es muy corto.";
        msg.classList.add("error");
        return;
      }

      // Token Turnstile (el widget inserta un input hidden con este name)
      const captchaToken = form.querySelector('input[name="cf-turnstile-response"]')?.value;
      if(!captchaToken){
        msg.textContent = "Por favor, completa el CAPTCHA.";
        msg.classList.add("error");
        return;
      }

      msg.textContent = "Enviando…";

      try{
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type":"application/json" },
          body: JSON.stringify({ nombre, correo, mensaje, token: captchaToken })
        });
        const json = await res.json();

        if(!res.ok){
          msg.textContent = json?.error || "No se pudo enviar. Intenta nuevamente.";
          msg.classList.add("error");
          if(window.turnstile?.reset) turnstile.reset(); // reset captcha
          return;
        }

        // Éxito → navegar a /gracias
        form.reset();
        if(window.turnstile?.reset) turnstile.reset();
        navigate("gracias");
      }catch(err){
        console.error(err);
        msg.textContent = "Ocurrió un error inesperado.";
        msg.classList.add("error");
        if(window.turnstile?.reset) turnstile.reset();
      }
    });
  }

  // 🔹 Intento de montaje al final del boot
  setTimeout(mountTurnstileIfVisible, 0);
});

// Re-render accesos rápidos al cambiar tamaño
function renderMobileQuickNav() {
  const wrap = $(".mobile-quick-nav");
  if (!wrap) return;
  const isMobile = window.matchMedia("(max-width: 720px)").matches;
  if (!isMobile) { wrap.innerHTML = ""; return; }
  wrap.innerHTML = `
    <div class="quick-nav">
      <button class="quick-nav__btn" data-go="inicio">Inicio</button>
      <button class="quick-nav__btn" data-go="quienes-somos">Quiénes Somos</button>
      <button class="quick-nav__btn" data-go="academico">Académico</button>
      <button class="quick-nav__btn" data-go="estudiantes">Estudiantes</button>
      <button class="quick-nav__btn" data-go="noticias">Noticias</button>
      <button class="quick-nav__btn" data-go="contacto">Contacto</button>
    </div>
  `;
  wrap.querySelectorAll(".quick-nav__btn").forEach(b => b.addEventListener("click", () => navigate(b.dataset.go)));
}
window.addEventListener("resize", renderMobileQuickNav);
