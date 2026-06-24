# APC Edificación

Sitio web estático de **APC Edificación** — gerencia y supervisión profesional de obra.
Hecho a mano en HTML, CSS y JavaScript (sin frameworks ni WordPress).

🌐 https://oscarfca.github.io/apc-edificacion/

## Estructura

```
index.html          Inicio
metodologia.html    Nuestra Metodología (5 fases + equipo)
proyectos.html      Portafolio
  ├─ santarena.html
  ├─ pila.html
  ├─ tres-parques.html
  └─ torre-creativo.html
contacto.html       Contacto (formulario + datos + mapa)
css/styles.css      Design system (DM Serif Display + Be Vietnam Pro, verde #2e9e5b)
js/main.js          Nav móvil, header, reveal, lightbox de galería
assets/             Logo y fotos del equipo
build-site.mjs      Generador del sitio (header/footer compartidos + datos)
```

## Imágenes

Las fotografías de proyectos y galerías se sirven desde **Cloudinary**
(`res.cloudinary.com/dhg0yzpsj`) con `f_auto,q_auto` — formato y calidad
automáticos, entrega por CDN y responsive. El logo y las fotos del equipo
son locales (`assets/`).

## Editar contenido

El contenido (textos, datos de proyectos, galerías) vive en `build-site.mjs`.
Tras editarlo: `node build-site.mjs` regenera todos los `.html`.
También puedes editar los `.html` directamente para cambios puntuales.

## Notas

- El formulario de contacto usa [FormSubmit](https://formsubmit.co) → llega a `contacto@apcedificacion.com` (requiere confirmar el correo la primera vez).
- El mapa es un embed de Google Maps (sin API key).

🤖 Generated with [Claude Code](https://claude.com/claude-code)
