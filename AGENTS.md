# Project rules

- GitHub Pages builds set Vite's base via `VITE_BASE_PATH`; the production custom domain (www.mingswaterloo.com) is served at the root, so the deploy workflow builds with `/` and writes the CNAME file — a repository-subdirectory base blanks the page on the domain.
- Source stays on `master`; the deployment workflow publishes only built output to `gh-pages` to keep source and hosting separate.
- Resolve public-file URLs with `publicAsset` and use Vite's base for router navigation so non-root hosting keeps working.
