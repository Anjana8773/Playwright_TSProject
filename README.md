# Playwright_TSProject
Demoblaze UI Automation Framework (Playwright + TypeScript)
This project is an end-to-end UI automation test framework for the Demoblaze
 e-commerce application.

It is built using Playwright with TypeScript and follows the Page Object Model (POM) design pattern to ensure scalability, maintainability, and reusability.

Tech Stack
🎭 Playwright
⌨️ TypeScript
📦 Node.js / npm
🧱 Page Object Model (POM)
📊 Excel-based test data (xlsx)
🤖 CI/CD integration (Jenkins)
📊 Allure reporting



Features Automated
✔ User Login
✔ Add product to cart
✔ Cart validation
✔ Place order workflow
✔ Order confirmation handling
✔ Data-driven testing using Excel
✔ Reusable POM architecture
✔ Parallel execution 

⚙️ Setup Instructions
1. Clone repository
git clone https://github.com/your-username/Playwright_TSProject.git
cd Playwright_TSProject

2. Install dependencies
   npm install

3.Install Playwright browsers
  npx playwright install

▶️ Running Tests
Run all tests
npx playwright test

Run specific test file
npx playwright test tests/Main.spec.ts

Run in headed mode
npx playwright test --headed

📈 Reports

Generate and view HTML report:
npx playwright show-report

Generate and view Allure report:
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report



🧪 Sample Test Flow
Open Demoblaze application
Login with valid credentials
Select product
Add product to cart
Navigate to cart page
Place order using Excel data
Validate order confirmation


🏗️ Design Pattern

This framework uses:
✔ Page Object Model (POM)
Each page has a dedicated class
Locators and actions are separated from tests
Improves maintainability and readability

🧑‍💻 Example Test Case
test('TC#7 Add Item to cart', async ({ page }) => {
  const pomanager = new POManager(page);

  const loginpage = pomanager.getLogin();

  await loginpage.clickLoginLink();
  await loginpage.userLoginForm(username, password);
  await loginpage.clicksubmitbtn();

  expect(page.locator('#tbodyid')).toBeVisible();
});

🧩 Common Utilities
Excel reader for test data
Page Object Manager (POManager)
Reusable login & cart methods

👤 Author
Anjana
GitHub: https://github.com/Anjana8773

📌 Notes
Use npx playwright test --ui for debugging

