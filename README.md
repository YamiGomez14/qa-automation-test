# QA Automation Challenge

## Overview

This project contains automated E2E and API tests implemented using:

- Cypress
- JavaScript
- Mochawesome Reporter
- Page Object Model (POM)

---

# Project Structure

```txt
cypress/
│
├── e2e/
│   ├── api/
│   └── ecommerce/
│
├── fixtures/
├── pages/
└── support/
```

---

# Prerequisites

Before running the project make sure you have installed:

- Node.js
- npm

Verify installation:

```bash
node -v
npm -v
```

---

# Step-by-Step Installation

## 1. Clone repository

```bash
git clone <repository_url>
```

---

## 2. Navigate into project

```bash
cd qa-automation-challenge
```

---

## 3. Install dependencies

```bash
npm install
```

---

# Running Tests

## Open Cypress UI

```bash
npm run cy:open
```

---

## Run all tests in headless mode

```bash
npm run test
```

---

## Run E2E tests only

```bash
npm run test:e2e
```

---

## Run API tests only

```bash
npm run test:api
```

---

# Automated Scenarios

## E2E Automation

- Login
- Add products to cart
- Checkout process
- Purchase confirmation

Application tested:

https://www.saucedemo.com/

---

## API Automation

Swagger PetStore API:

https://petstore.swagger.io/

Automated endpoints:

- Create Pet
- Get Pet By ID
- Update Pet
- Find Pet By Status

---

# Reporting

Mochawesome reports are generated automatically after execution.

Reports location:

```txt
reports/mochawesome
```

---

# Screenshots and Videos

Cypress automatically generates:

- Screenshots on failure
- Execution videos

Folders:

```txt
cypress/screenshots
cypress/videos
```

---

# Design Pattern

This framework uses:

- Page Object Model (POM)
- Fixtures
- Reusable methods
- Custom commands

---

# Notes

- Test data is managed through fixtures.
- Dynamic IDs are used for API tests to avoid collisions.
- The framework is scalable and CI/CD ready.