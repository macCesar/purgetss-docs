# Estado

**2026-09-05** · Fase: v1.1.13 liberada, desplegada y espejada; falta commitear el mirror · Rama `main`
**Sesión por:** Claude Code · Opus 5 (`claude-opus-5`)

## Dónde va todo

Se liberó **v1.1.13** del sitio: tres commits (`a5547b3`, `1109941`, `7de6488`), tag `v1.1.13` y release en GitHub. Documenta la sección `images:` de `purgetss/config.cjs` — de dónde salen los tamaños (los archivos de `purgetss/images/` son masters 4×), el rechazo de llaves desconocidas con su salida de error, y el alcance real de `quality` (webp/jpeg/avif/tiff; PNG y GIF la ignoran). El bloque de la guía de configuración, al que le faltaban `autoSync` y `files`, quedó completo. Se registró además la regla de la ventana de tres releases de la portada como R7 en `requirements.md` y como decisión fechada.

**Lo que documenta v1.1.13 todavía no existe para nadie.** La validación de llaves y los comentarios del bloque generado están en `[Unreleased]` del `CHANGELOG.md` de `../purgeTSS`, con `src/core/images/images-config.js` sin commitear allá. La última versión publicada de PurgeTSS sigue siendo 7.16.2. El release de GitHub lo dice en una nota final. Hasta que salga la versión que lo incluya, un usuario que copie el ejemplo del error no lo va a ver.

El sitio se desplegó con `npm run deploy:fresh` y quedó verificado en vivo (ver abajo). `deploy:fresh` es por rsync y no lo dispara nada de git, así que es un paso aparte del release.

`npm run clean:md` regeneró los dos mirrors con el contenido de v1.1.13. `../purgetss-docs-context7` tiene los dos archivos modificados **sin commitear**: ése es el único paso que falta. La copia de `../purgeTSS/.dev/docs` está en el `.gitignore` de ese repo, así que ahí no hay nada que commitear.

## Verificado

Todo esto se corrió hoy, después del push:

- `npm run build` → `[SUCCESS] Generated static files in "build"` (R2).
- `npm run docs:check` → `Docs are up to date with v7.16.2` (R1).
- La portada del repo tiene exactamente `### v7.16.2`, `### v7.16.1` y `### v7.16.0`, iguales a las tres primeras del changelog completo (R7).
- El ejemplo de colores anidados de `docs/customization/1-configuring-guide.md` sigue con `#0ea5e9` / `#0c4a6e` / `#f97316` — la trampa que documenta `context.md`.
- El sitio en vivo, después del deploy (R3): `curl -sL https://purgetss.com/docs/app-assets/multi-density-images | grep -c "Unknown key"` → `3`; `curl -sL https://purgetss.com/docs/customization/the-config-file | grep -c "autoSync"` → `1`; los encabezados `<h3>` de versión de la portada son exactamente `v7.16.2`, `v7.16.1`, `v7.16.0`. `last-modified` del servidor coincide con la hora del rsync.
- El mirror después de `clean:md`: `git status` en `../purgetss-docs-context7` muestra los dos archivos esperados y ningún otro, con el mismo diffstat que la fuente.
- `../purgeTSS/package.json` declara `7.16.2`; su árbol tiene la validación de `images:` sin commitear.

No verificado: nada del comportamiento del CLI se probó desde aquí. Lo que dice la documentación nueva sale del `CHANGELOG.md` de `../purgeTSS`, no de haber corrido `purgetss images`.

## Pendiente

- Commitear y pushear `../purgetss-docs-context7` (dos archivos modificados, diff ya revisado).

## Bloqueado

- La documentación de la validación de `images:` describe una versión de PurgeTSS que no está publicada. No es trabajo de este repo: se destraba cuando salga la release del CLI.

## Fuera del árbol

`PROMPT-PURGETSS-UI-CLASSIC.md` en la raíz es el prompt de la sesión anterior, material de conversación. Quedó sin commitear a propósito.

## Cómo verificar el sitio en vivo, sin repetir el error de esta sesión

Las URLs de la documentación llevan `/docs/` adelante: `https://purgetss.com/docs/app-assets/multi-density-images`, no `https://purgetss.com/app-assets/...`, que responde 301 y hace que cualquier `grep` sobre la respuesta dé cero como si el contenido no estuviera.

Y para contar las versiones de la portada hay que buscar los encabezados renderizados, no el número suelto:

```bash
curl -sL https://purgetss.com/ | grep -oE '<h3[^>]*>v7\.[0-9]+\.[0-9]+' | sed 's/.*>//'
```

`grep -oE 'v7\.[0-9]+\.[0-9]+'` a secas también captura la prosa del enlace al changelog completo — "(v7.15.0 and earlier)" — y hace parecer que la portada tiene cuatro versiones cuando tiene tres.
