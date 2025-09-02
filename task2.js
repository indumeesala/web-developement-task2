document.getElementById("myForm").addEventListener("submit", function(e){
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();
  let valid = true;

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("msgError").textContent = "";

  if(name === ""){
    document.getElementById("nameError").textContent = "Name is required!";
    valid = false;
  }
  if(email === "" || !email.match(/^[^@]+@[^@]+\.[^@]+$/)){
    document.getElementById("emailError").textContent = "Valid email is required!";
    valid = false;
  }
  if(message === ""){
    document.getElementById("msgError").textContent = "Message cannot be empty!";
    valid = false;
  }

  if(valid){
    alert("Form submitted successfully ✅");
  }
});

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskValue = taskInput.value.trim();

  if(taskValue === "") return;

  let li = document.createElement("li");
  li.innerHTML = `${taskValue} <button onclick="removeTask(this)">X</button>`;
  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}
function removeTask(button) {
  button.parentElement.remove();
}



document.querySelector(".login-form").addEventListener("submit", function(e){
  e.preventDefault();

  let username = this.querySelector("input[type='text']").value.trim();
  let password = this.querySelector("input[type='password']").value.trim();

  if(username === "" || password === ""){
    alert("⚠ Please enter username and password!");
    return;
  }

  if(username === "indu" && password === "1234indu"){
    alert("✅ Login successful! Welcome " + username);
  } else {
    alert(" Invalid username or password!");
  }
});
