let addFrm = document.addfrm;
let text = addFrm.add;
let ul = document.querySelector(".todos");
let addItem = (item) => {
  let str = `<li>
          <span>${item}</span> <i class="fa-solid fa-trash delete"></i>
        </li>`;
  ul.innerHTML += str;
};

addFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  let item = text.value;
  if (item.length > 0) {
    addItem(item);
    text.value = "";
  }
});

ul.addEventListener("click", (e) => {
  // Check whether clicked item is I tag
  if (e.target.nodeName === "I") {
    // Remove parent of I tag i.e entire <li>
    e.target.parentElement.remove();
  }
});

let searchItem = (text) => {
  let listItem = ul.children;
  for (let li of listItem) {
    if (li.innerText.toLowerCase().indexOf(text) === -1) {
      li.classList.add("filtered");
    } else {
      li.classList.remove("filtered");
    }
  }
};
let searchText = document.querySelector(".search input");
searchText.addEventListener("keyup", (e) => {
  searchItem(searchText.value.toLowerCase());
});
