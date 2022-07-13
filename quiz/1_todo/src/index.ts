let todoItems; // 할 일 목록 받는 변수

// api
function fetchTodoItems() {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];
  return todos;
}

// crud methods
function fetchTodos() {
  // api 호출해서 변수에 담고 다시 반환
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo) {
  // 할 일을 추가
  todoItems.push(todo);
}

function deleteTodo(index) {
  // 특정 인덱스에서 할 일 지우기
  todoItems.splice(index, 1);
}

function completeTodo(index, todo) {
  // 특정 인덱스 할 일 완료
  todo.done = true;
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo() {
  return todoItems[0];
}

function showCompleted() {
  return todoItems.filter(item => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems() {
  // addTodo() 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
}

// NOTE: 유틸 함수
function log() {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
