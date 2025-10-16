document.addEventListener("DOMContentLoaded", () => {
    const articles = document.querySelectorAll('#articles article');

    const hrSelect = document.getElementById('hr-select');
    if (hrSelect && articles.length) {
        hrSelect.addEventListener('change', e => {
            const selected = Array.from(e.target.selectedOptions, opt => opt.value).filter(v => v);

            articles.forEach(article => {
                const tagNodes = article.querySelectorAll('.tags li');
                const tags = Array.from(tagNodes, n => n.textContent.trim());
                article.style.display = !selected.length || selected.some(v => tags.includes(v)) ? '' : 'none';
            });
        });
    }

    const shareBtn = document.getElementById('shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', async () => {
            const pageUrl = window.location.href;
            const title = document.querySelector('article h1') ? document.querySelector('article h1').textContent : document.title;
            if (navigator.share) {
                try {
                    await navigator.share({ title, url: pageUrl });
                } catch (err) {
                }
            } else if (navigator.clipboard && navigator.clipboard.writeText) {
                try {
                    await navigator.clipboard.writeText(pageUrl);
                    alert('Link copied to clipboard');
                } catch (err) {
                    alert('Copy failed');
                }
            } else {
                const tmp = document.createElement('textarea');
                tmp.value = pageUrl;
                document.body.appendChild(tmp);
                tmp.select();
                try {
                    document.execCommand('copy');
                    alert('Link copied to clipboard');
                } catch (err) {
                    alert('Copy failed');
                }
                document.body.removeChild(tmp);
            }
        });
    }

    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.history && window.history.length > 1) {
                window.history.back();
            } else {
                window.location.href = 'index.html';
            }
        });
    }
});
