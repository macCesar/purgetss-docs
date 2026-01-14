# Repository Guidelines

## Project Structure & Module Organization
- `docs/`: Main documentation pages (Markdown with frontmatter). Kebab-case filenames like `installation.md`.
- `glossary/`: Separate docs instance with property reference pages organized by type (e.g., `booleanProperties/`, `colorProperties/`).
- `src/`: Docusaurus site code (React/MDX pages in `src/pages/`, styling in `src/css/custom.css`).
- `static/`: Static assets served as-is (images, downloads).
- `i18n/`: Localization content and translation JSON.
- `docusaurus.config.js` and `sidebars.js`: Site config and navigation structure.

## Build, Test, and Development Commands
- `yarn` or `npm install`: Install dependencies.
- `yarn start` or `npm start`: Run the local dev server with hot reload.
- `yarn build` or `npm run build`: Build the static site into `build/`.
- `yarn serve` or `npm run serve`: Serve the built site locally.
- `yarn clear`: Clear Docusaurus caches.
- `yarn write-translations`: Generate translation files for i18n.
- `yarn write-heading-ids`: Generate stable heading IDs.

## Coding Style & Naming Conventions
- Documentation uses Markdown with frontmatter and `_category_.json` for sidebar categories.
- Keep filenames kebab-case (e.g., `grid-system.md`) and match section titles to sidebar entries.
- Prefer short, example-driven explanations; code blocks should be minimal and copy-ready.
- Site styling lives in `src/css/custom.css`; keep overrides scoped and documented if non-obvious.

## Testing Guidelines
- There is no automated test suite in this repo.
- Validate changes by running `yarn start` for content edits and `yarn build` before release.

## Commit & Pull Request Guidelines
- Commit messages follow Conventional Commits (e.g., `feat: ...`, `fix: ...`, `chore: ...`, `refactor: ...`).
- PRs should describe the doc area impacted, link related issues, and include screenshots for visual or layout changes.
- For glossary updates, mention the property type folder and any new files added.

## Documentation-Specific Notes
- Use `docs/images/` or `static/assets/images/` for images; reference with relative paths.
- Keep navigation changes aligned with `sidebars.js` and `_category_.json`.
