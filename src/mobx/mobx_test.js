class TodoStore {
  // todos 상태
  todos = []

  // todos에서 완료된 갯수를 가져오는 getter
  get completedTodosCount() {
    return this.todos.filter((todo) => todo.completed === true).length
  }

  // todos의 길이와 완료된 갯수를 토대로 메시지를 반환하는 메서드
  report() {
    if (this.todos.length === 0) return '<할 일 없음>'
    const nextTodo = this.todos.find((todo) => todo.completed === false)
    return (
      `다음 할 일: "${nextTodo ? nextTodo.task : '<할 일 없음>'}".` +
      `진척도: ${this.completedTodosCount}/${this.todos.length}`
    )
  }

  addTodo(task) {
    this.todos.push({
      task: task,
      completed: false,
      assignee: null,
    })
  }
}

const todoStore = new TodoStore()

console.log(todoStore.report()) //<할 일 없음>

todoStore.addTodo('몹엑스 공부하기')
console.log(todoStore.report()) //다음 할 일: "몹엑스 공부하기".진척도: 0/1
todoStore.addTodo('몹엑스 때려치기')
console.log(todoStore.report()) //다음 할 일: "몹엑스 공부하기".진척도: 0/2
todoStore.todos[0].completed = true
console.log(todoStore.report()) //다음 할 일: "몹엑스 때려치기".진척도: 1/2
