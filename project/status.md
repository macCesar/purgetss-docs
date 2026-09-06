# Estado

**2026-09-05** · Fase: v1.1.13 liberada, desplegada y espejada; los tres destinos al día · Rama `main`
**Sesión por:** Claude Code · Opus 5 (`claude-opus-5`)

## Dónde va todo

Se liberó **v1.1.13** del sitio: tres commits (`a5547b3`, `1109941`, `7de6488`), tag `v1.1.13` y release en GitHub. Documenta la sección `images:` de `purgetss/config.cjs` — de dónde salen los tamaños (los archivos de `purgetss/images/` son masters 4×), el rechazo de llaves desconocidas con su salida de error, y el alcance real de `quality` (webp/jpeg/avif/tiff; PNG y GIF la ignoran). El bloque de la guía de configuración, al que le faltaban `autoSync` y `files`, quedó completo. Se registró además la regla de la ventana de tres releases de la portada como R7 en `requirements.md` y como decisión fechada.

**Lo que documenta v1.1.13 ya existe.** PurgeTSS **v7.17.0** salió el mismo día y está publicada en npm (`npm view purgetss version` → `7.17.0`), con `src/core/images/images-config.js` y los comentarios del bloque generado dentro. Un usuario que copie el ejemplo del error de la documentación ahora lo ve. La nota final del release de GitHub de v1.1.13, escrita cuando el CLI aún no salía, quedó desactualizada; no se editó.

El sitio se desplegó con `npm run deploy:fresh` y quedó verificado en vivo (ver abajo). `deploy:fresh` es por rsync y no lo dispara nada de git, así que es un paso aparte del release.

`npm run clean:md` regeneró los dos mirrors con el contenido de v1.1.13. `../purgetss-docs-context7` quedó commiteado y pusheado en `54474d5`. La copia de `../purgeTSS/.dev/docs` está en el `.gitignore` de ese repo, así que ahí no hay nada que commitear.

Los tres destinos que describe `context.md` quedaron al día con v1.1.13.

## Verificado

Todo esto se corrió hoy, después del push:

- `npm run build` → `[SUCCESS] Generated static files in "build"` (R2).
- `npm run docs:check` → `Docs are up to date with v7.16.2` (R1).
- La portada del repo tiene exactamente `### v7.16.2`, `### v7.16.1` y `### v7.16.0`, iguales a las tres primeras del changelog completo (R7).
- El ejemplo de colores anidados de `docs/customization/1-configuring-guide.md` sigue con `#0ea5e9` / `#0c4a6e` / `#f97316` — la trampa que documenta `context.md`.
- El sitio en vivo, después del deploy (R3): `curl -sL https://purgetss.com/docs/app-assets/multi-density-images | grep -c "Unknown key"` → `3`; `curl -sL https://purgetss.com/docs/customization/the-config-file | grep -c "autoSync"` → `1`; los encabezados `<h3>` de versión de la portada son exactamente `v7.16.2`, `v7.16.1`, `v7.16.0`. `last-modified` del servidor coincide con la hora del rsync.
- El mirror después de `clean:md`: `git status` en `../purgetss-docs-context7` mostró los dos archivos esperados y ningún otro, con el mismo diffstat que la fuente.
- El mirror después del push: `git fetch` y `origin/main` en `54474d5`, árbol limpio.
- `../purgeTSS/package.json` declaraba `7.16.2` cuando se escribió esta nota. Verificado después, desde la sesión del CLI: v7.17.0 está commiteada, tagueada, publicada por `publish.yml` (run 34004815426, en verde) y `npm view purgetss version` devuelve `7.17.0`. Las dos ediciones de `docs/` de esa sesión entraron en `a5547b3` y salieron en v1.1.13.

No verificado: nada del comportamiento del CLI se probó desde aquí. Lo que dice la documentación nueva sale del `CHANGELOG.md` de `../purgeTSS`, no de haber corrido `purgetss images`.

## Pendiente

Nada en este repo.

## Bloqueado

Nada. El único bloqueo registrado —que la documentación de la validación de `images:` describía una versión de PurgeTSS sin publicar— se resolvió con la salida de v7.17.0 el 2026-09-05.

## Fuera del árbol

`PROMPT-PURGETSS-UI-CLASSIC.md` en la raíz es el prompt de la sesión anterior, material de conversación. Quedó sin commitear a propósito.

## Cómo verificar el sitio en vivo, sin repetir el error de esta sesión

Las URLs de la documentación llevan `/docs/` adelante: `https://purgetss.com/docs/app-assets/multi-density-images`, no `https://purgetss.com/app-assets/...`, que responde 301 y hace que cualquier `grep` sobre la respuesta dé cero como si el contenido no estuviera.

Y para contar las versiones de la portada hay que buscar los encabezados renderizados, no el número suelto:

```bash
curl -sL https://purgetss.com/ | grep -oE '<h3[^>]*>v7\.[0-9]+\.[0-9]+' | sed 's/.*>//'
```

`grep -oE 'v7\.[0-9]+\.[0-9]+'` a secas también captura la prosa del enlace al changelog completo — "(v7.15.0 and earlier)" — y hace parecer que la portada tiene cuatro versiones cuando tiene tres.
