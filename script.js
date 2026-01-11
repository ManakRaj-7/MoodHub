// Content Data
const contentData = {
    quotes: {
        happy: [
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
            { text: "Life is what happens to you while you're busy making other plans.", author: "John Lennon" },
            { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
            { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
            { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" }
        ],
        sad: [
            { text: "The wound is the place where the Light enters you.", author: "Rumi" },
            { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
            { text: "The only way out is through.", author: "Robert Frost" },
            { text: "Every morning we are born again. What we do today is what matters most.", author: "Buddha" },
            { text: "It's okay to not be okay; it's not okay to stay that way.", author: "Anonymous" }
        ],
        motivated: [
            { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
            { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
            { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
            { text: "Champions are made when nobody is watching.", author: "Anonymous" }
        ],
        relaxed: [
            { text: "Peace cannot be kept by force; it can only be achieved by understanding.", author: "Albert Einstein" },
            { text: "The present moment is the only time over which we have dominion.", author: "Thich Nhat Hanh" },
            { text: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.", author: "Ralph Marston" },
            { text: "Calm mind brings inner strength and self-confidence.", author: "Dalai Lama" },
            { text: "Sometimes the most productive thing you can do is relax.", author: "Mark Black" }
        ],
        anxious: [
            { text: "You have been assigned this mountain to show others it can be moved.", author: "Mel Robbins" },
            { text: "Anxiety is the dizziness of freedom.", author: "Søren Kierkegaard" },
            { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
            { text: "The cave you fear to enter holds the treasure you seek.", author: "Joseph Campbell" },
            { text: "Breathe in peace, breathe out stress.", author: "Anonymous" }
        ],
        creative: [
            { text: "Creativity takes courage.", author: "Henri Matisse" },
            { text: "The secret to creativity is knowing how to hide your sources.", author: "Pablo Picasso" },
            { text: "Every artist was first an amateur.", author: "Ralph Waldo Emerson" },
            { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
            { text: "The desire to create is one of the deepest yearnings of the human soul.", author: "Dieter F. Uchtdorf" }
        ],
        nostalgic: [
            { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bill Keane" },
            { text: "The past beats inside me like a second heart.", author: "John Banville" },
            { text: "Nostalgia is a file that removes the rough edges from the good old days.", author: "Doug Larson" },
            { text: "We are all time travelers moving at the speed of exactly one second per second.", author: "Anonymous" },
            { text: "Memory is the diary that we all carry about with us.", author: "Oscar Wilde" }
        ],
        energetic: [
            { text: "Energy and persistence conquer all things.", author: "Benjamin Franklin" },
            { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
            { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
            { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
            { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" }
        ]
    },
    books: {
        happy: [
            { title: "The Happiness Project", author: "Gretchen Rubin", description: "A memoir about one woman's year-long quest to discover what leads to true happiness." },
            { title: "The Power of Positive Thinking", author: "Norman Vincent Peale", description: "Classic guide to achieving personal satisfaction and success." },
            { title: "Atomic Habits", author: "James Clear", description: "Proven ways to build good habits and break bad ones." }
        ],
        sad: [
            { title: "The Power of Now", author: "Eckhart Tolle", description: "A guide to spiritual enlightenment and living in the present moment." },
            { title: "Option B", author: "Sheryl Sandberg", description: "Building resilience and finding joy after facing adversity." },
            { title: "The Gifts of Imperfection", author: "Brené Brown", description: "Embracing vulnerability and cultivating courage, compassion, and connection." }
        ],
        motivated: [
            { title: "Think and Grow Rich", author: "Napoleon Hill", description: "The classic guide to wealth and personal achievement." },
            { title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", description: "Powerful lessons in personal change and effectiveness." },
            { title: "Mindset", author: "Carol Dweck", description: "The new psychology of success and the power of believing you can improve." }
        ],
        relaxed: [
            { title: "The Art of Happiness", author: "Dalai Lama", description: "A handbook for living based on Buddhist philosophy." },
            { title: "Wherever You Go, There You Are", author: "Jon Kabat-Zinn", description: "Mindfulness meditation in everyday life." },
            { title: "The Miracle of Mindfulness", author: "Thich Nhat Hanh", description: "An introduction to the practice of meditation." }
        ],
        anxious: [
            { title: "The Anxiety and Worry Workbook", author: "David A. Clark", description: "The cognitive behavioral solution to overcome anxiety." },
            { title: "Dare", author: "Barry McDonagh", description: "The new way to end anxiety and stop panic attacks." },
            { title: "The Worry Cure", author: "Robert Leahy", description: "Seven steps to stop worry from stopping you." }
        ],
        creative: [
            { title: "The Artist's Way", author: "Julia Cameron", description: "A spiritual path to higher creativity." },
            { title: "Big Magic", author: "Elizabeth Gilbert", description: "Creative living beyond fear." },
            { title: "Steal Like an Artist", author: "Austin Kleon", description: "10 things nobody told you about being creative." }
        ],
        nostalgic: [
            { title: "The Time Traveler's Wife", author: "Audrey Niffenegger", description: "A love story that transcends time." },
            { title: "Midnight in Paris", author: "Woody Allen", description: "A nostalgic journey through literary history." },
            { title: "The Great Gatsby", author: "F. Scott Fitzgerald", description: "A classic tale of love, loss, and the American Dream." }
        ],
        energetic: [
            { title: "The 5 AM Club", author: "Robin Sharma", description: "Own your morning, elevate your life." },
            { title: "High Performance Habits", author: "Brendon Burchard", description: "How extraordinary people become that way." },
            { title: "The Compound Effect", author: "Darren Hardy", description: "Jumpstart your income, your life, your success." }
        ]
    },
    websites: {
        happy: [
            { title: "TED Talks", description: "Inspiring talks from amazing speakers", url: "https://ted.com" },
            { title: "Coursera", description: "Online courses from top universities", url: "https://coursera.org" },
            { title: "Khan Academy", description: "Free online learning for anyone", url: "https://khanacademy.org" }
        ],
        sad: [
            { title: "7 Cups", description: "Free emotional support and counseling", url: "https://7cups.com" },
            { title: "Headspace", description: "Meditation and mindfulness", url: "https://headspace.com" },
            { title: "Crisis Text Line", description: "Free 24/7 text support", url: "https://crisistextline.org" }
        ],
        motivated: [
            { title: "Coursera", description: "Online courses and degrees", url: "https://coursera.org" },
            { title: "LinkedIn Learning", description: "Professional development courses", url: "https://linkedin.com/learning" },
            { title: "Udemy", description: "Learn new skills online", url: "https://udemy.com" }
        ],
        relaxed: [
            { title: "Calm", description: "Meditation and sleep stories", url: "https://calm.com" },
            { title: "Noisli", description: "Background noise and color generator", url: "https://noisli.com" },
            { title: "A Soft Murmur", description: "Ambient sounds for relaxation", url: "https://asoftmurmur.com" }
        ],
        anxious: [
            { title: "Anxiety and Depression Association", description: "Mental health resources", url: "https://adaa.org" },
            { title: "Mindful", description: "Mindfulness and meditation guidance", url: "https://mindful.org" },
            { title: "Calm", description: "Meditation and relaxation app", url: "https://calm.com" }
        ],
        creative: [
            { title: "Behance", description: "Creative portfolio platform", url: "https://behance.net" },
            { title: "Dribbble", description: "Design inspiration community", url: "https://dribbble.com" },
            { title: "CreativeLive", description: "Online creative classes", url: "https://creativelive.com" }
        ],
        nostalgic: [
            { title: "Internet Archive", description: "Digital library of historical content", url: "https://archive.org" },
            { title: "Old Games Download", description: "Classic video games", url: "https://oldgamesdownload.com" },
            { title: "Radiooooo", description: "Music from around the world by decade", url: "https://radiooooo.com" }
        ],
        energetic: [
            { title: "Nike Training Club", description: "Free fitness workouts", url: "https://nike.com/ntc-app" },
            { title: "Fitness Blender", description: "Free workout videos", url: "https://fitnessblender.com" },
            { title: "MyFitnessPal", description: "Calorie counter and fitness tracker", url: "https://myfitnesspal.com" }
        ]
    },
    videos: {
        happy: [
            { title: "Funny Animal Videos Compilation", description: "Hilarious pets and animals", url: "https://youtube.com/watch?v=hFZFjoX2cGg" },
            { title: "Feel Good Music Mix", description: "Uplifting songs to boost your mood", url: "https://youtube.com/watch?v=ZbZSe6N_BXs" },
            { title: "Comedy Sketches", description: "Best comedy moments compilation", url: "https://youtube.com/watch?v=jKS3MGriZcs" }
        ],
        sad: [
            { title: "Guided Meditation for Healing", description: "15-minute healing meditation", url: "https://youtube.com/watch?v=ZToicYcHIOU" },
            { title: "Peaceful Nature Sounds", description: "Calming sounds for relaxation", url: "https://youtube.com/watch?v=eKFTSSKCzWA" },
            { title: "Inspirational Speech", description: "Motivational words for tough times", url: "https://youtube.com/watch?v=mgmVOuLgFB0" }
        ],
        motivated: [
            { title: "Best Motivational Speech", description: "Powerful motivation compilation", url: "https://youtube.com/watch?v=mgmVOuLgFB0" },
            { title: "Success Stories", description: "How ordinary people achieved extraordinary things", url: "https://youtube.com/watch?v=7sxpKhIbr0E" },
            { title: "Workout Motivation", description: "Get pumped for your fitness goals", url: "https://youtube.com/watch?v=IdTMDpizis8" }
        ],
        relaxed: [
            { title: "Ocean Waves for Sleep", description: "10 hours of peaceful ocean sounds", url: "https://youtube.com/watch?v=eKFTSSKCzWA" },
            { title: "Gentle Yoga Flow", description: "Relaxing yoga for all levels", url: "https://youtube.com/watch?v=v7AYKMP6rOE" },
            { title: "Guided Meditation", description: "10-minute mindfulness practice", url: "https://youtube.com/watch?v=ZToicYcHIOU" }
        ],
        anxious: [
            { title: "Breathing Exercises", description: "Techniques to calm anxiety", url: "https://youtube.com/watch?v=YRPh_GaiL8s" },
            { title: "Anxiety Relief Meditation", description: "Guided meditation for anxiety", url: "https://youtube.com/watch?v=ZToicYcHIOU" },
            { title: "Calming Music", description: "Relaxing music to reduce stress", url: "https://youtube.com/watch?v=1ZYbU82GVz4" }
        ],
        creative: [
            { title: "Art Tutorials", description: "Learn new drawing techniques", url: "https://youtube.com/watch?v=ewMksAbgdBI" },
            { title: "Creative Writing Tips", description: "Improve your storytelling skills", url: "https://youtube.com/watch?v=_kQJVKkmOIU" },
            { title: "Photography Basics", description: "Essential photography techniques", url: "https://youtube.com/watch?v=7ZVyNjKSr0M" }
        ],
        nostalgic: [
            { title: "90s Music Hits", description: "Best songs from the 1990s", url: "https://youtube.com/watch?v=dQw4w9WgXcQ" },
            { title: "Classic Movie Scenes", description: "Iconic moments from cinema history", url: "https://youtube.com/watch?v=O5RdMvgk8b0" },
            { title: "Old TV Show Compilations", description: "Best moments from classic shows", url: "https://youtube.com/watch?v=qR3rK0kZFkg" }
        ],
        energetic: [
            { title: "High Energy Workout", description: "Intense 30-minute cardio session", url: "https://youtube.com/watch?v=IdTMDpizis8" },
            { title: "Pump Up Music", description: "High-energy songs for motivation", url: "https://youtube.com/watch?v=ZbZSe6N_BXs" },
            { title: "Dance Workout", description: "Fun dance moves for fitness", url: "https://youtube.com/watch?v=gC_L9qAHVJ8" }
        ]
    },
    music: {
        happy: [
            { title: "Feel Good Hits", description: "Uplifting songs to brighten your day", songs: ["Happy - Pharrell Williams", "Good as Hell - Lizzo", "Can't Stop the Feeling - Justin Timberlake", "Walking on Sunshine - Katrina and the Waves"] },
            { title: "Pop Classics", description: "Timeless pop songs that never get old", songs: ["Don't Stop Believin' - Journey", "Sweet Caroline - Neil Diamond", "Mr. Blue Sky - ELO", "I Want It That Way - Backstreet Boys"] }
        ],
        sad: [
            { title: "Melancholy Melodies", description: "Songs for when you need a good cry", songs: ["Mad World - Gary Jules", "Hurt - Johnny Cash", "Black - Pearl Jam", "Tears in Heaven - Eric Clapton"] },
            { title: "Healing Sounds", description: "Gentle music for emotional healing", songs: ["Weightless - Marconi Union", "Clair de Lune - Debussy", "Gymnopédie No.1 - Erik Satie", "The Swan - Saint-Saëns"] }
        ],
        motivated: [
            { title: "Pump Up Playlist", description: "High-energy tracks for motivation", songs: ["Eye of the Tiger - Survivor", "Stronger - Kanye West", "Till I Collapse - Eminem", "We Will Rock You - Queen"] },
            { title: "Workout Anthems", description: "Perfect for your fitness routine", songs: ["Thunderstruck - AC/DC", "Pump It - Black Eyed Peas", "Lose Yourself - Eminem", "Remember the Name - Fort Minor"] }
        ],
        relaxed: [
            { title: "Chill Vibes", description: "Perfect for relaxation and focus", songs: ["Weightless - Marconi Union", "Clair de Lune - Debussy", "Gymnopédie No.1 - Erik Satie", "Aqueous Transmission - Incubus"] },
            { title: "Nature Sounds", description: "Ambient sounds from nature", songs: ["Ocean Waves", "Forest Rain", "Mountain Stream", "Bird Songs"] }
        ],
        anxious: [
            { title: "Calming Melodies", description: "Soothing music to reduce anxiety", songs: ["Weightless - Marconi Union", "Watermark - Enya", "Clair de Lune - Debussy", "The Blue Danube - Johann Strauss"] },
            { title: "Meditation Music", description: "Peaceful tracks for mindfulness", songs: ["Om Mani Padme Hum", "Tibetan Singing Bowls", "432 Hz Frequency", "Zen Garden"] }
        ],
        creative: [
            { title: "Creative Flow", description: "Inspiring music for artistic work", songs: ["Radiohead - Weird Fishes", "Bon Iver - Holocene", "Thom Yorke - Hearing Damage", "Sigur Rós - Hoppípolla"] },
            { title: "Instrumental Focus", description: "Wordless music for concentration", songs: ["Ludovico Einaudi - Nuvole Bianche", "Max Richter - On The Nature of Daylight", "Ólafur Arnalds - Near Light", "Nils Frahm - Says"] }
        ],
        nostalgic: [
            { title: "Throwback Hits", description: "Songs that take you back in time", songs: ["Bohemian Rhapsody - Queen", "Hotel California - Eagles", "Imagine - John Lennon", "Yesterday - The Beatles"] },
            { title: "90s Classics", description: "The best of the 1990s", songs: ["Smells Like Teen Spirit - Nirvana", "Wonderwall - Oasis", "Creep - Radiohead", "No Scrubs - TLC"] }
        ],
        energetic: [
            { title: "High Energy Mix", description: "Upbeat tracks to get you moving", songs: ["Uptown Funk - Mark Ronson ft. Bruno Mars", "Can't Stop the Feeling - Justin Timberlake", "Shake It Off - Taylor Swift", "Happy - Pharrell Williams"] },
            { title: "Electronic Beats", description: "Electronic music for energy", songs: ["Levels - Avicii", "Titanium - David Guetta", "Animals - Martin Garrix", "Clarity - Zedd"] }
        ]
    },
    poems: {
        happy: [
            { title: "The Guest House", author: "Rumi", excerpt: "This being human is a guest house. Every morning a new arrival. A joy, a depression, a meanness..." },
            { title: "Still I Rise", author: "Maya Angelou", excerpt: "You may write me down in history with your bitter, twisted lies, you may trod me in the very dirt..." }
        ],
        sad: [
            { title: "Do Not Go Gentle Into That Good Night", author: "Dylan Thomas", excerpt: "Do not go gentle into that good night, old age should burn and rave at close of day..." },
            { title: "The Guest House", author: "Rumi", excerpt: "This being human is a guest house. Every morning a new arrival..." }
        ],
        motivated: [
            { title: "If—", author: "Rudyard Kipling", excerpt: "If you can keep your head when all about you are losing theirs and blaming it on you..." },
            { title: "Invictus", author: "William Ernest Henley", excerpt: "Out of the night that covers me, black as the pit from pole to pole..." }
        ],
        relaxed: [
            { title: "The Peace of Wild Things", author: "Wendell Berry", excerpt: "When despair for the world grows in me and I wake in the night..." },
            { title: "Mindful", author: "Mary Oliver", excerpt: "Every day I see or hear something that more or less kills me with delight..." }
        ],
        anxious: [
            { title: "Wild Geese", author: "Mary Oliver", excerpt: "You do not have to be good. You do not have to walk on your knees..." },
            { title: "The Guest House", author: "Rumi", excerpt: "This being human is a guest house. Every morning a new arrival..." }
        ],
        creative: [
            { title: "The Summer Day", author: "Mary Oliver", excerpt: "Who made the world? Who made the swan, and the black bear?..." },
            { title: "A Blessing", author: "James Wright", excerpt: "Just off the highway to Rochester, Minnesota, twilight bounds softly forth..." }
        ],
        nostalgic: [
            { title: "The Road Not Taken", author: "Robert Frost", excerpt: "Two roads diverged in a yellow wood, and sorry I could not travel both..." },
            { title: "Those Winter Sundays", author: "Robert Hayden", excerpt: "Sundays too my father got up early and put his clothes on in the blueblack cold..." }
        ],
        energetic: [
            { title: "Song of Myself", author: "Walt Whitman", excerpt: "I celebrate myself, and sing myself, and what I assume you shall assume..." },
            { title: "Phenomenal Woman", author: "Maya Angelou", excerpt: "Pretty women wonder where my secret lies. I'm not cute or built to suit a fashion model's size..." }
        ]
    }
};

// Global variables
let currentMood = 'happy';
let currentTab = 'quotes';

// DOM Elements
const moodButtons = document.querySelectorAll('.mood-btn');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeMoodButtons();
    initializeTabButtons();
    loadContent();
});

// Mood selection functionality
function initializeMoodButtons() {
    moodButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            moodButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update current mood
            currentMood = this.dataset.mood;
            
            // Load content for new mood
            loadContent();
        });
    });
}

// Tab navigation functionality
function initializeTabButtons() {
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all tab buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Show selected tab content
            const tabId = this.dataset.tab;
            currentTab = tabId;
            document.getElementById(tabId).classList.add('active');
            
            // Load content for new tab
            loadContent();
        });
    });
}

// Load content based on current mood and tab
function loadContent() {
    switch(currentTab) {
        case 'quotes':
            loadQuotes();
            break;
        case 'books':
            loadBooks();
            break;
        case 'websites':
            loadWebsites();
            break;
        case 'videos':
            loadVideos();
            break;
        case 'music':
            loadMusic();
            break;
        case 'poems':
            loadPoems();
            break;
    }
}

// Load quotes
function loadQuotes() {
    const container = document.querySelector('.quotes-container');
    const quotes = contentData.quotes[currentMood] || contentData.quotes.happy;
    
    container.innerHTML = '';
    
    // Show random quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    container.innerHTML = `
        <div class="quote-card">
            <p class="quote-text">"${randomQuote.text}"</p>
            <p class="quote-author">- ${randomQuote.author}</p>
        </div>
    `;
}

// Load books
function loadBooks() {
    const container = document.querySelector('.books-container');
    const books = contentData.books[currentMood] || contentData.books.happy;
    
    container.innerHTML = '';
    
    // Show random book
    const randomBook = books[Math.floor(Math.random() * books.length)];
    container.innerHTML = `
        <div class="book-card">
            <div class="book-info">
                <h4>${randomBook.title}</h4>
                <p class="book-author">by ${randomBook.author}</p>
                <p class="book-description">${randomBook.description}</p>
            </div>
        </div>
    `;
}

// Load websites
function loadWebsites() {
    const container = document.querySelector('.websites-container');
    const websites = contentData.websites[currentMood] || contentData.websites.happy;
    
    container.innerHTML = '';
    
    // Show random website
    const randomWebsite = websites[Math.floor(Math.random() * websites.length)];
    container.innerHTML = `
        <div class="website-card">
            <h4>${randomWebsite.title}</h4>
            <p>${randomWebsite.description}</p>
        </div>
    `;
}

// Load videos
function loadVideos() {
    const container = document.querySelector('.videos-container');
    const videos = contentData.videos[currentMood] || contentData.videos.happy;
    
    container.innerHTML = '';
    
    // Show random video
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];
    container.innerHTML = `
        <div class="video-card">
            <h4>${randomVideo.title}</h4>
            <p>${randomVideo.description}</p>
            <a href="${randomVideo.url}" target="_blank" class="video-link">Watch on YouTube</a>
        </div>
    `;
}

// Load music
function loadMusic() {
    const container = document.querySelector('.music-container');
    const musicPlaylists = contentData.music[currentMood] || contentData.music.happy;
    
    container.innerHTML = '';
    
    // Show random playlist
    const randomPlaylist = musicPlaylists[Math.floor(Math.random() * musicPlaylists.length)];
    const songsList = randomPlaylist.songs.map(song => `<div class="song">♪ ${song}</div>`).join('');
    container.innerHTML = `
        <div class="music-card">
            <h4>${randomPlaylist.title}</h4>
            <p>${randomPlaylist.description}</p>
            <div class="playlist">
                ${songsList}
            </div>
        </div>
    `;
}

// Load poems
function loadPoems() {
    const container = document.querySelector('.poems-container');
    const poems = contentData.poems[currentMood] || contentData.poems.happy;
    
    container.innerHTML = '';
    
    // Show random poem
    const randomPoem = poems[Math.floor(Math.random() * poems.length)];
    container.innerHTML = `
        <div class="poem-card">
            <h4>${randomPoem.title}</h4>
            <p class="poem-author">by ${randomPoem.author}</p>
            <div class="poem-text">
                <p>${randomPoem.excerpt}</p>
            </div>
        </div>
    `;
}

// Refresh functions
function refreshQuotes() {
    loadQuotes();
    animateRefresh();
}

function refreshBooks() {
    loadBooks();
    animateRefresh();
}

function refreshWebsites() {
    loadWebsites();
    animateRefresh();
}

function refreshVideos() {
    loadVideos();
    animateRefresh();
}

function refreshMusic() {
    loadMusic();
    animateRefresh();
}

function refreshPoems() {
    loadPoems();
    animateRefresh();
}

// Animate refresh button
function animateRefresh() {
    const refreshBtn = document.querySelector('.refresh-btn');
    refreshBtn.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        refreshBtn.style.transform = 'rotate(0deg)';
    }, 300);
}

// Add some smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeTabIndex = Array.from(tabButtons).findIndex(btn => btn.classList.contains('active'));
        let newIndex;
        
        if (e.key === 'ArrowLeft') {
            newIndex = activeTabIndex > 0 ? activeTabIndex - 1 : tabButtons.length - 1;
        } else {
            newIndex = activeTabIndex < tabButtons.length - 1 ? activeTabIndex + 1 : 0;
        }
        
        tabButtons[newIndex].click();
    }
});

// Add loading animation
function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'loading-spinner';
    loader.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    document.body.appendChild(loader);
    
    setTimeout(() => {
        loader.remove();
    }, 1000);
}

// Add some easter eggs
let clickCount = 0;
document.querySelector('.logo').addEventListener('click', function() {
    clickCount++;
    if (clickCount === 5) {
        this.textContent = '🎉 MoodHub 🎉';
        setTimeout(() => {
            this.textContent = '🌟 MoodHub';
            clickCount = 0;
        }, 2000);
    }
});
