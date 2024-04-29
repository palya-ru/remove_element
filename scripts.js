document.addEventListener('click', (e) => {
    //if(e.target.closest('.element')) return; /* или */
    if (e.target.classList.contains('element')) return;
    document.querySelector('.element').remove();
})