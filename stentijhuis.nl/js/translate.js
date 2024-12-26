document.addEventListener('DOMContentLoaded', () => {
    const langToggleBtn = document.getElementById('lang-toggle');
    const content = document.getElementById('content');
    let isEnglish = false; // Start met de standaardtaal (Nederlands)

    langToggleBtn.addEventListener('click', () => {
        isEnglish = !isEnglish; // Wissel de taalstatus

        // Toon de juiste taalinhoud
        document.querySelectorAll('.nl').forEach(elem => elem.style.display = isEnglish ? 'none' : 'block');
        document.querySelectorAll('.en').forEach(elem => elem.style.display = isEnglish ? 'block' : 'none');
        
        // Wijzig de knoptekst
        langToggleBtn.textContent = isEnglish ? 'Switch to Dutch' : 'Switch to English';
    });
});
