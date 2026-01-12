// @ts-check
import { defineConfig, devices } from '@playwright/test';
 
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
 
  use: {
    /* ⏱️ Espera de 1 segundos entre cada acción */
    launchOptions: {
      slowMo: 1000, // 1 segundos
    },
 
    /* Graba la traza cuando un test falla */
    trace: 'on-first-retry',
  },
 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
