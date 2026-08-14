# Estado

**2026-08-14** · Fase: mantenimiento · Rama `main`, sincronizada con `origin/main`

## Dónde va todo

La documentación de **PurgeTSS v7.13.0** está completa, publicada en https://purgetss.com y sincronizada a los dos mirrors. Último tag del sitio: **v1.1.4**.

Lo que se cubrió de v7.13.0: la reescritura de `brand` por piezas, la nueva estructura del bloque `brand:` en `config.cjs`, los renombres *breaking* de flags, `--only`, `LaunchLogo.png`, las imágenes de splash, `brand.optimize`, y que `shades` / `semantic` ya no borran los comentarios de `config.cjs`.

## Verificado

- `npm run docs:check` → `Docs are up to date with v7.13.0`
- `npm run build` → compila limpio (con `onBrokenLinks` y `onBrokenAnchors` en `throw`)
- Sitio en vivo: la portada encabeza con v7.13.0 y menciona `brand.optimize`; `/docs/app-assets/app-icons-and-branding/` responde 200 con la sección "Shrinking the generated files"
- Registro de npm consultado directo: `purgetss` está en `latest: 7.13.0`

## Pendiente

- **El ejemplo de colores anidados de `docs/customization/1-configuring-guide.md` se rompe cada vez** que se corre el reemplazo global sobre los bloques `brand:`. Van dos veces (v1.1.1 y v1.1.3). Vale la pena anclar el patrón a la indentación real del bloque de assets, o excluir ese archivo.

## Bloqueado por terceros

Nada.

## En otros repos

- **`../purgetss-docs-context7` tiene 6 archivos sin commitear.** El último `clean:md` los actualizó, pero ese repo se commitea y se pushea a mano. Hasta que eso pase, Context7 sigue sirviendo la documentación anterior. (La copia en `../purgeTSS/.dev/docs` no aplica: está en su `.gitignore` y nunca se commitea.)

## El orden que hay que seguir

```
PurgeTSS libera una versión
  → npm run docs:check          (marca lo que quedó atrás)
  → actualizar src/pages/changelog.md y src/pages/index.md
  → /release                     (bumpea el sitio, tag, GitHub release)
  → npm run deploy:fresh         (publica el sitio; NO pasa por git)
  → npm run clean:md             (abanica a los dos mirrors)
  → commitear y pushear ../purgetss-docs-context7 a mano
```

Saltarse `docs:check` es lo que costó un release y un deploy de más el 2026-08-14.
