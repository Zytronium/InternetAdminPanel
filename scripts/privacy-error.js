document.getElementById('advanced-button').addEventListener('click', function() {
    const details = document.getElementById('details');
    details.classList.toggle('hidden');
});

document.querySelector('.error-code').addEventListener('click', function() {
    const debugInfo = this.nextElementSibling;
    debugInfo.classList.toggle('hidden');
});
