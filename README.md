## Matt Wellman React & React-Native Developer

- site can be found at:
https://mattwellman.info

## Site Purpose!

  - Although I have held many significant leadership roles in past this site is a presentation of my overall development biography. The many steps along my career path which led me into development. 


### Tech Stack

My bio uses a number of open source libraries:

* [ReactJS] - HTML enhanced for web apps!
* [Vite] - Build tool and dev server
* [React-Helmet-Async] - Header Meta tag injector for spa.
* [GSAP] - Animation
* [React Router] - Router
* [Font Awesome Icon] - icons for presentation


### Requirements

Node 22 (see `.nvmrc`).

```sh
$ nvm use
```

### Installation

Clone Repo

```sh
$ cd Portfolio
$ npm install
$ npm run dev
```

### Scripts

| script | what it does |
| --- | --- |
| `npm run dev` | start the Vite dev server on http://localhost:3000 |
| `npm run build` | production build into `dist/` |
| `npm run preview` | serve the built `dist/` locally |

### Deployment

Pushes to the default branch trigger a Netlify build. See `netlify.toml` — it pins Node 22
and publishes `dist/`.

License
----
This codebase is published for reference and review. All rights reserved — please don't fork,
copy, or reuse it without permission.