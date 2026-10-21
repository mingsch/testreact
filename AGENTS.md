# Project rules

- GitHub Pages builds use `VITE_BASE_PATH` to set Vite's base; ordinary Lovable builds retain `/` so previews remain unchanged.
- Source stays on `master`; the deployment workflow publishes only built output to `gh-pages` to keep source and hosting separate.
- Resolve public-file URLs with `publicAsset` and use Vite's base for router navigation so repository-subdirectory hosting works.