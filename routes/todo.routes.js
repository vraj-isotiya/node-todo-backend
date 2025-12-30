import { Router } from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controller/todo.controller.js";
import {
  createTodoSchema,
  updateTodoSchema,
} from "../utils/todo.validation.js";
import { validate } from "../middleware/validate.middleware.js";

const router = Router();

router.get("/", getTodos);
router.post("/", validate(createTodoSchema), createTodo);
router.put("/:id", validate(updateTodoSchema), updateTodo);
router.delete("/:id", deleteTodo);

export default router;
