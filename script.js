// --- MODAL DE LOGIN ---
const modal = document.getElementById('loginModal');

function openLogin() {
    modal.style.display = 'flex';
}

function closeLogin() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Bem-vindo de volta, ${email}!`);
    closeLogin();
}

// --- CARRINHO ---
function addToCart(productName) {
    alert(`${productName} adicionado ao carrinho!`);
}

// --- SISTEMA DE FILTRO DE PRODUTOS ---
function filterProducts(category) {
    // 1. Selecionar todos os cards de produto
    const allProducts = document.querySelectorAll('.product-card');
    
    // 2. Selecionar todos os botões de filtro
    const allButtons = document.querySelectorAll('.filter-btn');

    // 3. Atualizar a aparência dos botões (Active state)
    // O código abaixo descobre qual botão foi clicado baseando-se no texto ou lógica
    // Para simplificar, vamos resetar todos e ativar o correto visualmente
    allButtons.forEach(btn => {
        if (btn.innerText.toLowerCase().includes(category === 'all' ? 'todos' : category)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // 4. Mostrar ou esconder produtos
    allProducts.forEach(product => {
        // Pega a categoria do produto atual (ex: "masculino")
        const productCategory = product.getAttribute('data-category');

        if (category === 'all') {
            // Se o filtro for 'todos', mostra tudo
            product.style.display = 'flex';
        } else {
            // Se não, verifica se bate com a categoria
            if (productCategory === category) {
                product.style.display = 'flex';
            } else {
                product.style.display = 'none';
            }
        }
    });
}