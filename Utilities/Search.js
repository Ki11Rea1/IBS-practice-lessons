const searchInput = document.querySelector(".search-field__search-input");
function searchName() {
  let val = searchInput.value.trim().toLowerCase();
  let searchedItems = document.querySelectorAll(".item");
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

const debounce = (callback, delay) => {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(callback, delay);
  };
};

searchInput.addEventListener("keyup", debounce(searchName, 1000));
