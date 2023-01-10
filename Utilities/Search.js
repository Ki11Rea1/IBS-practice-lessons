document.querySelector(".search-field__search-input").oninput = function () {
  let val = this.value.trim().toLowerCase();
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
};
