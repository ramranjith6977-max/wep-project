function addProduct() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("price").value;

  let productDiv = document.createElement("div");
  productDiv.className = "card";
  productDiv.innerText = name + " - ₹" + price;

  document.getElementById("productList").appendChild(productDiv);
}
function login() {
  let savedUser = JSON.parse(localStorage.getItem("user"));
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  if (savedUser && savedUser.email === email && savedUser.password === password) {
    localStorage.setItem("loggedIn", "true"); // session flag
    alert("Login Successful!");
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid Credentials");
  }
}

function postMessage() {
  let text = document.getElementById("post").value;

  let postDiv = document.createElement("div");
  postDiv.className = "card";
  postDiv.innerText = text;

  document.getElementById("posts").appendChild(postDiv);
}
function saveProfile() {
  let profile = {
    businessName: document.getElementById("businessName").value,
    category: document.getElementById("category").value,
    description: document.getElementById("description").value
  };

  localStorage.setItem("profile", JSON.stringify(profile));
  document.getElementById("status").innerText = "Profile Saved Successfully!";
}
function viewUsers() {
  let user = JSON.parse(localStorage.getItem("user"));
  document.getElementById("adminData").innerHTML =
    "<div class='card'>User: " + user.name + " (" + user.email + ")</div>";
}

function viewProducts() {
  let products = document.getElementById("productList");
  document.getElementById("adminData").innerHTML =
    "<div class='card'>Products are managed by entrepreneurs</div>";
}
function requestMentor(name) {
  localStorage.setItem("mentorRequest", name);
  alert("Mentorship request sent to " + name);
}
function addProduct() {
  let name = document.getElementById("productName").value;
  let price = document.getElementById("price").value;
  let desc = document.getElementById("productDesc").value;

  let product = document.createElement("div");
  product.className = "card";
  product.innerHTML = "<b>" + name + "</b><br>₹" + price + "<br>" + desc;

  document.getElementById("productList").appendChild(product);
}
function logout() {
  localStorage.removeItem("loggedIn"); // destroy session
  alert("Logged out successfully");
  window.location.href = "login.html";
}

let logoutTimer;

function resetTimer() {
  clearTimeout(logoutTimer);
  logoutTimer = setTimeout(() => {
    alert("Session expired. Please login again.");
    logout();
  }, 300000); // 5 minutes
}

document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
