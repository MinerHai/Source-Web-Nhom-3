
    const posts = [
        { title: 'Minh quân đẹp trai is real :O', link: './singleblog.html', date: '18 Nov' },
        { title: 'sinh tố lá ngón ', link: './singleblog.html', date: '25 Apr' },
        { title: 'thập cẩm', link: './singleblog.html', date: '18 Nov' },
        { title: 'hải mai nơ', link: './singleblog.html', date: '18 Nov' },
        { title: 'chôm chôm', link: './singleblog.html', date: '18 Nov' },
        { title: 'xoài', link: './singleblog.html', date: '18 Nov' },
        { title: 'lá ngón ', link: './singleblog.html', date: '18 Nov' },
        { title: 'dừa', link: './singleblog.html', date: '18 Nov' },
        // Thêm các bài viết khác vào đây
    ];

    function searchPosts() {
        const searchInput = document.getElementById('search-input').value.toLowerCase();
        const searchResults = document.getElementById('search-results');
        searchResults.innerHTML = '';

        const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchInput));

        if (filteredPosts.length === 0) {
            searchResults.innerHTML = '<p>No results found</p>';
        } else {
            filteredPosts.forEach(post => {
                const postElement = document.createElement('a');
                postElement.href = post.link;
                postElement.innerHTML = `<strong>${post.title}</strong><br><small>${post.date}</small>`;
                searchResults.appendChild(postElement);
            });
        }
    }

    document.getElementById('search-input').addEventListener('input', searchPosts);

