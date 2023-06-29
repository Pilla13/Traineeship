function validation(form) {
  function remove(input) {
    const parent = input.parentNode;

    if (parent.classList.contains("error")) {
      parent.querySelectorAll(".error-label").remove();
      parent.classList.remove("error");
    }
  }

  function error(input, text) {
    const parent = input.parentNode;

    const errorText = document.createElement("p");
    errorText.classList.add("error-label");
    errorText.textContent = text;

    parent.classList.add("error");
    parent.append(errorText);
  }

  let result = true;

  const allInputs = form.querySelectorAll("input, textarea");

  for (const input of allInputs) {
    remove(input)

    if (input.dataset.required == "true") {
      if (input.value == "") {
        error(input, "Поле не заполнено!");
        result = false;
      }
    }
  }
  return result;
}

const el = document.getElementById("contact-form");
if (el) {
  el.addEventListener("submit", function (event) {
    event.preventDefault();
    if (validation(this) == true) {
      alert("Форма была отправлена.");
    }
    event.target.reset();
  });
}
