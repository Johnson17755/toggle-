 const body = document.querySelector("body"),
     toggle = document.querySelector(".toggle");

    //  to make sure its working in localStorage
     let getMode = localStorage.getItem("mode");
     if(getMode && getMode === "dark"){
        body.classList.toggle("dark");
        toggle.classList.toggle("active")
     }

        // to make it dark and light
     toggle.addEventListener("click", () => {
        body.classList.toggle("dark");

        if(!body.classList.contains("dark")){
            return localStorage.setItem("mode", "light");
        }
           localStorage.setItem("mode", "dark");
     })

    //  this is to active the switch on dark and light 
     toggle.addEventListener("click", () => toggle.classList.toggle("active"));