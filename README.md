# Viikko 3 – Express REST API

Week 3 Express REST API assignments. The project uses Node.js ES modules and
Express to serve a JSON API and static files from the `public` directory.

## Run locally

```bash
npm install
npm run dev
```

The server listens on port 3000 by default. Set `PORT` in a `.env` file to use
a different port. For production mode, run `npm start`.

Run `npm run lint` to check JavaScript with ESLint and `npm run format` to format
`app.js` with Prettier.

## Endpoints

- `GET /api/v1/cats` returns a cat object as JSON.
- `GET /public/söpökisaa.jpg` serves the sample image from `public`.
- `GET /` serves the welcome page.
