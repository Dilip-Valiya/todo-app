const express = require("express");
const {
  createList,
  showTodos,
  singleTodo,
  updateTodo,
  deleteSingleTodo,
} = require("../controllers/todoControllers");
const router = express.Router();

router.post("/create/list", createList);
router.get("/show/todos", showTodos);
router.get("/todo/:id", singleTodo);
router.put("/update/todo/:id", updateTodo);
router.delete("/delete/todo/:id", deleteSingleTodo);

module.exports = router;
