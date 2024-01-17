// export function Todos() {       // easy syntax
//   return (
//     <div>
//       <h1>Go to gym</h1>
//       <h2>Go to gym from 7-9</h2>
//       <button>Maek as completed</button>
//     </div>
//   );
// }

export function Todos({ todos }) {
  return (
    <div>
      {todos.map(function (todo) {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>
              {todo.completed == true ? "Completed" : "Mark as completed"}
            </button>
          </div>
        );
      })}
    </div>
  );
}
