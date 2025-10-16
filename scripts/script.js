document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll('#articles article');

    document.getElementById('hr-select').addEventListener('change', e => {
        const selected = Array.from(e.target.selectedOptions, opt => opt.value).filter(v => v);

        articles.forEach(article => {
            const tagNodes = article.querySelectorAll('.tags li');
            const tags = Array.from(tagNodes, n => n.textContent.trim());
            article.style.display = !selected.length || selected.some(v => tags.includes(v)) ? '' : 'none';
        });
    });
});
