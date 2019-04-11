
let songs = [' Annie Lennox - A Spell on you',
'50 Shades of Grey  - Crazy in love HQ',
'Bishop Briggs - River (Official Music Video)',
'Gnarls Barkley - Crazy',
'I Put A Spell on you- Annie Lennox Lyrics (fifty shades of grey)',
'Nina Simone - Feeling Good (Avicii Remix)',
'The Heart Wants What It Wants',
'The Weeknd - Valerie (Vladish Edit)',
'The Weeknd Earned It (Fifty Shades Of Grey) Official Lyric Video',
'Two Feet - I Feel Like Im Drowning (Español)'
]

let songTitle = document.getElementById('song-title');
let songSlider = document.getElementById('song-slider');
let currentTime = document.getElementById('current-time');
let duration = document.getElementById('duration');
let volume = document.getElementById('volume');
let nextSong = document.getElementById('next-song');

let song = new Audio();
let currentSong = 0;

window.onload = loadSong;

function loadSong() {
    song.src = 'songs/' + songs[currentSong];
    songTitle.textContent = (currentSong + 1) + '. ' + songs[currentSong];
    nextSongTitle.innerHTML = '<b>Next Songs: </b>' + songs[currentSong + 1 % songs.length];
    song.volume = volumeSlider.value;
}
