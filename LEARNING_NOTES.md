# 🎓 CircleCI Masterclass: Learning Notes

This repository was built to demonstrate the full lifecycle of a professional CircleCI pipeline. Below are the key concepts and techniques implemented.

---

## 🏗️ 1. Pipeline Architecture
- **Jobs**: Isolated execution environments (Docker containers) defined in `jobs:`.
- **Workflows**: The orchestration layer that defines the order and logic of jobs.
- **Parallelism**: Running jobs like `lint` and `test` at the same time to save time.
- **Dependencies**: Using `requires:` to ensure a job only starts if its predecessor succeeds.

## ⚡ 2. Performance Optimization
- **Caching**: Using `save_cache` and `restore_cache` for `node_modules` to avoid re-downloading dependencies every time.
- **Workspaces**: Using `persist_to_workspace` and `attach_workspace` to share files (like code and `node_modules`) between different jobs in the same workflow.

## 🛠️ 3. Failure Handling & Debugging
- **Failed Tests**: CircleCI stops the workflow if a job fails, preventing broken code from reaching production.
- **Test Reporting**: Using `store_test_results` (JUnit format) to get a rich "Tests" tab in the UI for deep debugging.
- **Artifacts**: Using `store_artifacts` to save build outputs, screenshots, or logs for later inspection.

## 🚦 4. Release Controls
- **Branch Filtering**: Restricting the `deploy` job to only run on the `main` branch using `filters: branches: only: main`.
- **Approval Gates**: Inserting a manual checkpoint using `type: approval`. The pipeline pauses until a human clicks "Approve" in the UI.

## 📊 5. Insights & Metrics
- **Success Rate**: Tracking the percentage of passed vs. failed builds.
- **Duration Trends**: Identifying when builds are getting slower.
- **Flaky Test Detection**: Finding tests that pass/fail inconsistently without code changes.

## 🔐 6. Environment Variables (The 5 Stages)
We demonstrated the 5 sources of variables in order of precedence:
1. **Pipeline Parameters**: Dynamic values passed at trigger time (Stage 5).
2. **Context Variables**: Organization-level shared secrets (Stage 4).
3. **Project Variables**: Repository-specific secrets set in Project Settings (Stage 3).
4. **Inline Variables**: Hardcoded in `config.yml` (Stage 2).
5. **Built-in Variables**: Automatically injected by CircleCI, e.g., `CIRCLE_BRANCH` (Stage 1).

## 🛡️ 7. Advanced Security (POC)
- **Secrets Masking**: CircleCI automatically hides secrets in logs using `****`.
- **Masking Bypass**: Demonstrated (for educational purposes) how encoding (Base64/Hex) or string manipulation (`rev`/`sed`) can reveal values, highlighting the need for strict access control.
- **Project Restrictions**: Locking a Context so only specific repositories can access its secrets.
- **Group Restrictions**: Locking a Context so only members of a specific **GitHub Team** (e.g., `Security-Admins`) can trigger pipelines that use those secrets.

---

### 🚀 Created and Verified by okta-sree
