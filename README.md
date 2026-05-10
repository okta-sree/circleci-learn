# circleci-learn 🔵

A simple **math utility library** built to learn CircleCI CI/CD pipelines step by step.

## Project Structure

```
circleci-learn/
├── .circleci/
│   └── config.yml      ← CircleCI pipeline definition
├── src/
│   └── math.js         ← Math utility functions
├── tests/
│   └── math.test.js    ← Jest tests
├── package.json
└── .eslintrc.js
```

## CircleCI Pipeline

```
[install] ──► [lint]  ─┐
                         ├──► [deploy] (main branch only)
[install] ──► [test]  ─┘
```

| Job | What it does |
|---|---|
| `install` | Installs npm deps, caches them, saves workspace |
| `lint` | Runs ESLint on source code |
| `test` | Runs Jest tests, stores results & artifacts |
| `deploy` | Simulates deployment (main branch only) |

## Running Locally

```bash
npm install
npm test
npm run lint
```
