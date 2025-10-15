import jsonServer from "json-server";

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);

// health check
app.get("/health", (req, res) => res.json({ ok: true }));

// mount routes (blogs, users, etc.)
app.use(router);

// IMPORTANT for Vercel: export the Express app (no app.listen)
export default app;
