# 🚀 Playwright Automation Framework

Production-ready UI & API Test Automation Framework built with **Playwright** and **TypeScript**.

---

# 📌 Project Vision

This repository demonstrates how a modern test automation framework can be designed using enterprise-level software engineering principles.

The goal is to build a scalable, maintainable and reliable automation framework supporting:

- UI Test Automation
- API Test Automation
- Clean Architecture
- Reusable Components
- Type-safe Test Development
- Continuous Integration

The framework is designed with real-world QA automation practices in mind.

---

# 🛠 Technology Stack

| Category        | Technology             |
| --------------- | ---------------------- |
| Language        | TypeScript             |
| Automation      | Playwright             |
| Runtime         | Node.js                |
| Package Manager | npm                    |
| Version Control | Git & GitHub           |
| CI/CD           | GitHub Actions         |
| Code Quality    | TypeScript + Prettier  |
| Reporting       | Playwright HTML Report |

---

# 🏗 Framework Architecture

```
                    Playwright Tests

                           |
          +----------------+----------------+
          |                                 |
       UI Tests                         API Tests
          |                                 |
   Page Object Model                 API Resources
          |                                 |
 Components                          API Client
          |                                 |
      Fixtures                     API Assertions
          |
 Environment Configuration
          |
       GitHub Actions
```

---

# 📂 Project Structure

```
src/
 ├── api
 │    ├── clients        # HTTP client layer
 │    ├── resources      # API service objects
 │    ├── models         # API request/response models
 │    └── assertions     # API validation helpers
 │
 ├── components         # Reusable UI components
 ├── config             # Environment configuration
 ├── data               # Test data management
 ├── fixtures           # Custom Playwright fixtures
 ├── pages              # Page Object Models
 ├── types              # Shared TypeScript types
 └── utils              # Common utilities


tests/
 ├── api                # API test scenarios
 ├── auth               # Authentication setup
 └── e2e                # End-to-end UI tests
```

---

# ✨ Framework Capabilities

## UI Automation

✔ Page Object Model  
✔ Component Object Pattern  
✔ Reusable locators  
✔ Business-level page actions  
✔ Cross-browser execution  
✔ Parallel test execution

## API Automation

✔ API Client abstraction  
✔ Resource-based API structure  
✔ CRUD API testing  
✔ Type-safe API models  
✔ API assertion layer

## Test Infrastructure

✔ Custom Playwright fixtures  
✔ Authentication state management  
✔ Environment-based configuration  
✔ Test data management  
✔ Tag-based execution  
✔ HTML reporting

## CI/CD

✔ GitHub Actions integration  
✔ Automated test execution  
✔ TypeScript validation  
✔ Test reporting

---

# 🏛 Design Principles

The framework follows:

- Separation of Concerns
- Single Responsibility Principle
- DRY (Don't Repeat Yourself)
- Reusability
- Maintainability
- Scalability
- Clean Code Practices

---

# 🚀 Getting Started

## Install dependencies

```bash
npm install
```

## Install Playwright browsers

```bash
npx playwright install
```

## Type checking

```bash
npm run typecheck
```

## Run all tests

```bash
npx playwright test
```

## Run UI tests

```bash
npx playwright test --project=chromium
```

## Run API tests

```bash
npx playwright test --project=api
```

## Open HTML Report

```bash
npx playwright show-report
```

---

# 🌎 Environment Management

The framework supports multiple environments:

```
local
dev
staging
production
```

Configuration can be controlled through environment variables.

Example:

```env
APP_ENV=local
BASE_URL=
API_BASE_URL=
API_USERNAME=
API_PASSWORD=
```

---

# 🧪 Example Test Flow

## UI Purchase Flow

```
Login
 |
Add Product
 |
Open Cart
 |
Checkout
 |
Verify Order Completion
```

## API Flow

```
Create Entity
 |
Get Entity
 |
Update Entity
 |
Validate Response
 |
Delete Entity
```

---

# 🗺 Development Roadmap

## Sprint 1 — Framework Foundation ✅

Completed:

- [x] Repository Setup
- [x] TypeScript Configuration
- [x] Playwright Configuration
- [x] Project Architecture
- [x] Page Object Model
- [x] Custom Fixtures
- [x] Authentication State
- [x] Environment Management
- [x] API Client Layer
- [x] CI Pipeline

---

## Sprint 2 — Framework Enhancement 🚧

- [ ] Improve Documentation
- [ ] Expand API Coverage
- [ ] Test Data Factories
- [ ] Advanced Reporting
- [ ] Better Logging

---

## Sprint 3 — Advanced Automation

- [ ] API + UI Integration
- [ ] Network Mocking
- [ ] Advanced Fixtures
- [ ] Performance Testing Examples

---

## Sprint 4 — CI/CD Improvements

- [ ] Workflow Optimization
- [ ] Artifact Management
- [ ] Docker Support
- [ ] Pipeline Enhancements

---

# 👨‍💻 Author

**Onur Kaan Erzik**  
Senior QA Automation Engineer

📍 Berlin, Germany

GitHub:
https://github.com/onurkaanerzik

LinkedIn:
https://www.linkedin.com/in/onurkaanerzik
