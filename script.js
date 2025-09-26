// Enhanced JavaScript with new functionality

// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const themePicker = document.getElementById('themePicker');
const darkModeToggle = document.getElementById('darkModeToggle');
const cycleThemeBtn = document.getElementById('cycleTheme');
const randomThemeBtn = document.getElementById('randomTheme');
const body = document.body;
const darkModeIcon = darkModeToggle.querySelector('i');
const themeOptions = document.querySelectorAll('.theme-option');
const themeTransition = document.getElementById('themeTransition');
const backToTopBtn = document.getElementById('backToTop');
const loadingScreen = document.getElementById('loadingScreen');


// Project Modal Elements
const projectModal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalImage = document.getElementById('modalImage');
const modalDescription = document.getElementById('modalDescription');
const modalTech = document.getElementById('modalTech');
const modalCategory = document.getElementById('modalCategory');
const modalDate = document.getElementById('modalDate');
const modalClient = document.getElementById('modalClient');
const modalLiveLink = document.getElementById('modalLiveLink');
const modalCodeLink = document.getElementById('modalCodeLink');
const closeModal = document.getElementById('closeModal');

// Portfolio Carousel Elements
const portfolioGrid = document.getElementById('portfolioGrid');
const portfolioCarousel = document.getElementById('portfolioCarousel');
const carouselTrack = document.getElementById('carouselTrack');
const carouselNav = document.getElementById('carouselNav');

// Theme configuration
const themes = ['default', '1', '2', '3'];
let currentThemeIndex = 0;

// Project data
const projects = [
    {
        id: 1,
        title: "Modern E-commerce Platform",
        description: "Fully responsive e-commerce platform with intuitive user interface and seamless shopping experience. Features include product filtering, shopping cart, user authentication, and secure payment integration. The platform was built with a mobile-first approach and optimized for performance across all devices.",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
        category: "Web Design",
        date: "March 2024",
        client: "E-commerce Startup",
        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Payment Integration"],
        liveLink: "#",
        codeLink: "#"
    },
    {
        id: 2,
        title: "Fitness Tracking App",
        description: "Mobile application for tracking workouts, nutrition, and health metrics with beautiful data visualization. Includes features like progress tracking, workout plans, and social sharing. The app provides personalized recommendations based on user goals and activity levels.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        category: "App Development",
        date: "February 2024",
        client: "Fitness Company",
        technologies: ["React Native", "Firebase", "Chart.js", "Redux", "Health API Integration"],
        liveLink: "#",
        codeLink: "#"
    },
    {
        id: 3,
        title: "Brand Identity Design",
        description: "Complete visual identity system for a tech startup, including logo, color palette, and design guidelines. Created a cohesive brand experience across all digital and print materials. The project involved extensive research into the target audience and competitive landscape.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1760&q=80",
        category: "UI/UX",
        date: "January 2024",
        client: "Tech Startup",
        technologies: ["Figma", "Adobe Illustrator", "Brand Guidelines", "Typography", "User Research"],
        liveLink: "#",
        codeLink: "#"
    },
    {
        id: 4,
        title: "Educational Platform",
        description: "Interactive learning platform with video lessons, quizzes, and progress tracking. Designed to make learning engaging and accessible for students of all ages. The platform includes gamification elements to increase user engagement.",
        image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80",
        category: "Web Design",
        date: "December 2023",
        client: "Education Non-profit",
        technologies: ["HTML", "CSS", "JavaScript", "Video API", "Analytics"],
        liveLink: "#",
        codeLink: "#"
    },
    {
        id: 5,
        title: "Travel Booking App",
        description: "Mobile application for booking flights, hotels, and activities. Features include search filters, price comparison, and secure payment processing. The app provides personalized recommendations based on user preferences.",
        image: "https://images.unsplash.com/photo-1528033978085-52f315289665?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "App Development",
        date: "November 2023",
        client: "Travel Agency",
        technologies: ["React Native", "Firebase", "Payment Integration", "Maps API"],
        liveLink: "#",
        codeLink: "#"
    },
    {
        id: 6,
        title: "Healthcare Dashboard",
        description: "Dashboard for healthcare providers to manage patient records, appointments, and medical data. Designed with a focus on usability and data visualization for complex medical information.",
        image: "https://images.unsplash.com/photo-1691934286085-c88039d93dae?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        category: "UI/UX",
        date: "October 2023",
        client: "Healthcare Provider",
        technologies: ["Figma", "User Research", "Data Visualization", "Prototyping"],
        liveLink: "#",
        codeLink: "#"
    }
];

// Check for saved preferences
const savedTheme = localStorage.getItem('theme') || 'default';
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

// Apply saved preferences
body.classList.add(`theme-${savedTheme}`);
currentThemeIndex = themes.indexOf(savedTheme);

if (isDarkMode) {
    body.classList.add('dark-mode');
    darkModeIcon.classList.remove('fa-moon');
    darkModeIcon.classList.add('fa-sun');
}

// Set active theme option
themeOptions.forEach(option => {
    if (option.getAttribute('data-theme') === savedTheme) {
        option.classList.add('active');
    } else {
        option.classList.remove('active');
    }
});

// Initialize skills progress bars
function initSkillsProgress() {
    const skillProgressBars = document.querySelectorAll('.skill-progress');
    skillProgressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = `${width}%`;
        }, 500);
    });
}

// Initialize portfolio grid
function initPortfolioGrid() {
    portfolioGrid.innerHTML = '';
    
    projects.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', project.category.toLowerCase().replace(' ', '-'));
        portfolioItem.setAttribute('data-id', project.id);
        
        portfolioItem.innerHTML = `
            <div class="card">
                <div class="portfolio-img">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="portfolio-info">
                    <h3>${project.title}</h3>
                    <p>${project.description.substring(0, 120)}...</p>
                    <div class="portfolio-actions">
                        <button class="btn btn-outline view-project" data-id="${project.id}">View Details</button>
                        <a href="${project.liveLink}" class="btn">Live Demo</a>
                    </div>
                </div>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initialize portfolio carousel for mobile
function initPortfolioCarousel() {
    if (window.innerWidth > 768) return;
    
    // Clear existing content
    carouselTrack.innerHTML = '';
    carouselNav.innerHTML = '';
    
    // Add portfolio items to carousel
    projects.forEach((project, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = 'carousel-item';
        carouselItem.innerHTML = `
            <div class="portfolio-item" data-category="${project.category.toLowerCase().replace(' ', '-')}" data-id="${project.id}">
                <div class="card">
                    <div class="portfolio-img">
                        <img src="${project.image}" alt="${project.title}">
                    </div>
                    <div class="portfolio-info">
                        <h3>${project.title}</h3>
                        <p>${project.description.substring(0, 100)}...</p>
                        <div class="portfolio-actions">
                            <button class="btn btn-outline view-project" data-id="${project.id}">View Details</button>
                            <a href="${project.liveLink}" class="btn">Live Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        `;
        carouselTrack.appendChild(carouselItem);
        
        // Add carousel dot
        const carouselDot = document.createElement('div');
        carouselDot.className = `carousel-dot ${index === 0 ? 'active' : ''}`;
        carouselDot.setAttribute('data-index', index);
        carouselNav.appendChild(carouselDot);
    });
    
    // Initialize carousel functionality
    let currentSlide = 0;
    const dots = document.querySelectorAll('.carousel-dot');
    
    function goToSlide(index) {
        carouselTrack.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
    });
    
    // Auto-advance carousel
    setInterval(() => {
        currentSlide = (currentSlide + 1) % projects.length;
        goToSlide(currentSlide);
    }, 5000);
}

// Open project modal
function openProjectModal(projectId) {
    const project = projects.find(p => p.id == projectId);
    if (!project) return;
    
    modalTitle.textContent = project.title;
    modalImage.src = project.image;
    modalImage.alt = project.title;
    modalDescription.textContent = project.description;
    modalCategory.textContent = project.category;
    modalDate.textContent = project.date;
    modalClient.textContent = project.client;
    modalLiveLink.href = project.liveLink;
    modalCodeLink.href = project.codeLink;
    
    // Clear and add technology tags
    modalTech.innerHTML = '';
    project.technologies.forEach(tech => {
        const techTag = document.createElement('span');
        techTag.className = 'tech-tag';
        techTag.textContent = tech;
        modalTech.appendChild(techTag);
    });
    
    projectModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close project modal
function closeProjectModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Toggle theme picker
themeToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    themePicker.classList.toggle('active');
});

// Close theme picker when clicking outside
document.addEventListener('click', (e) => {
    if (!themeToggle.contains(e.target) && !themePicker.contains(e.target)) {
        themePicker.classList.remove('active');
    }
});

// Change theme with transition
function changeTheme(theme) {
    // Show transition overlay
    themeTransition.classList.add('active');
    
    setTimeout(() => {
        // Remove all theme classes
        body.classList.remove('theme-default', 'theme-1', 'theme-2', 'theme-3');
        // Add selected theme class
        body.classList.add(`theme-${theme}`);
        
        // Update active option
        themeOptions.forEach(option => {
            if (option.getAttribute('data-theme') === theme) {
                option.classList.add('active');
            } else {
                option.classList.remove('active');
            }
        });
        
        // Update current theme index
        currentThemeIndex = themes.indexOf(theme);
        
        // Save to localStorage
        localStorage.setItem('theme', theme);
        
        // Hide transition overlay
        setTimeout(() => {
            themeTransition.classList.remove('active');
        }, 300);
    }, 150);
}

// Change theme on option click
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const theme = option.getAttribute('data-theme');
        changeTheme(theme);
        
        // Close theme picker
        themePicker.classList.remove('active');
    });
});

// Cycle through themes
cycleThemeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    currentThemeIndex = (currentThemeIndex + 1) % themes.length;
    changeTheme(themes[currentThemeIndex]);
});

// Random theme
randomThemeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * themes.length);
    } while (randomIndex === currentThemeIndex && themes.length > 1);
    
    changeTheme(themes[randomIndex]);
});

// Toggle dark mode
darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Update icon
    if (body.classList.contains('dark-mode')) {
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
        localStorage.setItem('darkMode', 'disabled');
    }
    
    // Close theme picker if open
    themePicker.classList.remove('active');
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

// Back to top functionality
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Portfolio filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.display = 'block';
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100);
            } else {
                item.style.opacity = '0';
                item.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    item.style.display = 'none';
                }, 300);
            }
        });
    });
});

// Form validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');

function validateForm() {
    let isValid = true;
    
    // Name validation
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').style.display = 'block';
        nameInput.parentElement.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('nameError').style.display = 'none';
        nameInput.parentElement.classList.remove('error');
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById('emailError').style.display = 'block';
        emailInput.parentElement.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('emailError').style.display = 'none';
        emailInput.parentElement.classList.remove('error');
    }
    
    // Subject validation
    if (subjectInput.value.trim() === '') {
        document.getElementById('subjectError').style.display = 'block';
        subjectInput.parentElement.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('subjectError').style.display = 'none';
        subjectInput.parentElement.classList.remove('error');
    }
    
    // Message validation
    if (messageInput.value.trim() === '') {
        document.getElementById('messageError').style.display = 'block';
        messageInput.parentElement.classList.add('error');
        isValid = false;
    } else {
        document.getElementById('messageError').style.display = 'none';
        messageInput.parentElement.classList.remove('error');
    }
    
    return isValid;
}

// Real-time validation
nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') {
        document.getElementById('nameError').style.display = 'none';
        nameInput.parentElement.classList.remove('error');
    }
});

emailInput.addEventListener('input', () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(emailInput.value.trim())) {
        document.getElementById('emailError').style.display = 'none';
        emailInput.parentElement.classList.remove('error');
    }
});

subjectInput.addEventListener('input', () => {
    if (subjectInput.value.trim() !== '') {
        document.getElementById('subjectError').style.display = 'none';
        subjectInput.parentElement.classList.remove('error');
    }
});

messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') {
        document.getElementById('messageError').style.display = 'none';
        messageInput.parentElement.classList.remove('error');
    }
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (validateForm()) {
        // Show success message
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    }
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showNotification('Thank you for subscribing!', 'success');
    newsletterForm.reset();
});

// Notification function
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">&times;</button>
    `;
    
    // Add styles for notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? 'var(--accent-color)' : '#e74c3c'};
        color: white;
        border-radius: var(--border-radius);
        box-shadow: var(--shadow);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 10px;
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}



// Project modal functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('view-project')) {
        const projectId = e.target.getAttribute('data-id');
        openProjectModal(projectId);
    }
});

closeModal.addEventListener('click', closeProjectModal);

// Close modal when clicking outside
projectModal.addEventListener('click', (e) => {
    if (e.target === projectModal) {
        closeProjectModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.style.display === 'block') {
        closeProjectModal();
    }
});

// Animate statistics counter
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                stat.textContent = target;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 20);
    });
}

// Hide loading screen when page is loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
        initSkillsProgress();
        initPortfolioGrid();
        initPortfolioCarousel();
        animateStats();
    }, 1500);
});

// Initialize carousel on window resize
window.addEventListener('resize', initPortfolioCarousel);

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Toggle dark mode with Ctrl+D
    if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        darkModeToggle.click();
    }
    
    // Cycle themes with Ctrl+T
    if (e.ctrlKey && e.key === 't') {
        e.preventDefault();
        cycleThemeBtn.click();
    }
    
    // Open theme picker with Ctrl+P
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault();
        themeToggle.click();
    }
});

// Add CSS for notification animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    .notification button {
        background: none;
        border: none;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;
document.head.appendChild(style);