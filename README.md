# 🚀 Playwright Automation Framework

> A production-ready UI and API test automation framework built with Playwright and TypeScript, demonstrating modern QA automation engineering practices including clean architecture, reusable design patterns, type-safe development, and continuous integration.

---

## 📌 Project Overview

This project demonstrates how a modern test automation framework can be designed using software engineering best practices rather than simply organizing Playwright tests.

### Objectives

- Build a scalable automation framework
- Support both UI and API automation
- Promote reusable architecture
- Improve maintainability
- Ensure type safety
- Integrate automated quality gates
- Follow enterprise QA engineering practices

---

## ✨ Key Features

### UI Automation

- Page Object Model (POM)
- Component Object Pattern
- Authentication State
- Cross-browser Testing
- Parallel Execution
- Screenshot / Video / Trace Collection

### API Automation

- API Client Layer
- Resource-based Architecture
- CRUD Testing
- Typed Request Models
- Typed Response Models
- API Assertions

### Framework Features

- Custom Fixtures
- Environment Management
- Test Data Factories
- Network Mocking
- Strong Type Safety

### Code Quality

- TypeScript
- ESLint
- Prettier
- GitHub Actions
- CodeQL
- Dependabot

---

## 🛠 Technology Stack

| Category        | Technology          |
| --------------- | ------------------- |
| Language        | TypeScript          |
| Automation      | Playwright          |
| Runtime         | Node.js             |
| Package Manager | npm                 |
| Environment     | dotenv              |
| Code Quality    | ESLint + Prettier   |
| Reporting       | HTML + List + JUnit |
| CI/CD           | GitHub Actions      |

---

## 🏗 Framework Architecture

ASCII Architecture Diagram

---

## 📂 Project Structure

Folder Tree

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- npm
- Git

### Clone Repository

```bash
git clone ...
```

### Install Dependencies

```bash
npm ci
```

### Install Playwright

```bash
npx playwright install
```

---

## 🌍 Environment Configuration

Supported environments

```
local
dev
staging
production
```

Example `.env`

```env
APP_ENV=local
BASE_URL=...
API_BASE_URL=...
```

---

## ⚙ Available Commands

| Command              | Description         |
| -------------------- | ------------------- |
| npm test             | Execute all tests   |
| npm run test:e2e     | UI Tests            |
| npm run test:api     | API Tests           |
| npm run lint         | ESLint              |
| npm run format       | Format source code  |
| npm run format:check | Validate formatting |
| npm run typecheck    | Type Checking       |
| npm run report       | HTML Report         |

---

## 🧪 Framework Capabilities

### Reporting

- HTML Report
- List Reporter
- JUnit Reporter

### Failure Artifacts

- Screenshots
- Videos
- Trace Files

### Browser Support

- Chromium
- Firefox
- WebKit

---

## 🔄 Continuous Integration

GitHub Actions pipeline

```
Checkout
    │
Install Dependencies
    │
TypeScript
    │
ESLint
    │
Prettier
    │
Playwright Tests
    │
Reports
    │
Artifacts
```

### Quality Gates

- Type Checking
- ESLint
- Prettier
- Playwright Tests

---

## 💡 Design Decisions

### Why Page Object Model?

- Better maintainability
- Reduced duplication
- Cleaner test scenarios

---

### Why Component Objects?

- Reusable UI elements
- Better separation of concerns

---

### Why Fixtures?

- Centralized dependency management
- Cleaner test setup
- Reusable test context

---

### Why API Resource Layer?

- Encapsulated HTTP logic
- Cleaner API tests
- Reusable operations

---

### Why Typed Models?

- Compile-time validation
- Better IntelliSense
- Safer refactoring

---

### Why Test Data Factories?

- Reusable data generation
- Consistent test data
- Easier maintenance

---

### Why Network Mocking?

- Stable UI tests
- Faster execution
- Backend-independent validation

---

### Why Environment Management?

- Centralized configuration
- Easier environment switching
- Cleaner configuration management

---

### Why GitHub Actions?

- Automated validation
- Continuous Integration
- Reliable quality checks

---

## 🗺 Roadmap

### ✅ Completed

- Framework Foundation
- UI Automation
- API Automation
- Custom Fixtures
- Authentication State
- Environment Management
- API Client
- CRUD Testing
- Mocking
- GitHub Actions
- CodeQL
- Dependabot
- Prettier
- ESLint

---

### 🚧 In Progress

- Documentation
- Repository Polish
- Architecture Documentation

---

### 📌 Planned

- Docker Support
- Scheduled Regression
- Advanced Reporting
- External Test Management

---

## 👨‍💻 Author

**Onur Kaan Erzik**

Senior QA Automation Engineer

📍 Berlin, Germany

GitHub

LinkedIn

---

## ⭐ Support

If you found this project useful, consider giving it a star.

Contributions, suggestions and discussions are always welcome.
