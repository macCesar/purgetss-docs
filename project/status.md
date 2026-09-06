# Estado

**2026-09-05** · Fase: v1.1.13 liberada en git; sitio en vivo dos releases atrás · Rama `main`
**Sesión por:** Claude Code · Opus 5 (`claude-opus-5`)

## Dónde va todo

Se liberó **v1.1.13** del sitio: tres commits (`a5547b3`, `1109941`, `7de6488`), tag `v1.1.13` y release en GitHub. Documenta la sección `images:` de `purgetss/config.cjs` — de dónde salen los tamaños (los archivos de `purgetss/images/` son masters 4×), el rechazo de llaves desconocidas con su salida de error, y el alcance real de `quality` (webp/jpeg/avif/tiff; PNG y GIF la ignoran). El bloque de la guía de configuración, al que le faltaban `autoSync` y `files`, quedó completo. Se registró además la regla de la ventana de tres releases de la portada como R7 en `requirements.md` y como decisión fechada.

**Lo que documenta v1.1.13 todavía no existe para nadie.** La validación de llaves y los comentarios del bloque generado están en `[Unreleased]` del `CHANGELOG.md` de `../purgeTSS`, con `src/core/images/images-config.js` sin commitear allá. La última versión publicada de PurgeTSS sigue siendo 7.16.2. El release de GitHub lo dice en una nota final. Hasta que salga la versión que lo incluya, un usuario que copie el ejemplo del error no lo va a ver.

El sitio en vivo está en el estado de **v1.1.11**: la portada de `purgetss.com` todavía muestra cuatro versiones (incluye v7.15.0), así que ni el recorte de v1.1.12 ni la documentación de v1.1.13 se han desplegado. `deploy:fresh` es por rsync y no lo dispara nada de git.

Los mirrors sí quedaron al corriente de **v1.1.12**: `../purgetss-docs-context7` está limpio y sincronizado con su origin en `499b320`, con la portada ya recortada a tres versiones. Lo que le falta es el contenido de v1.1.13.

## Verificado

Todo esto se corrió hoy, después del push:

- `npm run build` → `[SUCCESS] Generated static files in "build"` (R2).
- `npm run docs:check` → `Docs are up to date with v7.16.2` (R1).
- La portada del repo tiene exactamente `### v7.16.2`, `### v7.16.1` y `### v7.16.0`, iguales a las tres primeras del changelog completo (R7).
- El ejemplo de colores anidados de `docs/customization/1-configuring-guide.md` sigue con `#0ea5e9` / `#0c4a6e` / `#f97316` — la trampa que documenta `context.md`.
- `curl -sL https://purgetss.com/` devuelve `v7.15.0` entre los encabezados de versión, y `curl -sL https://purgetss.com/app-assets/multi-density-images | grep -c "Unknown key"` devuelve `0`: el sitio en vivo no tiene ni el recorte ni lo nuevo (R3).
- `git fetch` en `../purgetss-docs-context7` y su `git status` → limpio, `main` a la par de `origin/main`.
- `grep -c "Unknown key"` en el mirror y en `../purgeTSS/.dev/docs` → `0` en ambos: les falta v1.1.13.
- `../purgeTSS/package.json` declara `7.16.2`; su árbol tiene la validación de `images:` sin commitear.

No verificado: nada del comportamiento del CLI se probó desde aquí. Lo que dice la documentación nueva sale del `CHANGELOG.md` de `../purgeTSS`, no de haber corrido `purgetss images`.

## Pendiente

- `npm run deploy:fresh` y comprobar en vivo que la portada quede en tres versiones y que aparezca la sección de llaves desconocidas.
- `npm run clean:md` para regenerar los dos mirrors con v1.1.13.
- Revisar el diff de `../purgetss-docs-context7`, commitear y pushear.

## Bloqueado

- La documentación de la validación de `images:` describe una versión de PurgeTSS que no está publicada. No es trabajo de este repo: se destraba cuando salga la release del CLI.

## Fuera del árbol

`PROMPT-PURGETSS-UI-CLASSIC.md` en la raíz es el prompt de la sesión anterior, material de conversación. Quedó sin commitear a propósito.

## El orden que hay que seguir

```text
npm run deploy:fresh
  → verificar https://purgetss.com/ y /app-assets/multi-density-images
  → npm run clean:md
  → revisar los diffs de los mirrors
  → commitear y pushear cada mirror
```
