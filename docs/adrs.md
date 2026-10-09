# Architecture Decision Records (ADRs)

## 1. Use Zoneless Angular with Signals
**Date:** 2026-10-09
**Status:** Accepted

### Context
Angular 18+ introduced zoneless change detection using Signals. We need a performant way to manage state in the frontend without relying on zone.js.

### Decision
We will completely drop zone.js and use a fully Zoneless architecture. State management will be handled natively via Angular Signals in our Application layer (Stores).

---

## 2. Implement Domain-Driven Design (DDD)
**Date:** 2026-10-09
**Status:** Accepted

### Context
The DoofPlus Web Application has complex business rules. A traditional feature-based folder structure would quickly become difficult to maintain.

### Decision
We will apply Domain-Driven Design (DDD) principles. The frontend will be divided into strict Bounded Contexts. Each context will have exactly 4 layers: domain, application, infrastructure, and presentation.
