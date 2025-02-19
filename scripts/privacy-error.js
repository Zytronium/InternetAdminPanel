document.getElementById('advanced-button').addEventListener('click', function() {
    const details = document.getElementById('details');
    details.classList.toggle('hidden');
    switch (this.textContent.trim()) {
        case 'Advanced':
            this.textContent = 'Hide Advanced';
            break;

        case 'Hide Advanced':
            this.textContent = 'Advanced';
            break;
    }
});

document.querySelector('.error-code').addEventListener('click', function() {
    const debugInfo = this.nextElementSibling;
    debugInfo.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
    function formatDate(date) {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        return date.toLocaleDateString('en-US', options);
    }

    const currentDateElement = document.querySelector("#error-debugging-info .debugging-content:nth-child(4) .debugging-content");
    if (currentDateElement) {
        currentDateElement.textContent = formatDate(new Date());
    }
});
