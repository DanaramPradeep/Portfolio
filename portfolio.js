var projects = [
    { title: 'Admin Dashboard', description: 'Complete admin panel with user management, analytics, and data visualization', tags: ['HTML', 'CSS', 'JavaScript'], icon: '📊' },
    { title: 'Authentication UI', description: 'Complete authentication system with login, signup, and password reset', tags: ['HTML', 'CSS', 'JavaScript'], icon: '🔐' },
    { title: 'Blog Website', description: 'Dynamic blog platform with posts and content management', tags: ['HTML', 'CSS', 'JavaScript'], icon: '📝' },
    { title: 'Chat UI Simulator', description: 'Real-time chat interface with messaging features', tags: ['HTML', 'CSS', 'JavaScript'], icon: '💬' },
    { title: 'Crypto Price Tracker', description: 'Real-time cryptocurrency prices with wishlist in Indian Rupees', tags: ['JavaScript', 'API', 'CSS'], icon: '💰' },
    { title: 'E-Commerce Platform', description: 'Full-featured shopping platform with cart management', tags: ['HTML', 'CSS', 'JavaScript'], icon: '🛒' },
    { title: 'Expense Tracker', description: 'Track expenses and manage budget effectively', tags: ['JavaScript', 'HTML', 'CSS'], icon: '💵' },
    { title: 'GitHub Profile Viewer', description: 'View GitHub profiles with API integration', tags: ['JavaScript', 'API', 'CSS'], icon: '🐙' },
    { title: 'Weather App', description: 'Real-time weather with location search', tags: ['JavaScript', 'API', 'CSS'], icon: '🌤️' },
    { title: 'Todo App', description: 'Task management with add, edit, delete', tags: ['JavaScript', 'HTML', 'CSS'], icon: '✓' },
    { title: 'Quiz App', description: 'Interactive quiz with scoring system', tags: ['JavaScript', 'HTML', 'CSS'], icon: '❓' },
    { title: 'Calculator App', description: 'Feature-rich calculator with history', tags: ['JavaScript', 'HTML', 'CSS'], icon: '🧮' }
];

function renderProjects() {
    var grid = document.getElementById('projectsGrid');
    grid.innerHTML = '';
    
    for (var i = 0; i < projects.length; i++) {
        var project = projects[i];
        var card = document.createElement('div');
        card.className = 'project-card';
        
        var tagsHTML = '';
        for (var j = 0; j < project.tags.length; j++) {
            tagsHTML += '<span class="tag">' + project.tags[j] + '</span>';
        }
        
        card.innerHTML = '<div class="project-header"><span class="project-icon">' + project.icon + '</span></div>' +
            '<h3 class="project-title">' + project.title + '</h3>' +
            '<p class="project-desc">' + project.description + '</p>' +
            '<div class="project-tags">' + tagsHTML + '</div>' +
            '<div class="project-links">' +
            '<a href="#" class="project-link">View Demo</a>' +
            '<a href="#" class="project-link">Source Code</a>' +
            '</div>';
        
        grid.appendChild(card);
    }
}

var menuToggle = document.getElementById('menuToggle');
var sidebar = document.getElementById('sidebar');

menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

var navLinks = document.querySelectorAll('.nav-link');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        sidebar.classList.remove('active');
    });
}

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
    this.reset();
});

var sections = document.querySelectorAll('section');
var navLinksAll = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    var current = '';
    
    for (var i = 0; i < sections.length; i++) {
        var sectionTop = sections[i].offsetTop;
        
        if (window.pageYOffset >= sectionTop - 150) {
            current = sections[i].getAttribute('id');
        }
    }
    
    for (var j = 0; j < navLinksAll.length; j++) {
        navLinksAll[j].style.color = '#8892b0';
        if (navLinksAll[j].getAttribute('href') === '#' + current) {
            navLinksAll[j].style.color = '#64ffda';
        }
    }
});

renderProjects();
