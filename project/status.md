# Estado

**2026-08-14** · Fase: mantenimiento · Rama `main`, sincronizada con `origin/main`

## Dónde va todo

La documentación de **PurgeTSS v7.13.1** está completa, publicada en https://purgetss.com y sincronizada a los dos mirrors. Último tag del sitio: **v1.1.5**.

De v7.13.0 se cubrió la reescritura de `brand` por piezas, la nueva estructura del bloque `brand:` en `config.cjs`, los renombres *breaking* de flags, `--only`, `LaunchLogo.png`, las imágenes de splash, `brand.optimize`, y que `shades` / `semantic` ya no borran los comentarios de `config.cjs`. De v7.13.1, el parcheo de cuatro dependencias transitivas vulnerables.

En v1.1.5 también se instaló esta convención de notas (`project/` + bloque puntero en los tres archivos de contexto) y se reescribió el `README.md`, que seguía siendo la plantilla de Docusaurus y describía un deploy por GitHub Pages que este sitio no usa.

## Verificado

- `npm run docs:check` → `Docs are up to date with v7.13.1`
- `npm run build` → compila limpio (con `onBrokenLinks` y `onBrokenAnchors` en `throw`)
- Sitio en vivo: la portada encabeza con v7.13.1, y `/changelog` tiene la entrada
- Mirrors: v7.13.1 presente en los dos; `project/` **no** se copió a ninguno, que era el punto de sacarlo de `docs/`
- Registro de npm consultado directo: `purgetss` está en `latest: 7.13.1`

## Pendiente

- **El ejemplo de colores anidados de `docs/customization/1-configuring-guide.md` se rompe cada vez** que se corre el reemplazo global sobre los bloques `brand:`. Van dos veces (v1.1.1 y v1.1.3). Vale la pena anclar el patrón a la indentación real del bloque de assets, o excluir ese archivo.

## Bloqueado por terceros

Nada.

## En otros repos

- **`../purgetss-docs-context7` tiene cambios sin commitear** tras el último `clean:md`. Ese repo se commitea y se pushea a mano; hasta que eso pase, Context7 sirve la documentación anterior. (La copia en `../purgeTSS/.dev/docs` no aplica: está en su `.gitignore` y nunca se commitea.)
- **`../purgeTSS` tiene `.github/workflows/publish.yml` sin commitear**, escrito el 2026-08-14 para publicar a npm por trusted publishing (OIDC). Falta pushearlo a `main` y registrar el publisher en npmjs.com — el campo `Repository` va como `purgeTSS`, con mayúsculas, que es el nombre canónico del repo. Eso se maneja desde ese repo, no desde aquí.

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

Saltarse `docs:check` costó un release y un deploy de más el 2026-08-14. Corrido como primer paso, atrapó la salida de 7.13.1 a media sesión, antes de publicar nada.
