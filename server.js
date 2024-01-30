const express = require('express');
const app = express();
const port = 3000;

// Mock database (replace this with MongoDB or another database)
const videos = [
    { title: 'Character Animation Reel', url: 'videos/reel_Character_IvanNeveu.mp4', tags: ['Character animation', 'reel'] },
    { title: 'Motion Graphics Reel', url: 'videos/reel_MoGraph_IvanNeveu.mp4', tags: ['Motion Graphics', 'reel'] },
	{ title: 'VFX and Compositing Reel', url: 'videos/reel_CompVFX_IvanNeveu.mp4', tags: ['Compositing', 'reel', 'VFX'] },
	{ title: 'Catholic Teachers Union', url: 'videos/CatholicTeachers.mp4', tags: ['Compositing', 'VFX', 'stop motion'] },
	{ title: 'Supercell Builder', url: 'videos/superCell.mp4', tags: ['Character Animation'] },
    // Add more videos
];

app.use(express.static('public'));

app.get('/api/videos', (req, res) => {
    res.json(videos);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
