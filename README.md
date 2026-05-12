# Chris Varghese Quarto Website

Small Quarto academic website with:

- `index.qmd` — home page with front illustration and brief introduction
- `research.qmd` — research themes for organizing publications
- `_quarto.yml` — site navigation, including an external Google Scholar tab
- `styles.css` — white academic styling with the blue motif `#4273b5`
- `assets/cover_3.png` — homepage cover image

## Local preview in Positron

Open this folder in Positron, then run:

```bash
quarto preview
```

To render the static site:

```bash
quarto render
```

The rendered site will be written to `_site/`.

## Change the external tab

Edit `_quarto.yml`:

```yaml
- text: "Google Scholar"
  href: "https://scholar.google.com/citations?user=rsVXjrMAAAAJ&hl=en"
```

Replace the label and URL with whatever destination you want.

## Deploy on GitHub Pages

1. Create a GitHub repository.
2. Push this folder to the repository:

```bash
git init
git add .
git commit -m "Initial Quarto website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. The included workflow at `.github/workflows/publish.yml` will render and publish the Quarto site.

For a personal homepage, name the repository `YOUR-USERNAME.github.io`.
