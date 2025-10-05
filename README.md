Here’s a complete `README.md` you can paste in your repo.

````markdown
# Nithin – Portfolio

Live: https://yegnanithin.com  
Repo: https://github.com/nithin0927/portfolio-website

Personal site built with React, Vite, Tailwind, Framer Motion, and a bit of Three.js.  
Design inspired by Shaquille Ndunda’s portfolio website.

---

## Credits

- Idea and layout inspired by **Shaquille Ndunda**  
  - GitHub: https://github.com/shaqdeff  
  - Original template: https://github.com/shaqdeff/Portfolio-Template

---

## Screens

- Home
- About
- Experience
- Projects
- Contact (EmailJS)

---

## Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- Three.js / @react-three/fiber (light use)

---

## Requirements

- Node 18+ (Node 20 works fine)
- npm 9+

---

## Quick start

```bash
# install deps
npm install

# start dev server
npm run dev
# open http://localhost:5173
````

Build and preview:

```bash
npm run build
npm run preview
```

---

## Project structure

```
public/
  _redirects
  Resume_YegnaNithin.pdf
src/
  assets/
  components/
  constants/
  hoc/
  utils/
  App.jsx
  main.jsx
index.html
tailwind.config.cjs
postcss.config.js
vite.config.js
```

---

## What to edit first

* `src/constants/index.js` – text, links, social, projects
* `public/Resume_YegnaNithin.pdf` – your resume (case matters)
* `src/components/*` – section content
* `tailwind.config.cjs` – Tailwind config
* Site meta in `index.html` (title, description, og tags)

---

## Environment variables (EmailJS)

Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Use in code:

```js
const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

Do **not** commit `.env`. In production, set the same keys in your host.

---

## Deploy (Netlify)

* Build command: `npm run build`
* Publish directory: `dist`
* Environment: add the three `VITE_...` keys if you use EmailJS

SPA and HTTPS redirects (file lives at `public/_redirects`):

```
/*  /index.html  200
http://*  https://yegnanithin.com/:splat  301!
```

Custom domain:

* Primary: `yegnanithin.com`
* `www` → redirect to primary
* HTTPS on, Force HTTPS on

---

## Deploy (Vercel) — optional

* Framework preset: **Vite**
* Build: `npm run build`
* Output: `dist`
* Set the same env vars if using EmailJS

---

## Update and publish (cheat sheet)

```bash
git status                 # see changes
npm run dev                # test locally
git add .
git commit -m "feat: update section text"
git push                   # Netlify auto-deploys main
```

If push is rejected because remote changed:

```bash
git pull --rebase
git push
```

Force a clean Netlify build if needed:

* Netlify → Deploys → Trigger deploy → Clear cache and deploy site

---

## Common fixes

* **PDF 404 or “failed to load”**
  Put the file in `public/` and link with a normal `<a href="/Resume_YegnaNithin.pdf">`.
  Case must match. Do not use React Router `<Link>` for files.

* **Styles missing**
  Check `tailwind.config.cjs`:

  ```js
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"]
  ```

* **Env not found**
  Vite only exposes vars that start with `VITE_`. Also add them in Netlify.

* **Do not commit build output**
  Keep `dist/` and `.env` in `.gitignore`.

Example `.gitignore` lines:

```
node_modules/
dist/
.env
*.log
```

---

## License

* My changes: MIT
* Original template by **Shaquille Ndunda**: MIT
  See: [https://github.com/shaqdeff/Portfolio-Template/blob/main/MIT.md](https://github.com/shaqdeff/Portfolio-Template/blob/main/MIT.md)

````

If you want this committed for you, run:

```bash
# from repo root
printf "%s\n" "<paste the markdown above here without the backticks>" > README.md
git add README.md
git commit -m "docs: full README with credits"
git push
````
