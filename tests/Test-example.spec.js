const { test, expect } = require('@playwright/test');

test('Homepage loads successfully', async ({ page }) => {
    await page.goto('https://c066-103-225-149-89.ngrok-free.app/');

    await expect(page).toHaveTitle(/Penida Gili/i);
});