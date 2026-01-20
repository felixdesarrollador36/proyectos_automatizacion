const { test, expect } = require('@playwright/test');
const { TimePage } = require('../../pages/TimePage');

test.describe('Pruebas del Módulo Time)', () => {
    
test.beforeEach(async ({ page }) => {
    // 1. Login con espera de red para asegurar que terminó la carga
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');
    
    // 2. Esperar a que el Dashboard sea visible antes de buscar el menú
    await page.waitForSelector('.oxd-sidepanel');

    // 3. Usar un selector más robusto para el menú "Time"
    // Buscamos específicamente el enlace en la barra lateral
    const timeMenu = page.locator('.oxd-main-menu-item-wrapper', { hasText: 'Time' });
    await timeMenu.click();
    
    // 4. CRUCIAL: Esperar a que la página de Time cargue el encabezado
    // Esto evita que el siguiente clic falle porque la página está "en blanco"
    await page.waitForSelector('.oxd-topbar-header-title');
});

test('Validar submenú Timesheets - Edición de horas', async ({ page }) => {
    // 1. Asegurar que el submenú es visible y hacer clic
    // Usamos una combinación de clase y texto para no fallar
    const timesheetsMenu = page.locator('span.oxd-topbar-body-nav-tab-item', { hasText: 'Timesheets' });
    await timesheetsMenu.waitFor({ state: 'visible' });
    await timesheetsMenu.click();
    
    // 2. Seleccionar la opción del dropdown
    const myTimesheetsOption = page.locator('ul.oxd-dropdown-menu >> text=My Timesheets');
    await myTimesheetsOption.click();

    // 3. Manejo del botón Edit (con espera)
    // A veces la tabla tarda en cargar, esperamos al contenedor
    await page.waitForSelector('.orangehrm-paper-container');
    
    const editBtn = page.locator('button:has-text("Edit")');
    
    if (await editBtn.isVisible()) {
        await editBtn.click();
        
        // 4. Llenar horas (usando un selector más específico que .nth)
        // Buscamos el primer input de la tabla de tiempos
        const firstInput = page.locator('.oxd-input--active').first();
        await firstInput.clear(); // Limpiamos por si hay datos
        await firstInput.fill('8:00');
        
        await page.click('button:has-text("Save")');
        
        // 5. Verificación con Assertion reforzada
        const toast = page.locator('.oxd-toast');
        await expect(toast).toBeVisible({ timeout: 10000 });
        await expect(toast).toContainText('Successfully Saved');
    } else {
        console.log('El botón Edit no está disponible (la hoja podría estar ya enviada)');
  }
    });
});