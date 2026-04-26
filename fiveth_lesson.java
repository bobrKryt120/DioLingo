document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('options-container');
    const buttons = document.querySelectorAll('.option-btn');
    const gap = document.getElementById('gap');
    

    const hearts = document.querySelectorAll('.hotbar img');
    let livesLost = 0; 

    container.addEventListener('click', (e) => {
        const btn = e.target;
        

        if (!btn.classList.contains('option-btn')) return;


        buttons.forEach(b => b.classList.remove('selected-is', 'selected-are', 'selected-am'));


        if (btn.id === 'btn-am') {

            btn.classList.add('selected-am');
            gap.style.color = '#4caf50';
        } else {
            if (btn.id === 'btn-is') btn.classList.add('selected-is');
            if (btn.id === 'btn-are') btn.classList.add('selected-are');
            
            gap.style.color = '#ff4d4d';

            if (livesLost < hearts.length) {
                hearts[livesLost].classList.add('lost-life');
                livesLost++;
            }
        }

        gap.textContent = btn.textContent;
    });
});


