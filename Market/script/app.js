const containerEl = document.querySelector(".container");

let arr = []
function loadProducts() {
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      renderData(data)
      arr.push(...data)

    })
    .catch((err) => console.error(err));
}

loadProducts();

function renderData(postData) {
  containerEl.innerHTML = "";
  postData.forEach((p) => {
    const postDiv = document.createElement("div");
    postDiv.className = "post-element";
    postDiv.innerHTML = `
      <img src=${p.image} alt="">
      <p>Price: ${p.price}</p>
      <p>Description: ${p.rating.count}</p>
      <p>${p.description}</p>
      <p>${p.title}</p>
      <i data-post-id="${p.id}" class="fas fa-trash"></i>
    `;
    containerEl.appendChild(postDiv);
  });
}

containerEl.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-trash")) {
    const postId = event.target.dataset.postId;
    console.log(postId);
    if (postId) {
      let sortArr = arr.filter(e => e.id != postId)
      arr = [...sortArr]
      renderData(arr)
    }
  }
});
