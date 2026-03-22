document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('options-container');
    const buttons = document.querySelectorAll('.option-btn');
    const gap = document.getElementById('gap');

    container.addEventListener('click', (e) => {
        const btn = e.target;
        
        
        if (!btn.classList.contains('option-btn')) return;

        
        buttons.forEach(b => b.classList.remove('selected-am', 'selected-are', 'selected-is'));

       
        if (btn.id === 'btn-am') {
            btn.classList.add('selected-am');
            gap.style.color = 'orange';
        } else if (btn.id === 'btn-is') {
            btn.classList.add('selected-is');
            gap.style.color = '#ff4d4d';
        } else if (btn.id === 'btn-are') {
            btn.classList.add('selected-are');
            gap.style.color = '#4caf50';
        }

        gap.textContent = btn.textContent;
    });
});
