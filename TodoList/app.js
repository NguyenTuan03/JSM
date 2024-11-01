// app.js
document.addEventListener("DOMContentLoaded", () => {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    const todoCount = document.getElementById("todo-count");
    const clearCompletedButton = document.getElementById("clear-completed");
    const filterButtons = document.querySelectorAll(".filter-button");

    let todos = [];
    let filter = 'all';

    // Cập nhật danh sách Todo
    function render() {
        todoList.innerHTML = "";
        const filteredTodos = todos.filter(todo => {
            if (filter === 'active') return !todo.completed;
            if (filter === 'completed') return todo.completed;
            return true;
        });

        filteredTodos.forEach(todo => {
            const todoItem = document.createElement("li");
            todoItem.className = `todo-item ${todo.completed ? "completed" : ""}`;
            todoItem.innerHTML = `
                <input type="checkbox" ${todo.completed ? "checked" : ""}>
                <label>${todo.text}</label>
            `;
            todoItem.querySelector("input").addEventListener("click", () => toggleTodo(todo.id));
            todoList.appendChild(todoItem);
        });

        updateTodoCount();
    }

    // Thêm công việc mới
    function addTodo(text) {
        todos.push({ id: Date.now(), text, completed: false });
        render();
    }

    // Chuyển đổi trạng thái hoàn thành
    function toggleTodo(id) {
        todos = todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        render();
    }

    // Xóa các công việc đã hoàn thành
    function clearCompleted() {
        todos = todos.filter(todo => !todo.completed);
        render();
    }

    // Cập nhật số lượng công việc chưa hoàn thành
    function updateTodoCount() {
        const count = todos.filter(todo => !todo.completed).length;
        todoCount.textContent = `${count} item${count !== 1 ? 's' : ''} left`;
    }

    // Thiết lập bộ lọc và cập nhật giao diện
    function setFilter(newFilter) {
        filter = newFilter;
        filterButtons.forEach(button => {
            button.classList.toggle("selected", button.dataset.filter === filter);
        });
        render();
    }

    // Sự kiện khi nhấn Enter trong ô nhập liệu
    todoInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter" && todoInput.value.trim()) {
            addTodo(todoInput.value.trim());
            todoInput.value = "";
        }
    });

    // Sự kiện khi nhấn nút "Clear completed"
    clearCompletedButton.addEventListener("click", clearCompleted);

    // Sự kiện khi nhấn các nút lọc
    filterButtons.forEach(button => {
        button.addEventListener("click", () => setFilter(button.dataset.filter));
    });

    render();
});
