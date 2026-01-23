const container = document.getElementById("data");

async function fetchTodos() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    const cards =data.slice(0, 20).map(todo => {
      const statusClass = todo.completed ? "completed" : "pending";
      const statusText = todo.completed ? "Completed" : "Pending";

      return `
        <div class="card ${statusClass}">
          <h3>${todo.title}</h3>
          <p class="status">Status: ${statusText}</p>
        </div>
      `;
    });

    container.innerHTML = cards.join("");
  } catch (error) {
    container.innerHTML = "<p>Error loading todos</p>";
    console.error(error);
  }
}

fetchTodos();
