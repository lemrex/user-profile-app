async function getUsers() {
  const res = await fetch("http://localhost:5000/api/users");
  const data = await res.json();
  document.getElementById("users").textContent = JSON.stringify(data, null, 2);
}

async function addUser() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("⚠️ Please enter both name and email");
    return;
  }

  const res = await fetch("http://localhost:5000/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email })
  });

  const data = await res.json();
  alert(data.message || "✅ User added!");

  getUsers();
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
}
