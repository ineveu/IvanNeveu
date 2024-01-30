document.addEventListener('DOMContentLoaded', function () {
    fetchVideos();
});

function fetchVideos() {
    // Assuming you have a JSON file with video data in the root of your repository
    fetch('videos.json')
        .then(response => response.json())
        .then(videos => renderVideoGallery(videos))
        .catch(error => console.error('Error fetching videos:', error));
}

function renderVideoGallery(videos) {
    const gallery = document.getElementById('video-gallery');
    gallery.innerHTML = '';

    videos.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';

        videoCard.innerHTML = `
            <h3>${video.title}</h3>
            <video width="100%" controls>
                <source src="${video.url}" type="video/mp4">
            </video>
            <p>${video.tags.join(', ')}</p>
        `;

        gallery.appendChild(videoCard);
    });
}
