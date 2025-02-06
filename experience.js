document.addEventListener("DOMContentLoaded", function () {
    const stackHover = document.getElementById("stack-hover");
    const skillCard = document.getElementById("skill-card");
    const skillDetails = document.getElementById("skill-details");

    skillCard.style.display = "none";

    stackHover.addEventListener("mouseenter", function () {
        const rect = stackHover.getBoundingClientRect();
        skillCard.style.top = `${rect.bottom + window.scrollY + 5}px`;
        skillCard.style.left = `${rect.left + window.scrollX}px`;
        skillCard.style.display = "flex";
    });

    skillCard.addEventListener("mouseleave", function () {
        skillCard.style.display = "none";
        skillDetails.style.display = "none";
    });

    const skills = {
        programming: [{ name: "Java (SE)", level: "80%" }, { name: "Python", level: "75%" }],
        ides: [{ name: "VSCode", level: "90%" }, { name: "SpringSTS", level: "80%" }],
        frontend: [{ name: "HTML", level: "90%" }, { name: "CSS", level: "85%" }],
        frameworks: [{ name: "Spring", level: "80%" }, { name: "Angular", level: "75%" }],
        api: [{ name: "Postman", level: "85%" }, { name: "Swagger", level: "80%" }],
        database: [{ name: "MySQL", level: "78%" },{name:"Postgres"}],
        version: [{ name: "Git", level: "85%" }, { name: "GitHub", level: "80%" }]
    };

    document.querySelectorAll(".skill-category").forEach(category => {
        category.addEventListener("mouseenter", function () {
            skillDetails.innerHTML = "";
            skillDetails.style.display = "flex";
            const skillType = this.getAttribute("data-skill");

            skills[skillType].forEach(skill => {
                skillDetails.innerHTML += `<p>${skill.name}</p>
                <div class="skill-bar"><div class="skill-fill" style="width: ${skill.level};"></div></div>`;
            });
        });
    });
});
