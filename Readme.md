# Documentación: Playwright Tests with Allure Report

Este repo utiliza un archivo de flujo de trabajo de GitHub Actions permite ejecutar pruebas de Playwright y generar un informe de Allure, que se publica automáticamente en GitHub Pages.

![Test Status](https://img.shields.io/github/workflow/status/andresiglesias1996/playwright-allure-historial/Playwright%20Tests%20with%20Allure%20Report)


- **Token de GitHub**:
  - El token de GitHub por defecto (`${{ secrets.GITHUB_TOKEN }}`) se utiliza para publicar el informe en la rama `gh-pages`.
  - Este token tiene permisos básicos, pero puede necesitar permisos especiales para que la acción funcione correctamente, especialmente al interactuar con GitHub Pages
  .
  
- **Permisos del token**:
    - **`repo`**: Para acceder y hacer cambios en el repositorio.
    - **`workflow`**: Para ejecutar y gestionar flujos de trabajo.
    - **`pages`**: Para publicar contenido en GitHub Pages.


- Para más información sobre cómo integrar Allure con GitHub, consulta la documentación oficial en: [Allure Report GitHub Integration](https://allurereport.org/docs/
integrations-github/).


