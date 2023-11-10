const tipsList = document.querySelector('.tips-list');
const sortBySelect = document.getElementById('sort-by');
const themeSelect = document.getElementById('theme');

sortBySelect.addEventListener('change', sortTips);
themeSelect.addEventListener('change', sortTips);

function sortTips() {
    const sortByValue = sortBySelect.value;
    const themeValue = themeSelect.value;
    const tipItems = Array.from(tipsList.getElementsByClassName('tip-item'));

    tipItems.forEach(item => {
        if (themeValue === '' || item.dataset.theme === themeValue) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });

    tipItems.sort((a, b) => {
        if (sortByValue === 'date-asc') {
            return new Date(a.querySelector('.tip-date').textContent) - new Date(b.querySelector('.tip-date').textContent);
        } else if (sortByValue === 'date-desc') {
            return new Date(b.querySelector('.tip-date').textContent) - new Date(a.querySelector('.tip-date').textContent);
        } else if (sortByValue === 'title-asc') {
            return a.querySelector('.tip-title').textContent.localeCompare(b.querySelector('.tip-title').textContent);
        } else {
            return b.querySelector('.tip-title').textContent.localeCompare(a.querySelector('.tip-title').textContent);
        }
    });

    while (tipsList.firstChild) {
        tipsList.removeChild(tipsList.firstChild);
    }

    tipItems.forEach(item => {
        tipsList.appendChild(item);
    });
}