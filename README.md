# 🚀 Playwright + TypeScript Test Automation Framework

[![Playwright Tests](https://github.com/onurkaanerzik/playwright-automation-framework/actions/workflows/playwright.yml/badge.svg)](https://github.com/onurkaanerzik/playwright-automation-framework/actions/workflows/playwright.yml)
[![CodeQL](https://github.com/onurkaanerzik/playwright-automation-framework/actions/workflows/codeql.yml/badge.svg)](https://github.com/onurkaanerzik/playwright-automation-framework/actions/workflows/codeql.yml)

> A portfolio-grade UI and API test automation framework built with Playwright and TypeScript, demonstrating scalable automation architecture, reusable design patterns, type-safe development, cross-browser testing, and continuous integration.

---

## 📌 Project Overview

This project demonstrates how a modern test automation framework can be designed using software engineering and quality engineering practices rather than simply organizing automated tests.

The framework supports UI and API automation through reusable architectural layers and integrates automated quality gates through GitHub Actions.

### Current Test Suite

- **53 automated test executions**
- **18 test files**
- UI end-to-end automation
- API automation
- Chromium, Firefox, and WebKit execution
- Authentication state reuse
- Network mocking
- CI/CD execution through GitHub Actions

> Playwright reports 53 executions because UI scenarios are executed independently across Chromium, Firefox, and WebKit.

---

## ✨ Key Features

### 🖥 UI Automation

- Page Object Model (POM)
- Component Object Pattern
- Reusable authentication state
- Cross-browser testing
- Parallel execution
- End-to-end purchase workflows
- Negative test scenarios
- Checkout and price validation
- Screenshots, videos, and traces on failure

### 🔌 API Automation

- Reusable API client layer
- Resource-based API architecture
- Authentication API testing
- CRUD operations
- Typed request and response models
- Centralized API assertions
- API response mocking

### 🏗 Framework Engineering

- Custom Playwright fixtures
- Environment configuration profiles
- Test data factories
- Reusable page and component objects
- Network mocking
- Strong TypeScript typing
- Centralized logging

### 🔍 Code Quality & CI/CD

- TypeScript
- ESLint
- Prettier
- GitHub Actions
- CodeQL analysis
- Dependabot
- Automated quality gates

---

## 🛠 Technology Stack

| Category | Technology |
| --- | --- |
| Language | TypeScript |
| Automation | Playwright |
| Runtime | Node.js |
| Package Manager | npm |
| UI Architecture | Page Object Model + Component Objects |
| API Architecture | API Client + Resource Layer |
| Environment | dotenv |
| Code Quality | ESLint + Prettier |
| Reporting | HTML + List + JUnit |
| CI/CD | GitHub Actions |
| Security Analysis | CodeQL |
| Dependency Management | Dependabot |

---

## 🏗 Framework Architecture

```text
                         ┌─────────────────────┐
                         │     Test Suites     │
                         │                     │
                         │   UI / API / Auth   │
                         └──────────┬──────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
                    ▼                               ▼
          ┌──────────────────┐            ┌──────────────────┐
          │   UI Automation  │            │  API Automation  │
          └────────┬─────────┘            └────────┬─────────┘
                   │                               │
          ┌────────▼─────────┐            ┌────────▼─────────┐
          │   Page Objects   │            │   API Resources  │
          │   Components     │            │   API Assertions │
          └────────┬─────────┘            └────────┬─────────┘
                   │                               │
                   └───────────────┬───────────────┘
                                   │
                          ┌────────▼────────┐
                          │ Custom Fixtures │
                          └────────┬────────┘
                                   │
               ┌───────────────────┼───────────────────┐
               │                   │                   │
               ▼                   ▼                   ▼
        ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
        │ Test Data   │     │ Environment │     │   Mocks     │
        │ Factories   │     │   Config    │     │             │
        └─────────────┘     └─────────────┘     └─────────────┘
```

The architecture separates test scenarios from implementation details, allowing UI components, API resources, test data, configuration, and fixtures to evolve independently.

---

## 📂 Project Structure

```text
playwright-automation-framework/
│
├── .github/
│   ├── workflows/
│   │   ├── playwright.yml
│   │   └── codeql.yml
│   └── dependabot.yml
│
├── src/
│   ├── api/
│   │   ├── assertions/
│   │   ├── clients/
│   │   ├── models/
│   │   └── resources/
│   │
│   ├── components/
│   │   ├── CookieBanner.ts
│   │   ├── Footer.ts
│   │   ├── Header.ts
│   │   └── NavigationBar.ts
│   │
│   ├── config/
│   │   ├── environment.ts
│   │   ├── profiles.ts
│   │   └── types.ts
│   │
│   ├── data/
│   │   ├── factories/
│   │   ├── models/
│   │   └── test data
│   │
│   ├── fixtures/
│   │   └── app.fixture.ts
│   │
│   ├── mocks/
│   │   ├── data/
│   │   └── handlers/
│   │
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── InventoryPage.ts
│   │   ├── CartPage.ts
│   │   └── Checkout Pages
│   │
│   └── utils/
│       └── Logger.ts
│
├── tests/
│   ├── api/
│   ├── auth/
│   └── e2e/
│
├── playwright.config.ts
├── eslint.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🧪 Test Coverage

### UI / E2E Scenarios

The UI automation suite currently covers:

- Application health check
- Authentication validation
- Invalid credentials
- Locked-user validation
- Inventory validation
- Product sorting
- Cart operations
- Checkout validation
- Price validation
- Single-product purchase flow
- Multi-product purchase flow
- Logout
- Product API interception / mocking

UI scenarios are executed across:

- Chromium
- Firefox
- WebKit

### API Scenarios

The API suite includes:

- Authentication token creation
- Retrieve booking
- Create booking
- Update booking
- Partial booking update
- Delete booking
- Retrieve user
- Retrieve users collection
- Create user
- Mock API response validation

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Clone Repository

```bash
git clone https://github.com/onurkaanerzik/playwright-automation-framework.git
cd playwright-automation-framework
```

### Install Dependencies

```bash
npm ci
```

### Install Playwright Browsers

```bash
npx playwright install
```

---

## 🌍 Environment Configuration

The framework supports environment-based configuration profiles.

Available profiles include:

```text
local
dev
staging
production
```

Create a local `.env` file based on the provided `.env.example`.

```bash
cp .env.example .env
```

Environment-specific configuration is resolved through the framework's configuration layer.

> Local environment files and authentication state are excluded from version control.

---

## ⚙ Available Commands

| Command | Description |
| --- | --- |
| `npm test` | Execute all tests |
| `npm run test:e2e` | Execute UI tests |
| `npm run test:api` | Execute API tests |
| `npm run lint` | Run ESLint |
| `npm run format` | Format source code |
| `npm run format:check` | Validate formatting |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run report` | Open Playwright HTML report |

To execute the complete Playwright suite directly:

```bash
npx playwright test
```

To inspect all configured test executions:

```bash
npx playwright test --list
```

---

## 📊 Reporting & Failure Analysis

The framework provides:

- Playwright HTML reports
- List reporter
- JUnit output
- Screenshots on failure
- Video recordings
- Trace files

After a local execution, the HTML report can be opened with:

```bash
npx playwright show-report
```

CI executions also publish test artifacts for failure analysis.

---

## 🔄 Continuous Integration

Every relevant push or pull request is validated through GitHub Actions.

```text
Checkout Repository
        │
        ▼
Install Dependencies
        │
        ▼
Install Playwright Browsers
        │
        ▼
TypeScript Validation
        │
        ▼
ESLint
        │
        ▼
Prettier Check
        │
        ▼
Playwright Tests
        │
        ▼
Test Reports & Artifacts
```

### Automated Quality Gates

- Type checking
- ESLint
- Prettier validation
- Playwright test execution
- Cross-browser validation
- Test artifact generation

### CI Status

The latest workflow executions can be viewed here:

[View Playwright CI Runs](https://github.com/onurkaanerzik/playwright-automation-framework/actions/workflows/playwright.yml)

[View CodeQL Analysis](https://github.com/onurkaanerzik/playwright-automation-framework/actions/workflows/codeql.yml)

---

## 💡 Key Design Decisions

### Page Object Model

Separates test scenarios from page implementation details and improves maintainability.

### Component Objects

Encapsulates reusable UI elements such as navigation, headers, footers, and banners.

### Custom Fixtures

Centralizes dependency creation and provides reusable test context.

### API Resource Layer

Separates HTTP operations from test scenarios and enables reusable API interactions.

### Typed Models

Provides compile-time validation, safer refactoring, and better development tooling.

### Test Data Factories

Provides reusable and consistent test data generation.

### Network Mocking

Allows controlled API responses and more deterministic test scenarios.

### Environment Management

Centralizes environment configuration and supports multiple execution profiles.

### Authentication State

Avoids unnecessary repeated authentication and improves execution efficiency.

### GitHub Actions

Provides automated validation and continuous feedback for every framework change.

---

## 🗺 Roadmap

### ✅ Completed

- Framework foundation
- UI automation
- API automation
- Page Object Model
- Component Object Pattern
- Custom fixtures
- Authentication state
- Environment management
- API client and resource layers
- CRUD API testing
- Test data factories
- Network mocking
- Cross-browser execution
- GitHub Actions CI
- CodeQL
- Dependabot
- Prettier
- ESLint
- Automated reporting

### 📌 Planned

- Docker support
- Scheduled regression execution
- Advanced reporting
- External test management integration
- Additional API and UI scenarios

---

## 👨‍💻 Author

**Onur Kaan Erzik**  
Senior QA Automation Engineer  
Berlin, Germany

- [GitHub](https://github.com/onurkaanerzik)
- [LinkedIn](https://www.linkedin.com/in/onurkaanerzik/)

---

## 🔗 Repository

**GitHub:**  
https://github.com/onurkaanerzik/playwright-automation-framework

---

## ⭐ About This Project

This repository is maintained as a practical demonstration of modern QA automation engineering, combining UI testing, API testing, reusable framework architecture, code quality controls, and CI/CD practices in a single project.