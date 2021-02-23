// Burger menu

(function () {
    const burgerItem = document.querySelector(".js-burger-menu");
    const menuItem = document.querySelector(".header-burger-menu");
    const listItem = document.querySelector(".header-list");
    const menuCloseItem = document.querySelector(".header-burger-close");
    const menuLinks = document.querySelectorAll(".header-link");
    burgerItem.addEventListener("click", () => {
      menuItem.classList.add("menu-active");
      menuCloseItem.style.display = "flex";
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

// Scroll to anchors

(function () {

  const smoothScroll = function (targetEl, duration) {
      const headerElHeight =  document.querySelector('.header-fixed-menu').clientHeight;
      let target = document.querySelector(targetEl);
      let targetPosition = target.getBoundingClientRect().top - headerElHeight;
      let startPosition = window.pageYOffset;
      let startTime = null;
  
      const ease = function(t,b,c,d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
      };
  
      const animation = function(currentTime){
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = ease(timeElapsed, startPosition, targetPosition, duration);
          window.scrollTo(0,run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
      };
      requestAnimationFrame(animation);

  };

  const scrollTo = function () {
      const links = document.querySelectorAll('.js-scroll');
      links.forEach(each => {
          each.addEventListener('click', function () {
              const currentTarget = this.getAttribute('href');
              smoothScroll(currentTarget, 1000);
          });
      });
  };
  scrollTo();
}()); 