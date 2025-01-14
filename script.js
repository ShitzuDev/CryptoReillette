document.addEventListener("DOMContentLoaded", () => {
    console.log("Crypto Reillette est prêt à briller !");

    const ctx = document.getElementById('cryptoChart');
    if (!ctx) {
        console.error("Canvas 'cryptoChart' introuvable !");
        return;
    }
    console.log("Canvas trouvé, génération du graphique...");

    // Configuration et création du graphique
    const data = {
        labels: ['Jour 1', 'Jour 2', 'Jour 3', 'Jour 4', 'Jour 5', 'Jour 6', 'Jour 7', 'Jour 8', 'Jour 9', 'Jour 10'],
        datasets: [{
            label: 'Valeur (€)',
            data: [10, 12, 15, 13, 16, 18, 17, 19, 21, 20],
            borderColor: 'rgba(0, 255, 0, 0.8)',
            backgroundColor: 'rgba(0, 255, 0, 0.3)',
            borderWidth: 2,
            tension: 0.4,
            fill: true,
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    labels: {
                        color: '#fff',
                        font: { size: 14 }
                    }
                }
            },
            scales: {
                x: { ticks: { color: '#fff' }, grid: { color: 'rgba(255, 255, 255, 0.2)' } },
                y: { ticks: { color: '#fff' }, grid: { color: 'rgba(255, 255, 255, 0.2)' } }
            }
        }
    };

    new Chart(ctx, config);
});
