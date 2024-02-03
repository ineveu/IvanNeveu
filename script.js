// List of videos with corresponding embed codes, tags, and Vimeo video IDs
const videos = [
    { embedCode: '<img src="images/image-201187557.png" alt="Motion Graphics Demo Reel">', description: 'Motion Graphics Reel', tags: ['reel', 'motion graphics'], vimeoVideoId: '201187557' },
    { embedCode: '<img src="images/image-90584639.png" alt="Character Animation Demo Reel">', description: 'Character Animation Reel',tags: ['reel', 'character animation'], vimeoVideoId: '90584639' },
    //{ embedCode: '<img src="images/image-89743717.png" alt="Comp and vfx Demo Reel">',  description: 'Compositing and VFX Reel', tags: ['reel', 'compositing'], vimeoVideoId: '89743717' },
    { embedCode: '<img src="images/image-393211584.png" alt="Sciene Giants pitch">', description: 'Science Giants Pitch', tags: ['design', 'character animation', 'vfx'], vimeoVideoId: '393211584' },
    { embedCode: '<img src="images/image-908917822.png" alt="Toronto Zoo">', description: 'Toronto Zoo Spot', tags: ['character animation'], vimeoVideoId: '908917822' },
    { embedCode: '<img src="images/image-236523917.png" alt="Wolf Birds Motion Test">', description: 'Wolf Birds Motion Test', tags: ['character animation'], vimeoVideoId: '236523917' },
    { embedCode: '<img src="images/image-475709830.png" alt="Exsister ad">', description: 'ExSiStErS Infomercial', tags: ['editing', 'design'], vimeoVideoId: '475709830' },
	{ embedCode: '<img src="images/image-908465813.png" alt="Beeline Telecom">', description: 'Beeline Telecom Spot', tags: ['compositing'], vimeoVideoId: '908465813' },
    { embedCode: '<img src="images/image-226944712.png" alt="Mini doc">', description: 'Making Of An Anaglyph Theatrical Ad',tags: ['editing',], vimeoVideoId: '226944712' },
    { embedCode: '<img src="images/image-226943813.png" alt="Mini doc">', description: 'Making Of A Stop Motion Ad', tags: ['editing',], vimeoVideoId: '226943813' },
    { embedCode: '<img src="images/image-141129446.png" alt="Milkshake explainer">', description: 'Foody Docuseries Explainer', tags: ['editing', 'design'], vimeoVideoId: '141129446' },
    { embedCode: '<img src="images/image-908468721.png" alt="Toyota Spot">', description: 'Toyota Spot',tags: ['compositing'], vimeoVideoId: '908468721' },
    { embedCode: '<img src="images/image-908470537.png" alt="FruitKrisps">', description: 'Christie FruitKrisps', tags: ['compositing'], vimeoVideoId: '908470537' },
    { embedCode: '<img src="images/image-908471601.png" alt="FruitKrisps">', description: 'Christie FruitKrisps', tags: ['compositing'], vimeoVideoId: '908471601' },
    { embedCode: '<img src="images/image-908473397.png" alt="SuperCell Dream Sequence">', description: 'SuperCell Dream Sequence', tags: ['character animation'], vimeoVideoId: '908473397' },
    { embedCode: '<img src="images/image-908475904.png" alt="Starbucks Episode">', description: 'Starbucks Xmas Miniseries', tags: ['character animation'], vimeoVideoId: '908475904' },
    { embedCode: '<img src="images/image-908478390.png" alt="SmashBar">', description: 'Quaker SmashBar', tags: ['character animation'], vimeoVideoId: '908478390' },
    { embedCode: '<img src="images/image-908915937.png" alt="Catholic Teachers">', description: 'Catholic Teachers Union', tags: ['compositing'], vimeoVideoId: '908915937' },
    { embedCode: '<img src="images/image-908920789.png" alt="SVS Glasses">', description: 'SVS Glasses Spot', tags: ['character animation'], vimeoVideoId: '908920789' },
    { embedCode: '<img src="images/image-908922600.png" alt="Honeycomb">', description: 'Honeycomb Spots', tags: ['compositing'], vimeoVideoId: '908922600' },
	{ embedCode: '<img src="images/image-909126417.png" alt="BIAG">', description: 'BIAG Spot', tags: ['compositing', 'motion graphics'], vimeoVideoId: '909126417' },
	{ embedCode: '<img src="images/image-909133693.png" alt="I dunno what this would be called">', description: 'In My Sleep...Thing', tags: ['compositing', 'motion graphics'], vimeoVideoId: '909133693' },	
	{ embedCode: '<img src="images/image-909191925.png" alt="Lays Chips ad">', description: 'Lays Chips', tags: ['compositing',], vimeoVideoId: '909191925' },	
    { embedCode: '<img src="images/image-182959783.png" alt="Halloween TVO">', description: 'TVO Halloween Bumper', tags: ['motion graphics', 'design',], vimeoVideoId: '182959783' },
	

    // Add more images with respective tags and Vimeo video IDs
];

// Function to render videos based on the selected tag
function renderVideos(filteredVideos) {
    const grid = document.getElementById('video-grid');
    grid.innerHTML = '';

    filteredVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.classList.add('video-item');
        videoItem.innerHTML = `
            ${video.embedCode}
            <div class="video-description">${video.description}</div>
            <div class="video-tags"> ${video.tags.join(', ')}</div>
        `;
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
