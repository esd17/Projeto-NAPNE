document.addEventListener('DOMContentLoaded', () => {
    // 1. Pegando os botões pelo ID que criamos no Passo 1
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');
    const btnContrast = document.getElementById('btn-contrast');

    // Variáveis para controlar o Zoom
    let currentZoom = 100; // Começa em 100%
    const step = 10;       // Aumenta/diminui de 10 em 10%
    const maxZoom = 150;   // Limite máximo de 150% para não quebrar a tela
    const minZoom = 80;    // Limite mínimo de 80%

    // 2. Função de Aumentar a Letra
    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            if (currentZoom < maxZoom) {
                currentZoom += step;
                document.documentElement.style.fontSize = currentZoom + '%';
            }
        });
    }

    // 3. Função de Diminuir a Letra
    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            if (currentZoom > minZoom) {
                currentZoom -= step;
                document.documentElement.style.fontSize = currentZoom + '%';
            }
        });
    }

    // 4. Função de Alto Contraste
    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            // O "toggle" liga a classe se ela não existir, e desliga se ela já existir
            document.body.classList.toggle('high-contrast');
        });
    }
});