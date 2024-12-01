import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'], // Muestra el progreso en consola
    ['allure-playwright'] // Genera reportes en Allure
  ],
  use: {
    baseURL: 'https://example.com', // Configura la URL base si es necesario
    trace: 'on-first-retry', // Opcional: trazas para depuración
  },
});

