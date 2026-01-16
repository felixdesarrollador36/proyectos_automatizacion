import { test, expect } from '@playwright/test';

test("acceder al modulo buzz", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  // Login
  await page.locator('[name="username"]').fill("Admin");
  await page.locator('[name="password"]').fill("admin123");
  await page.locator('[type="submit"]').click();

  await page.locator('a[href="/web/index.php/buzz/viewBuzz"]').click();

  await expect(page).toHaveURL(
    "https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz"
  );
});

test('publicar un mensaje', async ({page}) =>{
  await page.getByRole('link',{name:'Buzz'}).click();

  const post = page.locator('[ContentedItable="true"]').first();
  const mensaje = 'Mensaje automatico QA ${Date.now()}';
  await post.click();
  await post.type(mensaje);
  await page.getByRole('button',{name:'Post'}).click();
  await expect(page.getByText(mensaje)).toBeVisible();
})
