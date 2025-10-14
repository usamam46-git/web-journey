import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors({ origin: "*" }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Usama" },
    { id: 5, name: "Ali" },
    { id: 6, name: "Sana" },
    { id: 7, name: "Mubeen" },
    { id: 8, name: "Sara" },
    { id: 9, name: "Tariq" },
    { id: 10, name: "Zara" },
  ];
  res.send(users);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
