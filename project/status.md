# Estado

**2026-09-26** · Fase: v1.1.14 liberada, desplegada y espejada; los tres destinos al día · Rama `main`
**Sesión por:** Claude Code · Opus 5.5 (`claude-opus-5-5`)

## Dónde va todo

Se liberó **v1.1.14** del sitio: cinco commits de contenido (`8d671fc`, `bf373eb`, `4d80d76`, `18c8d25`, `fd1499f`), el commit de release `1523500`, tag `v1.1.14` y release en GitHub. Documenta PurgeTSS **v7.18.0**, publicada el mismo día.

El contenido sale de una auditoría del skill `purgetss` de TiTools contra el CLI. Se corrigieron 15 páginas donde la doc contradecía al código: el alias `materialsymbols`, lo que corre `update`, el hook actual de `watch`, cuatro flags que no estaban documentados, la salida real del error de claves de `brand:`, el aplanado del arte de tiendas, las salidas `.png` de los SVG, el límite de `--width`, el orden de la opacidad, los números de padding, los atributos que escanea el pipeline SVG, las clases `items-*` del grid, el anidamiento de colores semánticos, `appc run` → `ti build`, `translate-*`, las comillas de `plugins`, las listas de propiedades configurables, el renombrado de fuentes con `-f`, los rangos de `rotate`/`scale`/`zoom` y el fallback de hover. Se agregó la sección "Combining a platform and a device" y se regeneraron cinco archivos de `glossary/`.

La mención de `ic_stat_notify` en `docs/app-assets/1-app-icons-and-branding.md` es deliberada: es la nota de migración que explica el nombre anterior.

## Pendiente

- El skill `purgetss` de TiTools describe el comportamiento anterior a v7.18.0; hay que actualizarlo allá, junto con sus índices de clases. No se tocó desde aquí.
- Opcional, a decisión de César: una página sobre adoptar PurgeTSS en una app Alloy existente con `.tss` escritos a mano (la trampa de prioridad de `app.tss`). TiTools tiene una guía en `skills/purgetss/references/adopting-purgetss.md` que puede servir de base.

## Verificado

Todo esto se corrió hoy:

- `npm run docs:check` → `Docs are up to date with v7.18.0` (R1).
- `npm run build` → `[SUCCESS] Generated static files in "build"`, con las anclas nuevas del changelog validadas por `onBrokenAnchors: 'throw'` (R2).
- En vivo, después de `npm run deploy:fresh` (R3): `platform-and-device-modifiers` contiene "Combining a platform and a device"; los `<h3>` de versión de la portada son exactamente `v7.18.0`, `v7.17.1`, `v7.17.0`; `multi-density-images` contiene "between 1 and 1024".
- La portada tiene exactamente tres versiones y coinciden con las tres primeras de `src/pages/changelog.md` (R7).
- `npm run clean:md` modificó en `../purgetss-docs-context7` exactamente las 15 páginas editadas más `changelog.md`, `index.md` y `README.md`. Quedó commiteado y pusheado en `c5c2055`, con `main...origin/main` sin divergencia.
- `package.json` dice `1.1.14`, igual que el tag (R5), y conserva `"private": true`; no existe `.github/workflows` (R6).
- No se verificó a mano que el Markdown del mirror renderice en GitHub más allá de revisar que el frontmatter desapareciera y que los enlaces apunten a archivos (R4).
