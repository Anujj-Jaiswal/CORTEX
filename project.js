document.addEventListener("DOMContentLoaded", function () {
    const filterLinks = document.querySelectorAll(".filter-link");
    const projects = document.querySelectorAll(".project-card");

    filterLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Remove active class from all filter links
            filterLinks.forEach((lnk) => lnk.classList.remove("active"));
            link.classList.add("active");

            const category = link.getAttribute("data-category");

            projects.forEach((project) => {
                if (category === "all" || project.getAttribute("data-category") === category) {
                    project.style.display = "flex";  // Show matching projects
                } else {
                    project.style.display = "none";  // Hide non-matching projects
                }
            });
        });
    });
});
