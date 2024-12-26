document.addEventListener('DOMContentLoaded', () => {
    const proceedBtn = document.getElementById('proceed-btn');
    let targetUrl = '';

    // Dynamisch de URL instellen op basis van welke link werd aangeklikt
    document.querySelectorAll('[data-bs-toggle="modal"]').forEach(link => {
        link.addEventListener('click', (event) => {
            const url = event.target.getAttribute('data-url');
            if (url) {
                targetUrl = url;
            }
        });
    });

    // Zorg dat de proceed button de juiste URL volgt
    proceedBtn.addEventListener('click', () => {
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });

    // Countdown functionaliteit
    const showCountdownModal = () => {
        const countDownDate = new Date("Jan 1, 2025 00:00:00").getTime();
        const countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("countdown-timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 0) {
                clearInterval(countdownInterval);
                document.getElementById("countdown-timer").innerHTML = "EXPIRED";
            }
        }, 1000);
    };

    document.getElementById('countdown-link-nl').addEventListener('click', showCountdownModal);
});
