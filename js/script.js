	// Sticky Navbar
    let header = document.querySelector('header');
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
     
     
    window.addEventListener('scroll', () => {
        header.classList.toggle('shadow', window.scrollY > 0);
    });
     
    menu.onclick = () => {
        navbar.classList.toggle('active');
    }
    window.onscroll = () => {
        navbar.classList.remove('active');
    }
     
    // Dark Mode
    let darkmode = document.querySelector('#darkmode');
     
    darkmode.onclick = () => {
        if(darkmode.classList.contains('bx-moon')){
            darkmode.classList.replace('bx-moon','bx-sun');
            document.body.classList.add('active');
        }else{
            darkmode.classList.replace('bx-sun','bx-moon');
            document.body.classList.remove('active');
        }
    }


    //Form validation

    function validateForm() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;
        const nameError = document.getElementById("nameError");
        const emailError = document.getElementById("emailError");
    
        nameError.textContent = "";
        emailError.textContent = "";
    
        if (name.trim() === "") {
          nameError.textContent = "Name is required";
          return false;
        }
    
        if (email.trim() === "") {
          emailError.textContent = "Email is required";
          return false;
        }
    
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailPattern.test(email)) {
          emailError.textContent = "Invalid email address";
          return false;
        }
    
        // If all validation passes, the form will be submitted.
        return true;
      }