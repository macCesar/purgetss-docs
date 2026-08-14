# Requisitos

Qué tiene que cumplir este repo, y cómo se verifica cada cosa. El detalle de *cómo* está armado va en `context.md`.

## R1 — La documentación describe la versión de PurgeTSS que está publicada

`src/pages/changelog.md` y `src/pages/index.md` deben cubrir la versión que el `package.json` de `../purgeTSS` declara como actual.

**Verificación:** `npm run docs:check` imprime `Docs are up to date with vX.Y.Z` y sale con 0.

## R2 — El sitio compila sin enlaces ni anclas rotas

`docusaurus.config.js` tiene `onBrokenLinks: 'throw'` y `onBrokenAnchors: 'throw'`, así que un enlace interno muerto o un ancla que no existe **rompen el build**.

**Verificación:** `npm run build` termina en `[SUCCESS] Generated static files in "build"`.

## R3 — Lo que se ve en producción es lo que está en el repo

Un cambio no está entregado cuando se commitea; está entregado cuando se desplegó. Son estados independientes: el deploy es por rsync, no por git.

**Verificación:** consultar la URL en vivo y buscar el contenido nuevo. No basta con que el build local lo tenga.

```bash
curl -sL https://purgetss.com/ | grep -c "<lo que se agregó>"
```

## R4 — Los dos mirrors reciben Markdown que GitHub sí renderiza

La documentación se autora en sintaxis de Docusaurus, que GitHub no entiende: frontmatter, `:::admonitions`, `title=` en los fences, y enlaces por slug. `clean:md` los traduce.

**Verificación:** en `../purgetss-docs-context7/docs`, un archivo cualquiera arranca con su `#` (sin frontmatter), los `:::caution` aparecen como `> ⚠️ **CAUTION**`, y los enlaces internos apuntan a archivos (`](./customization/1-configuring-guide.md)`), no a slugs.

## R5 — El versionado del sitio es independiente del de PurgeTSS

`package.json` de este repo versiona el sitio (v1.x) y se bumpea con `/release`. La v7.x de PurgeTSS es lo que la documentación *describe*, no lo que este repo *es*.

**Verificación:** cada tag `vX.Y.Z` cuelga de un commit cuyo `package.json` dice ese mismo número.

```bash
git show vX.Y.Z:package.json | grep '"version"'
```

## R6 — Este paquete nunca se publica en npm

`"private": true` en `package.json`. El repo es público en GitHub y tiene tags y releases, pero no hay ni debe haber workflow que publique.

**Verificación:** `ls .github/workflows` no existe, y `package.json` conserva `"private": true`.
