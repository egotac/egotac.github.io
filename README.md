# EgoTac project page

Standalone GitHub Pages site for **EgoTac: In-the-wild Tactile Prediction from Egocentric Vision** (NeurIPS 2026 poster).

## Preview

From this directory:

```bash
python -m http.server 8000
```

Open <http://localhost:8000>. The site is static and does not need a build step.

## Publish

The repository is `egotac/egotac.github.io`, which publishes at <https://egotac.github.io/>. Push this directory's `main` branch, then enable **Settings → Pages → Deploy from a branch → main / (root)** if Pages has not already been configured. The `.nojekyll` file keeps GitHub Pages from running Jekyll.

The website files and the paper/media assets required by the page all live in this repository. The larger research code and source materials remain outside it in the parent `egotac` folder. The **Code** and **Dataset** items in `index.html` are intentionally non-clickable release placeholders; replace their `<span>` elements with links when those resources are public.

## Content

- `index.html`, `styles.css`, `script.js`: site source
- `assets/images/`: full figures rendered from the corresponding PDFs in `../EgoTac@NIPS26/egotac-fig/`, plus video posters
- `assets/videos/`: compressed, labeled zero-shot demo clips from EgoDex, EPIC-KITCHENS, Ego4D, EgoPAT3D, and an additional everyday scene
- `assets/paper/`: local copy of the arXiv manuscript
- `assets/icons/`: arXiv and GitHub marks from [Simple Icons](https://simpleicons.org/), plus document and dataset icons
