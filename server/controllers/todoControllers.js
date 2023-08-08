const db = require("../db/database.js");

//CREATE LIST
exports.createList = (req, res) => {
  const q = "INSERT INTO todos_list SET ?";

  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ error: "title is missing", data: null });
  }

  if (title.length > 50) {
    return res.status(400).json({
      error: "title is too long, max 50 character allowed",
      data: null,
    });
  }

  if (description.length > 255) {
    return res.status(400).json({
      error: "description is too long, max 255 character allowed",
      data: null,
    });
  }

  db.query(q, { title, description }, (err, result) => {
    if (err) return res.json(err);
    return res.status(201).json({ data: "todo added" });
  });
};

//SHOW TODOS
exports.showTodos = (req, res) => {
  const q = "SELECT * FROM todos_list";

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result);
  });
};

//SHOW SINGLE TODO
exports.singleTodo = (req, res) => {
  const q = `SELECT * FROM todos_list where id=${req.params.id}`;

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json(result[0]);
  });
};

//UPDATE TODO
exports.updateTodo = (req, res) => {
  const { title, description } = req.body;
  if (!title) {
    return res.status(400).json({ error: "title is missing", data: null });
  }

  if (title.length > 50) {
    return res.status(400).json({
      error: "title is too long, max 50 character allowed",
      data: null,
    });
  }

  if (description.length > 255) {
    return res.status(400).json({
      error: "description is too long, max 255 character allowed",
      data: null,
    });
  }
  const q = `UPDATE todos_list SET ? where id=${req.params.id}`;

  db.query(q, { title, description }, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json({ data: "todo updated" });
  });
};

//DELETE SINGLE TODO
exports.deleteSingleTodo = (req, res) => {
  const q = `DELETE FROM todos_list  WHERE id=${req.params.id}`;

  db.query(q, (err, result) => {
    if (err) return res.json(err);
    return res.status(200).json({ data: "todo deleted" });
  });
};
