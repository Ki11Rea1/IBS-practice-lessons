import { debounce } from "./debounce.js";

const searchInput = document.querySelector(".search-field__search-input");
function searchName() {
  const val = searchInput.value.trim().toLowerCase();
  const searchedItems = document.querySelectorAll(".item");
  if (val != "") {
    searchedItems.forEach(function (item) {
      if (item.innerText.toLowerCase().search(val) == -1) {
        item.classList.add("hide");
      } else {
        item.classList.remove("hide");
      }
    });
  } else {
    searchedItems.forEach(function (item) {
      item.classList.remove("hide");
    });
  }
}

searchInput.addEventListener("keyup", debounce(searchName, 1000));
