import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {
  // Navigate to the login page (relaxed wait + longer timeout)
  await page.goto('https://the-internet.herokuapp.com/login', { waitUntil: 'domcontentloaded', timeout: 60000 });

  // Fill in credentials
  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  // Click login (Playwright auto-waits for navigation if triggered)
  await page.click('button.radius');

  // Assert flash message
  await expect(page.locator('#flash')).toContainText(/secure area!/i, { timeout: 15000 });
});
