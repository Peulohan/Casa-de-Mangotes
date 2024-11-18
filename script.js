// Alternar menu no modo mobile
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});

// Buscar produtos com funcionalidade fictícia
const searchButton = document.querySelector('.search-section button');
const searchInput = document.querySelector('.search-section input[type="text"]');

if (searchButton && searchInput) {
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Buscando por: "${query}"`);
            // Simulação de busca de produtos
            simulateSearch(query);
        } else {
            alert('Por favor, insira um termo para busca.');
        }
    });
}

// Função para simular a busca de produtos
function simulateSearch(query) {
    // Produtos fictícios
    const products = [
        { name: 'Mangueira Flexível Vermelha', description: 'Alta durabilidade com o melhor preço.' },
        { name: 'Mangueira Azul Lava Auto', description: 'Perfeita para altas pressões e eficiência.' },
        { name: 'Mangueira Transparente PVC', description: 'Ideal para diversos sistemas industriais.' }
    ];

    const results = products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()));

    if (results.length > 0) {
        alert(`Encontramos ${results.length} produto(s) para a busca: "${query}"`);
    } else {
        alert(`Nenhum produto encontrado para "${query}".`);
    }
}

// Enviar formulário de contato
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value.trim();
        const email = contactForm.querySelector('input[type="email"]').value.trim();
        const message = contactForm.querySelector('textarea').value.trim();

        if (name && email && message) {
            // Validação simples do formato do email
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailPattern.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return;
            }

            alert('Obrigado por entrar em contato! Responderemos em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}

// Scroll suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animação nas cartas de produtos ao passar o mouse
const productCards = document.querySelectorAll('.product-card');
productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
    });
});


// Array com os produtos
const products = [
    {
        id: 1,
        name: "Mangueira Flexível Verde",
        description: "Alta durabilidade e flexibilidade para diversos usos industriais.",
        image: "mangueira1.jpeg",
        link: "produtos.html"
    },
    {
        id: 2,
        name: "Mangueira Azul Lava Auto",
        description: "Resistente e perfeita para lavar automóveis com alta pressão.",
        image: "mangueira2.jpeg",
        link: "produtos.html"
    },
    {
        id: 3,
        name: "Mangueira Transparente PVC",
        description: "Ideal para sistemas que demandam visibilidade e precisão no fluxo de líquidos.",
        image: "mangueira3.jpg",
        link: "produtos.html"
    }
];

// Função para exibir os produtos na página
function displayProducts(filteredProducts) {
    const productGrid = document.getElementById("productGrid");
    productGrid.innerHTML = ''; // Limpa o grid antes de adicionar novos produtos

    filteredProducts.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <div class="product-image" style="background-image: url('${product.image}');"></div>
            <div class="product-content">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <a href="${product.link}" class="btn">Saiba Mais</a>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Função de pesquisa
function searchProduct() {
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();
    
    const filteredProducts = products.filter(product => {
        return product.name.toLowerCase().includes(searchQuery);
    });

    displayProducts(filteredProducts);
}

// Inicializa a página com todos os produtos
displayProducts(products);

