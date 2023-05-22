<div align="center">

# klei-react-img
-klei-react-img is a modern ReactJS application built with TypeScript, Vite, and TailwindCSS.
-This project is a great example of a modern web application leveraging the power of cutting-edge technologies.

#### Example application using ReactJS + [Imgur API](https://imgur.com/) + [vite bundler](https://github.com/vitejs/vite). Fluid & responsive layout.

</div>

## Features

- ReactJS in TypeScript: All the power of React with the safety and scalability of TypeScript.
- Vite (fast production bundler)
- TailwindCSS
- Lazy loading & code splitting
- Image modal
- [imgur API features](https://api.imgur.com/)
  - Search
  - Sort results
  - Explore tags
  - Item comments (in modal)

##### Mocked Data From API

If you don't want to register and use the free Imgur API, it will use mocked data/saved responses from the API. It's also useful for faster local development so you don't have to make new requests with every HMR update.

##### Google PageSpeed Scores

###### TODO: automate + add badge for live scores

## Quick start

```bash
npm install
npm run dev

```

## Build

```bash
npm run build
npm run serve

```

## Imgur API

1. [Free registration](https://api.imgur.com/oauth2/addclient)
2. Pass the client ID as an environemnt variable (can be in .env or through CLI)
   - `PUBLIC_IMGUR_CLIENT_ID=xxxxx yarn dev`

## TODO

### Tests WIP

- [x] ~70% unit test coverage
- [ ] Cypress performance & integration tests
- [ ] Accessibility tests
