document.addEventListener('DOMContentLoaded', () => {
    loadGallery();
    loadPosts();
});

function loadGallery() {
    fetch('data/gallery.json')
        .then(response => response.json())
        .then(galleryItems => {
            const galleryContainer = document.getElementById('gallery-container');
            galleryItems.forEach(item => {
                const galleryElement = document.createElement('div');
                galleryElement.className = 'gallery-item';
                galleryElement.innerHTML = `
                    <img src="${item.image}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                `;
                galleryContainer.appendChild(galleryElement);
            });
        });
}

function loadPosts() {
    fetch('data/posts.json')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                postElement.innerHTML = `
                    <img src="${post.image}" alt="${post.title}">
                    <h3>${post.title}</h3>
                    <p>${post.summary}</p>
                `;
                postsContainer.appendChild(postElement);
            });
        });
}
