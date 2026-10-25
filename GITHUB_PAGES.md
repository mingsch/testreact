# GitHub Pages setup

This site is served from the custom domain `https://www.mingswaterloo.com` while keeping the Lovable preview at its normal root address.

1. Put this project's source (including `.github/workflows/deploy-pages.yml`) on the repository's **master** branch. Lovable's Git settings control the synced branch; select **master** there if this repository is already connected. Lovable cannot link an existing repository through Git sync, so otherwise transfer the source manually or use a newly created synced repository.
2. In GitHub, open **Settings → Actions → General** and allow workflows to run. Repository or organization policies must permit the workflow's `contents: write` permission.
3. Push to **master**, or run **Deploy GitHub Pages** from the Actions tab. It builds the app and publishes only `dist/` to **gh-pages**. Existing files on that hosting branch are replaced; keep source changes on master.
4. In **Settings → Pages**, choose **Deploy from a branch**, then **gh-pages** and **/ (root)**. Save.
5. In **Settings → Pages → Custom domain**, enter `www.mingswaterloo.com` and save. The workflow writes the matching `CNAME` file on every deploy, so the domain stays configured. DNS for `www` needs a CNAME record pointing at `mingsch.github.io`; the apex domain `mingswaterloo.com` needs the GitHub Pages A records and is redirected to `www` by GitHub.

The workflow uses GitHub's built-in token; no personal access token is required. A successful workflow publishes the site to `https://www.mingswaterloo.com` (and `https://mingsch.github.io/testreact/` redirects there).

## Why the base path is `/`

The custom domain serves the site at the domain root, so the workflow builds with `VITE_BASE_PATH=/`. Building with the repository-subdirectory base (`/testreact/`) makes every script and stylesheet 404 on the custom domain, which renders as a blank page. The `homepage` field in `package.json` is ignored by Vite and has no effect on the build.

## Local checks

```sh
npm ci
npm test
npm run build
npm run preview
```

Normal `npm run build` uses `/` as the base, matching both the custom domain and the Lovable preview. To test a repository-subdirectory build, run `VITE_BASE_PATH=/testreact/ npm run build` and open the preview server at `/testreact/`.

GitHub Pages serves static files only. It cannot process reservation requests or run server code. Unknown routes use the generated `404.html`; GitHub still returns an HTTP 404 status for those routes.
