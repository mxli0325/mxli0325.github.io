(function () {
  function ready(callback) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", callback);
    } else {
      callback();
    }
  }

  ready(function () {
    var nav = document.getElementById("site-nav");
    if (!nav) return;

    var button = nav.querySelector(".greedy-nav__toggle");
    var visibleLinks = nav.querySelector(".visible-links");
    var hiddenLinks = nav.querySelector(".hidden-links");
    if (!button || !visibleLinks || !hiddenLinks) return;

    var breaks = [];

    function availableWidth() {
      return button.classList.contains("hidden")
        ? nav.clientWidth
        : nav.clientWidth - button.offsetWidth - 30;
    }

    function closeMenu() {
      hiddenLinks.classList.add("hidden");
      button.classList.remove("close");
      button.setAttribute("aria-expanded", "false");
    }

    function updateNav() {
      var available = availableWidth();

      if (visibleLinks.scrollWidth > available && visibleLinks.children.length > 0) {
        breaks.push(visibleLinks.scrollWidth);
        hiddenLinks.insertBefore(visibleLinks.lastElementChild, hiddenLinks.firstElementChild);
        button.classList.remove("hidden");
        updateNav();
        return;
      }

      if (breaks.length > 0 && available > breaks[breaks.length - 1] && hiddenLinks.children.length > 0) {
        visibleLinks.appendChild(hiddenLinks.firstElementChild);
        breaks.pop();
        updateNav();
        return;
      }

      if (hiddenLinks.children.length > 0) {
        button.classList.remove("hidden");
      } else {
        button.classList.add("hidden");
        closeMenu();
      }
    }

    button.addEventListener("click", function () {
      hiddenLinks.classList.toggle("hidden");
      var isOpen = !hiddenLinks.classList.contains("hidden");
      button.classList.toggle("close", isOpen);
      button.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    window.addEventListener("resize", updateNav);
    window.addEventListener("load", updateNav);
    updateNav();
  });
}());
