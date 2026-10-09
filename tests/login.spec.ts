import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  // Navigate to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill in credentials
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // Click login and wait for navigation
  await Promise.all([
    page.waitForNavigation(),
    page.click('button.radius')
  ]);

  // Locate the flash message
  const flashMessage = page.locator('#flash');

  // Assert that the flash message appears and contains expected text
  await expect(flashMessage).toBeVisible({ timeout: 10000 });
  await expect(flashMessage).toHaveText(/secure area!/i, { timeout: 10000 });
});
