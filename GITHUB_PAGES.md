# GitHub Pages setup

This site supports `https://mingsch.github.io/testreact/` while keeping the Lovable preview at its normal root address.

1. Put this project's source (including `.github/workflows/deploy-pages.yml`) on the repository's **master** branch. Lovable's Git settings control the synced branch; select **master** there if this repository is already connected. Lovable cannot link an existing repository through Git sync, so otherwise transfer the source manually or use a newly created synced repository.
2. In GitHub, open **Settings → Actions → General** and allow workflows to run. Repository or organization policies must permit the workflow's `contents: write` permission.
3. Push to **master**, or run **Deploy GitHub Pages** from the Actions tab. It builds the app and publishes only `dist/` to **gh-pages**. Existing files on that hosting branch are replaced; keep source changes on master.
4. In **Settings → Pages**, choose **Deploy from a branch**, then **gh-pages** and **/ (root)**. Save.

The workflow uses GitHub's built-in token; no personal access token is required. A successful workflow publishes the site to `https://mingsch.github.io/testreact/`.

## Local checks

```sh
npm ci
npm test
VITE_BASE_PATH=/testreact/ npm run build
npm run preview
```

Open the preview server at `/testreact/`. Normal `npm run build` keeps `/` as the base for Lovable and other root-hosted deployments. For a custom domain, change the workflow's `VITE_BASE_PATH` to `/` and configure the domain in GitHub Pages.

GitHub Pages serves static files only. It cannot process reservation requests or run server code. Unknown routes use the generated `404.html`; GitHub still returns an HTTP 404 status for those routes.