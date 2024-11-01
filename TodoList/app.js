// app.js
import { getState, dispatch, subscribe } from './store.js';

// Các hàm cập nhật giao diện
function renderTodos() {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';

  const { todos, filter } = getState();
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  filteredTodos.forEach(todo => {
    const todoItem = document.createElement('li');
    todoItem.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    todoItem.innerHTML = `
      <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
      <span>${todo.text}</span>
    `;
    todoList.appendChild(todoItem);
  });

  document.getElementById('todo-count').textContent = `${todos.filter(todo => !todo.completed).length} items left`;
}

function renderFilters() {
  const { filter } = getState();
  document.querySelectorAll('.filter-button').forEach(button => {
    button.classList.toggle('selected', button.getAttribute('data-filter') === filter);
  });
}

// Sự kiện và cập nhật store
document.getElementById('todo-input').addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    const text = event.target.value.trim();
    if (text) {
      dispatch({ type: 'ADD_TODO', payload: text });
      event.target.value = '';
    }
  }
});

document.getElementById('todo-list').addEventListener('change', event => {
  if (event.target.matches('input[type="checkbox"]')) {
    const id = Number(event.target.getAttribute('data-id'));
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  }
});

document.querySelector('.filters').addEventListener('click', event => {
  if (event.target.matches('.filter-button')) {
    const filter = event.target.getAttribute('data-filter');
    dispatch({ type: 'SET_FILTER', payload: filter });
  }
});

document.getElementById('clear-completed').addEventListener('click', () => {
  dispatch({ type: 'CLEAR_COMPLETED' });
});

// Cập nhật giao diện mỗi khi store thay đổi
subscribe(renderTodos);
subscribe(renderFilters);

// Khởi chạy ứng dụng
renderTodos();
renderFilters();
