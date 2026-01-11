import { test, expect } from "@playwright/test";


test.describe("Admin Module Tests", () => {

  test("Access Admin Page", async ({ page }) => {
    await page.goto(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // Login
    await page.locator('[name="username"]').fill("Admin");
    await page.locator('[name="password"]').fill("admin123");
    await page.locator('[type="submit"]').click();

    // Navigate to Admin Module
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
    // Verify URL
    await expect(page).toHaveURL(
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );

  
  });


  // // 3 Filtro por rol Admin
  // test("filter by Admin role", async ({ page }) => {
  //   await page.click('div.oxd-select-text-input');
  //   await page.click('div[role="option"]:has-text("Admin")');
  //   await page.click('button:has-text("Search")');
  //   // Paso 4: Validar que todos los resultados tienen el rol Admin
  //   const rows = page.locator('div.oxd-table-row');
  //   const rowCount = await rows.count();
  //   for (let i = 0; i < rowCount; i++) {
  //     const roleCell = rows.nth(i).locator('div.oxd-table-cell:nth-child(3)');
  //     await expect(roleCell).toHaveText('Admin');
  //   }
  // });

  // //4 Búsqueda de usuario existente
  // test("find existing user by username", async ({ page }) => {
  //   await page.fill('input[placeholder="Type for hints..."]', 'Linda Anderson');
  //   await page.click('button:has-text("Search")');
  //   //await expect(page.locator(".oxd-table-body")).toContainText("Admin");
  //   // Paso 5: Validar que el resultado contiene al empleado buscado 
  //   const resultRow = page.locator('div.oxd-table-row:has-text("Linda Anderson")'); 
  //   await expect(resultRow).toBeVisible();
  // });


});// @ts-check


 