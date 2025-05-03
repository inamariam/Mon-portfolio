
// [Code JavaScript fourni par Mariam, inséré ici]

// Sélection du bouton "project" et ajout d'un événement de clic pour naviguer vers la section des projets
let bouttonProject = document.getElementById('project');
bouttonProject.addEventListener('click', () => {
  window.location.href = "#perso";
});

let bouttonApropos = document.getElementById('Apropos');
bouttonApropos.addEventListener("click", () => {
  bouttonApropos.style.backgroundColor = "red";
});

let bouttoncontact = document.getElementById("contact");
bouttoncontact.addEventListener("click", () => {
  window.scrollTo({
    top: document.getElementById('contacter').offsetTop,
    behavior: 'smooth'
  });
});

let bouttondecouverte = document.getElementById("decouverte");
bouttondecouverte.addEventListener('click', () => {
  window.location.href = "cv2.html"
});

let bouttonlanguage = document.getElementById('language');
bouttonlanguage.addEventListener("click", () => {
  window.location.href = "#container";
});

document.querySelector('.para1').addEventListener('mouseover', () => {
  document.querySelector('.para1').style.transition = 'all 1.5s ease';
  document.querySelector('.para1').style.transform = 'translateY(-10px)';
  document.querySelector('.para1').style.opacity = '1';
});

const competenceElements = document.querySelectorAll('.competence');
competenceElements.forEach((element) => {
  element.addEventListener('mouseover', () => {
    element.style.transition = 'all 1.5s ease';
    element.style.transform = 'scale(1.1)';
    element.style.opacity = '1';
  });
  element.addEventListener('mouseout', () => {
    element.style.transform = 'scale(1)';
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const projectImages = document.querySelectorAll('.project img');
  projectImages.forEach((img) => {
    img.style.transition = 'transform 1.5s ease';
    img.style.transform = 'translateX(0) scale(1.05)';
  });
});

const socialIcons = document.querySelectorAll('.social-media-icons img');
socialIcons.forEach((icon) => {
  icon.addEventListener('mouseover', () => {
    icon.style.transition = 'transform 0.5s ease';
    icon.style.transform = 'rotate(45deg) scale(1.1)';
  });
  icon.addEventListener('mouseout', () => {
    icon.style.transform = 'rotate(0) scale(1)';
  });
});

document.getElementById("searchInput").addEventListener("keyup", (e) => {
  let searchTerm = e.target.value.toLowerCase();
  let languageCollection = document.getElementsByClassName("sublist1");
  for (let i = 0; i < languageCollection.length; i++) {
    const itemText = languageCollection[i].textContent.toLowerCase();
    languageCollection[i].style.display = itemText.includes(searchTerm) ? "list-item" : "none";
  }
});

const products = [
  { id: 1, name: "icone de jeux video", price: 1000, img: "images/image6.png" },
  { id: 2, name: "icone de css", price: 2000, img: "images/image10.png" },
  { id: 3, name: "icone de python", price: 1400, img: "images/image4.png" },
];

const cart = [];

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "card";
    productCard.style.maxWidth = "100%";
    productCard.style.height = "auto";
    productCard.style.marginBottom = "10px";
    productCard.innerHTML = `
      <img src="${product.img}" class="card-img-top" alt="${product.name}" style="width: 100%; height: auto; max-height: 200px; object-fit: cover;">
      <div class="card-body">
        <h5 class="card-title">${product.name}</h5>
        <p class="card-text">Prix: ${product.price} €</p>
        <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au panier</button>
      </div>
    `;
    productList.appendChild(productCard);
  });
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (product) {
    cart.push(product);
    displayCart();
  }
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach((item, index) => {
    const cartItem = document.createElement("li");
    cartItem.className = "list-group-item d-flex justify-content-between align-items-center";
    cartItem.innerHTML = `
      ${item.name} - ${item.price} €
      <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Retirer</button>
    `;
    cartList.appendChild(cartItem);
  });
}

function removeFromCart(index) {
  cart.splice(index, 1);
  displayCart();
}

document.addEventListener("DOMContentLoaded", displayProducts);



// Filtrage des langues dans la liste selon la saisie utilisateur
document.getElementById("searchInput").addEventListener("keyup", (e) => {
  let searchTerm = e.target.value.toLowerCase();
  let languageCollection = document.getElementsByClassName("sublist1");
  for (let i = 0; i < languageCollection.length; i++) {
      const itemText = languageCollection[i].textContent.toLowerCase();
      languageCollection[i].style.display = itemText.includes(searchTerm) ? "list-item" : "none";
  }
});
