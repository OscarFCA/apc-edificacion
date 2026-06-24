// Generador del sitio limpio de APC Edificación.
// Fotos vía Cloudinary (cloud dhg0yzpsj, f_auto,q_auto). Logo/equipo locales.
import fs from 'node:fs';
const OUT = '/Users/maseuali/Desktop/Hel3na/documentos/APC/apc-edificacion';
const BASE = 'https://oscarfca.github.io/apc-edificacion/';

const cld = (id, w, h, crop = 'fill') =>
  `https://res.cloudinary.com/dhg0yzpsj/image/upload/f_auto,q_auto,c_${crop},w_${w}${h ? `,h_${h}` : ''}/${id}`;

// ---- iconos (Lucide, stroke currentColor) ----
const I = {
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  chart: '<path d="M3 3v18h18"/><path d="m7 14 4-4 3 3 5-5"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="m8.21 13.89-1.21 7 5-3 5 3-1.21-7"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  mail: '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
  clip: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  hat: '<path d="M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/><path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5"/><path d="M4 15v-3a6 6 0 0 1 6-6"/><path d="M14 6a6 6 0 0 1 6 6v3"/>',
  msg: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
  fb: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  ig: '<rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/>',
  in: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
};
const svg = (p, cls = '') => `<svg ${cls ? `class="${cls}" ` : ''}viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;

const NAV = [
  ['index.html', 'Inicio'],
  ['metodologia.html', 'Nuestra Metodología'],
  ['proyectos.html', 'Proyectos'],
  ['contacto.html', 'Contacto'],
];

const head = (title, desc, slug) => {
  const url = BASE + (slug === 'index' ? '' : slug + '.html');
  const og = cld('20_-_Santarena_-_Roof_yyqqe9', 1200, 630);
  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<link rel="canonical" href="${url}">
<meta name="robots" content="index, follow, max-image-preview:large">
<meta property="og:type" content="website">
<meta property="og:site_name" content="APC Edificación">
<meta property="og:locale" content="es_MX">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/webp" href="assets/logo.webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preconnect" href="https://res.cloudinary.com">
<link rel="stylesheet" href="css/styles.css">
${slug === 'index' ? `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'GeneralContractor', name: 'APC Edificación',
    url: BASE, logo: BASE + 'assets/logo.webp', image: og, telephone: '+523336110221',
    description: desc, areaServed: 'MX',
    address: { '@type': 'PostalAddress', streetAddress: 'Calle San Nicolás de Bari #677 B, Colonia Camino Real', addressLocality: 'Zapopan', addressRegion: 'Jalisco', addressCountry: 'MX' },
    knowsAbout: ['Gerencia de obra', 'Supervisión de obra', 'Lean Construction', 'PMI', 'BIM'],
  })}</script>` : ''}
</head>
<body>`;
};

const header = (active) => `
<header class="header">
  <div class="container">
    <a class="brand" href="index.html"><img src="assets/logo.webp" alt="APC Edificación" width="120" height="98"></a>
    <button class="nav-toggle" aria-label="Abrir menú" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav">
      ${NAV.map(([h, t]) => `<a href="${h}"${h === active ? ' aria-current="page"' : ''}>${t}</a>`).join('\n      ')}
    </nav>
    <div class="header-actions">
      <a class="btn btn--primary" href="contacto.html">Cotizar proyecto</a>
    </div>
  </div>
</header>`;

const footer = () => `
<footer class="footer">
  <div class="container">
    <div class="footer__grid">
      <div class="footer__brand">
        <div class="logo-text">APC <b>Edificación</b></div>
        <p>Gerencia de proyectos de construcción especializada en garantizar cumplimiento en tiempo, costo y calidad, mediante metodologías LEAN, PMI y BIM, procesos digitales y un acompañamiento cercano que brinda transparencia y certidumbre a cada cliente.</p>
        <div class="socials">
          <a href="#" aria-label="Facebook">${svg(I.fb)}</a>
          <a href="#" aria-label="Instagram">${svg(I.ig)}</a>
          <a href="#" aria-label="LinkedIn">${svg(I.in)}</a>
          <a href="#" aria-label="X">${svg(I.x)}</a>
        </div>
      </div>
      <div class="footer__links">
        <h4>Enlaces</h4>
        ${NAV.map(([h, t]) => `<a href="${h}">${t}</a>`).join('\n        ')}
      </div>
      <div class="footer__links">
        <h4>Información</h4>
        <a href="#">Aviso de Privacidad</a>
        <a href="#">Términos y Condiciones</a>
      </div>
      <div class="footer__contact">
        <h4>Contacto</h4>
        <div class="row">${svg(I.pin)}<span>Calle San Nicolás de Bari #677 B, Col. Camino Real, Zapopan, Jalisco, México</span></div>
        <div class="row">${svg(I.phone)}<a href="tel:+523336110221">33 3611 0221</a></div>
        <div class="row">${svg(I.mail)}<a href="mailto:contacto@apcedificacion.com">contacto@apcedificacion.com</a></div>
      </div>
    </div>
    <div class="footer__bottom">© <span data-year>2026</span> APC Edificación S.A. de C.V. — Todos los derechos reservados.</div>
  </div>
</footer>
<a class="fab" href="tel:+523314105303" aria-label="Llamar">${svg(I.phone)}</a>
<script src="js/main.js"></script>
</body>
</html>`;

// ---- datos de proyectos ----
const PROJECTS = {
  santarena: {
    name: 'Santarena', short: 'Santarena', loc: 'Los Cabos, Baja California Sur', num: '01',
    cover: 'copy_of_21_-_santarena_-_fachada_frontal_2_hig2kk_f3a539', banner: '20_-_Santarena_-_Roof_yyqqe9',
    desc: ['Santarena es un desarrollo residencial ubicado en Los Cabos, orientado a crear un proyecto de alto nivel y gran calidad constructiva. APC Edificación coordina el diseño, la gestoría y la ejecución del proyecto, asegurando que cada etapa se realice con precisión técnica y una planeación estratégica alineada a las expectativas del desarrollador.',
      'El proyecto incorpora metodologías LEAN, supervisión constante y una coordinación multidisciplinaria que garantiza eficiencia, control de costos y una ejecución limpia, incluso frente a retos técnicos complejos como la gestión del agua y las condiciones del terreno.'],
    specs: { Estado: 'En construcción', Localización: 'Los Cabos', Tipo: 'Desarrollo habitacional', Timeline: '18 meses', Cliente: 'Grupo MAG', Metodología: 'LEAN Construction' },
    gallery: ['3_-_Santarena_-_Lobby_jhuets', '2_-_Santarena_-_Alberca_vista_yoga_wfzaom', '20_-_Santarena_-_Roof_yyqqe9', 'Estructura_5_ujakxv', 'Estructura_7_qt2blz', 'Estructura_4_phrlsr', 'Estructura_1_r4wbck', 'Estructura_2_arioyz', 'Estructura_3_ueuoke', 'Estructura_6_u2cg1k', 'Estrutura_8_gnofmi', 'Colado_losa_PB_jbzj2q', 'Proceso_llfy1o', 'Vista_1_ey1fsq_7856a5d41', 'Vista_2_fsrndg_78572906c'],
  },
  pila: {
    name: 'PILA – Parque Industrial La Laja', short: 'Parque Industrial PILA', loc: 'La Laja, Jalisco', num: '02',
    cover: 'Firme_bodega_3_vkqxls', banner: 'dentro_nave_3_kmpqww',
    desc: ['Parque Industrial La Laja (PILA) es un desarrollo industrial estratégico en Jalisco, actualmente en ejecución y previsto para tres años de obra. APC Edificación lidera la planeación, supervisión y coordinación de especialidades para garantizar control total sobre tiempos, costos y calidad, manteniendo la operación del parque activa durante la construcción.',
      'El proyecto integra metodologías LEAN y herramientas digitales para asegurar decisiones oportunas, reducir riesgos y maximizar el retorno para desarrolladores e inversionistas.'],
    specs: { Estado: 'En construcción', Localización: 'La Laja, Jalisco', Tipo: 'Parque industrial', Timeline: '3 años', Cliente: 'OCAP Proyectos', Metodología: 'LEAN Construction' },
    gallery: ['Firme_bodega_3_vkqxls', 'Dentro_nave_2_lyf024', 'Firme_bodega_4_y5byhx', 'dentro_nave_3_kmpqww', 'Dentro_nave_2_zgh1bl', 'Colado_bodega_umjojk', 'Terraceria_nave_d0i9ej', 'Estrcutura_nave_ppq9b9', 'Estructura_nave_2_l4a4vq', 'Vista_nave_2_utve3p', 'Estructura_nave_nrcat4', 'Naves_y_amenidades_pbd4hw_78362a72c', 'Toma_aerea_2_gdpmki_7837e0bc5', 'Toma_aerea_3_ly1o5e_783892785', 'Toma_aerea_uisjni_78390ec8e', 'Nave_3_y_4_1_lrncdy_78402d1dc', 'Nave_3_y_4_d6wod1_7841b6cd9', 'Naves_3_y_4_2_cmaf8z_784283e2c', 'Naves_a_b_y_c_drflgn_7843ab7e9'],
  },
  'tres-parques': {
    name: 'Tres Parques', short: 'Tres Parques', loc: 'Guadalajara, Jalisco — Colonia Country', num: '03',
    cover: 'copy_of_lobby_shxb4z_5a25da', banner: 'Fachada_i6oaxw',
    desc: ['Tres Parques es un desarrollo residencial vertical ubicado en la Colonia Country de Guadalajara, diseñado para inversionistas que buscan proyectos con alto potencial de plusvalía y ejecución controlada. APC Edificación lidera la gestión desde la etapa de diseño y gestión de licencias, asegurando claridad técnica, cumplimiento normativo y tomas de decisión informadas.',
      'El proyecto integra metodologías LEAN, coordinación interdisciplinaria y supervisión estratégica para garantizar una construcción eficiente, minimizar desviaciones y entregar unidades con los más altos estándares de calidad.'],
    specs: { Estado: 'Diseño y licencias', Localización: 'Guadalajara, Jalisco', Tipo: 'Desarrollo residencial', Timeline: '18 meses', Cliente: 'Grupo MAG', Metodología: 'LEAN Construction' },
    gallery: ['Lobby_shxb4z', 'Fachada_i6oaxw', 'Terrazas_dzlwv2', 'Departamento_wicfxt', 'Amenidades_ipdv4m', 'Alberca_hq2uii'],
  },
  'torre-creativo': {
    name: 'Torre Creativo', short: 'Torre Creativo', loc: 'En proceso de selección', num: '04',
    cover: 'copy_of_creativo_-_depa_a_2_v8jesz_91b66d', banner: 'Fachada_frente_tjeoqn',
    desc: ['Torre Creativo es un desarrollo residencial vertical impulsado por Grupo MAG, concebido para ofrecer un proyecto de alta calidad arquitectónica y constructiva. APC Edificación participa desde las primeras etapas para coordinar diseño, gestoría y planificación, garantizando claridad técnica y una base sólida para la futura ejecución del edificio.',
      'Aunque el proyecto se encuentra temporalmente detenido, se ha desarrollado una estrategia integral apoyada en metodologías LEAN, coordinación interdisciplinaria y procesos de control que permiten reactivar la obra con eficiencia, minimizar riesgos y asegurar el cumplimiento de estándares de calidad y exclusividad.'],
    specs: { Estado: 'Detenido temporalmente', Localización: 'En proceso de selección', Tipo: 'Desarrollo residencial', Timeline: '18 meses', Cliente: 'Grupo MAG', Metodología: 'LEAN Construction' },
    gallery: ['copy_of_creativo_-_depa_a_2_v8jesz_91b66d', 'Fahada_esquina_mu6lmp', 'Fachada_frente_tjeoqn', 'Creativo_-_Depa_D_Cocina_v097gc'],
  },
};
const PORDER = ['santarena', 'pila', 'tres-parques', 'torre-creativo'];
const specIcon = { Estado: I.clip, Localización: I.pin, Tipo: I.building, Timeline: I.clock, Cliente: I.user, Metodología: I.layers };

const projectCard = (slug) => {
  const p = PROJECTS[slug];
  return `<a class="pcard reveal" href="${slug}.html">
    <img src="${cld(p.cover, 900, 650)}" alt="${p.short}" loading="lazy">
    <span class="pcard__num">${p.num}</span>
    <div class="pcard__body">
      <h3>${p.short}</h3>
      <div class="loc">${svg(I.pin)}<span>${p.loc}</span></div>
      <span class="pcard__cta">Ver proyecto ${svg(I.arrow)}</span>
    </div>
  </a>`;
};

const ctaBand = () => `
<section class="cta">
  <img class="cta__bg" src="${cld('dentro_nave_3_kmpqww', 1600, 600)}" alt="" loading="lazy">
  <div class="container">
    <h2>¿Listo para impulsar tu proyecto con nosotros?</h2>
    <p>Cuéntanos sobre tu obra y recibe el acompañamiento de un equipo que cumple en tiempo, costo y calidad.</p>
    <a class="btn btn--primary" href="contacto.html">Iniciar consulta ${svg(I.arrow)}</a>
  </div>
</section>`;

// ===================== PÁGINAS =====================
const pages = {};

// ---- HOME ----
const features = [
  [I.shield, 'Cumplimiento garantizado', 'Planificamos cada obra con metodologías probadas como PMI, Lean Construction y BIM, asegurando el control de tiempos y costos. Cada avance se valida y documenta con rigor técnico.'],
  [I.chart, 'Transparencia total', 'Cada cliente cuenta con reportes digitales y tableros de control en línea para dar seguimiento al presupuesto, avances y estimaciones en tiempo real. Información clara y sin sorpresas.'],
  [I.award, 'Calidad y responsabilidad', 'Supervisamos cada fase del proyecto bajo estrictos estándares de calidad y seguridad, con el respaldo de nuestro equipo técnico y proveedores certificados.'],
];
const services = [
  [I.clip, 'Planeación Estratégica', 'Definimos alcances, tiempos, costos y riesgos desde el inicio. Cada proyecto arranca con una ruta clara orientada a una ejecución eficiente y controlada.'],
  [I.chart, 'Control Presupuestal', 'Damos seguimiento continuo a estimaciones, contratos y pagos, manteniendo el presupuesto dentro de los límites aprobados y alineado al avance real.'],
  [I.hat, 'Supervisión en Obra', 'Supervisión técnica diaria en sitio, seguimiento de avances y gestión de contratistas para que todo se construya como fue diseñado.'],
  [I.file, 'Reportes Digitales', 'Reportes ejecutivos, programas de obra y documentación actualizada en una plataforma digital exclusiva, con visibilidad total en todo momento.'],
  [I.layers, 'Metodologías LEAN · PMI · BIM', 'Integramos las mejores prácticas de la industria para cruzar especialidades, anticipar problemas y optimizar cada decisión del proyecto.'],
  [I.msg, 'Comunicación Cercana', 'Un acompañamiento profesional, transparente y constante que mantiene a cada cliente informado y con certidumbre en cada etapa.'],
];
pages.index = `
${header('index.html')}
<section class="hero">
  <img class="hero__bg" src="${cld('20_-_Santarena_-_Roof_yyqqe9', 1920, 1080)}" alt="" fetchpriority="high">
  <div class="container">
    <div class="hero__inner">
      <span class="eyebrow">Gerencia de proyectos de construcción</span>
      <h1>Evita sobrecostos, retrasos y estrés: nosotros lo hacemos realidad.</h1>
      <p class="sub">Gerencia integral de obra con control real sobre tiempo, costo y calidad. Más de veinte años haciendo proyectos bien planeados, bien ejecutados y sin sorpresas.</p>
      <div class="hero__cta">
        <a class="btn btn--primary" href="contacto.html">Iniciar consulta ${svg(I.arrow)}</a>
        <a class="hero__phone" href="tel:+523314105303"><span class="ic">${svg(I.phone)}</span><span><small>Llámanos ahora</small>+(52) 33 1410 5303</span></a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <span class="eyebrow">Liderazgo probado en cada obra</span>
      <h2 class="section-title">Ejecución de proyectos con control de tiempos, costos y calidad.</h2>
      <p class="lead">Somos una empresa especializada en la gerencia integral de proyectos de construcción. Desde hace más de veinte años trabajamos de la mano con desarrolladores, inversionistas y clientes particulares, involucrándonos en cada etapa para asegurar proyectos bien planeados, bien ejecutados y sin sorpresas.</p>
    </div>
    <div class="grid-3">
      ${features.map(([ic, t, d]) => `<div class="feature reveal"><div class="feature__icon">${svg(ic)}</div><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Proyectos</span>
      <h2 class="section-title">Entregados en tiempo, dentro del presupuesto y con calidad.</h2>
    </div>
    <div class="grid-projects">
      ${PORDER.map(projectCard).join('\n      ')}
    </div>
    <div style="text-align:center;margin-top:48px"><a class="btn btn--dark" href="proyectos.html">Ver todos los proyectos ${svg(I.arrow)}</a></div>
  </div>
</section>

<section class="section section--dark">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Coordinamos. Supervisamos. Cumplimos.</span>
      <h2 class="section-title">Nos encargamos de cada etapa del proyecto</h2>
    </div>
    <div class="grid-services">
      ${services.map(([ic, t, d]) => `<div class="service"><div class="service__icon">${svg(ic)}</div><h3>${t}</h3><p>${d}</p></div>`).join('\n      ')}
    </div>
  </div>
</section>

${ctaBand()}
${footer()}`;

// ---- PROYECTOS ----
pages.proyectos = `
${header('proyectos.html')}
<section class="banner">
  <img class="banner__bg" src="${cld('Firme_bodega_3_vkqxls', 1920, 700)}" alt="">
  <div class="container"><h1>Proyectos</h1><div class="crumbs"><a href="index.html">Inicio</a> — Proyectos</div></div>
</section>
<section class="section">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Portafolio</span>
      <h2 class="section-title">Obras gestionadas por APC Edificación</h2>
      <p class="lead">Desarrollos industriales, corporativos y residenciales gestionados de principio a fin con control total sobre tiempo, costo y calidad.</p>
    </div>
    <div class="grid-projects">
      ${PORDER.map(projectCard).join('\n      ')}
    </div>
  </div>
</section>
${ctaBand()}
${footer()}`;

// ---- PÁGINAS DE PROYECTO ----
for (const slug of PORDER) {
  const p = PROJECTS[slug];
  pages[slug] = `
${header('proyectos.html')}
<section class="banner">
  <img class="banner__bg" src="${cld(p.banner, 1920, 700)}" alt="">
  <div class="container"><h1>${p.name}</h1><div class="crumbs"><a href="index.html">Inicio</a> — <a href="proyectos.html">Proyectos</a> — ${p.short}</div></div>
</section>

<section class="section">
  <div class="container">
    <div class="detail">
      <div class="detail__desc">
        <span class="eyebrow">Descripción</span>
        <h2 class="section-title" style="margin-bottom:24px">${p.short}</h2>
        ${p.desc.map((d) => `<p>${d}</p>`).join('\n        ')}
      </div>
      <div class="specs">
        <dl>
          ${Object.entries(p.specs).map(([k, v]) => `<div class="spec"><dt>${k}</dt><dd>${v}</dd></div>`).join('\n          ')}
        </dl>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt section--tight">
  <div class="container">
    <div class="section-head"><span class="eyebrow">Galería</span><h2 class="section-title">Avance e imágenes del proyecto</h2></div>
    <div class="gallery">
      ${p.gallery.map((id, i) => `<a href="${cld(id, 1400, 1000)}"><img src="${cld(id, 600, 450)}" alt="${p.short} — imagen ${i + 1}" loading="lazy"></a>`).join('\n      ')}
    </div>
  </div>
</section>
${ctaBand()}
${footer()}`;
}

// ---- METODOLOGÍA ----
const phases = [
  ['16476_r43uwf', 'Fase 1 · 05', 'Conceptualización y Viabilidad', 'Analizamos si tu proyecto realmente conviene: revisamos normativa, uso de suelo, permisos, viabilidad financiera y retorno de inversión. Desde aquí empezamos a reducir riesgos para evitar cambios caros y atrasos durante la obra.'],
  ['fase2_1_pfvssp', 'Fase 2 · 05', 'Diseño y Planificación Detallada', 'Coordinamos arquitectos e ingenierías, integramos BIM para cruzar especialidades y desarrollamos un cronograma y presupuesto base claros. Con metodología LEAN, definimos la ruta de trabajo para que la obra avance sin improvisaciones ni sobrecostos.'],
  ['fase3_zqxj8y', 'Fase 3 · 05', 'Ejecución y Supervisión en Obra', 'Estando en sitio, aseguramos que todo se construya como se diseñó: supervisión técnica diaria, seguimiento de avances, gestión de contratistas y control estricto de estimaciones y cambios. Aquí es donde se evita el típico “se nos salió de las manos”.'],
  ['fase4_vo7g60', 'Fase 4 · 05', 'Control de Costos y Cambios', 'Cada decisión tiene impacto. Por eso administramos pagos, controlamos cambios de alcance (change orders) y comparamos avance físico vs. presupuesto. El objetivo: que el proyecto llegue a la meta sin desviaciones críticas en costo ni tiempo.'],
  ['fase5_dam1em', 'Fase 5 · 05', 'Entrega, Cierre y Puesta en Marcha', 'Antes de entregar verificamos que todo funcione: checklist de pendientes (punch list), pruebas de instalaciones y elaboración del Libro Blanco con planos “as built”, manuales y garantías. También acompañamos la gestión de la licencia de ocupación.'],
];
const team = [
  ['assets/team/garcia.webp', 'Director de la empresa', 'Ing. Manuel Humberto García Rosas'],
  ['assets/team/ortega.webp', 'Gerente de proyectos', 'Arq. Roberto Ortega'],
  ['assets/team/robles.webp', 'Gerente de proyecto', 'Arq. Juan Pablo Robles'],
];
pages.metodologia = `
${header('metodologia.html')}
<section class="banner">
  <img class="banner__bg" src="${cld('fase3_zqxj8y', 1920, 700)}" alt="">
  <div class="container"><h1>¿Por qué tu obra necesita una gerencia profesional?</h1><div class="crumbs"><a href="index.html">Inicio</a> — Nuestra Metodología</div></div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head center">
      <span class="eyebrow">Gerencia de proyectos</span>
      <h2 class="section-title">Transformamos la complejidad de una obra en un proceso claro y controlado.</h2>
      <p class="lead">Aplicamos una metodología comprobada que integra planeación estratégica, supervisión técnica y herramientas digitales. Cada etapa —desde la concepción hasta la entrega final— se gestiona con procesos claros, comunicación constante y control total sobre tiempo, costo y calidad.</p>
    </div>
    <div class="steps">
      ${phases.map(([id, num, t, d]) => `<div class="step reveal">
        <div class="step__media"><img src="${cld(id, 900, 560)}" alt="${t}" loading="lazy"></div>
        <div class="step__text"><span class="step__num">${num}</span><h3>${t}</h3><p>${d}</p></div>
      </div>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head center"><span class="eyebrow">Nuestro equipo</span><h2 class="section-title">Nuestros líderes</h2></div>
    <div class="grid-team">
      ${team.map(([img, role, name]) => `<div class="member reveal"><img src="${img}" alt="${name}" loading="lazy"><div class="member__body"><div class="member__role">${role}</div><h3>${name}</h3></div></div>`).join('\n      ')}
    </div>
  </div>
</section>
${ctaBand()}
${footer()}`;

// ---- CONTACTO ----
const ccards = [
  [I.user, 'Ing. Manuel Humberto García Rosas', 'Director de la empresa', '33 1410 5303', '+523314105303', 'm.garcia@apcedificacion.com'],
  [I.file, 'Equipo de Oficina APC', 'Control Documental y Presupuestal', '33 3611 0221', '+523336110221', 'controlpresupuestal@apcedificacion.com'],
  [I.hat, 'Atención y Nuevos Proyectos', 'Contacto General / Cotizaciones', '33 3611 0221', '+523336110221', 'contacto@apcedificacion.com'],
];
pages.contacto = `
${header('contacto.html')}
<section class="banner">
  <img class="banner__bg" src="${cld('6_-_Santarena_-_Terraza_techada_x1q4db_022cd9', 1920, 700)}" alt="">
  <div class="container"><h1>Contacto</h1><div class="crumbs"><a href="index.html">Inicio</a> — Contacto</div></div>
</section>

<section class="section">
  <div class="container">
    <div class="contact-grid">
      <div>
        <span class="eyebrow">Deja tu mensaje</span>
        <h2 class="section-title" style="margin-bottom:28px">Impulsa tu proyecto con nosotros</h2>
        <form action="https://formsubmit.co/contacto@apcedificacion.com" method="POST">
          <input type="hidden" name="_subject" value="Nuevo mensaje desde apcedificacion.com">
          <input type="hidden" name="_template" value="table">
          <div class="field"><label for="n">Tu nombre</label><input id="n" name="nombre" type="text" required></div>
          <div class="field"><label for="e">Email</label><input id="e" name="email" type="email" required></div>
          <div class="field"><label for="t">Asunto</label><input id="t" name="asunto" type="text"></div>
          <div class="field"><label for="m">Mensaje</label><textarea id="m" name="mensaje" required></textarea></div>
          <button class="btn btn--primary" type="submit">Impulsa mi proyecto ${svg(I.arrow)}</button>
        </form>
      </div>
      <div>
        <span class="eyebrow">Contáctanos directamente</span>
        <p class="lead" style="margin-bottom:22px">Escríbele al área correcta y recibe una respuesta más rápida.</p>
        <div class="contact-cards">
          ${ccards.map(([ic, t, role, tel, telh, mail]) => `<div class="ccard">
            <div class="ccard__icon">${svg(ic)}</div>
            <div>
              <h3>${t}</h3><div class="role">${role}</div>
              <a href="tel:${telh}">${svg(I.phone)}<span>${tel}</span></a>
              <a href="mailto:${mail}">${svg(I.mail)}<span>${mail}</span></a>
            </div>
          </div>`).join('\n          ')}
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt section--tight">
  <div class="container">
    <div class="map-wrap">
      <iframe title="Ubicación APC Edificación" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Calle+San+Nicol%C3%A1s+de+Bari+677+Camino+Real+Zapopan+Jalisco&output=embed"></iframe>
    </div>
  </div>
</section>
${footer()}`;

// ---- escribir ----
const slugToFile = { index: 'index', proyectos: 'proyectos', metodologia: 'metodologia', contacto: 'contacto', santarena: 'santarena', pila: 'pila', 'tres-parques': 'tres-parques', 'torre-creativo': 'torre-creativo' };
const titles = {
  index: ['APC Edificación | Gerencia y Supervisión Profesional de Obra', 'APC Edificación: gerencia integral de proyectos de construcción en México con control de tiempo, costo y calidad mediante LEAN, PMI y BIM.'],
  proyectos: ['Proyectos | APC Edificación', 'Portafolio de APC Edificación: PILA, Santarena, Torre Creativo y Tres Parques. Obras industriales, corporativas y residenciales.'],
  metodologia: ['¿Por qué una gerencia profesional? | APC Edificación', 'La metodología de APC Edificación: 5 fases que integran PMI, LEAN y BIM para darte control real sobre tiempo, costo y calidad.'],
  contacto: ['Contacto | APC Edificación', 'Contacta a APC Edificación para la gerencia y supervisión profesional de tu obra. Cotiza tu proyecto con nuestro equipo.'],
  santarena: ['Santarena | APC Edificación', 'Santarena: desarrollo residencial en Los Cabos gestionado por APC Edificación con metodología LEAN.'],
  pila: ['PILA – Parque Industrial La Laja | APC Edificación', 'PILA – Parque Industrial La Laja: proyecto industrial en Jalisco gestionado por APC Edificación.'],
  'tres-parques': ['Tres Parques | APC Edificación', 'Tres Parques: desarrollo residencial vertical en Guadalajara gestionado por APC Edificación.'],
  'torre-creativo': ['Torre Creativo | APC Edificación', 'Torre Creativo: desarrollo residencial vertical de Grupo MAG gestionado por APC Edificación.'],
};
for (const [slug, body] of Object.entries(pages)) {
  const [title, desc] = titles[slug];
  fs.writeFileSync(`${OUT}/${slugToFile[slug]}.html`, head(title, desc, slug) + body + '\n');
  console.log('✓', slugToFile[slug] + '.html');
}

// sitemap + robots
const today = '2026-06-24';
const urls = Object.keys(pages).map((s) => `  <url><loc>${BASE}${s === 'index' ? '' : slugToFile[s] + '.html'}</loc><lastmod>${today}</lastmod></url>`).join('\n');
fs.writeFileSync(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`);
fs.writeFileSync(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${BASE}sitemap.xml\n`);
console.log('✓ sitemap.xml, robots.txt');
