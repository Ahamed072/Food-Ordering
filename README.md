# Food Munch - Angular Version

## Overview

This project is an Angular conversion of the static Food Munch website. It demonstrates a single-page application structure with multiple sections, built using Angular components, Bootstrap for styling, and Font Awesome for icons.

The original static website showcases a restaurant theme with sections like "Why Choose Us?", "Explore Menu", "Delivery & Payment", etc. This Angular version modularizes these sections into individual components.

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (which includes npm)
- [Angular CLI](https://angular.io/cli): Install globally using `npm install -g @angular/cli`

## Installation

1.  Clone the repository (or download the source code).
2.  Navigate to the project directory: `cd foodmunch-angular` (or the root of this project).
3.  Install the dependencies:
    ```bash
    npm install
    ```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To open the application automatically in your default browser, use:
```bash
ng serve -o
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

For a production build, use:
```bash
ng build --prod
```
(Note: `--prod` is deprecated in newer Angular versions, `ng build --configuration production` is preferred or simply `ng build` if production is the default.)
For this project, `ng build` should suffice for a production-like build by default.

## Project Structure

-   `src/`: Contains the main application code.
    -   `app/`: Core application components.
        -   `app.ts`: The main application component (`App`) acting as the shell with navbar and footer.
        -   `app.html`, `app.css`: Template and styles for the main app component.
        -   `*-section/`: Directories for each major section of the website (e.g., `banner-section`, `wcu-section`), each containing its own component (`.ts`, `.html`, `.css`). These are standalone components.
    -   `assets/`: Static assets like images.
        -   `images/`: Contains all images used in the project.
    -   `styles.css`: Global stylesheets, including Bootstrap, Font Awesome, font imports, and common custom styles.
    -   `index.html`: The main HTML file that bootstraps the Angular application.
    -   `main.ts`: The main entry point for the application that bootstraps the `App` component.
-   `angular.json`: Angular CLI configuration file, including build and serve settings, and references to global styles and scripts.
-   `README.md`: This file.

## Key Features

-   **Component-Based Architecture**: Each section of the website is a separate Angular component.
-   **Standalone Components**: Utilizes Angular's standalone component architecture.
-   **Bootstrap Integration**: Uses Bootstrap for responsive design and pre-styled UI elements (navbar, modal, grid).
-   **Font Awesome Icons**: Incorporates Font Awesome for icons.
-   **Single Page Application (SPA)**: Behaves as an SPA with navigation scrolling to different sections.
-   **Static Site Conversion**: Demonstrates converting a multi-section static HTML/CSS website into a dynamic Angular application.
