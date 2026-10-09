# 1. Use Zoneless Angular with Signals

Date: 2026-10-09

## Status
Accepted

## Context
Angular 18+ introduced zoneless change detection using Signals. We need a performant way to manage state in the frontend without relying on `zone.js`, which historically adds overhead and complex debugging traces.

## Decision
We will completely drop `zone.js` and use a fully Zoneless architecture. State management will be handled natively via Angular Signals (`signal`, `computed`, `effect`) in our Application layer (Stores).

## Consequences
- Better runtime performance and lower bundle size.
- Developers must explicitly call `ChangeDetectorRef.detectChanges()` or use Signals when dealing with RxJS streams or asynchronous events that fall outside the Angular reactive context.
