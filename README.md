# DoofPlus Web Application

![Angular](https://img.shields.io/badge/Angular-22-dd0031?style=for-the-badge&logo=angular)
![Material](https://img.shields.io/badge/Material-22-ff4081?style=for-the-badge&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)

Official implementation of the DoofPlus Web Application, built from the Figma mock-ups of the project report.

It follows the course base project (`learning-center`): Angular 22, Angular Material, ngx-translate (English and Spanish) and a fake REST API with json-server. Each bounded context has its own `domain`, `application`, `infrastructure` and `presentation` layers, and the shared base classes (`BaseApi`, `BaseApiEndpoint`, `BaseAssembler`, `BaseForm`) live in `src/app/shared`.

## 🚀 Run & Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v20+ recommended)
- npm package manager

### Setup
```bash
npm install
npm run server
npm start
```
- `npm run server` starts the fake API at `http://localhost:3000/api/v1` (data in `server/db.json`). 
- `npm start` opens the app at `http://localhost:4200/`.

## 🔐 Test accounts

Every account uses the password `DoofPlus2026!` and the two-factor code `482106`.

| User | Email | Environment |
|------|-------|-------------|
| María México · QA Specialist (release privilege) | `maria.mexico@andinos.com.pe` | QA/QC |
| Alberto Valle · Production Supervisor | `alberto.valle@andinos.com.pe` | Production |
| Carlos Medina · Administrator | `carlos.medina@andinos.com.pe` | Administration |

> **Note:** Signing in to an environment that does not match the role shows the "Access not authorized" state.

## 🧩 Bounded Contexts and Routes

| Bounded context | Folder | Routes |
|-----------------|--------|--------|
| Identity & Access Management | `src/app/iam` | `/sign-in`, `/sign-in/:environment` (credentials, 2FA, not authorized), `/administration/users`, `/administration/users/invite` |
| Organizations & Profiles | `src/app/organizations` | `/register` (RUC already registered, verification), `/administration/overview`, `/<environment>/profile` |
| Subscriptions & Payments | `src/app/subscriptions` | `/administration/subscription` (declined payment, plan change review) |
| Manufacturing & Batch Management | `src/app/manufacturing` | `/production/overview`, `/production/orders`, `/production/orders/:code`, `/production/products`, `/production/batches` (batch not created), `/production/batches/:code`, `/production/raw-materials` |
| IoT Monitoring | `src/app/monitoring` | `/production/iot`, `/production/equipment`, `/production/sensors/:code`, `/production/incidents`, `/production/batches/:code/iot` |
| Quality & Compliance | `src/app/quality` | `/qa/overview`, `/qa/indicators`, `/qa/documents` (self-approval blocked), `/qa/deviations`, `/qa/capa` (root cause required), `/qa/batch-release` (release blocked), `/qa/analytical-results`, `/qa/audits`, `/qa/regulatory-reports`, `/<environment>/audit-trail`, `/<environment>/tasks` |

## 🏗️ Architecture & Folder Structure (DDD)

The project follows **Domain-Driven Design (DDD)** applied to frontend development. Every bounded context is completely isolated and strictly divided into four layers:

```text
src/app/<bounded-context>/
├── domain/           # Entities, Aggregates, and Interfaces (Business logic)
├── application/      # Stores, State Management, and Use Cases (Signals)
├── infrastructure/   # Services, Assemblers (DTO mapping), HTTP endpoints
└── presentation/     # Smart/Dumb Components, Views, and Local Routes
```

## 💡 Business Rules Implemented

- Two-factor code after the password; the environment is checked after the identity is verified.
- Separation of duties: the author of a document version cannot approve it; a CAPA owner cannot be its reviewer.
- A batch can only be created with a unique code and an approved master formula.
- Equipment that is not fit for use, or whose sensors feed another batch in progress, cannot be associated with a batch.
- An out-of-specification result requires a deviation; a deviation needs reviewed evidence before it is submitted.
- Batch release requires every readiness check and the re-entered password of a user with the QA release privilege. Every signature is recorded in the audit trail.

## 🛠️ Tech Stack & Conventions

- **Framework:** Angular 22 (Zoneless configuration with Signals).
- **UI Library:** Angular Material.
- **i18n:** `ngx-translate` for real-time localization (EN/ES).
- **Mock Backend:** `json-server` routing complex relational data.
- **Components:** Standalone components (no NgModules).
