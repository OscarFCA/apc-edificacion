# 🎨 Sistema de Diseño — APC Edificación

> Fuente única de verdad del diseño del sitio. Los tokens viven en
> [`css/styles.css`](css/styles.css) (`:root`). No usar valores fuera de esta tabla.

## 1. Identidad de marca

Empresa de **gerencia y supervisión de proyectos de construcción**. Pilares:
*"Coordinamos. Supervisamos. Cumplimos."* Lema: **"Evita sobrecostos, retrasos
y estrés: nosotros lo hacemos realidad."** Tono profesional, técnico y confiable;
énfasis en transparencia, control y certidumbre.

**Logotipo:** isotipo techo/montaña (arco ascendente) sobre las siglas **APC** con
descriptor inferior. Versión **blanca** (`assets/logo-header.webp`) sobre fondos
oscuros/transparentes; versión **navy** (`assets/logo.webp`) sobre fondo claro.

## 2. Paleta de color

| Token | Valor | Uso |
|-------|-------|-----|
| `--green` | `#2E9E5B` | Primario (acentos, botones, eyebrows, CTA) |
| `--green-dark` | `#247A47` | Hover / estados activos |
| `--green-soft` | `rgba(46,158,91,.1)` | Fondos suaves, badges |
| `--navy` | `#1B2430` | Secciones oscuras y hero |
| `--navy-2` | `#232F3E` | Variante navy secundaria |
| *(footer)* | `#14162C` | Fondo del footer (navy profundo) |
| `--ink` | `#141A24` | Texto principal |
| `--muted` | `#5B6675` | Texto secundario |
| `--bg` | `#FFFFFF` | Fondo base |
| `--bg-alt` | `#F6F8FA` | Secciones alternas |
| `--line` | `#E6EAF0` | Bordes y separadores |

## 3. Tipografía

- **Títulos — `DM Serif Display`** (serif, 400) · `--serif`
  H1 68px/78 · H2 44px/50.6 · H3 22px/25.3 (responsivo con `clamp()`).
- **Texto/UI — `Be Vietnam Pro`** (400/500/600) · `--sans`
  Cuerpo 16px/26.4 color `--ink` · Eyebrow 13px 600 MAYÚS tracking .18em verde ·
  Botones 14px 600 MAYÚS tracking .04em.

## 4. Componentes

- **Botón primario:** verde, blanco, `border-radius:999px`, padding `15px 28px`, MAYÚS + tracking, ícono de flecha.
- **Cards:** `--radius:14px` + sombras `--shadow-sm/md/lg`.
- **Header:** alto `84px` (`--header-h`); transparente con logo+nav blancos sobre el hero/banner; al hacer scroll pasa a `rgba(255,255,255,.97)` sticky con logo navy.
- **Botón flotante:** burbuja verde de teléfono, esquina inferior izquierda.

## 5. Layout y espaciado

- Ancho máx. de contenido `1200px` (`--maxw`).
- Padding vertical de sección **96px**; secciones CTA **88px**.
- Radio base **14px**.
- Ritmo de secciones: blanco → `#F6F8FA` → navy `#1B2430`.

## 6. Tono de voz

Directo, orientado a resultados y tranquilidad del cliente. Palabras clave:
*tiempo, costo, calidad, transparencia, sin sorpresas, cumplimiento*. Respaldo en
metodologías **LEAN, PMI, BIM**.
