const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const db = require("./db/connectDB");
const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/menu-items", (req, res) => {
  const query = "SELECT * FROM menu_items";

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({ error: "Failed to fetch menu items" });
      return;
    }
    res.json(results);
  });
});
app.get("/api/menu-items/:id", (req, res) => {
  const { id } = req.params;
  const query = "SELECT * FROM menu_items WHERE id = ?";

  db.query(query, id, (error, results) => {
    if (error) {
      console.error("Error fetching menu item:", error);
      res.status(500).json({ error: "Failed to fetch menu item" });
      return;
    }

    if (results.length === 0) {
      res.status(404).json({ error: "Menu item not found" });
      return;
    }

    res.json(results);
  });
});
app.post("/api/add-to-cart", async (req, res) => {
  const { itemId, name, image, price } = req.body;
  console.log("Received data:", { itemId, name, image, price });

  const insertQuery =
    "INSERT INTO cart (item_id, name, image, price) VALUES (?, ?, ?, ?)";

  try {
    const [result] = await db.query(insertQuery, [itemId, name, image, price]);
    console.log("Insert result:", result);
    res.status(200).json({
      message: "Item added to cart successfully",
      insertId: result.insertId,
    });
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res
      .status(500)
      .json({ error: "Failed to add item to cart", details: error.message });
  }
});

app.get("/api/add-to-cart", async (req, res) => {
  const query = "SELECT * FROM cart";

  db.query(query, (error, results) => {
    if (error) {
      console.error("Error fetching menu items:", error);
      res.status(500).json({ error: "Failed to fetch menu items" });
      return;
    }
    res.json(results);
  });
});
app.delete("/api/cart/:itemId", async (req, res) => {
  const itemId = req.params.itemId;
  const query = "DELETE FROM cart WHERE id = ?";

  db.query(query, [itemId], (error, results) => {
    if (error) {
      console.error("Error deleting item:", error);
      res.status(500).json({ error: "Error deleting item" });
    } else {
      res.json({ message: "Item deleted successfully" });
    }
  });
});

app.listen(port, () => {
  console.log("Server is running on port", port);
});
