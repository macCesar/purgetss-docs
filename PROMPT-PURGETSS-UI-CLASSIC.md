# Prompt: documentar `purgetss.ui` para Titanium Classic

Trabaja en este repositorio:

```text
/Users/cesar/Developer/openSource/purgetss-docs
```

## Objetivo principal

Actualizar integralmente la sección `docs/purgetss-ui/` para documentar cómo usar el módulo generado `purgetss.ui.js` tanto en proyectos Alloy como en proyectos Titanium Classic.

Actualmente gran parte de esa sección presenta únicamente ejemplos Alloy con XML, clases de PurgeTSS, `<Animation module="purgetss.ui">`, controladores y referencias `$.*`. El módulo de runtime también puede utilizarse en Classic mediante JavaScript y propiedades nativas de Titanium. La documentación debe explicar ambos modelos correctamente, sin trasladar clases utilitarias de Alloy a Classic.

## Skills requeridos

Carga y usa estos skills antes de trabajar:

- `$titools:purgetss`
- `$titools:ti-api`
- `$titools:ti-ui`
- `$ingeniero-de-software`

## Fuentes de verdad

Revisa:

1. Toda la sección:

   ```text
   /Users/cesar/Developer/openSource/purgetss-docs/docs/purgetss-ui/
   ```

2. El módulo real distribuido por PurgeTSS:

   ```text
   /Users/cesar/Developer/openSource/purgeTSS/lib/templates/purgetss.ui.js.cjs
   ```

3. Sus pruebas y cualquier fixture relevante:

   ```text
   /Users/cesar/Developer/openSource/purgeTSS/tests/
   /Users/cesar/Developer/openSource/purgeTSS/test-project/
   ```

4. La documentación del comando `module` y del soporte Classic:

   ```text
   /Users/cesar/Developer/openSource/purgetss-docs/docs/commands.md
   ```

5. La documentación oficial de Titanium para las APIs nativas utilizadas.

No documentes nada basándote solamente en los ejemplos actuales. Compara cada afirmación contra el módulo real y sus pruebas. Si la documentación contradice el código, determina el contrato correcto antes de editar. Si descubres un defecto real del módulo, repórtalo claramente; no inventes una solución documental ni modifiques el CLI desde esta sesión.

## Contrato básico que debes verificar

- Alloy genera `app/lib/purgetss.ui.js` y lo carga con:

  ```js
  require('purgetss.ui')
  ```

- Classic genera `Resources/lib/purgetss.ui.js` y lo carga con:

  ```js
  require('lib/purgetss.ui')
  ```

- En Classic no se deben usar:
  - Alloy XML
  - `$.*`
  - `$.UI.create()`
  - clases utilitarias
  - TSS
  - `app/`
  - `alloy.jmk`

- Classic debe crear sus vistas con `Ti.UI.create*()` y configurar las animaciones mediante objetos JavaScript y propiedades nativas.

## API que se debe auditar

Audita y documenta todos los exports públicos del módulo:

- `AnimationProperties`
- `createAnimation`
- `deviceInfo`
- `saveComponent`
- `Appearance`

Audita los 15 métodos disponibles en el objeto de animación:

- `play`
- `toggle`
- `apply`
- `open`
- `close`
- `draggable`
- `undraggable`
- `detectCollisions`
- `sequence`
- `swap`
- `pulse`
- `shake`
- `snapTo`
- `reorder`
- `transition`

Determina también cómo se expresan en Classic, mediante objetos JavaScript, los conceptos que actualmente se configuran desde clases o desde `<Animation>` en Alloy:

- duración, delay, curve, repeat y autoreverse;
- position, size, opacity y colors;
- scale, rotation y anchor point;
- estados `open`, `close` y `complete`;
- animaciones de hijos;
- configuración de drag y drop;
- bounds y restricciones horizontal/vertical;
- snap-back, snap-center y collision callbacks;
- conservación de z-index;
- propiedades heredadas por métodos auxiliares.

## Trabajo documental

1. Audita los diez documentos actuales bajo `docs/purgetss-ui/`.
2. Prepara una matriz que indique:
   - funcionalidad;
   - API pública real;
   - ejemplo Alloy existente;
   - equivalente Classic;
   - limitaciones o diferencias por plataforma.
3. Actualiza la introducción para explicar claramente los dos modelos de uso.
4. Añade un Quick Start completo para Classic usando:

   ```js
   const {
     createAnimation,
     Appearance,
     deviceInfo,
     saveComponent
   } = require('lib/purgetss.ui')
   ```

5. Conserva los ejemplos Alloy que sean correctos.
6. Agrega ejemplos Classic equivalentes en las páginas de cada método. Evita duplicaciones excesivas: crea una guía central de Classic si mejora la estructura, pero cada página debe indicar claramente cómo se consume ese método desde Classic.
7. Actualiza Appearance con un ejemplo Classic real:
   - `Resources/semantic.colors.json`;
   - `Appearance.init()` antes de abrir la primera ventana;
   - `Appearance.set()`, `get()` y `toggle()`;
   - colores semánticos usados directamente en propiedades Titanium;
   - sin clases utilitarias ni `config.cjs` como dependencia de runtime.
8. Documenta limpieza y lifecycle:
   - llamar `undraggable()` cuando corresponda;
   - retirar listeners al cerrar la ventana;
   - no dejar callbacks o referencias innecesarias.
9. Documenta diferencias reales entre iOS y Android cuando estén respaldadas por el código o la documentación oficial.
10. No afirmes que una función es compatible con Classic hasta comprobarlo en la implementación.

## Estrategia de contenido recomendada

- Crear una guía central: “Using `purgetss.ui` in Titanium Classic”.
- En cada página existente, mantener el ejemplo Alloy y añadir una sección breve “Titanium Classic”.
- Enlazar a la guía central para las explicaciones extensas.
- No convertir toda la documentación en copias duplicadas de los mismos ejemplos.

## Validación obligatoria

Ejecuta:

```bash
npm run docs:check
npm run build
git diff --check
```

Además:

- comprueba enlaces y anchors;
- verifica que cada snippet Classic use `require('lib/purgetss.ui')`;
- verifica que ningún snippet Classic contenga `$.*`, Alloy XML, TSS, utility classes o rutas `app/`.

Hay cambios locales existentes bajo `project/`. Pertenecen al usuario: consérvalos y no los mezcles accidentalmente con los cambios públicos.

También existe un pendiente documentado: la sección Changelog de `src/pages/index.md` debe conservar exactamente los tres releases publicados más recientes, mientras `src/pages/changelog.md` conserva todo el historial. Atiende ese ajuste sólo después de terminar la actualización principal de `purgetss-ui`.

## Límites

- No hagas release.
- No ejecutes deploy.
- No hagas push.
- No publiques nada.
- No modifiques el CLI desde esta sesión.
- No modifiques proyectos, planes, scripts ni archivos relacionados con los videos tutoriales.

Implementa y verifica localmente. Al terminar entrega:

- resumen del diagnóstico;
- archivos modificados;
- matriz Alloy/Classic;
- validaciones ejecutadas;
- cualquier limitación real encontrada en el módulo.
