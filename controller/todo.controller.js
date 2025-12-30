import Todo from "../model/todo.model.js";

/**
 * GET /api/todos
 */
export const getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createdAt: -1 });
  res.json(todos);
};

/**
 * POST /api/todos
 */
export const createTodo = async (req, res) => {
  const todo = await Todo.create({ text: req.body.text });
  res.status(201).json(todo);
};

/**
 * PUT /api/todos/:id
 */
export const updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.json(todo);
};

/**
 * DELETE /api/todos/:id
 */
export const deleteTodo = async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id);

  if (!todo) {
    return res.status(404).json({ message: "Todo not found" });
  }

  res.status(204).send();
};
