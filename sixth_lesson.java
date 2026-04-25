document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('options-container');
    const buttons = document.querySelectorAll('.option-btn');
    const gap = document.getElementById('gap');
    

    const hearts = document.querySelectorAll('.hotbar img');
    let livesLost = 0; 

    container.addEventListener('click', (e) => {
        const btn = e.target;
        

        if (!btn.classList.contains('option-btn')) return;


        buttons.forEach(b => b.classList.remove('selected-He', 'selected-I', 'selected-They'));


        if (btn.id === 'btn-They') {

            btn.classList.add('selected-They');
            gap.style.color = '#4caf50';
        } else {
            if (btn.id === 'btn-He') btn.classList.add('selected-He');
            if (btn.id === 'btn-I') btn.classList.add('selected-I');
            
            gap.style.color = '#ff4d4d';

            if (livesLost < hearts.length) {
                hearts[livesLost].classList.add('lost-life');
                livesLost++;
            }
        }

        gap.textContent = btn.textContent;
    });
});
