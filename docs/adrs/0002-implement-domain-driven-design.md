# 2. Implement Domain-Driven Design (DDD) in the Frontend

Date: 2026-10-09

## Status
Accepted

## Context
The DoofPlus Web Application has complex business rules (pharmaceutical manufacturing, QA release, audit trails). A traditional feature-based folder structure would quickly become a "big ball of mud".

## Decision
We will apply Domain-Driven Design (DDD) principles. The frontend will be divided into strict Bounded Contexts (IAM, Manufacturing, Quality, etc.). Each context will have exactly 4 layers:
- `domain`: Pure TypeScript (Entities, Value Objects). No Angular dependencies.
- `application`: State management (Stores) and Use Cases.
- `infrastructure`: API calls, Assemblers (DTO to Entity mapping).
- `presentation`: UI components and routes.

## Consequences
- High cohesion and low coupling.
- Steeper learning curve for new developers.
- Easy to extract modules into micro-frontends in the future if needed.
