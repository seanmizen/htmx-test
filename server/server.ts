import express from "express";
import path from "path";

const app = express();
const PORT = 8765;

app.get("/some-api-endpoint", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Serve htmx from node_modules -> get it via <script src="/htmx/htmx.min.js"></script>
app.use(
  "/htmx",
  express.static(path.join(__dirname, "../node_modules/htmx.org/dist"))
);

// serve FE
app.use(express.static(path.join(__dirname, "../public")));
console.log(`FE available at http://localhost:${PORT}/`);
