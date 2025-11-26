
// JavaScript for Hamburger Menu
const hamburger = document.querySelector(".hamburger-Menu")
        const navLinks = document.querySelector(".navbar-Menu")
 
        hamburger.addEventListener("click",()=>{
        navLinks.classList.toggle("mobile-menu")
        })


// JSON FILE 

// assigning the Var to the corresponding contianer

const container = document.querySelector(".grid-Container")


fetch("products.json")

  .then(response => response.json())


  .then(products => {

        
        products.forEach(product => {
        container.innerHTML += `
        <main class="product-card">
          <img src="${product.image}" alt="${product.alt}">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>$${product.price}</p>
        </main>`;
    });

  })


  .catch(error => console.error("Error loading JSON:", error));