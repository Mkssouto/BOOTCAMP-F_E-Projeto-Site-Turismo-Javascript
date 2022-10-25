const banners = [
    {
        title: "França",
        description: "89 milhões de turistas.",
        image: "eiffel-tower-gcafaa6e07_1920.jpg",
    },
    {
        title: "Espanha",
        description: "83 milhões de turistas.",
        image: "madrid-catedral_de_almudena-2713916_1920.jpg",
    },
    {
        title: "Estados Unidos da America",
        description: "80 milhões de turistas.",
        image: "statue-of-liberty-992552_1920.jpg",
    },
    {
        title: "China",
        description: "63 milhões de turistas.",
        image: "shanghai-1477579_1920.jpg",
    },
    {
        title: "Itália",
        description: "62 milhões de turistas",
        image: "venice-3130323_1920.jpg",
    },
    {
        title: "Turquia",
        description: "46 milhões de turistas",
        image: "cappadocia-805624_1920.jpg",
    },
    {
        title: "México",
        description: "41 milhões de turistas",
        image: "chichen-itza-1025099_1920.jpg",
    },
    {
        title: "Alemanha",
        description: "39 milhões de turistas",
        image: "bremen-6557996_1920.jpg",
    },
    {
        title: "Tailândia",
        description: "38 milhões de turistas",
        image: "eiffel-tower-gcafaa6e07_1920.jpg",
    },
    {
        title: "Reino Unido",
        description: "36 milhões de turistas",
        image: "london-1335477_1920.jpg",
    }
];

const mioloCarousel = document.querySelector("#miolo-carousel");
const generateBanner = () => {
    let itensCarousel = '';
    let idx = 0;
    for (const banner of banners) {
        let active = '';
        if (idx === 0) {
            active = "active";
        }

        itensCarousel += `
            <div class="carousel-item ${active}">
                <div class="carousel-img"
                 style="background-image: url('./assets/img/carrocel/${banner.image}') ">
                </div>
                
                <div class="carousel-caption d-none d-md-block">
                    <h3>${banner.title}</h3>
                    <p>${banner.description}</p>
                </div>
            </div>
        `;

        idx++;
    }
    mioloCarousel.innerHTML = itensCarousel;
}

document.addEventListener('DOMContentLoaded', function () {
    generateBanner();
})