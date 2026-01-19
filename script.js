
let currentImages = []; 
let currentIndex = 0;   


function openLightbox(images) {
    if (!images || images.length === 0) return;
    
    currentImages = images;
    currentIndex = 0;
    
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");
    
    img.src = currentImages[currentIndex];
    lightbox.style.display = "flex";
    
 
    document.body.style.overflow = "hidden";
}


function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.body.style.overflow = "auto";
}


function changeImage(step, event) {
    if (event) event.stopPropagation(); // Klikin pərdəyə keçməsini önləyir
    
    currentIndex += step;
    
    // Sonsuz döngə (axırıncıdan sonra birinciyə qayıt)
    if (currentIndex >= currentImages.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = currentImages.length - 1;
    
    document.getElementById("lightbox-img").src = currentImages[currentIndex];
}



const filterButtons = document.querySelectorAll(".filter-btn");
const filterableCards = document.querySelectorAll(".card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Aktiv butonu vizual olaraq dəyiş
        const activeBtn = document.querySelector(".filter-btn.active");
        if (activeBtn) activeBtn.classList.remove("active");
        button.classList.add("active");

        const filterName = button.getAttribute("data-name");

        filterableCards.forEach(card => {
            // "all" seçilibsə və ya kartın data-name-i uyğundursa göstər
            if (filterName === "all" || card.getAttribute("data-name") === filterName) {
                card.style.display = "block"; // Kartı göstər
                setTimeout(() => card.classList.add("show"), 10); // Animasiya üçün
            } else {
                card.style.display = "none"; // Kartı gizlə
                card.classList.remove("show");
            }
        });
    });
});


document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeLightbox();
});
