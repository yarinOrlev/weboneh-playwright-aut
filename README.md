# 📌 Weboneh Playwright Automation  
**Automated UI Testing for Weboneh - A Student Code Review System**  

## 🚀 Overview  
This repository contains a **Playwright** test suite for automating **Weboneh**, a platform designed to check students' code sources. The automation is integrated with **GitLab CI/CD**, uses **Allure reporting**, and supports parallel test execution.  

---

## 🛠️ Features  
✅ **Playwright** for end-to-end testing  
✅ **Allure** for detailed test reports  
✅ **Fixtures** for reusable test setup  
✅ **Parallel execution** with sharding  
✅ **CI/CD integration** with **GitLab CI**  

---

## 📁 Project Structure  
```
📦 Weboneh-Playwright
├── 📂 tests              # Test cases for Weboneh
│   ├── 📂 auth           # Authentication tests
│   ├── 📂 dashboard      # Dashboard tests
│   ├── 📂 reports        # Report tests
├── 📂 fixtures           # Shared fixtures for test setup
├── 📂 pages              # Page Object Model (POM) classes
├── 📂 blob-report        # Playwright report artifacts
├── 📂 playwright-report  # Final merged HTML report
├── .gitlab-ci.yml        # GitLab CI/CD pipeline config
├── playwright.config.ts  # Playwright test configuration
└── package.json          # Dependencies & scripts
```

---

## 🔧 Installation  
1️⃣ Clone the repo:  
```sh
git clone https://gitlab.com/your-repo/weboneh-playwright-aut.git
cd webonehautplaywright
```  
2️⃣ Install dependencies:  
```sh
npm install
```  
3️⃣ Run Playwright setup:  
```sh
npx playwright install
```  

---

## 🚀 Running Tests  
**Run all tests**  
```sh
npx playwright test
```  
**Run specific tests**  
```sh
npx playwright test tests/auth
```  
**Run with Allure reporting**  
```sh
npx playwright test --reporter=allure-playwright
```

---

## 🏗️ GitLab CI/CD Pipeline  
### **🔹 Stages**  
1. **Playwright Setup**  
   - Installs dependencies  
   - Runs setup tests  
2. **Playwright Tests**  
   - Runs Weboneh tests in parallel  
   - Uses sharding for faster execution  
3. **Assemble Report**  
   - Merges test reports  
   - Generates a final **HTML test report**  

### **🔹 Pipeline Execution**  
```yml
stages:
  - playwright-setup
  - playwright-tests
  - playwright-report
```
✅ Parallel execution using **shards**  
✅ Artifacts stored for **1 day**  

---

## 📊 Test Reports  
1️⃣ **Allure Reports** (Run locally):  
```sh
allure serve allure-results
```  
2️⃣ **Playwright HTML Reports** (Generated in GitLab CI):  
```sh
npx playwright merge-reports --reporter=html ./blob-report
```

---

## 📌 Configuration Highlights  
📜 **playwright.config.ts**  
- ✅ **Retries:** 2 on CI, 0 locally  
- ✅ **Timeout:** 3 minutes  
- ✅ **Viewport:** `1920x1080`  
- ✅ **Headless mode:** Enabled  
- ✅ **Tracing:** Enabled for debugging  

🔹 **Projects:**  
- **Setup:** Prepares test dependencies  
- **Weboneh:** Main test execution  

---

## 🎯 Future Enhancements  
- ☑️ Add more test coverage  
- ☑️ Improve GitLab CI performance  
- ☑️ Implement API testing  

---

## 🤝 Contributors  
🚀 Built by **Yarin Orlev** and the QA Automation team.  

For any issues or feature requests, please open a GitLab issue. 🔥  
