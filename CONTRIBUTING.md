# Contributing to IngesCompany-Frontend

First off, thanks for taking the time to contribute!

## Development Process
1. Use the develop branch as the base for your feature branches.
2. Follow Domain-Driven Design (DDD) principles: create domain, pplication, infrastructure, and presentation layers for each new Bounded Context.
3. Verify your code with 
pm run build and ensure the tests pass before committing.

## Commit Guidelines
We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. 
Please ensure your commit messages follow this format:
- eat(quality): add batch release view
- ix(iam): resolve login token issue
- docs(readme): update setup instructions

Do not use fast-forward merges when merging to develop.
