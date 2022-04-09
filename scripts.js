addEventListener('click', function(e) {
    const target = e.target;
    if (target.parentElement.classList.contains('item')) {
        target.parentElement.classList.toggle('open');
    }
});
