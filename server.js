// server.js  (CommonJS)
const jsonServer = require("json-server");

const app = jsonServer.create();
const router = jsonServer.router("db.json"); // must exist at repo root
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);

// health check
app.get("/health", (req, res) => res.json({ ok: true }));

// mount all routes from db.json (e.g., /blogs)
app.use(router);

// export the app for Vercel serverless
module.exports = app;
