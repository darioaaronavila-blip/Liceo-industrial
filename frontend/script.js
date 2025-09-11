/* =========================================================
   Configurable Data (CMS-lite): edita acá para actualizar
========================================================= */
const siteData = {
  hero: [
    {
      img: "https://images.unsplash.com/photo-1530435460869-d13625c69bbf?q=80&w=1600&auto=format&fit=crop",
      title: "Formación Técnica con Excelencia",
      text: "Aprendizajes significativos conectados con la industria y el territorio."
    },
    {
      img: "https://images.unsplash.com/photo-1478479405421-ce83c92fb3a8?q=80&w=1600&auto=format&fit=crop",
      title: "Inclusión y Dignidad",
      text: "Un liceo público para todas y todos, sin discriminación."
    },
    {
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
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
          <li>Lengua y Literatura, Matemática, Historia, Ciencias</li>
          <li>Inglés, Educación Ciudadana, Filosofía</li>
          <li>Educación Física y Salud</li>
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
      url: "#"
    },
    {
      titulo: "Taller de Ciencias",
      fecha: "2025-04-10",
      img: "https://images.unsplash.com/photo-1581091014534-8987c1d647c9?q=80&w=1600&auto=format&fit=crop",
      resumen: "Experimentos los días jueves después de clases. Cupos limitados.",
      url: "#"
    },
    {
      titulo: "Campeonato de Futsal",
      fecha: "2025-05-22",
      img: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop",
      resumen: "Inscripciones abiertas por curso. ¡A moverse!",
      url: "#"
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
$$(".mainnav a").forEach(a => a.addEventListener("click", () => {
  mainnav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");
}));

/* =========================================================
   Scroll suave + sección activa
========================================================= */
$$('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const id = anchor.getAttribute("href");
    const el = $(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", id);
    }
  });
});
const ioNav = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = "#" + entry.target.id;
    const link = document.querySelector(`.mainnav a[href='${id}']`);
    if (!link) return;
    if (entry.isIntersecting) {
      $$(".mainnav a").forEach(a => a.classList.remove("active"));
      link.classList.add("active");
    }
  });
}, { rootMargin: "-50% 0px -50% 0px", threshold: 0 });
["inicio","quienes-somos","academico","estudiantes","noticias","contacto"].forEach(id => {
  const el = document.getElementById(id);
  if (el) ioNav.observe(el);
});

/* =========================================================
   Reveal on scroll
========================================================= */
const revealer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); });
}, { threshold: 0.12 });
$$(".reveal").forEach(el => revealer.observe(el));

/* =========================================================
   Hero Carousel (accesible + táctil)
========================================================= */
function createCarousel({ root, slides, autoplay = true, interval = 6000 }) {
  const track = root.querySelector(".carousel-track");
  const indicators = root.querySelector(".carousel-indicators");
  let idx = 0, timer = null, isHover = false;

  // Render slides
  track.innerHTML = "";
  indicators.innerHTML = "";
  slides.forEach((s, i) => {
    const li = document.createElement("div");
    li.className = "slide";
    li.setAttribute("role", "listitem");
    li.innerHTML = `
      <img src="${s.img}" alt="${s.title}" loading="lazy">
      <div class="slide-caption">
        <h1>${s.title}</h1>
        <p>${s.text}</p>
      </div>
    `;
    track.appendChild(li);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Ir a la diapositiva ${i + 1}`);
    dot.addEventListener("click", () => go(i));
    indicators.appendChild(dot);
  });

  function update() {
    track.style.transform = `translateX(${-idx * 100}%)`;
    $$(".carousel-indicators button", root).forEach((b, i) => {
      b.setAttribute("aria-selected", i === idx ? "true" : "false");
    });
  }
  function next(dir = 1) {
    idx = (idx + dir + slides.length) % slides.length;
    update();
  }
  function go(i) { idx = i % slides.length; update(); }

  // Controls
  root.querySelector(".prev").addEventListener("click", () => next(-1));
  root.querySelector(".next").addEventListener("click", () => next(1));

  // Autoplay
  function play() {
    if (!autoplay) return;
    stop();
    timer = setInterval(() => { if (!isHover) next(1); }, interval);
  }
  function stop() { if (timer) clearInterval(timer); }
  root.addEventListener("mouseenter", () => { isHover = true; });
  root.addEventListener("mouseleave", () => { isHover = false; });

  // Touch
  let startX = 0, dx = 0;
  root.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; dx = 0; }, { passive: true });
  root.addEventListener("touchmove", (e) => { dx = e.touches[0].clientX - startX; }, { passive: true });
  root.addEventListener("touchend", () => {
    if (Math.abs(dx) > 40) next(dx > 0 ? -1 : 1);
  });

  // Keyboard
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") next(-1);
    else if (e.key === "ArrowRight") next(1);
  });
  root.setAttribute("tabindex", "0");

  // Init
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
      // Auto height
      if (isOpen) {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } else {
        panel.style.maxHeight = "0px";
      }
    });
    // Open first by default
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
========================================================= */
function renderNews(root, items) {
  // Orden cronológico descendente
  const sorted = [...items].sort((a,b) => new Date(b.fecha) - new Date(a.fecha));
  root.innerHTML = sorted.map(n => `
    <article class="news-card">
      <img src="${n.img}" alt="${n.titulo}" loading="lazy" />
      <div class="news-body">
        <h3>${n.titulo}</h3>
        <time datetime="${n.fecha}">${formatDate(n.fecha)}</time>
        <p>${n.resumen}</p>
        <a class="readmore" href="${n.url}">Leer más →</a>
      </div>
    </article>
  `).join("");
}

/* =========================================================
   Formulario de Contacto (demo)
========================================================= */
$("#contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.currentTarget));
  // Aquí podrías realizar fetch a tu backend / Forms / GAS
  $("#formMsg").textContent = `Gracias, ${data.nombre}. Responderemos a ${data.correo}.`;
  e.currentTarget.reset();
});

/* =========================================================
   Boot
========================================================= */
window.addEventListener("DOMContentLoaded", () => {
  // Carousel
  const hero = $("#heroCarousel");
  if (hero) {
    createCarousel({
      root: hero,
      slides: siteData.hero,
      autoplay: hero.dataset.autoplay === "true",
      interval: Number(hero.dataset.interval || 6000)
    });
  }
  // Académico
  mountAccordion($("#academicoAccordion"), siteData.academico);
  // Estudiantes
  renderStudentLinks($("#studentLinks"), siteData.estudiantes);
  // Noticias
  renderNews($("#newsGrid"), siteData.noticias);
});
