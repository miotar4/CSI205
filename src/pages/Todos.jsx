import { useEffect, useRef, useState } from "react";
import { fetchTodos } from "../data/todos";
import { Form, Table, Badge, Button, Modal } from "react-bootstrap";

const Todos = () => {
  const [todosRaw, setTodosRaw] = useState([]);
  const [todos, setTodos] = useState([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [numPages, setNumPages] = useState(1);
  const [curPage, setCurPage] = useState(1);

  // -------- Handle Modal --------
  const [show, setShow] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newCompleted, setNewCompleted] = useState(false);
  const newTitleRef = useRef();
  const newIdRef = useRef();

  const handleClose = () => {
    setShow(false);
    setNewTitle("");
    setNewCompleted(false);
  };
  const handleShow = () => setShow(true);

  // ------- โหลดข้อมูลเริ่มต้น -------
  useEffect(() => {
    const data = fetchTodos();
    setTodosRaw(data);
  }, []);

  // ------- อัปเดต todos -------
  useEffect(() => {
    if (onlyWaiting) {
      setTodos(todosRaw.filter((t) => !t.completed));
    } else {
      setTodos(todosRaw);
    }
  }, [onlyWaiting, todosRaw]);

  // ------- จำนวนหน้า -------
  useEffect(() => {
    setNumPages(Math.ceil(todos.length / itemPerPage));
  }, [todos, itemPerPage]);

  // -------- ตรวจสอบหน้า --------
  useEffect(() => {
    if (curPage > numPages) setCurPage(numPages);
    if (curPage < 1) setCurPage(1);
  }, [numPages]);

  // ------- status ------
  const toggleStatus = (id) => {
    const updated = todosRaw.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodosRaw(updated);
  };

  // ------- delete -------
  const deleteTodo = (id) => {
    const updated = todosRaw.filter((t) => t.id !== id);
    setTodosRaw(updated);
  };

  // ------- add --------
  const saveClicked = () => {
    if (!newTitle.trim()) return;

    const newId = todosRaw.length ? todosRaw[todosRaw.length - 1].id + 1 : 1;

    const newTodo = {
      id: newId,
      title: newTitle.trim(),
      completed: newCompleted,
    };

    setTodosRaw([...todosRaw, newTodo]);
    setNewTitle("");
    handleClose();
  };

  // ------- Pagination --------
  const startIndex = (curPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;
  const currentTodos = todos.slice(startIndex, endIndex);

  // ------ สีปุ่ม ------
  const btnStyle = {
    backgroundColor: "#b388ff",
    border: "none",
    color: "white",
    width: "90px",
    height: "38px",
    borderRadius: "8px",
    fontWeight: "500",
    margin: "0 4px",
  };

  return (
    <>
      {/* filter */}
      <Form>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-2">
            <Form.Check
              type="switch"
              id="custom-switch"
              label="Show only"
              checked={onlyWaiting}
              onChange={(e) => setOnlyWaiting(e.target.checked)}
            />
            <Button
              className="d-flex align-items-center"
              style={{
                fontWeight: "500",
                borderRadius: "8px",
                cursor: "default",
                backgroundColor: "#ffc107",
                color: "#000",
                border: "none",
              }}
            >
              waiting&nbsp;
              <i className="bi bi-clock"></i>
            </Button>
          </div>

          <Form.Select
            aria-label="Select items per page"
            className="w-25"
            onChange={(e) => setItemPerPage(Number(e.target.value))}
            value={itemPerPage}
          >
            <option value={5}>5 items per page</option>
            <option value={10}>10 items per page</option>
            <option value={50}>50 items per page</option>
            <option value={100}>100 items per page</option>
          </Form.Select>
        </div>
      </Form>

      {/* Table */}
      <div className="mt-3">
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th className="text-center" style={{ width: "3rem" }}>
                ID
              </th>
              <th className="text-center">Title</th>
              <th className="text-end" style={{ width: "12rem" }}>
                Completed
                <Button
                  variant="primary"
                  size="sm"
                  className="ms-2"
                  style={{
                    borderRadius: "50%",
                    fontWeight: "bold",
                    width: "32px",
                    height: "32px",
                    padding: 0,
                  }}
                  onClick={handleShow}
                >
                  +
                </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentTodos.map((todo) => (
              <tr key={todo.id}>
                <td className="text-center">
                  <Badge bg="secondary">{todo.id}</Badge>
                </td>
                <td>{todo.title}</td>
                <td className="text-end">
                  {todo.completed ? (
                    <Button
                      variant="success"
                      className="fs-6"
                      style={{ width: "110px" }}
                      onClick={() => toggleStatus(todo.id)}
                    >
                      done <i className="bi bi-check"></i>
                    </Button>
                  ) : (
                    <Button
                      variant="warning"
                      className="fs-6 text-dark"
                      style={{ width: "110px" }}
                      onClick={() => toggleStatus(todo.id)}
                    >
                      waiting&nbsp;<i className="bi bi-clock"></i>
                    </Button>
                  )}
                  <Button
                    variant="danger"
                    className="ms-2"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="text-center">
        <button
          style={btnStyle}
          onClick={() => setCurPage(1)}
          disabled={curPage === 1}
        >
          First
        </button>
        <button
          style={btnStyle}
          onClick={() => curPage > 1 && setCurPage(curPage - 1)}
          disabled={curPage === 1}
        >
          Previous
        </button>
        <span>
          {curPage} / {numPages}
        </span>
        <button
          style={btnStyle}
          onClick={() => curPage < numPages && setCurPage(curPage + 1)}
          disabled={curPage === numPages}
        >
          Next
        </button>
        <button
          style={btnStyle}
          onClick={() => setCurPage(numPages)}
          disabled={curPage === numPages}
        >
          Last
        </button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="todoId">
              <Form.Label>ID:</Form.Label>
              <Form.Control
                value={
                  todosRaw.reduce((prev, todo) => (todo.id > prev ? todo.id : prev), 0) + 1
                }
                disabled
                ref={newIdRef}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="todoTitle">
              <Form.Label>Title:</Form.Label>
              <Form.Control
                placeholder="New todo here!"
                autoFocus
                ref={newTitleRef}
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveClicked}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Todos;
