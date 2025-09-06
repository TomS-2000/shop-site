# Shop Site

## Einleitung
Dieses Projekt ist ein fiktiver Webshop, der als Eigenprojekt zur Vertiefung von Frontend-Kenntnissen umgesetzt wurde.  
Im Fokus standen modernes UI-Design, Nutzerfreundlichkeit sowie responsive Gestaltung für **Mobile und Desktop**.  
Darüber hinaus wurde ein **Dark- und Light-Theme** integriert.  

Die Produktdaten werden dynamisch über die [DummyJSON API](https://dummyjson.com/docs/products#products-single) eingebunden.

Ziel: Vertiefung von Kenntnissen in Frontend-Technologien und UI-Design.

Demo: https://toms-2000.github.io/shop-site/

## Features
- Responsives Design (Mobile, Tablet, Desktop)
- Dark-/Light-Theme
- API-Anbindung mit DummyJSON
- Moderne UI-Komponenten (Tailwind CSS, Shadcn, Motion)
- Fokus auf Nutzerfreundlichkeit und UI/UX

## Technologien
- React
- TypeScript
- Tailwind CSS
- Shadcn
- Motion

## Hinweis
Funktionen wie **Checkout** und **Benutzeranmeldung** wurden in diesem Projekt bewusst nicht umgesetzt, da der Schwerpunkt auf der Entwicklung des Frontend-Designs (bzw. der Frontend-Funktionen) und der UI/UX-Elemente lag. Die entsprechenden Buttons sind daher ohne Funktion und dienen nur als Platzhalter.

## Projekt Setup

### Install Dependencies
```
npm
```

### Compile and Hot-Reload for Development
```
npm run dev
```

### Type-Check, Compile and Minify for Production
```
npm build
```

## Hauptsächlich verwendete Frameworks und Bibliotheken

Motion (Animationen):
```
npm install motion
```

Tailwind für Shadcn:
```
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node
```

React-Router-Dom:
```
npm install react-router-dom
```

Zustand (State-Management Warenkorb):
```
npm install zustand
```

<!--
## Generierter Inhalt bei Initialisierung des Projekts
### React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
-->
