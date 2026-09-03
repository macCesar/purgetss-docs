# Estado

**2026-09-03** · Fase: release de documentación publicado; despliegue y mirrors pendientes · Rama `main`

## Dónde va todo

PurgeTSS v7.16.2 ya fue liberado en npm y GitHub. La documentación correspondiente quedó preparada y publicada en el repositorio del sitio como **v1.1.11**.

El release documenta las rutas CommonJS correctas para los módulos generados en proyectos Titanium Classic, la exportación de todas las familias procesadas por `build-fonts --module` y el comportamiento enfocado de los comandos de color en Classic. El changelog completo y la ventana de tres versiones de la portada están sincronizados hasta PurgeTSS v7.16.2.

El sitio en `https://purgetss.com` todavía no se ha desplegado por rsync y los mirrors Markdown todavía no se han regenerado.

## Verificado

- `npm run docs:check` → documentación sincronizada con PurgeTSS v7.16.2.
- `npm run build` → sitio Docusaurus generado correctamente.
- `package.json` y `package-lock.json` declaran la versión 1.1.11.
- Los ejemplos Classic cargan módulos de `Resources/lib/` mediante rutas `require('lib/...')` relativas a `Resources/`.
- La portada conserva las tres versiones más recientes: v7.16.2, v7.16.1 y v7.16.0.

## Pendiente

- Ejecutar `npm run deploy:fresh` y comprobar v7.16.2 en el sitio en vivo.
- Ejecutar `npm run clean:md` para regenerar los mirrors.
- Revisar, commitear y pushear los repositorios mirror que reciban los Markdown generados.

## Bloqueado por terceros

Nada.

## El orden que hay que seguir

```text
npm run deploy:fresh
  → verificar https://purgetss.com/changelog
  → npm run clean:md
  → revisar los diffs de los mirrors
  → commitear y pushear cada mirror
```
