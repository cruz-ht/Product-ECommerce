
// JavaScript for Hamburger Menu (All Pages)
        const hamburger = document.querySelector(".hamburger-Menu")

        const navLinks = document.querySelector(".navbar-Menu")
 
        hamburger.addEventListener("click",()=>{
        navLinks.classList.toggle("mobile-menu")
        })


// --------------------------------------------


// JSON FILE (For Shop Page/Product List)

        // assigning the Var to the corresponding container

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

//   ---------------------------------------------------

// Contact Form JS Validation
        

        document.addEventListener("DOMContentLoaded", () => {
            const form = document.querySelector(".contact-Form");

        form.addEventListener("submit", (e) => {
    e.preventDefault();

    
    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const reason = document.getElementById("reason");
    const message = document.getElementById("message");


    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");
    const reasonError = document.getElementById("reason-error");
    const messageError = document.getElementById("message-error");

    [nameError, emailError, reasonError, messageError].forEach(el => {
      el.textContent = "";
      el.classList.remove("show");
    });

    [name, email, reason, message].forEach(input =>
      input.classList.remove("error")
    );

    let valid = true;

    // VALIDATION RULES
    if (name.value.trim() === "") {
      nameError.textContent = "Please enter your name.";
      nameError.classList.add("show");
      name.classList.add("error");
      valid = false;
    }

    if (!email.value.includes("@")) {
      emailError.textContent = "Please enter a valid email.";
      emailError.classList.add("show");
      email.classList.add("error");
      valid = false;
    }

    if (reason.value === "") {
      reasonError.textContent = "Please choose a reason.";
      reasonError.classList.add("show");
      reason.classList.add("error");
      valid = false;
    }

    if (message.value.trim().length < 10) {
      messageError.textContent = "Message must be at least 10 characters.";
      messageError.classList.add("show");
      message.classList.add("error");
      valid = false;
    }

    if (valid) {
      form.submit();
    }
});
});

        // -----------------------------------------------
        //         let errors = [];

        //         // makes sure if someone puts spaces in the beginning of the input area to not count it
        //         if (name.value.trim() === "") errors.push("Enter your name.");

        //         // In the email input, it checks if the email contains the "@" symbol to validate it is a email
        //         if (!email.value.includes("@")) errors.push("Enter a valid email.");

        //         // makes sure to the user is picking a dropdown option
        //         if (reason.value === "") errors.push("Choose a reason.");

        //         // making the min-length requirement 12 characters
        //         if (message.value.trim().length < 12) errors.push("Message must be at least 10 characters.");

        //         if (errors.length > 0) {
        //             e.preventDefault();
        //             alert(errors.join("\n"));
        //         }
        //     });
        // });
// -----------------------------------------------------
