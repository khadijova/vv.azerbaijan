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

const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterableCards.forEach(card => {
        card.classList.add("hide");
        
        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
            card.classList.add("show");
        }
    });
};

filterButtons.forEach(button => button.addEventListener("click", filterCards));
