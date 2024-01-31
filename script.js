const videos = [
    { embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_1" frameborder="0" allowfullscreen></iframe>', tags: ['tag1', 'tag2'] },
    { embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID_2" frameborder="0" allowfullscreen></iframe>', tags: ['tag1'] },
    // Add more videos with respective tags
];

function renderVideos(filteredVideos) {
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '';

    filteredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `${video.embedCode}
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
