import{test, expect} from '@playwright/test';

test('Completar campos obligatorios', async ({ page }) =>{

    //Ingresar a la pagina ORANGEHRM
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Llenar campo usuario y campo password con credenciales validas
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]','admin123');

    //Dar click al boton Submit
    await page.click('button[type="submit"]');

    //Dar click en el campo PIN
    await page.getByRole('link',{name: 'PIM'}).click();

    //Dar click en Add
    await page.getByRole('link',{name: 'Add'}).click();

    await page.getByPlaceholder('First Name').fill('Luis');
    await page.getByPlaceholder('Middle Name').fill('Ariel');
    await page.getByPlaceholder('Last Name').fill('Hernandez Polanco');
    
    // Dar click al boton (Create Login Detail) para actirlo
    await page.locator('.oxd-switch-wrapper').click();

    // Siempre cambiar el nombre de Username para poder entrar
    await page.locator('input[autocomplete="off"]').first().fill('6516516asdsad59999999997ss899fgdfg9ff');

    // Activar la opcion Enable
    await page.getByLabel('Enabled').check();
    // Llenar el campo Password y el Confir Password
    await page.locator('input[type="password"]').nth(0).fill('aa@@2025@@');
    await page.locator('input[type="password"]').nth(1).fill('aa@@2025@@');

    // Dar click en el boton Save
    await page.getByRole('button',{name: 'Save'}).click();

    // Mostrar el mensaje de error
    await expect(page.getByText(/successfully saved/i)
).toBeVisible({ timeout: 10000 });

    // Número de permiso de conducir
    await page.locator('input').nth(4).fill('LIC-2025-001');


  // Fecha de caducidad de la licencia
  await page.getByLabel('License Expiry Date').fill('2030-12-31');

  // Nacionalidad
  await page.getByLabel('Nationality').click();
  await page.getByRole('option', { name: 'Dominican' }).click();

  // Estado civil
  await page.getByLabel('Marital Status').click();
  await page.getByRole('option', { name: 'Single' }).click();

  // Fecha de nacimiento
  await page.getByLabel('Date of Birth').fill('1993-15-01');

  // Género
  await page.getByLabel('Male').check();
  // o:
  // await page.getByLabel('Female').check();

  // Click Save
  await page.getByRole('button', { name: 'Save' }).click();

  // Validar guardado exitoso
  await expect(
    page.getByText(/successfully saved/i)
  ).toBeVisible({ timeout: 10000 });

});







