// List of videos with corresponding embed codes, tags, and Vimeo video IDs
const videos = [
    { embedCode: '<img src="images/image-201187557.png" alt="Image 1">', tags: ['demo', 'reel', 'motion graphics'], vimeoVideoId: '201187557' },
    { embedCode: '<img src="images/image-90584639.png" alt="Image 2">', tags: ['demo','reel', 'character animation'], vimeoVideoId: '90584639' },
    //{ embedCode: '<img src="images/image-89743717.png" alt="Image 2">', tags: ['demo','reel', 'compositing'], vimeoVideoId: '89743717' },
    { embedCode: '<img src="images/image-393211584.png" alt="Image 1">', tags: ['show pitch','design', 'character animation'], vimeoVideoId: '393211584' },
    { embedCode: '<img src="images/image-908917822.png" alt="Image 2">', tags: ['character animation'], vimeoVideoId: '908917822' },
    { embedCode: '<img src="images/image-236523917.png" alt="Image 2">', tags: ['character animation'], vimeoVideoId: '236523917' },
    { embedCode: '<img src="images/image-182959783.png" alt="Image 1">', tags: ['motion graphics', 'design'], vimeoVideoId: '182959783' },
    { embedCode: '<img src="images/image-475709830.png" alt="Image 2">', tags: ['editing', 'design'], vimeoVideoId: '475709830' },
    { embedCode: '<img src="images/image-226944712.png" alt="Image 2">', tags: ['editing', 'making of doc'], vimeoVideoId: '226944712' },
    { embedCode: '<img src="images/image-226943813.png" alt="Image 2">', tags: ['editing', 'making of doc'], vimeoVideoId: '226943813' },
    { embedCode: '<img src="images/image-141129446.png" alt="Image 2">', tags: ['pitch','editing', 'design'], vimeoVideoId: '141129446' },
    { embedCode: '<img src="images/image-908465813.png" alt="Image 2">', tags: ['compositing'], vimeoVideoId: '908465813' },
    { embedCode: '<img src="images/image-908468721.png" alt="Image 2">', tags: ['compositing'], vimeoVideoId: '908468721' },
    { embedCode: '<img src="images/image-908470537.png" alt="Image 2">', tags: ['compositing'], vimeoVideoId: '908470537' },
    { embedCode: '<img src="images/image-908471601.png" alt="Image 2">', tags: ['compositing'], vimeoVideoId: '908471601' },
    { embedCode: '<img src="images/image-908473397.png" alt="Image 2">', tags: ['character animation'], vimeoVideoId: '908473397' },
    { embedCode: '<img src="images/image-908475904.png" alt="Image 2">', tags: ['character animation'], vimeoVideoId: '908475904' },
    { embedCode: '<img src="images/image-908478390.png" alt="Image 2">', tags: ['character animation'], vimeoVideoId: '908478390' },
    { embedCode: '<img src="images/image-908915937.png" alt="Image 2">', tags: ['compositing'], vimeoVideoId: '908915937' },
    { embedCode: '<img src="images/image-908920789.png" alt="Image 2">', tags: ['character animation'], vimeoVideoId: '908920789' },
    { embedCode: '<img src="images/image-908922600.png" alt="Image 2">', tags: ['compositing'], vimeoVideoId: '908922600' },
	{ embedCode: '<img src="images/image-909126417.png" alt="Image 2">', tags: ['compositing'], vimeoVideoId: '909126417' },
	{ embedCode: '<img src="images/image-909133693.png" alt="Image 2">', tags: ['compositing'], vimeoVideoId: '909133693' },	

    // Add more images with respective tags and Vimeo video IDs
];

// Function to render videos based on the selected tag
function renderVideos(filteredVideos) {
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '';

    filteredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `${video.embedCode}
                              <div class="video-title">${video.tags.join(', ')}</div>`;
        grid.appendChild(videoItem);

        // Add click event to each video item to open the corresponding Vimeo video
        videoItem.addEventListener('click', () => openVideoModal(video.vimeoVideoId));
    });
}

// Function to filter videos based on the selected tag
function filterVideos(tag) {
    const filteredVideos = tag === 'all' ? videos : videos.filter(video => video.tags.includes(tag));
    renderVideos(filteredVideos);
}

// Function to open Vimeo video in modal
function openVideoModal(vimeoVideoId) {
    const modal = document.getElementById('modal');
    modal.classList.add('open');

    // Use the Vimeo API to load the video into the iframe
    const iframe = document.getElementById('vimeo-player');
    iframe.src = `https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=0&byline=0&portrait=0`;

    // Close the modal when the video ends
    iframe.addEventListener('ended', closeVideoModal);
}

// Function to close the video modal
function closeVideoModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');

    // Reset the iframe src to stop the video
    const iframe = document.getElementById('vimeo-player');
    iframe.src = '';
}

// Initial rendering with all videos
filterVideos('all');

// Add an event listener for the close button
document.getElementById('close-modal-btn').addEventListener('click', closeVideoModal);

// Function to open Vimeo video in modal
function openVideoModal(vimeoVideoId) {
    const modal = document.getElementById('modal');
    modal.classList.add('open');

    // Use the Vimeo API to load the video into the iframe
    const iframe = document.getElementById('vimeo-player');
    iframe.src = `https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&loop=0&byline=0&portrait=0`;

  // Set the style for the iframe to force the desired size (e.g., width: 800px; height: 450px;)
    iframe.style.width = '80%'; // Adjust the width as needed
    iframe.style.height = '450px'; // Adjust the height as needed


    // Close the modal when the close button or video ends
    iframe.addEventListener('ended', closeVideoModal);
}

// Function to close the video modal
function closeVideoModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('open');

    // Reset the iframe src to stop the video
    const iframe = document.getElementById('vimeo-player');
    iframe.src = '';
}
