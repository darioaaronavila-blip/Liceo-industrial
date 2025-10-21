/* =========================================================
   Configurable Data (CMS-lite): edita acá para actualizar
========================================================= */
const siteData = {
  hero: [
    {
      img: "img/IMG_20250912_081359.jpg",
      title: "Formación Técnica con Excelencia",
      text: "Aprendizajes significativos conectados con la industria y el territorio."
    },
    {
      img: "img/IMG_20250915_165326.jpg",
      title: "Inclusión y Dignidad",
      text: "Un liceo público para todas y todos, sin discriminación."
    },
    {
      img: "img/IMG_20250923_073916.jpg",
      title: "Innovación Pedagógica",
      text: "Metodologías activas y proyectos con sentido."
    }
  ],
  academico: [
    {
      titulo: "Especialidades TP",
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
      `
    },
    {
      titulo: "Asignaturas & Plan Común",
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
      `
    },
    {
      titulo: "Apoyos al Aprendizaje",
      contenido: `
        <ul>
          <li>PIE: Programa de Integración Escolar</li>
          <li>ACLE: Talleres extraprogramáticos</li>
          <li>Convivencia Escolar & Orientación</li>
        </ul>
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
      titulo: "Inicio del Año Escolar",
      fecha: "2025-03-03",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop",
      resumen: "Damos la bienvenida a nuestras y nuestros estudiantes con actividades por curso.",
      // Nuevo: texto distinto para el pop-up
      detalle: "Bienvenidas y bienvenidos al nuevo año escolar. Este es un texto ampliado a modo de placeholder/dummy para el modal: aquí podrías incluir el saludo del equipo directivo, información sobre horarios de ingreso, uniformes, protocolos de convivencia, y recordatorios de útiles. Este contenido es distinto al resumen de la tarjeta."
    },
    {
      titulo: "Taller de Ciencias",
      fecha: "2025-04-10",
      img: "https://images.unsplash.com/photo-1581091014534-8987c1d647c9?q=80&w=1600&auto=format&fit=crop",
      resumen: "Experimentos los días jueves después de clases. Cupos limitados.",
      detalle: "Texto dummy para el modal del Taller de Ciencias: descripción de experiencias, objetivos de aprendizaje, docentes a cargo, materiales requeridos y forma de inscripción. Este texto es deliberadamente diferente al resumen."
    },
    {
      titulo: "Fortaleciendo Habilidades Laborales",
      fecha: "2025-05-22",
      img: "https://www.subirfoto.es/get/sRdVW5.jpg",
      resumen: "Ceremonia de inauguración del Programa Fortaleciendo Habilidades para el Mundo Laboral con ONG Canales y HIF.",
      detalle: "Contenido extendido (placeholder) para el pop-up: reseña del programa, competencias socio-laborales a desarrollar (comunicación efectiva, trabajo en equipo, ciudadanía digital), y agradecimientos a ONG Canales y HIF Global. Este texto no replica el resumen."
    }
  ]
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
};
const VIEWS = Object.values(ROUTES).map(id => document.getElementById(id)).filter(Boolean);
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
  const link = document.querySelector(`.mainnav a[href='${path}']`);
  if (link) link.classList.add("active");
}
function navigate(slug, replace = false) {
  const id = ROUTES[slug] || "inicio";
  showView(id);
  setActiveNav("/" + slug);
  document.title = `Liceo Industrial – ${slug || "inicio"}`;
  const url = "/" + (slug || "");
  if (replace) {
    history.replaceState({ slug }, "", url);
  } else {
    history.pushState({ slug }, "", url);
  }
  mainnav?.classList.remove("open");
  navToggle?.setAttribute("aria-expanded", "false");
}
window.addEventListener("popstate", (e) => {
  const slug = e.state?.slug || location.pathname.replace("/", "") || "inicio";
  showView(ROUTES[slug] || "inicio");
  setActiveNav("/" + slug);
});
(function bootRouter() {
  VIEWS.forEach(v => v.setAttribute("aria-hidden", "true"));
  const slug = location.pathname.replace("/", "");
  navigate(slug, true);
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
   Accordion
========================================================= */
function mountAccordion(root, items) {
  root.innerHTML = "";
  items.forEach((item, i) => {
    const el = document.createElement("div");
    el.className = "ac-item";
    el.innerHTML = `
      <button class="ac-trigger" aria-expanded="false">
        <span>${item.titulo}</span>
        <span aria-hidden="true">▾</span>
      </button>
      <div class="ac-panel" id="acp-${i}">
        <div class="card" style="border:none; box-shadow:none; padding:14px 0 0 0;">
          ${item.contenido}
        </div>
      </div>
    `;
    const trigger = el.querySelector(".ac-trigger");
    const panel = el.querySelector(".ac-panel");
    trigger.addEventListener("click", () => {
      const isOpen = el.classList.toggle("open");
      trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
      panel.style.maxHeight = isOpen ? panel.scrollHeight + "px" : "0px";
    });
    if (i === 0) {
      el.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    root.appendChild(el);
  });
}

/* =========================================================
   Render Estudiantes Quicklinks
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
   Render Noticias
   (Ahora el modal muestra "detalle" o un placeholder)
========================================================= */
function renderNews(root, items) {
  const sorted = [...items].sort((a,b) => new Date(b.fecha) - new Date(a.fecha));
  root.innerHTML = sorted.map((n, i) => `
    <article class="news-card" data-index="${i}">
      <img src="${n.img}" alt="${n.titulo}" loading="lazy" />
      <div class="news-body">
        <h3>${n.titulo}</h3>
        <time datetime="${n.fecha}">${formatDate(n.fecha)}</time>
        <p>${n.resumen}</p>
        <button class="readmore btn-small" data-index="${i}">Ver más</button>
      </div>
    </article>
  `).join("");

  // --- Modal handling ---
  const modal = document.getElementById("newsModal");
  const modalImg = document.getElementById("modalImg");
  const modalTitle = document.getElementById("modalTitle");
  const modalText = document.getElementById("modalText");
  const closeBtn = modal.querySelector(".modal-close");

  // Accesible: cerrar con ESC
  document.addEventListener("keydown", (ev) => {
    if (ev.key === "Escape" && modal.classList.contains("show")) {
      closeModal();
    }
  });

  function openModal(news) {
    const placeholder =
      "Texto informativo (placeholder) para el modal: aquí puedes ampliar la noticia con detalles, fechas, contacto, links y fotografías. Este texto es distinto al mostrado en la tarjeta.";
    modalImg.src = news.img || "";
    modalTitle.textContent = news.titulo || "";
    // Usa 'detalle' si existe; si no, usa texto dummy
    modalText.textContent = news.detalle?.trim() || placeholder;
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = "";
  }

  root.querySelectorAll(".readmore").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = e.currentTarget.dataset.index;
      const news = sorted[idx];
      openModal(news);
    });
  });

  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
}

/* =========================================================
   Formulario de Contacto (demo)
========================================================= */
$("#contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  $("#formMsg").textContent = `Gracias, ${data.nombre}. Responderemos a ${data.correo}.`;
  e.currentTarget.reset();
});

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
  mountAccordion($("#academicoAccordion"), siteData.academico);
  renderStudentLinks($("#studentLinks"), siteData.estudiantes);
  renderNews($("#newsGrid"), siteData.noticias);
});
