const videos = [
    { embedCode: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/201187557?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Motion Graphics Reel by Ivan Neveu"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', tags: ['reels', 'motion graphics',] },
    { embedCode: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/90584639?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Character Animation Reel by Ivan Neveu"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', tags: ['reels', 'character animation',] },
    { embedCode: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/393211584?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Science Giants!"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', tags: ['design', 'character animation',] },
    { embedCode: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/236523917?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Wolf Birds Motion Test"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', tags: ['character animation'] },
    { embedCode: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/182959783?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Halloween Bumper by Ivan Neveu"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', tags: ['motion graphics', 'design'] },
    { embedCode: '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/475709830?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Erectoral College"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', tags: ['editing', 'design'] },
    { embedCode: '<div style="padding:66.67% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/226944712?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Milk3D_Making_Of"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>', tags: ['editing'] },
	
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
