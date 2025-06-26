# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the documentation website for **PurgeTSS**, a Tailwind-like utility framework for Titanium mobile app development. The site is built using Docusaurus 3 and contains comprehensive documentation for PurgeTSS features including utility classes, animation modules, grid systems, and customization options.

## Architecture

### Core Structure
- **Docusaurus 3**: Static site generator with React-based documentation
- **Main documentation**: Located in `/docs/` with structured sections for different PurgeTSS features
- **Glossary**: Separate documentation instance in `/glossary/` covering thousands of CSS property definitions
- **Static assets**: Images and resources in `/static/` directory
- **Custom pages**: React/Markdown pages in `/src/pages/`

### Key Configuration Files
- `docusaurus.config.js`: Main Docusaurus configuration with plugins, themes, and site settings
- `sidebars.js`: Navigation structure for documentation sections
- `package.json`: Dependencies and npm scripts for development and deployment

### Documentation Organization
- **Installation & Setup**: Basic setup instructions
- **Commands**: CLI command documentation
- **Customization**: Configuration files, custom rules, arbitrary values, platform modifiers
- **Animation Module**: Comprehensive animation system documentation (play, apply, open/close, draggable methods)
- **Grid System**: Two-dimensional layout system
- **Glossary**: Extensive property reference organized by type (boolean, color, compound, configurable, constant properties)

## Development Commands

### Local Development
```bash
# Install dependencies
npm install
# or
yarn

# Start development server
npm start
# or
yarn start
```

### Build & Deployment
```bash
# Build static site
npm run build
# or
yarn build

# Serve built site locally
npm run serve
# or 
yarn serve

# Clear cache
npm run clear
# or
yarn clear

# Deploy to GitHub Pages
npm run deploy
# or
yarn deploy
```

### Additional Commands
```bash
# Generate translations
npm run write-translations

# Generate heading IDs
npm run write-heading-ids

# Swizzle components (customize Docusaurus components)
npm run swizzle
```

## Content Management

### Documentation Files
- All documentation is in Markdown format with frontmatter
- Use `_category_.json` files to configure sidebar categories
- Images should be placed in appropriate subdirectories under `/docs/images/` or `/static/assets/images/`

### Glossary Management
- Glossary is a separate Docusaurus docs instance configured via plugin
- Properties are categorized by type: booleanProperties, colorProperties, compoundClasses, configurableProperties, constantProperties
- Each property has its own markdown file with consistent structure

### Navigation
- Main navigation defined in `docusaurus.config.js`
- Sidebar structure controlled by `sidebars.js`
- Footer links and copyright in config file

## Key Features

### Search Integration
- Uses `@easyops-cn/docusaurus-search-local` for local search functionality
- Search is configured with hashing enabled for better caching

### Multi-Instance Setup
- Main docs instance for general documentation
- Separate glossary instance for property reference
- Both instances share common styling and configuration

### Styling
- Custom CSS in `/src/css/custom.css`
- Prism syntax highlighting with GitHub theme
- Responsive design with mobile-first approach

## Important Notes

- The site documents PurgeTSS v7.1.x with breaking changes from previous versions
- Content focuses on Titanium mobile development workflow
- Extensive use of code examples and visual demonstrations
- The glossary contains over 21,000 utility class definitions
- Site URL: https://purgetss.com
- GitHub repository: https://github.com/macCesar/purgetss/