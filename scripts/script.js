let edit = document.querySelector(".profile__info-link");
let addButton = document.querySelector(".profile__info_add");
let page = document.querySelector(".edit");
let exit = document.querySelector(".edit__exit");
let gridLike = document.querySelector(".grid__like");
let likeYosemite = document.querySelector(".grid__like_yosemite");
let likeLouise = document.querySelector(".grid__like_louise");
let likeCalvas = document.querySelector(".grid__like_calvas");
let likeLatemar = document.querySelector(".grid__like_latemar");
let likeVanois = document.querySelector(".grid__like_vanois");
let likeBraies = document.querySelector(".grid__like_braies");

function openWindow() {
  page.classList.remove("edit");
  page.classList.add("edit__close");
}
edit.addEventListener("click", openWindow);
function closeWindow() {
  page.classList.remove("edit__close");
  page.classList.add("edit");
}

exit.addEventListener("click", closeWindow);

function likeActiveYosemite() {
  likeYosemite.className = "grid__like_active";
}
likeYosemite.addEventListener("click", likeActiveYosemite);

function likeActiveLouise() {
  likeLouise.className = "grid__like_active";
}
likeLouise.addEventListener("click", likeActiveLouise);

function likeActiveCalvas() {
  likeCalvas.className = "grid__like_active";
}
likeCalvas.addEventListener("click", likeActiveCalvas);

function likeActiveLatemar() {
  likeLatemar.className = "grid__like_active";
}
likeLatemar.addEventListener("click", likeActiveLatemar);

function likeActiveVanois() {
  likeVanois.className = "grid__like_active";
}
likeVanois.addEventListener("click", likeActiveVanois);

function likeActiveBraies() {
  likeBraies.className = "grid__like_active";
}
likeBraies.addEventListener("click", likeActiveBraies);

//  Edit Profile
const formulario = document.querySelector(".edit__profile");
let editSave = document.querySelector("#button");

//Fuction
function submitForm(a) {
  a.preventDefault();
  const names = document.querySelector(".profile__info-name");
  const description = document.querySelector(".profile__info-description");
  const nombre = document.querySelector("#name").value;
  const descripcion = document.querySelector("#description").value;
  names.textContent = `${nombre}`;
  description.textContent = `${descripcion}`;
  page.classList.remove("edit__close");
  page.classList.add("edit");
}
formulario.addEventListener("submit", submitForm);

// Disabled Button
let nombre = document.querySelector("#name");
let descripcion = document.querySelector("#description");

//Fuction
editSave.disabled = true;
function disabledName() {
  if (nombre.value === "") {
    editSave.disabled = true;
    editSave.className = "edit__save";
  }
}

function disabledDescription() {
  if (descripcion.value === "") {
    editSave.disabled = true;
    editSave.className = "edit__save";
  } else {
    editSave.disabled = false;
    editSave.className = "edit__save_disabled";
  }
}
nombre.addEventListener("keyup", disabledName);
descripcion.addEventListener("keyup", disabledDescription);
