# Contributing to Motionlab

Thank you for your interest in contributing! Motionlab is a React + Vite + Framer Motion showcase of dynamic, motion-rich UI components (Aceternity-style).

## Development Setup

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm** 9+

### Getting Started

1. **Fork the repository** and clone it locally:
   ```bash
   git clone https://github.com/<your-username>/Motionlab.git
   cd Motionlab
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The site will be available at the local URL printed in the terminal (usually `http://localhost:5173`).

4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite development server with HMR |
| `npm run build` | Build a production-optimized bundle (`tsc` + Vite) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for style and errors |

### Tech Stack

| Layer | Tool |
|-------|------|
| Framework | React 18 + Vite 5 |
| Language | TypeScript 5.5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Icons | lucide-react |

### Project Structure

```
src/
├── App.tsx               # Main app composition
├── main.tsx              # React entry point
├── index.css             # Tailwind + custom styles
└── components/
    ├── Navbar.tsx         # Slide-down blurred nav
    ├── Hero.tsx           # Spotlight + animated hero
    ├── AnimatedText.tsx   # Word-by-word blur reveal
    ├── FeatureCards.tsx   # Cursor-following spotlight cards
    ├── SpotlightCard.tsx  # Reusable spotlight wrapper
    └── Footer.tsx         # Stack credit
```

### Adding New Components

1. Create your component in `src/components/`
2. Use the `SpotlightCard` wrapper for cursor-following spotlight effects
3. Compose new sections in `src/App.tsx`
4. Reuse `text-gradient` and `bg-grid` utility classes for consistent styling

### Code Style

- TypeScript strict mode is used
- Run `npm run build` to check TypeScript errors before committing
- Use functional React components with TypeScript props interfaces
- Tailwind CSS classes for all styling (no inline styles)
- Framer Motion for all animations

### Making Changes

1. Make your changes on a feature branch
2. Ensure `npm run build` passes with no TypeScript errors
3. Test your changes in the browser at `http://localhost:5173`
4. Commit with a clear, descriptive message:
   ```
   git commit -m "feat: add new animated section"
   ```
5. Push to your fork and open a Pull Request

### Reporting Issues

Please use the [issue tracker](../issues) for bug reports and feature requests. Include:

- A clear description of the issue or feature
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- Your environment (OS, Node.js version, browser)

### License

By contributing, you agree that your contributions will be licensed under the MIT License.
