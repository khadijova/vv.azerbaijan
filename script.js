document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        

        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');


        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
const filterButtons = document.querySelectorAll(".filter-btn");
const filterableCards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Aktiv düyməni dəyiş
        document.querySelector(".filter-btn.active").classList.remove("active");
        button.classList.add("active");

        const filterName = button.getAttribute("data-name");

        filterableCards.forEach(card => {
            if (filterName === "all" || card.getAttribute("data-name") === filterName) {
                card.classList.remove("hide");
                card.classList.add("show");
            } else {
                card.classList.remove("show");
                card.classList.add("hide");
            }
        });
    });
});
