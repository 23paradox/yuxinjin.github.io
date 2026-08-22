# Academic homepage

Structural Astro foundation for a long-term academic homepage focused on
Stochastic Control and Games with Imperfect Information.

## Local commands

```sh
pnpm install
pnpm dev
pnpm check
pnpm build
```

## GitHub Pages configuration

The build is static and the committed workflow at
`.github/workflows/deploy.yml` deploys pushes to `main` through the official
Astro GitHub Pages action. It derives the GitHub Pages owner and repository
base path from GitHub Actions context; no username, repository, or custom domain
is hard-coded in the project.

For local builds, set the values after creating the GitHub repository:

- User site repository `<github-username>.github.io`:
  `SITE_URL=https://<github-username>.github.io` and `BASE_PATH=/`.
- Project repository such as `academic-homepage`:
  `SITE_URL=https://<github-username>.github.io` and
  `BASE_PATH=/academic-homepage`.

### Human deployment steps

After the repository is created under your own GitHub account:

1. Authenticate Git locally with your normal GitHub CLI or credential-manager
   workflow.
2. Add the repository as `origin`, replacing the placeholders with your own
   values:

   ```sh
   git remote add origin https://github.com/<github-username>/<repository>.git
   ```

3. Push the reviewed branch and version tag:

   ```sh
   git push -u origin main
   git push origin v1.0.0
   ```

4. In the repository, open **Settings → Pages** and select **GitHub Actions**
   as the publishing source.
5. Verify the first Actions deployment, then open the published URL and smoke
   test Home, Research, Publications, About, navigation, external links, and
   the photography carousel.

Do not add `public/cv.pdf` until the verified public CV is supplied.
