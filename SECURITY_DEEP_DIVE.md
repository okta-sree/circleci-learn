# 🛡️ Security Deep Dive: Context Restrictions

This document provides a detailed technical breakdown of how to secure secrets (Contexts) in CircleCI using **Project Restrictions** and **Group Restrictions**.

---

## 🛑 The "Malicious Developer" Scenario
In a default CircleCI organization, **any project** can request **any context**.
If a developer creates a new repository (`fake-project`) and adds `context: production-secrets` to their `config.yml`, they can instantly access your database passwords, API keys, and deployment tokens.

To prevent this, we implemented two layers of defense.

---

## 🏗️ Layer 1: Project Restrictions (The "WHERE" Lock)
Project restrictions ensure that a secret can only be accessed by **specific repositories**.

### How it Works:
1. When a job starts, CircleCI checks the `project_id` of the repository.
2. It looks at the Context settings to see if that `project_id` is on the **Allowed List**.
3. If a different repository (even within the same org) tries to use the context, the job fails immediately with an `Unauthorized` error.

### Use Case:
- **Separation of Environments**: You can have a `production` context that is ONLY allowed for your `main-app` repository. Your `experimental-app` repo will be blocked from ever touching production secrets.

---

## 👤 Layer 2: Group Restrictions (The "WHO" Lock)
Group restrictions (also known as Security Groups) are the strongest form of protection because they are based on **Human Identity**.

### The "Triggerer" Rule:
CircleCI does not just look at the code; it looks at the **person who pushed the code**.

1. **Member Check**: When a push occurs, CircleCI asks GitHub: *"Is the user who pushed this commit a member of the required GitHub Team?"*
2. **Access Decision**:
   - **Authorized**: If the user is in the team (e.g., `@MyOrg/Security-Admins`), the secrets are injected.
   - **Unauthorized**: If the user is NOT in the team (even if they are the repo owner!), the job fails to fetch the secrets.

### Why this is critical:
Even if your repository is hacked or someone manages to push malicious code to your `main` branch, the attacker **cannot steal the secrets** unless they also have control of a GitHub account that is part of the approved security group.

---

## 🤝 Combining the Layers (Defense in Depth)
For our POC, we implemented **both** layers on the `team-notifications` context:

1. **Allowed Project**: `circleci-learn`
2. **Allowed Group**: `Security-Admins` (GitHub Team)

### The Result:
For a build to succeed and access the secrets, it must meet **both** criteria:
- The build must be running in the `circleci-learn` repo.
- **AND** the build must have been triggered by a person in the `Security-Admins` team.

---

## 💡 Technical Prerequisites
- **GitHub Organization**: This feature is only available for repositories owned by a GitHub Organization (not personal accounts).
- **Team Sync**: CircleCI automatically mirrors your GitHub Team structure. If you create a new team in GitHub, it will appear in the CircleCI dropdown after a refresh.

---

### ✅ POC Status: VALIDATED
Verified in the `okta-sree` organization. The `env-demo` job successfully retrieved secrets because the triggerer was a member of the authorized group and the project was on the allowed list.
