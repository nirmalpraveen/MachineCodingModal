import "./styles.css";

const root = document.getElementById("app");

const closeModal = () => {
  const modal = document.getElementById("modal");
  modal.parentNode.removeChild(modal);
  root.appendChild(button);
};

const openModal = () => {
  const openModalButton = document.getElementById("openModalButton");
  openModalButton.parentNode.removeChild(openModalButton);
  const modal = document.createElement("div");
  modal.setAttribute("id", "modal");
  modal.setAttribute(
    "style",
    "position: absolute; top: 0;bottom: 0;left: 0;right: 0;margin: auto;height: 320px;width: 500px;border: 1px solid black"
  );
  const button = document.createElement("button");
  button.setAttribute("style", "width: 120px;height:60px");
  button.textContent = "Close Modal";
  button.addEventListener("click", function () {
    closeModal();
  });
  button.setAttribute(
    "style",
    "position:absolute;left:50%;transform:translateX(-50%);bottom:0"
  );
  modal.appendChild(button);
  root.appendChild(modal);
};

const button = document.createElement("button");
button.setAttribute("id", "openModalButton");
button.setAttribute(
  "style",
  "position:absolute;top: 50%;left:50%;tranform: translate(-50%,-50%);width: 120px;height:60px"
);
button.textContent = "Open Modal";
button.addEventListener("click", function () {
  openModal();
});

root.appendChild(button);
