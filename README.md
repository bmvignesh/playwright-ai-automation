![Playwright](https://img.shields.io/badge/tested%20with-Playwright-blue)
![CI](https://github.com/bmvignesh/playwright-ai-automation/actions/workflows/playwright.yml/badge.svg)
# Playwright AI Automation

This repository contains a sample automation framework built with [Playwright](https://playwright.dev/).  
It demonstrates modern test automation practices including Page Object Model (POM), fixtures, utilities, and CI/CD integration.

---

## 📂 Project Structure

playwright-ai-automation/
│-- pages/              # Page Object Models (encapsulated selectors & actions)
│-- tests/              # Test cases written in Playwright
│-- utils/              # Helper functions (data, API, custom assertions)
│-- fixtures.ts         # Custom fixtures (shared setup like login, test data)
│-- playwright.config.ts # Playwright configuration (browser, retries, reporter)
│-- package.json        # Dependencies & npm scripts
│-- README.md           # Documentation


---

## ⚙️ Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/bmvignesh/playwright-ai-automation.git
   cd playwright-ai-automation

2. Install dependencies:
   npm install

3. Running Tests:
   Run all tests:
      npx playwright test
   Run tests in headed mode:
      npx playwright test --headed
   Run a specific test file:
      npx playwright test tests/example.spec.ts
---

## 🛠️ Features
Page Object Model (POM) for maintainable test design

Fixtures for reusable setup (e.g., login, test data)

Utilities for API calls, data generation, and assertions

Playwright Config for browser settings, retries, and reporters

CI/CD Ready with GitHub Actions (see .github/workflows)

---

## 📌 Future Enhancements
Add reporting integration (Allure / HTML reporter)

Extend utilities for API + DB validation

Add environment‑based configs (dev, QA, prod)

---

## 👤 Author
Vignesh  
QA Manager | Playwright & TypeScript Enthusiast