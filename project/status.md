# Estado

**2026-08-30** · Fase: release publicado; despliegue y mirrors pendientes · Rama `main`, sincronizada con `origin/main`

## Dónde va todo

PurgeTSS v7.14.0 ya fue liberado en npm y GitHub. El workflow `publish.yml` terminó correctamente y la entrega está en `https://github.com/macCesar/purgeTSS/releases/tag/v7.14.0`.

La documentación de esa versión quedó publicada en el repositorio del sitio como **v1.1.7**. El tag remoto apunta al commit `64a8dd4` y el GitHub Release está en `https://github.com/macCesar/purgetss-docs/releases/tag/v1.1.7`.

El release incluye la documentación de `brand`, la promoción del changelog a v7.14.0 y la ventana de tres releases de la portada actualizada. El sitio en `https://purgetss.com` todavía no se ha desplegado por rsync y los mirrors Markdown todavía no se han regenerado.

## Verificado

- `npm run docs:check` → `Docs are up to date with v7.14.0`.
- `npm run build` → `[SUCCESS] Generated static files in "build"`.
- `package.json` y `package-lock.json` declaran la versión 1.1.7.
- `origin/main` recibió el release commit `64a8dd4`.
- El tag remoto `v1.1.7` apunta a `64a8dd4` y el GitHub Release no es draft ni prerelease.
- El changelog en vivo todavía no contiene v7.14.0; el deploy sigue pendiente.
- `../purgetss-docs-context7` está limpio y sincronizado con su remoto, pero todavía no contiene v7.14.0.

## Pendiente

- Ejecutar `npm run deploy:fresh` y comprobar v7.14.0 en el sitio en vivo.
- Ejecutar `npm run clean:md` para regenerar los dos mirrors.
- Revisar, commitear y pushear `../purgetss-docs-context7`; esa sincronización también debe resolver la entrada de v7.13.2 que ya estaba pendiente.

## Bloqueado por terceros

Nada.

## El orden que hay que seguir

```
npm run deploy:fresh
  → verificar https://purgetss.com/changelog
  → npm run clean:md
  → revisar el diff de ../purgetss-docs-context7
  → commitear y pushear ese mirror
```
