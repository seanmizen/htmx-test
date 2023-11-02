import express from "express";
import path from "path";

const app = express();
const PORT = 8765;

// Serve htmx from node_modules -> get it via <script src="/htmx/htmx.min.js"></script>
app.use(
  "/htmx",
  express.static(path.join(__dirname, "../node_modules/htmx.org/dist"))
);

// Serve FE
app.use(express.static(path.join(__dirname, "../public")));

app.get("/some-api-endpoint", (req, res) => {
  // res.json({ message: "Hello from server!" });
  res.send(`
    <h1>Server</h1>
    <p>Hello from server!</p>
    <a href="/">back</a>
  `);
});

app.get("/blog", (_req, res) => {
  res.send(`
    <h1>Blog</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
    <a href="/">back</a>
  `);
});

// Catch-all should come last
app.get("/*", (_req, res) => {
  res.status(404);
  res.json({ message: "oh no!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Site available at http://localhost:${PORT}/`);
});
