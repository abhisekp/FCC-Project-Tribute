# FCC-Project-Tribute

Static freeCodeCamp project. Open `index.html` through a static HTTP server.
Run `node tools/check-static.cjs` to verify local asset references.

## Deployment repair

The previous custom domain (`fcc-project-tribute.app.abhisekp.com`) has no usable DNS record.
This repair removes the stale CNAME and prepares deployment at:
https://abhisekp.github.io/FCC-Project-Tribute/

After production approval, clear the custom domain in Settings → Pages, select **GitHub Actions** as the publishing source, merge the repair, and run the GitHub Pages workflow on `main`.
The workflow validates local assets on pull requests, stages only `index.html` and `styles.css`, and deploys only from `main`.
Verify the page and stylesheet at the published URL after activation.

To restore the custom domain later, first provision its DNS CNAME pointing to `abhisekp.github.io`, verify it in GitHub Pages, then restore the CNAME file and HTTPS setting.
