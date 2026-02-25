# 🛠️ Contributing to the BAU Portal Overhaul

Welcome to the team! We are building a modern, client-side replacement for the Al-Balqa Applied University web portal. To keep our codebase clean, our workflow efficient, and our team in sync, please follow the guidelines below when contributing.

---

## 🏗️ Architecture Reminder: The "Full Hijack"
Remember that we are completely replacing the page's DOM using Tampermonkey.
* **No Relative Paths:** When adding images, fonts, or external assets, you **must** use absolute URLs pointing to the `raw.githubusercontent.com` version of the file in our `main` branch. 
* **Self-Contained Modules:** Each page (Login, Dashboard, Registration) has its own HTML and CSS files in the `/pages/` directory. Do not mix logic between pages.
* **The Router:** If you add a completely new page, you must update the routing logic in `src/main.user.js` to trigger your new HTML string on the correct BAU URL.

---

## 🌿 Branching Strategy
Never push directly to the `main` branch. All work should be done on a dedicated feature branch.

1. **Pull the latest changes:** `git pull origin main`
2. **Create a new branch:** Use a descriptive name based on what you are working on.
   * `feature/login-redesign` (for new pages or features)
   * `fix/registration-table-bug` (for fixing issues)
   * `style/dashboard-colors` (for CSS changes)

---

## 📝 Commit Message Rules
To keep our commit history readable and professional, we follow the **Conventional Commits** standard. Every commit message must start with a specific tag:

* `feat:` A new feature or a completely new page redesign (e.g., `feat: added custom HTML for student dashboard`).
* `fix:` A bug fix (e.g., `fix: corrected absolute URL path for BAU logo`).
* `style:` Formatting, missing semi-colons, or CSS tweaks that do not affect the JavaScript logic (e.g., `style: updated primary button color`).
* `refactor:` Rewriting code without changing its external behavior.
* `docs:` Updates to the `README.md` or this `CONTRIBUTING.md` file.

**Example of a good commit:**
`git commit -m "feat: built new HTML structure for the registration portal"`

---

## 🧪 How to Test Locally Before Committing
Because we are injecting code into a live website, you need to test your changes on the actual BAU portal before opening a Pull Request.

1. Open your local Tampermonkey dashboard.
2. Edit the `main.user.js` script.
3. Instead of copy-pasting your code every time, enable **"Allow access to file URLs"** in your browser's extension settings for Tampermonkey.
4. Temporarily point the script's `@require` or HTML variables to your local `file:///C:/path/to/your/project/...` while testing.
5. Go to `online.bau.edu.jo` and verify your new UI loads correctly and doesn't break any core university links.

---

## 🚀 Pull Request (PR) Process
Once your feature is complete and tested:
1. Push your branch to GitHub: `git push origin feature/your-branch-name`.
2. Open a Pull Request against the `main` branch.
3. In the PR description, explain exactly what page you changed and include **Before and After screenshots**.
4. Request a review from at least one other team member.
5. Once approved, squash and merge your code into `main`.