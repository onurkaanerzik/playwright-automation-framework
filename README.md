# 🚀 Playwright Automation Framework

A production-ready UI and API test automation framework built with **Playwright** and **TypeScript**, demonstrating modern QA automation engineering practices including clean architecture, reusable design patterns, type-safe development and continuous integration.

---

# 📌 Project Vision

This repository demonstrates how a modern automation framework can be designed using software engineering best practices rather than simply organizing Playwright tests.

The primary goals of this project are:

- Build a scalable automation framework
- Separate business logic from implementation details
- Support both UI and API testing
- Encourage reusable and maintainable code
- Improve developer productivity
- Ensure type safety across the project
- Integrate automated quality checks into CI
- Follow real-world QA engineering practices

The framework is intentionally structured to resemble automation frameworks commonly used in enterprise software projects.

---

# 🛠 Technology Stack

| Category | Technology |
|-----------|------------|
| Language | TypeScript |
| Automation | Playwright |
| Runtime | Node.js |
| Package Manager | npm |
| Environment Management | dotenv |
| Version Control | Git & GitHub |
| Code Quality | ESLint + TypeScript |
| Reporting | HTML + List + JUnit Reporters |
| CI/CD | GitHub Actions |

---

# 🏗 Framework Architecture

```
                              Test Specifications
                                       │
                     ┌─────────────────┴─────────────────┐
                     │                                   │
                 UI Automation                     API Automation
                     │                                   │
             Playwright Fixtures                 API Resources
                     │                                   │
             Page Object Models                 API Client Layer
                     │                                   │
            Reusable Components             Typed Request / Response Models
                     │                                   │
                Test Data                     API Assertions
                     │
          Environment Configuration
                     │
          Playwright Configuration
                     │
              GitHub Actions CI
```

The framework separates responsibilities into independent layers to improve maintainability, scalability and readability.

---

# 📂 Project Structure

```
.
├── .github
│   └── workflows
│       └── playwright.yml
│
├── src
│   ├── api
│   │   ├── assertions
│   │   ├── clients
│   │   ├── models
│   │   └── resources
│   │
│   ├── components
│   ├── config
│   ├── data
│   │   └── factories
│   │
│   ├── fixtures
│   ├── mocks
│   ├── pages
│   ├── types
│   └── utils
│
├── tests
│   ├── api
│   ├── auth
│   └── e2e
│
├── playwright.config.ts
├── eslint.config.mjs
├── tsconfig.json
└── package.json
```

---

# ✨ Framework Capabilities

## UI Automation

- ✔ Page Object Model (POM)
- ✔ Component Object Pattern
- ✔ Business-level page actions
- ✔ Reusable UI components
- ✔ Authentication state management
- ✔ Cross-browser execution
- ✔ Parallel execution
- ✔ Screenshot on failure
- ✔ Video recording on failure
- ✔ Trace collection on first retry

---

## API Automation

- ✔ API Client abstraction
- ✔ Resource-based architecture
- ✔ CRUD API testing
- ✔ Typed request models
- ✔ Typed response models
- ✔ API assertions
- ✔ Authentication handling

---

## Test Data

- ✔ Static test data
- ✔ Test Data Factories
- ✔ Randomized data generation

---

## Mocking

- ✔ Network request interception
- ✔ Mock API responses
- ✔ Positive scenario testing
- ✔ Negative scenario testing

---

## Environment Management

- ✔ Multiple environment profiles
- ✔ Environment validation
- ✔ Centralized configuration
- ✔ Environment-specific execution

---

## Code Quality

- ✔ TypeScript strict typing
- ✔ ESLint
- ✔ Type checking
- ✔ CI Quality Gates
- ✔ Unused import detection
- ✔ Type-only imports

---

## Reporting

- ✔ Playwright HTML Report
- ✔ List Reporter
- ✔ JUnit Reporter
- ✔ Failure screenshots
- ✔ Failure videos
- ✔ Playwright traces

---

# 🏛 Design Principles

The framework follows modern software engineering principles:

- Separation of Concerns
- Single Responsibility Principle (SRP)
- DRY (Don't Repeat Yourself)
- Maintainability
- Scalability
- Reusability
- Type Safety
- Clean Code Practices
---
---

# 🚀 Getting Started

## Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git

Verify your installation:

```bash
node --version
npm --version
git --version
```

---

## Clone Repository

```bash
git clone https://github.com/onurkaanerzik/playwright-automation-framework.git
```

Navigate into the project:

```bash
cd playwright-automation-framework
```

---

## Install Dependencies

Install all project dependencies:

```bash
npm ci
```

---

## Install Playwright Browsers

```bash
npx playwright install
```

---

# 🌍 Environment Configuration

The framework supports multiple execution environments.

Available environments:

```text
local
dev
staging
production
```

Create a `.env` file in the project root.

Example:

```env
APP_ENV=local

BASE_URL=https://example.com

API_BASE_URL=https://jsonplaceholder.typicode.com

API_USERNAME=

API_PASSWORD=
```

Environment resolution is centralized inside the configuration layer.

Invalid environments fail immediately before any test execution.

---

# ⚙ Available Commands

## Execute all tests

```bash
npm test
```

---

## Execute UI tests

```bash
npm run test:e2e
```

---

## Execute API tests

```bash
npm run test:api
```

---

## Execute Chromium only

```bash
npm run test:chromium
```

---

## Execute Smoke Tests

```bash
npm run test:smoke
```

---

## Execute Regression Tests

```bash
npm run test:regression
```

---

## Headed Mode

```bash
npm run test:headed
```

---

## Debug Mode

```bash
npm run test:debug
```

---

## Playwright UI Mode

```bash
npm run test:ui
```

---

## Execute Local Environment

```bash
npm run test:local
```

---

## Execute Development Environment

```bash
npm run test:dev
```

---

## Execute Staging Environment

```bash
npm run test:staging
```

---

## Execute Production Environment

```bash
npm run test:production
```

---

## Type Checking

```bash
npm run typecheck
```

---

## ESLint Validation

```bash
npm run lint
```

---

## Automatically Fix ESLint Issues

```bash
npm run lint:fix
```

---

## Open HTML Report

```bash
npm run report
```

---

# 🧪 Playwright Projects

The framework is organized into multiple Playwright projects.

| Project | Purpose |
|----------|---------|
| setup | Generates authentication state |
| api | Executes API automation tests |
| chromium | Executes UI tests on Chromium |
| firefox | Executes UI tests on Firefox |
| webkit | Executes UI tests on WebKit |

The browser projects depend on the `setup` project and automatically reuse the generated authentication state.

---

# 📊 Reports

The framework generates multiple report formats.

### HTML Report

Interactive Playwright report.

```bash
npm run report
```

---

### Console Reporter

Displays execution progress directly in the terminal.

---

### JUnit Reporter

Produces XML reports suitable for CI servers and external reporting tools.

---

### Failure Artifacts

On failures Playwright automatically collects:

- Screenshots
- Videos
- Trace files

This significantly simplifies debugging failed executions.

---

# 🚀 Continuous Integration

The project includes a GitHub Actions workflow.

Every execution performs:

```text
Checkout Repository
        │
Setup Node.js
        │
Install Dependencies
        │
TypeScript Validation
        │
ESLint Validation
        │
Install Playwright Browsers
        │
Run Playwright Tests
        │
Generate HTML Report
        │
Generate JUnit Report
        │
Upload Artifacts
```

Quality gates ensure that static analysis succeeds before test execution begins.

---

# 🧪 Example Test Flow

## UI Automation

```text
Open Application
        │
Authenticate User
        │
Navigate Through Pages
        │
Execute Business Scenario
        │
Verify Expected Results
        │
Capture Failure Artifacts
```

---

## API Automation

```text
Authenticate
      │
Create Resource
      │
Retrieve Resource
      │
Update Resource
      │
Validate Response
      │
Delete Resource
```

UI and API layers are intentionally separated while sharing common infrastructure such as fixtures, configuration and test data.

---

# 📐 Design Decisions

The framework has been designed with long-term maintainability and scalability in mind. Every architectural decision was made to keep responsibilities isolated, reduce duplication and simplify future extensions.

---

## Why Page Object Model?

The Page Object Model centralizes UI locators and page interactions, preventing duplication across test scenarios.

Benefits:

- Better readability
- Easier maintenance
- Reduced code duplication
- Separation of business logic from UI implementation

---

## Why Component Objects?

Many applications contain reusable UI sections such as headers, menus or dialogs.

Component Objects encapsulate these reusable elements so they can be shared across multiple pages.

---

## Why Custom Fixtures?

Fixtures provide common dependencies to tests without repetitive setup code.

The framework injects page objects, API resources and configuration through fixtures to improve consistency and readability.

---

## Why API Resource Layer?

HTTP communication is separated from business operations.

Instead of placing requests directly inside tests:

```
Test
    ↓
API Resource
    ↓
API Client
```

Benefits:

- Cleaner tests
- Reusable API operations
- Easier maintenance
- Centralized HTTP logic

---

## Why Typed API Models?

API requests and responses are represented by TypeScript interfaces.

Benefits:

- Compile-time validation
- Better IntelliSense support
- Safer refactoring
- Reduced runtime errors

---

## Why Test Data Factories?

Hardcoded data quickly becomes difficult to maintain.

Factories generate reusable, consistent and randomized test data.

Benefits:

- Reusable data generation
- Cleaner tests
- Easier scaling

---

## Why Network Mocking?

Mocking allows UI behavior to be validated independently from backend availability.

Benefits:

- Faster execution
- Stable tests
- Deterministic scenarios
- Reliable negative testing

---

## Why Environment Configuration?

Environment-specific values are managed centrally instead of being scattered across the framework.

Benefits:

- Cleaner configuration
- Easier deployment
- Safer environment switching

---

## Why ESLint and TypeScript?

Static analysis catches many issues before execution.

The CI pipeline validates:

- Type safety
- Unused imports
- Invalid code patterns
- Consistent code style

This helps maintain high code quality throughout the project.

---

## Why GitHub Actions?

Every push validates the framework automatically.

The workflow ensures:

- TypeScript validation
- ESLint validation
- Playwright execution
- Report generation
- Artifact upload

This reduces manual verification and improves confidence before merging changes.

---

# 🗺 Development Roadmap

## ✅ Sprint 1 — Framework Foundation

Completed:

- Repository Setup
- TypeScript Configuration
- Playwright Configuration
- Project Architecture
- Page Object Model
- Custom Fixtures
- Authentication State
- Environment Management
- API Client Layer
- Initial GitHub Actions Pipeline

---

## ✅ Sprint 2 — Framework Enhancement

Completed:

- Resource-based API Layer
- CRUD API Testing
- Typed API Models
- API Assertions
- API + UI Integration
- Test Data Factories
- Network Mocking
- Advanced Fixtures

---

## ✅ Sprint 3 — Code Quality & CI

Completed:

- ESLint Flat Configuration
- TypeScript Quality Gates
- Typed API Responses
- Unused Import Validation
- CI Improvements
- npm Dependency Cache
- Artifact Upload
- Manual Workflow Execution

---

## 🚧 Sprint 4 — Portfolio & Repository Polish

Current focus:

- Professional README
- Architecture Documentation
- Test Strategy Documentation
- Pull Request Template
- Issue Templates
- Repository Metadata
- Final Code Review
- Portfolio Optimization

---

# 🚀 Future Improvements

The following enhancements are intentionally planned for future iterations:

- Docker-based execution
- Browser matrix optimization
- Scheduled regression workflows
- External test management integration
- Advanced reporting integrations
- Performance testing examples

These improvements are outside the current framework scope but can be added without major architectural changes.

---

# 💡 Why This Project?

This repository was created to demonstrate practical QA automation engineering skills rather than simply showcasing Playwright usage.

The focus is on building a framework that is:

- Maintainable
- Scalable
- Type-safe
- Modular
- Easy to extend
- Suitable for real-world software projects

The implementation emphasizes software engineering principles, clean architecture and reusable design patterns that can support long-term automation initiatives.

---

# 👨‍💻 Author

** Onur Kaan Erzik **

Senior QA Automation Engineer

📍 Berlin, Germany

**GitHub**

https://github.com/onurkaanerzik

**LinkedIn**

https://www.linkedin.com/in/onurkaanerzik

---

## ⭐ If you find this project useful, feel free to star the repository.

Contributions, suggestions and discussions are always welcome.