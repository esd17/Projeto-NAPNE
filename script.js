document.addEventListener('DOMContentLoaded', () => {
    // 1. Apanhar os botões
    const btnIncrease = document.getElementById('btn-increase');
    const btnDecrease = document.getElementById('btn-decrease');
    const btnContrast = document.getElementById('btn-contrast');

    // ==========================================
    // ALTO CONTRASTE (Com Memória)
    // ==========================================
    // Verifica se o utilizador já tinha ativado antes
    if (localStorage.getItem('altoContraste') === 'ativo') {
        document.body.classList.add('high-contrast');
    }

    if (btnContrast) {
        btnContrast.addEventListener('click', () => {
            document.body.classList.toggle('high-contrast');
            
            // Guarda a escolha na memória do navegador
            if (document.body.classList.contains('high-contrast')) {
                localStorage.setItem('altoContraste', 'ativo');
            } else {
                localStorage.setItem('altoContraste', 'inativo');
            }
        });
    }

    // ==========================================
    // CONTROLO DE ZOOM (Com Memória)
    // ==========================================
    // Verifica o zoom guardado ou começa nos 100%
    let currentZoom = parseInt(localStorage.getItem('zoomLevel')) || 100;
    const step = 10;
    const maxZoom = 150;
    const minZoom = 80;

    // Aplica o zoom guardado logo ao carregar a página
    document.documentElement.style.fontSize = currentZoom + '%';

    if (btnIncrease) {
        btnIncrease.addEventListener('click', () => {
            if (currentZoom < maxZoom) {
                currentZoom += step;
                document.documentElement.style.fontSize = currentZoom + '%';
                localStorage.setItem('zoomLevel', currentZoom); // Guarda o novo valor
            }
        });
    }

    if (btnDecrease) {
        btnDecrease.addEventListener('click', () => {
            if (currentZoom > minZoom) {
                currentZoom -= step;
                document.documentElement.style.fontSize = currentZoom + '%';
                localStorage.setItem('zoomLevel', currentZoom); // Guarda o novo valor
            }
        });
    }
});