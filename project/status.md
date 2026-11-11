# Estado actual — PurgeTSS 7.20.0

**2026-11-11 · Fase:** documentación compilada y desplegada en purgetss.com; mirrors sincronizados y subidos. Rama `main`.
**Sesión por:** Codex · familia GPT-6 (identificador exacto no expuesto).

El sitio documenta PurgeTSS 7.20.0 y los Completions del SDK 14.0.0.GA: 63 entradas de propiedades nuevas y 356 descripciones recuperadas frente al tag 7.19.0. El glosario importado contiene 135 páginas actualizadas y 18 nuevas. La portada conserva las tres últimas versiones (7.20.0, 7.19.0, 7.18.0); 7.17.1 sigue en el changelog completo. El sitio mantiene su versión propia 1.1.14; este lanzamiento publica contenido, sin otro paquete npm ni tag del sitio.

- `73aa24c`: importación del glosario al iniciar `clean:md`, pruebas y documentación del flujo.
- `36c8fbf`: glosario del SDK 14, portada, changelog e instalación para 7.20.0. Ambos commits están en `origin/main`.
- `4df9bfc` en el mirror Context7: documentos convertidos y README sincronizados y subidos. El glosario se importa al sitio; no se añadió al alcance de Context7.
- Pasaron `npm run clean:md`, `npm run docs:check`, las dos pruebas aisladas del script y `npm run build`. Se desplegó ese build con `npm run deploy` (rsync, salida 0).
- Verificación HTTP 200 y coincidencia con el HTML compilado hasta `</body>` en `/`, `/changelog/`, `/docs/installation/`, `/glossary/booleanProperties/snapping/`, `/glossary/colorProperties/linkColor/` y `/glossary/booleanProperties/allowBackground/`. El servidor sigue añadiendo contenido después del cierre del body, como en la verificación anterior.
- Los 675 archivos importados (669 Markdown y seis JSON) coinciden byte a byte con `../purgeTSS/dist/glossary/`, excluyendo `.DS_Store`. Los originales escritos a mano conservaron sus ejemplos y detalles; las eliminaciones de los resúmenes se limitan a la cuarta versión, conservada en el historial completo.

No queda trabajo pendiente para el lanzamiento del sitio. Los registros anteriores se conservan abajo como historial; sus estados describen esas publicaciones anteriores.

---

# Estado

**2026-11-11** · Fase: documentación de PurgeTSS 7.19.0 desplegada y espejada · Rama `main`
**Sesión por:** Codex · familia GPT-6 (el identificador exacto no está expuesto).

## Sincronización del glosario — 2026-11-11

`clean:md` ahora importa primero `../purgeTSS/dist/glossary/` a `glossary/`, añadiendo y sobrescribiendo archivos generados sin borrar contenido exclusivo del sitio y excluyendo `.DS_Store`. Si falta la fuente, termina antes de modificar destinos e indica generar con `npm run build:tailwind` en el CLI. La conversión de docs/páginas y el alcance de los mirrors permanecen iguales; el glosario todavía no se exporta a Context7.

Ejecutado sobre los datos actualizados del SDK: 135 Markdown modificados y 18 nuevos; los 675 archivos importados (669 Markdown y seis metadatos JSON) coinciden byte a byte con la fuente. Las dos pruebas aisladas de `node --test tests/clean-md.test.mjs` cubren importación/conversión y fuente ausente; fallaban antes y pasan después. `npm run clean:md`, `npm run build`, sintaxis y `git diff --check` pasaron. Lint de los dos MJS usa la configuración del CLI con excepciones para `process.exit` y `fs.cpSync`, patrones ya existentes en este script. README/contexto aclaran el origen del glosario y el orden de comandos conservando el contenido vigente. Sin commits ni pushes en este seguimiento.

## Actualización de PurgeTSS 7.19.0

El contenido quedó en `9d4e338`: guía nueva en [Execution profiles and performance](https://purgetss.com/docs/performance), opciones globales en comandos, requisitos exactos de Node, firmas de configuración, mensajes de creación/actualización/sin cambios y resultados medidos con su coste inicial. El changelog completo incorpora la entrada de 7.19.0 del CLI. La portada conserva exactamente 7.19.0, 7.18.0 y 7.17.1; 7.17.0 salió sólo del resumen y sigue íntegra en el historial.

El sitio se compiló con `npm run build` y se desplegó con `npm run deploy`, reutilizando ese build recién verificado. `npm run clean:md` sincronizó 65 archivos y limpió 33 Markdown hacia `../purgeTSS/.dev/docs` y `../purgetss-docs-context7`. El mirror público quedó commiteado y pusheado en `ca7859e`.

La versión propia del sitio sigue en **1.1.14**, con `private: true`. Este trabajo actualiza el contenido para el CLI 7.19.0; no creó otro tag/release del sitio ni publicó un paquete npm. GitHub Pages sigue desactivado; el despliegue del sitio es el `rsync` existente a `purgetss.com`.

## Verificado en este seguimiento

- `npm run docs:check` detectó primero el desfase y después terminó con `Docs are up to date with v7.19.0`.
- `npm run build` terminó correctamente con los enlaces y anclas validados. No se ejecutó una suite del CLI por un cambio de contenido.
- Se comprobaron en vivo las seis rutas afectadas: `/`, `/docs/performance`, `/docs/installation`, `/docs/commands`, `/docs/customization/the-config-file` y `/changelog`. Respondieron HTTP 200 y el documento hasta `</body>` coincidió con el build local; el hosting añade su propio script después de ese cierre. Se verificaron también los textos nuevos y los tres encabezados de versión de la portada.
- Los ejemplos existentes de comandos, instalación y configuración permanecen idénticos. El historial anterior desde 7.18.0 no perdió contenido; el ejemplo anidado de la paleta `brand` conserva `#0ea5e9`, `#0c4a6e` y `#f97316`.
- En ambos mirrors coinciden los seis archivos de contenido nuevos/modificados; los frontmatter, admoniciones y títulos de fences se transformaron, y los enlaces nuevos apuntan a archivos reales. `README.md` del mirror se regeneró desde la portada.
- `git diff --check` pasó en la fuente y el mirror. Evidencia de producción: `/Users/cesar/Developer/validation-evidence/purgeTSS/docs-7.19.0-live.json`.

No queda trabajo pendiente para esta actualización. El skill de TiTools y la guía opcional de adopción descritos abajo siguen siendo seguimientos separados; no se editaron aquí. El registro de septiembre se conserva como histórico, con sus verificaciones y pendientes de entonces.

## Corrección del reporte enlazado — 2026-11-11

César confirmó que el reporte debe seguir público, íntegro y en inglés, con los identificadores Real project A/B/C del README. El CLI publicó la traducción y anonimización en `23fff5e04ee77175c4673d96ade6efcd438507e1`; también sustituyó las rutas personales del reporte por ejemplos y anonimizó las notas de proyecto relacionadas. Performance y changelog ahora enlazan esa revisión fija, sin modificar el tag histórico `v7.19.0`. Las revisiones anteriores conservan su contenido original.

`npm run clean:md` sincronizó ambos mirrors; una comparación confirmó que sólo cambiaron las dos URL del reporte. `npm run build`, comprobación de enlaces en el HTML generado y `git diff --check` pasaron. Tras `npm run deploy`, ambas páginas respondieron HTTP 200 y coincidieron con el build hasta `</body>`, con los enlaces nuevos y sin la URL anterior. No se ejecutaron pruebas del CLI por este cambio documental.

**Preferencia de URL — 2026-11-11:** César prefirió un enlace legible al hash completo. Performance y changelog ahora usan `https://github.com/macCesar/purgeTSS/blob/main/docs/project/optimization.md`, que abre el reporte en inglés y anonimizado. Se conserva el tag histórico. Sólo cambiaron esas dos URL; `clean:md` sincronizó los mirrors, el build y `git diff --check` pasaron, y tras el despliegue ambas páginas respondieron HTTP 200, coincidieron con el build y mostraron la URL limpia.

## Registro histórico — 2026-09-26

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
