# PurgeTSS Documentation - Gemini Context

## Project Overview
This project is the documentation website for **PurgeTSS**, a utility-first framework for Titanium mobile app development. It is built using **Docusaurus 3** (recently upgraded) and **React 19**.

## Technology Stack
- **Framework**: Docusaurus 3 (Static Site Generator)
- **Frontend**: React 19, MDX
- **Styling**: CSS Modules, Infima (Docusaurus default), Custom CSS (`src/css/custom.css`)
- **Search**: `@easyops-cn/docusaurus-search-local`
- **Package Manager**: Yarn (preferred) or npm

## Architecture & Structure
The project uses a multi-instance documentation setup:

- **`docs/`**: Main documentation (Installation, Commands, The UI Module, Grid System, Customization, Recommendations).
- **`glossary/`**: A separate documentation instance managed via plugin, containing extensive property references (Boolean, Color, Compound, etc.).
- **`src/`**: Custom React code.
  - `pages/`: Custom landing pages or tools.
  - `css/`: Global styles (`custom.css`).
- **`static/`**: Static assets (images, fonts) served at the root path.
- **`docusaurus.config.js`**: Primary configuration. Defines plugins, themes, navbar, footer, and site metadata.
- **`sidebars.js`**: Sidebar navigation structure for the main `docs` instance.

## Key Commands

| Command | Description |
| :--- | :--- |
| `yarn start` | Starts the local development server with hot reloading (localhost:3000). |
| `yarn build` | Builds the static website into the `build/` directory. |
| `yarn serve` | Serves the built website locally for preview. |
| `yarn clear` | Clears Docusaurus caches (useful if build issues occur). |
| `yarn deploy` | Deploys the site (configured for GitHub Pages). |
| `yarn write-translations` | Updates translation files in `i18n/`. |

## Development Guidelines

### Content Editing
- **Format**: Markdown (`.md`) or MDX (`.mdx`).
- **Frontmatter**: Required for Docusaurus (id, title, sidebar_label, etc.).
- **Images**: Store in `docs/images/` or `static/assets/` and reference via relative paths or `/img/...`.
- **Sidebar**: Controlled via `sidebars.js` for main docs, or `_category_.json` files within subdirectories.

### Naming Conventions
- **Files**: Kebab-case (e.g., `grid-system.md`, `purgetss-ui.md`).
- **Commits**: Semantic/Conventional Commits are **mandatory** (e.g., `feat: add new animation guide`, `fix: typo in glossary`, `docs: update installation steps`).

### Testing & Verification
- **No Automated Tests**: There is no CI test suite.
- **Manual Verification**: 
  - Run `yarn start` to verify content changes visually.
  - Run `yarn build` before committing complex changes to ensure the build succeeds.

## Agent Instructions (Specific to this Project)
- **Glossary Updates**: When modifying the glossary, be aware it's a separate instance. Files are organized by property type.
- **Configuration**: Changes to site structure often require editing `docusaurus.config.js`.
- **Commit Safety**: Do not commit root-level PNG files (often used for debugging).
- **Refactoring**: If refactoring components in `src/`, ensure compatibility with Docusaurus 3/React 19 patterns.
