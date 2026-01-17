# Contributing to Pixe UI

Thank you for your interest in contributing to [**Pixe UI**](https://www.pixeui.com). This guide will help you get started with contributing to our website, components and documentation.

## Project Structure

Here is an overview of the project structure to help you navigate the codebase:

```
├── public/                 # Static assets (images, favicons, logos)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── docs/           # Documentation pages
│   │   │   ├── components/ # Component-specific docs (e.g., /docs/components/buttons/...)
│   │   │   └── installation/# Installation guide page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Landing page (Home)
│   │
│   ├── components/         # React Components
│   │   ├── ui/             # The Core PixeUI Components (The Product)
│   │   │   ├── hold-button.tsx
│   │   │   ├── copy-button.tsx
│   │   │   └── ...
│   │   │
│   │   ├── docs/           # Documentation-specific components
│   │   │   ├── ComponentPreview.tsx  # Wrapper for showing component demos
│   │   │   ├── CodeBlock.tsx         # Syntax highlighter for code
│   │   │   └── ...
│   │   │
│   │   └── ...             # Layout components (Navbar, Sidebar, Footer, etc.)
│   │
│   ├── lib/                # Utilities & Constants
│   │   ├── constants.ts    # Global constants (Navigation links, feature lists)
│   │   ├── siteConfig.ts   # Site configuration
│   │   └── fonts.ts        # Font configurations
│   │
│   ├── styles/             # Global styles
│   │   └── globals.css     # Tailwind imports and custom global CSS
│   │
│   └── utils/              # Helper functions and Contexts
│       └── LoadingContext.tsx
```

## Development Setup

1. Fork the repository

2. Clone the repository:

    ```bash
    git clone https://github.com/Pixe-UI/pixeui.git
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm run dev
    ```

## Adding New Component

1.  **Create the component**: Add your new component file in `src/components/ui/`.
    - Ensure it uses `framer-motion` for animations if applicable.
    - Make it accessible and customizable via props.
2.  **Create documentation**: Add a new folder in `src/app/docs/components/[category]/[component-name]/`.
    - Create a `page.tsx` file in that folder.
    - Use `<ComponentPreview />` to showcase the component.
    - Add usage examples and API reference.
3.  **Update constants**: Add your new component to `COMPONENTS_SIDEBAR_SECTIONS` in `src/lib/constants.ts` so it appears in the sidebar and lists.

## Updating Documentation

- Documentation pages are located in `src/app/docs/`.
- We use standard React components to build the documentation pages.
- The sidebar navigation is controlled by `src/lib/constants.ts`.

## Style Guide

- **Styling**: Use **Tailwind CSS** for all styling.
- **Icons**: Use `@deemlol/next-icons` for icons.
- **Fonts**: We use the **Outfit** font family.
- **Code Style**: Run `npm run format:write` to ensure your code matches our Prettier configuration.

Please note that we don't have a full contributing guide yet. Our product is in beta stage, and we are working hard to release a stable version. If you don't find a answer to your question in this guide, please contact us on our [**Discord Server**](https://discord.gg/gNAHhRaCJD) or via e-mail [**support@pixeui.com**](mailto:support@pixeui.com).

Thank you for your contribution to Pixe UI!
