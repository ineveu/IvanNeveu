const videos = [
    { url: 'https://youtu.be/vApPNAZneLM?si=VLe_j5WHIg_Fuf4L', tags: ['Motion Graphics', 'Reel'] },
    { url: 'https://player.vimeo.com/video/VIDEO_ID_2', tags: ['tag1'] },
    // Add more videos with respective tags
];

function renderVideos(filteredVideos) {
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '';

    filteredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `<iframe src="${video.url}" frameborder="0" allowfullscreen></iframe>
                              <div class="video-title">${video.tags.join(', ')}</div>`;
        grid.appendChild(videoItem);
    });
}

function filterVideos(tag) {
    const filteredVideos = tag === 'all' ? videos : videos.filter(video => video.tags.includes(tag));
    renderVideos(filteredVideos);
}

// Initial rendering
filterVideos('all');
