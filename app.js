let form1 = document.querySelector("form");
console.log(form1);
let inp1 = document.getElementById("inp");
let dataStore = document.getElementById("data");

form1.addEventListener("click", e => {
  e.preventDefault();
  // console.log(e);
  if (e.target.innerHTML === "add") {
    dataStore.innerHTML += ` <div>
          <p>${inp1.value}</p>,
          <button>edit</button>
          <button>delete</button>
        </div>`;
    inp1.value = "";
  } else if (e.target.innerHTML === "delete") {
    e.target.parentElement.remove();
  } else if (e.target.innerHTML == "edit") { 
    console.log(e);
    inp1.value = e.target.previousElementSibling.innerHTML;
    // inp1.nextElementSibling.innerHTML = "update";
    e.target.innerHTML = "update";
  } else if (e.target.innerHTML === "update") {
    e.target.previousElementSibling.innerHTML = inp1.value;
    // inp1.nextElementSibling.innerHTML = "add";
    e.target.innerHTML = "edit";
    inp1.value = "";
  }
});
