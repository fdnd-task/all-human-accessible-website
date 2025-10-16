document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll('#articles article');

    document.getElementById('hr-select').addEventListener('change', e => {
        const selected = Array.from(e.target.selectedOptions, opt => opt.value).filter(v => v);

        articles.forEach(article => {
            const tags = Array.from(article.querySelectorAll('.tags dt'), dt => dt.textContent);
            article.style.display = !selected.length || selected.some(v => tags.includes(v)) ? '' : 'none';
        });
    });
});
