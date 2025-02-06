document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".highlight").forEach(link => {
    link.addEventListener("click", function (event) {
      let onClickAttr = this.getAttribute("onclick");

      // Check if it's an external link using window.open
      if (onClickAttr && onClickAttr.includes("window.open")) {
        event.stopPropagation(); // Prevent event bubbling
        return; // Don't execute further redirection
      }

      // If it's an internal link, allow navigation after a short delay
      event.preventDefault();
      let targetURL = onClickAttr.match(/'([^']+)'/)[1];
      setTimeout(() => {
        window.location.href = targetURL;
      }, 0);
    });
  });
});
