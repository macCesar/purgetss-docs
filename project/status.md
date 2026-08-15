# Estado

**2026-08-14** · Fase: mantenimiento · Rama `main`, sincronizada con `origin/main`

## Dónde va todo

La documentación de **PurgeTSS v7.13.2** está completa, publicada en https://purgetss.com y sincronizada al mirror de Context7 salvo la última entrada. Último tag del sitio: **v1.1.6**.

v1.1.6 fue un repaso de redacción con `/humanizer` sobre los 32 archivos de `docs/` y `src/`. Nueve necesitaban cambios y 23 ya estaban limpios. El patrón real era uno solo y concentrado en lo escrito para v7.13.x: rayas (`—`) haciendo el trabajo de dos puntos, paréntesis y puntos y seguido en prosa corrida, unas 60 en total. Las que quedan son legítimas: celdas de tabla que significan «no aplica», listas de definición y la salida literal del comando (`Masters at 942 px —`). Aparte, cuatro frases de relleno (`work out of the box`, `sensible defaults`, `Pro tip: For best results`, `That is the core workflow`). No se tocó contenido técnico, ni un solo heading (los anchors los consumen enlaces internos y el build está en `throw`), ni los admonitions de Docusaurus.

En el mismo release se borró `src/components/HomepageFeatures/`, resto del andamiaje de la plantilla: no lo importaba ninguna página y además hacía `require` de tres SVG (`undraw_docusaurus_*`) que ya no están en `static/img/`, así que importarlo habría roto el build.

La entrada de **v7.13.2** entró en ese mismo release, no en uno aparte. El `docs:check` de la fase de release la detectó a media ejecución: PurgeTSS la liberó mientras corría la sesión, después de que el mismo check diera `up to date with v7.13.1` al arrancar. Documenta que `brand --help` anunciaba paddings que el comando no usa (`19` para el adaptativo, `20` para los dos splash, contra los `18`, `26` y `26` que aplica el pipeline). Los números que este sitio documenta ya eran los correctos desde v1.1.2, así que solo hubo que registrar la versión.

## Verificado

Todo lo de abajo se comprobó con un comando corrido el 2026-08-14, no heredado de la versión anterior de este archivo.

- `npm run docs:check` → `Docs are up to date with v7.13.2`
- `npm run build` → compila limpio (con `onBrokenLinks` y `onBrokenAnchors` en `throw`)
- `git status` → limpio; `git log @{u}..HEAD` vacío; tag `v1.1.6` presente en `origin`
- Sitio en vivo: `https://purgetss.com/` y `/changelog` responden 200 y ya muestran `v7.13.2` (el deploy es `rsync`, no pasa por git)
- Registro de npm consultado directo: `purgetss` está en `latest: 7.13.2`
- `../purgeTSS`: árbol limpio y sincronizado con su `origin`. El `publish.yml` que estaba pendiente ya se subió, y 7.13.2 llegó a npm por esa vía
- `../purgetss-docs-context7`: tres commits nuevos hoy, ya pusheados, que cubren la doc de v7.13.0/v7.13.1 y el pase de redacción

## Pendiente

- **A Context7 le falta la entrada de v7.13.2.** El último `clean:md` dejó `README.md`, `docs/changelog.md` y `docs/index.md` modificados sin commitear; la entrada está en disco pero no en lo commiteado (`git show HEAD:docs/changelog.md | grep 7.13.2` da cero). Ese repo se commitea y pushea a mano.
- **El ejemplo de colores anidados de `docs/customization/1-configuring-guide.md` se rompe cada vez** que se corre el reemplazo global sobre los bloques `brand:`. Van dos veces (v1.1.1 y v1.1.3). Vale la pena anclar el patrón a la indentación real del bloque de assets, o excluir ese archivo. No se comprobó en esta sesión: no se corrió ningún reemplazo global.

## Bloqueado por terceros

Nada.

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

Saltarse `docs:check` costó un release y un deploy de más el 2026-08-14. Corrido como primer paso atrapó la salida de 7.13.1 a media sesión, y horas después `/release` volvió a atraparlo con 7.13.2 justo antes de pushear, lo que evitó publicar un sitio que documentaba una versión atrás. El gate sirve las dos veces: al planear y al soltar.

La portada lleva solo los **tres releases más recientes**; al añadir uno hay que quitar el más viejo y mover la línea final (`older releases (vX.Y.Z and earlier)`). El changelog completo los conserva todos.
