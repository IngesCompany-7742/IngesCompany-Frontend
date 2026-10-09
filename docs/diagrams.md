# Architecture Diagrams

This document contains the structural diagrams for the DoofPlus platform.

## 1. Context Diagram (C4 - Level 1)

```mermaid
C4Context
  title System Context diagram for DoofPlus

  Person(qa, "QA/QC Specialist", "Releases batches, reviews deviations, and manages CAPAs.")
  Person(prod, "Production Supervisor", "Manages production orders and monitors IoT alerts.")
  Person(admin, "Administrator", "Manages users, subscriptions, and billing.")

  System(doofplus, "DoofPlus Web Application", "Allows pharmaceutical labs to manage quality, manufacturing, and compliance digitally.")

  Rel(qa, doofplus, "Reviews and signs documents in")
  Rel(prod, doofplus, "Monitors manufacturing in")
  Rel(admin, doofplus, "Configures environments in")
```

## 2. Container Diagram (C4 - Level 2)

```mermaid
C4Container
  title Container diagram for DoofPlus

  Person(user, "Lab Employee", "Uses the platform according to their role.")

  System_Boundary(c1, "DoofPlus System") {
    Container(spa, "Single-Page Application", "Angular 22, TypeScript", "Provides the user interface for all workflows. Zoneless architecture.")
    Container(mock_api, "Mock API", "json-server, Node.js", "Provides a fake REST API until the real microservices are ready.")
  }

  Rel(user, spa, "Visits and interacts with", "HTTPS")
  Rel(spa, mock_api, "Makes API calls to", "JSON/HTTP")
```

## 3. Bounded Context Map (DDD)

```mermaid
graph TD
    subgraph Core Domain
        MFG[Manufacturing & Batch Management]
        QA[Quality & Compliance]
    end

    subgraph Generic Subdomains
        IAM[Identity & Access Management]
        ORG[Organizations & Profiles]
        SUB[Subscriptions & Payments]
        IOT[IoT Monitoring]
    end

    MFG -->|Requires Auth| IAM
    QA -->|Requires Auth| IAM
    QA -->|Validates| MFG
    IOT -->|Feeds Data| MFG
    ORG -->|Manages| SUB
```


## 4. Class Diagram (Domain Model)

```mermaid
classDiagram
    direction TB

    class UserProfile {
        +String id
        +String email
        +String role
        +String environment
        +authenticate()
    }

    class Batch {
        +String code
        +String status
        +Date manufacturingDate
        +release()
    }

    class MasterFormula {
        +String id
        +String name
        +String version
        +boolean isApproved
    }

    class Deviation {
        +String id
        +String title
        +String rootCause
        +String status
        +submitEvidence()
    }

    class CapaPlan {
        +String id
        +String description
        +String status
        +approve()
    }

    class QualityDocument {
        +String id
        +String title
        +String authorId
        +String status
        +createVersion()
    }

    Batch "*" --> "1" MasterFormula : follows
    Deviation "*" --> "1" Batch : affects
    CapaPlan "1" --> "1" Deviation : resolves
    QualityDocument "*" --> "1" UserProfile : authored by
    Batch "*" --> "1" UserProfile : released by (QA)
```
