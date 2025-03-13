const menuBtn = document.getElementById("menu-btn");
        const menu = document.getElementById("menu");
    
        menuBtn.addEventListener("click", () => {
            menu.classList.toggle("hidden");
            menu.classList.toggle("flex");
            menu.classList.toggle("flex-col");
            menu.classList.toggle("absolute");
            menu.classList.toggle("top-16");
            menu.classList.toggle("left-0");
            menu.classList.toggle("w-full");
            menu.classList.toggle("bg-black");
            menu.classList.toggle("p-5");
        });