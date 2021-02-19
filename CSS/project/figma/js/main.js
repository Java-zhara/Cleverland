(function () {
    const burgerItem = document.querySelector(".js-burger-menu");
    const menuItem = document.querySelector(".header-burger-menu");
    const listItem = document.querySelector(".header-list");
    const menuCloseItem = document.querySelector(".menu-close");
    const menuLinks = document.querySelectorAll(".header-link");
    burgerItem.addEventListener("click", () => {
      menuItem.classList.add("menu-active");
      menuCloseItem.style.display = "block";
      document.body.style.position = "fixed";
    });
    menuCloseItem.addEventListener("click", () => {
      menuItem.classList.remove("menu-active");
      menuCloseItem.style.display = "none";
      document.body.style.position = "static";
    });
    if (window.innerWidth <= 1000) {
      menuItem.addEventListener("click", () => {
        menuItem.classList.remove("menu-active");
        menuCloseItem.style.display = "none";
        document.body.style.position = "static";
      });
      listItem.addEventListener("click", (e) => {
        e.stopPropagation();
      });
      for (let i = 0; i < menuLinks.length; i += 1) {
        menuLinks[i].addEventListener("click", () => {
          menuItem.classList.remove("menu-active");
          menuCloseItem.style.display = "none";
          document.body.style.position = "static";
        });
      }
    }
  })();