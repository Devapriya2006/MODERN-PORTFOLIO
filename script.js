// Modern script.js with enhanced effects
document.addEventListener('DOMContentLoaded', function() {
    console.log('Modern Portfolio Website Loaded Successfully! 🚀');
    
    // Initialize loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('loaded');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);

    // Navigation functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Profile image handling - UPDATED WITH DEFAULT IMAGE
    const profilePhoto = document.querySelector('.profile-photo');
    const avatarInitials = document.querySelector('.avatar-initials');
    const avatarCircle = document.querySelector('.avatar-circle');
    
    // Set default profile photo if none exists
    if (profilePhoto) {
        // Default profile image (you can replace this with your preferred default image)
        const defaultProfileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
        
        profilePhoto.onerror = function() {
            console.log('Profile photo not found, using default image');
            this.src = defaultProfileImage;
            if (avatarInitials) {
                avatarInitials.style.display = 'none';
            }
        };
        
        // Check if image loads successfully
        profilePhoto.onload = function() {
            console.log('Profile photo loaded successfully');
            if (avatarInitials) {
                avatarInitials.style.display = 'none';
            }
        };
        
        // Set a timeout to check if image exists
        setTimeout(() => {
            if (!profilePhoto.complete || profilePhoto.naturalHeight === 0) {
                console.log('Profile photo not found, loading default image');
                profilePhoto.src = defaultProfileImage;
                if (avatarInitials) {
                    avatarInitials.style.display = 'none';
                }
            }
        }, 1000);
    }

    // Initialize Particles.js for background
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#6366f1" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#6366f1",
                        opacity: 0.1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" }
                    }
                },
                retina_detect: true
            });
        }
    }
    
    // Load particles.js from CDN
    if (!document.querySelector('script[src*="particles"]')) {
        const particlesScript = document.createElement('script');
        particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        particlesScript.onload = initParticles;
        document.head.appendChild(particlesScript);
    }

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Skills data with progress values - UPDATED WITH IoT SKILLS
    const skills = [
        { 
            icon: 'fab fa-html5', 
            name: 'HTML5', 
            description: 'Semantic markup, accessibility, modern HTML features, SEO optimization',
            progress: 95
        },
        { 
            icon: 'fab fa-css3-alt', 
            name: 'CSS3', 
            description: 'Responsive design, CSS Grid, Flexbox, animations, transitions, variables',
            progress: 90
        },
        { 
            icon: 'fab fa-js-square', 
            name: 'JavaScript', 
            description: 'ES6+, DOM manipulation, APIs, asynchronous programming, event handling',
            progress: 85
        },
        { 
            icon: 'fas fa-mobile-alt', 
            name: 'Responsive Design', 
            description: 'Mobile-first approach, cross-browser compatibility, media queries',
            progress: 92
        },
        { 
            icon: 'fas fa-microchip', 
            name: 'IoT & Embedded Systems', 
            description: 'Arduino Uno, Bluetooth HC-05, IEEE boards, sensor integration, hardware programming',
            progress: 75
        },
        { 
            icon: 'fas fa-camera', 
            name: 'OpenCV Basics', 
            description: 'Image processing, face recognition, computer vision fundamentals with Python',
            progress: 70
        }
    ];
    
    // Projects data - UPDATED WITH SPECIFIC IOT DETAILS
    const projects = [
        { 
            title: 'Modern Portfolio', 
            description: 'A responsive personal portfolio website with modern animations and effects. Built with HTML, CSS, and JavaScript featuring glassmorphism design, smooth animations, and interactive elements.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations', 'Glassmorphism'],
            icon: 'fas fa-laptop-code',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            status: 'completed',
            github: 'https://github.com/devapriya/portfolio'
        },
        { 
            title: 'Waste Food Management System', 
            description: 'As Frontend Developer, built responsive interfaces for connecting restaurants with NGOs to reduce food waste. Implemented user dashboards, donation tracking, and real-time notifications.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Responsive Design', 'UI/UX'],
            icon: 'fas fa-recycle',
            image: 'https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            status: 'completed',
            github: null
        },
        { 
            title: 'IoT Voice Control Automation System', 
            description: 'A complete IoT-based home automation system using Arduino Uno, Bluetooth HC-05, and IEEE boards. Features voice-controlled lighting, appliances, and security systems through custom Android app with real-time device monitoring.',
            tags: ['IoT', 'Arduino Uno', 'Bluetooth HC-05', 'IEEE Boards', 'Embedded Systems', 'Android App', 'C++'],
            icon: 'fas fa-microchip',
            image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            status: 'completed',
            github: null
        },
        { 
            title: 'Image Recognition System', 
            description: 'A computer vision application using OpenCV for real-time image processing and object recognition with a web interface. Implements face detection, object classification, and real-time video processing capabilities.',
            tags: ['Python', 'OpenCV', 'Flask', 'Computer Vision', 'Image Processing', 'Face Detection'],
            icon: 'fas fa-eye',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            status: 'completed',
            github: 'https://github.com/devapriya/image-recognition'
        }
    ];
    
    // Populate skills section
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                <i class="${skill.icon} skill-icon"></i>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
                <div class="skill-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" data-progress="${skill.progress}"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 5px;">
                        <span>${skill.progress}%</span>
                    </div>
                </div>
            `;
            skillsContainer.appendChild(skillCard);
        });
    }

    // Animate progress bars when in viewport
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    }
    
    // Populate projects section - UPDATED WITH IOT DETAILS
    const projectsContainer = document.querySelector('.projects-container');
    if (projectsContainer) {
        // Clear existing projects to avoid duplication
        projectsContainer.innerHTML = '';
        
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <div class="project-image-content">
                        <img src="${project.image}" alt="${project.title}" class="project-image-real" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'${project.icon}\\'></i>';">
                        <i class="${project.icon}" style="display: none;"></i>
                    </div>
                    ${project.status === 'in-progress' ? '<span class="project-badge">In Progress</span>' : ''}
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${project.github ? `
                        <div style="margin-top: 25px;">
                            <a href="${project.github}" target="_blank" class="btn btn-primary" style="padding: 12px 25px; font-size: 0.95rem;">
                                <i class="${project.github.includes('github') ? 'fab fa-github' : 'fas fa-external-link-alt'}"></i> 
                                ${project.github.includes('github') ? 'View on GitHub' : 'View Demo'}
                            </a>
                        </div>
                    ` : ''}
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
    
    // Contact form with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Enhanced validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`, 'success');
            
            // Reset form with animation
            contactForm.style.opacity = '0.5';
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.opacity = '1';
            }, 300);
        });
    }
    
    // Notification system
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        document.body.appendChild(notification);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Typewriter effect
    const professionElement = document.querySelector('.profession');
    if (professionElement) {
        const professions = ['Frontend Developer', 'IoT Developer', 'Web Developer', 'Embedded Systems', 'Problem Solver'];
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeWriter() {
            const currentProfession = professions[professionIndex];
            
            if (isDeleting) {
                professionElement.textContent = currentProfession.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                professionElement.textContent = currentProfession.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentProfession.length) {
                isDeleting = true;
                typingSpeed = 1500;
                setTimeout(typeWriter, typingSpeed);
                return;
            }
            
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
                typingSpeed = 500;
            }
            
            setTimeout(typeWriter, typingSpeed);
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // CV Download functionality
    const cvDownloadBtn = document.getElementById('cvDownloadBtn');
    const cvFallback = document.getElementById('cvFallback');
    
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function(e) {
            // Create CV content as fallback
            const cvContent = `
DEVAPRIYA PAUL KUNDU
Frontend & IoT Developer
================================================

CONTACT INFORMATION:
Email: devapriya2006paul@gmail.com
Phone: +91 9832341502
Location: Khanakul, West Bengal, India
Portfolio: https://devapriya-portfolio.com

PROFESSIONAL SUMMARY:
Passionate Frontend Developer with 1+ year of experience in creating responsive and user-friendly web applications. Specialized in HTML, CSS, and JavaScript. Experienced in working on real-world projects including a Waste Food Management System and IoT-based Voice Control Automation System with Arduino and Bluetooth.

TECHNICAL SKILLS:
• Frontend: HTML5, CSS3, JavaScript, Responsive Design
• IoT & Embedded Systems: Arduino Uno, Bluetooth HC-05, IEEE Boards, Sensor Integration, C++ Programming
• Tools: Git, VS Code, Chrome DevTools, Arduino IDE
• Concepts: UI/UX Principles, Cross-browser Compatibility, IoT Protocols, Hardware-Software Integration
• Other: OpenCV Basics, Computer Vision Fundamentals, REST API Development

PROJECT EXPERIENCE:

1. Modern Portfolio Website
   - Built a responsive portfolio with modern animations and glassmorphism effects
   - Implemented smooth transitions, particle backgrounds, and interactive elements
   - Technologies: HTML5, CSS3, JavaScript, Particles.js

2. Waste Food Management System (Frontend Developer Role)
   - Developed frontend interfaces for connecting restaurants with NGOs
   - Created responsive dashboards for food donation management
   - Implemented real-time notifications and donation tracking
   - Technologies: HTML, CSS, JavaScript, Firebase

3. IoT Voice Control Automation System
   - Developed complete IoT-based home automation system using Arduino Uno
   - Implemented Bluetooth HC-05 module for wireless device control
   - Built custom Android app for voice commands and real-time monitoring
   - Integrated IEEE boards for smart device connectivity and control
   - Features voice-controlled lighting, appliances, and security systems
   - Technologies: Arduino Uno, Bluetooth HC-05, C++, Android Development, IEEE Boards

4. Image Recognition System
   - Implemented computer vision algorithms using OpenCV
   - Built web interface for image processing and object recognition
   - Features face detection and real-time video processing
   - Technologies: Python, OpenCV, Flask, Computer Vision

EDUCATION:
Computer Science Engineering
[Your University/College Name]

CERTIFICATIONS:
• [Add your certifications here]
• [Add your certifications here]

LANGUAGES:
• English (Professional)
• Bengali (Native)

REFERENCES:
Available upon request.

================================================
This CV was generated from my portfolio website.
Last updated: ${new Date().toLocaleDateString()}
            `;
            
            // Set up fallback download
            cvFallback.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent);
            cvFallback.download = 'Devapriya_Paul_Kundu_CV.txt';
            
            // Check if PDF exists
            fetch('DEVAPRIYA CV (1).pdf')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('PDF not found');
                    }
                    // PDF exists, continue with normal download
                    console.log('PDF CV found, downloading...');
                })
                .catch(() => {
                    // PDF doesn't exist, use fallback
                    e.preventDefault();
                    cvFallback.click();
                    showNotification('Downloading CV as text file. For PDF version, please upload your CV file.', 'info');
                });
        });
    }
    
    // Scroll animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate progress bars when skills section is in view
                if (entry.target.id === 'skills') {
                    setTimeout(animateProgressBars, 300);
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Initialize floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 5}s`;
    });
    
    // Highlight the 100% Frontend Focus card
    const highlightedStat = document.querySelector('.highlighted-stat');
    if (highlightedStat) {
        setInterval(() => {
            highlightedStat.style.animation = 'none';
            setTimeout(() => {
                highlightedStat.style.animation = 'pulse 2s infinite';
            }, 10);
        }, 4000);
    }
});

// Add window load event for additional initialization
window.addEventListener('load', function() {
    console.log('Portfolio fully loaded!');
    
    // Check if all images loaded successfully
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete || img.naturalHeight === 0) {
            console.warn('Image failed to load:', img.src);
            // If it's a project image, show the icon instead
            if (img.classList.contains('project-image-real')) {
                img.style.display = 'none';
                const icon = img.nextElementSibling;
                if (icon && icon.classList.contains('fas')) {
                    icon.style.display = 'flex';
                }
            }
        } else {
            console.log('Image loaded successfully:', img.src);
            // If project image loaded successfully, hide the icon
            if (img.classList.contains('project-image-real')) {
                const icon = img.nextElementSibling;
                if (icon && icon.classList.contains('fas')) {
                    icon.style.display = 'none';
                }
            }
        }
    });
});// Modern script.js with enhanced effects
document.addEventListener('DOMContentLoaded', function() {
    console.log('Modern Portfolio Website Loaded Successfully! 🚀');
    
    // Initialize loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('loaded');
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
    }, 1500);

    // Navigation functionality
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Profile image handling - UPDATED WITH DEFAULT IMAGE
    const profilePhoto = document.querySelector('.profile-photo');
    const avatarInitials = document.querySelector('.avatar-initials');
    const avatarCircle = document.querySelector('.avatar-circle');
    
    // Set default profile photo if none exists
    if (profilePhoto) {
        // Default profile image (you can replace this with your preferred default image)
        const defaultProfileImage = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80';
        
        profilePhoto.onerror = function() {
            console.log('Profile photo not found, using default image');
            this.src = defaultProfileImage;
            if (avatarInitials) {
                avatarInitials.style.display = 'none';
            }
        };
        
        // Check if image loads successfully
        profilePhoto.onload = function() {
            console.log('Profile photo loaded successfully');
            if (avatarInitials) {
                avatarInitials.style.display = 'none';
            }
        };
        
        // Set a timeout to check if image exists
        setTimeout(() => {
            if (!profilePhoto.complete || profilePhoto.naturalHeight === 0) {
                console.log('Profile photo not found, loading default image');
                profilePhoto.src = defaultProfileImage;
                if (avatarInitials) {
                    avatarInitials.style.display = 'none';
                }
            }
        }, 1000);
    }

    // Initialize Particles.js for background
    function initParticles() {
        if (typeof particlesJS !== 'undefined') {
            particlesJS('particles-js', {
                particles: {
                    number: { value: 80, density: { enable: true, value_area: 800 } },
                    color: { value: "#6366f1" },
                    shape: { type: "circle" },
                    opacity: { value: 0.3, random: true },
                    size: { value: 3, random: true },
                    line_linked: {
                        enable: true,
                        distance: 150,
                        color: "#6366f1",
                        opacity: 0.1,
                        width: 1
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        random: true,
                        straight: false,
                        out_mode: "out",
                        bounce: false
                    }
                },
                interactivity: {
                    detect_on: "canvas",
                    events: {
                        onhover: { enable: true, mode: "repulse" },
                        onclick: { enable: true, mode: "push" }
                    }
                },
                retina_detect: true
            });
        }
    }
    
    // Load particles.js from CDN
    if (!document.querySelector('script[src*="particles"]')) {
        const particlesScript = document.createElement('script');
        particlesScript.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
        particlesScript.onload = initParticles;
        document.head.appendChild(particlesScript);
    }

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    
    // Skills data with progress values - UPDATED WITH IoT SKILLS
    const skills = [
        { 
            icon: 'fab fa-html5', 
            name: 'HTML5', 
            description: 'Semantic markup, accessibility, modern HTML features, SEO optimization',
            progress: 95
        },
        { 
            icon: 'fab fa-css3-alt', 
            name: 'CSS3', 
            description: 'Responsive design, CSS Grid, Flexbox, animations, transitions, variables',
            progress: 90
        },
        { 
            icon: 'fab fa-js-square', 
            name: 'JavaScript', 
            description: 'ES6+, DOM manipulation, APIs, asynchronous programming, event handling',
            progress: 85
        },
        { 
            icon: 'fas fa-mobile-alt', 
            name: 'Responsive Design', 
            description: 'Mobile-first approach, cross-browser compatibility, media queries',
            progress: 92
        },
        { 
            icon: 'fas fa-microchip', 
            name: 'IoT & Embedded Systems', 
            description: 'Arduino Uno, Bluetooth HC-05, IEEE boards, sensor integration, hardware programming',
            progress: 75
        },
        { 
            icon: 'fas fa-camera', 
            name: 'OpenCV Basics', 
            description: 'Image processing, face recognition, computer vision fundamentals with Python',
            progress: 70
        }
    ];
    
    // Projects data - UPDATED WITH PERFECT WASTE FOOD MANAGEMENT IMAGE
    const projects = [
        { 
            title: 'Modern Portfolio', 
            description: 'A responsive personal portfolio website with modern animations and effects. Built with HTML, CSS, and JavaScript featuring glassmorphism design, smooth animations, and interactive elements.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Animations', 'Glassmorphism'],
            icon: 'fas fa-laptop-code',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            status: 'completed',
            github: 'https://github.com/devapriya/portfolio'
        },
        { 
            title: 'Waste Food Management System', 
            description: 'As Frontend Developer, built responsive interfaces for connecting restaurants with NGOs to reduce food waste. Implemented user dashboards, donation tracking, and real-time notifications.',
            tags: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Responsive Design', 'UI/UX'],
            icon: 'fas fa-recycle',
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            status: 'completed',
            github: null
        },
        { 
            title: 'IoT Voice Control Automation System', 
            description: 'A complete IoT-based home automation system using Arduino Uno, Bluetooth HC-05, and IEEE boards. Features voice-controlled lighting, appliances, and security systems through custom Android app with real-time device monitoring.',
            tags: ['IoT', 'Arduino Uno', 'Bluetooth HC-05', 'IEEE Boards', 'Embedded Systems', 'Android App', 'C++'],
            icon: 'fas fa-microchip',
            image: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            status: 'completed',
            github: null
        },
        { 
            title: 'Image Recognition System', 
            description: 'A computer vision application using OpenCV for real-time image processing and object recognition with a web interface. Implements face detection, object classification, and real-time video processing capabilities.',
            tags: ['Python', 'OpenCV', 'Flask', 'Computer Vision', 'Image Processing', 'Face Detection'],
            icon: 'fas fa-eye',
            image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            status: 'completed',
            github: 'https://github.com/Devapriya2006/IMAGE-RECOGNIZATION-USING-OPEN-CV'
        }
    ];
    
    // Populate skills section
    const skillsContainer = document.querySelector('.skills-container');
    if (skillsContainer) {
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card';
            skillCard.innerHTML = `
                <i class="${skill.icon} skill-icon"></i>
                <h3>${skill.name}</h3>
                <p>${skill.description}</p>
                <div class="skill-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" data-progress="${skill.progress}"></div>
                    </div>
                    <div style="display: flex; justify-content: space-between; margin-top: 5px;">
                        <span>${skill.progress}%</span>
                    </div>
                </div>
            `;
            skillsContainer.appendChild(skillCard);
        });
    }

    // Animate progress bars when in viewport
    function animateProgressBars() {
        const progressBars = document.querySelectorAll('.progress-fill');
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            bar.style.width = `${progress}%`;
        });
    }
    
    // Populate projects section - UPDATED WITH PERFECT IMAGES
    const projectsContainer = document.querySelector('.projects-container');
    if (projectsContainer) {
        // Clear existing projects to avoid duplication
        projectsContainer.innerHTML = '';
        
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <div class="project-image-content">
                        <img src="${project.image}" alt="${project.title}" class="project-image-real" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'${project.icon}\\'></i>';">
                        <i class="${project.icon}" style="display: none;"></i>
                    </div>
                    ${project.status === 'in-progress' ? '<span class="project-badge">In Progress</span>' : ''}
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    ${project.github ? `
                        <div style="margin-top: 25px;">
                            <a href="${project.github}" target="_blank" class="btn btn-primary" style="padding: 12px 25px; font-size: 0.95rem;">
                                <i class="${project.github.includes('github') ? 'fab fa-github' : 'fas fa-external-link-alt'}"></i> 
                                ${project.github.includes('github') ? 'View on GitHub' : 'View Demo'}
                            </a>
                        </div>
                    ` : ''}
                </div>
            `;
            projectsContainer.appendChild(projectCard);
        });
    }
    
    // Contact form with validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            // Enhanced validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields.', 'error');
                return;
            }
            
            if (!emailRegex.test(email)) {
                showNotification('Please enter a valid email address.', 'error');
                return;
            }
            
            // Simulate form submission
            showNotification(`Thank you, ${name}! Your message has been sent successfully. I'll get back to you soon.`, 'success');
            
            // Reset form with animation
            contactForm.style.opacity = '0.5';
            setTimeout(() => {
                contactForm.reset();
                contactForm.style.opacity = '1';
            }, 300);
        });
    }
    
    // Notification system
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close"><i class="fas fa-times"></i></button>
        `;
        
        document.body.appendChild(notification);
        
        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.animation = 'slideOut 0.3s ease forwards';
            setTimeout(() => notification.remove(), 300);
        });
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }
    
    // Typewriter effect
    const professionElement = document.querySelector('.profession');
    if (professionElement) {
        const professions = ['Frontend Developer', 'IoT Developer', 'Web Developer', 'Embedded Systems', 'Problem Solver'];
        let professionIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let typingSpeed = 100;
        
        function typeWriter() {
            const currentProfession = professions[professionIndex];
            
            if (isDeleting) {
                professionElement.textContent = currentProfession.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                professionElement.textContent = currentProfession.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }
            
            if (!isDeleting && charIndex === currentProfession.length) {
                isDeleting = true;
                typingSpeed = 1500;
                setTimeout(typeWriter, typingSpeed);
                return;
            }
            
            if (isDeleting && charIndex === 0) {
                isDeleting = false;
                professionIndex = (professionIndex + 1) % professions.length;
                typingSpeed = 500;
            }
            
            setTimeout(typeWriter, typingSpeed);
        }
        
        setTimeout(typeWriter, 1000);
    }
    
    // CV Download functionality
    const cvDownloadBtn = document.getElementById('cvDownloadBtn');
    const cvFallback = document.getElementById('cvFallback');
    
    if (cvDownloadBtn) {
        cvDownloadBtn.addEventListener('click', function(e) {
            // Create CV content as fallback
            const cvContent = `
DEVAPRIYA PAUL KUNDU
Frontend & IoT Developer
================================================

CONTACT INFORMATION:
Email: devapriya2006paul@gmail.com
Phone: +91 9832341502
Location: Khanakul, West Bengal, India
Portfolio: https://devapriya-portfolio.com

PROFESSIONAL SUMMARY:
Passionate Frontend Developer with 1+ year of experience in creating responsive and user-friendly web applications. Specialized in HTML, CSS, and JavaScript. Experienced in working on real-world projects including a Waste Food Management System and IoT-based Voice Control Automation System with Arduino and Bluetooth.

TECHNICAL SKILLS:
• Frontend: HTML5, CSS3, JavaScript, Responsive Design
• IoT & Embedded Systems: Arduino Uno, Bluetooth HC-05, IEEE Boards, Sensor Integration, C++ Programming
• Tools: Git, VS Code, Chrome DevTools, Arduino IDE
• Concepts: UI/UX Principles, Cross-browser Compatibility, IoT Protocols, Hardware-Software Integration
• Other: OpenCV Basics, Computer Vision Fundamentals, REST API Development

PROJECT EXPERIENCE:

1. Modern Portfolio Website
   - Built a responsive portfolio with modern animations and glassmorphism effects
   - Implemented smooth transitions, particle backgrounds, and interactive elements
   - Technologies: HTML5, CSS3, JavaScript, Particles.js

2. Waste Food Management System (Frontend Developer Role)
   - Developed frontend interfaces for connecting restaurants with NGOs
   - Created responsive dashboards for food donation management
   - Implemented real-time notifications and donation tracking
   - Technologies: HTML, CSS, JavaScript, Firebase

3. IoT Voice Control Automation System
   - Developed complete IoT-based home automation system using Arduino Uno
   - Implemented Bluetooth HC-05 module for wireless device control
   - Built custom Android app for voice commands and real-time monitoring
   - Integrated IEEE boards for smart device connectivity and control
   - Features voice-controlled lighting, appliances, and security systems
   - Technologies: Arduino Uno, Bluetooth HC-05, C++, Android Development, IEEE Boards

4. Image Recognition System
   - Implemented computer vision algorithms using OpenCV
   - Built web interface for image processing and object recognition
   - Features face detection and real-time video processing
   - Technologies: Python, OpenCV, Flask, Computer Vision

EDUCATION:
Computer Science Engineering
[Your University/College Name]

CERTIFICATIONS:
• [Add your certifications here]
• [Add your certifications here]

LANGUAGES:
• English (Professional)
• Bengali (Native)

REFERENCES:
Available upon request.

================================================
This CV was generated from my portfolio website.
Last updated: ${new Date().toLocaleDateString()}
            `;
            
            // Set up fallback download
            cvFallback.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(cvContent);
            cvFallback.download = 'Devapriya_Paul_Kundu_CV.txt';
            
            // Check if PDF exists
            fetch('DEVAPRIYA CV (1).pdf')
                .then(response => {
                    if (!response.ok) {
                        throw new Error('PDF not found');
                    }
                    // PDF exists, continue with normal download
                    console.log('PDF CV found, downloading...');
                })
                .catch(() => {
                    // PDF doesn't exist, use fallback
                    e.preventDefault();
                    cvFallback.click();
                    showNotification('Downloading CV as text file. For PDF version, please upload your CV file.', 'info');
                });
        });
    }
    
    // Scroll animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Animate progress bars when skills section is in view
                if (entry.target.id === 'skills') {
                    setTimeout(animateProgressBars, 300);
                }
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    
    // Initialize floating elements animation
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 5}s`;
    });
    
    // Highlight the 100% Frontend Focus card
    const highlightedStat = document.querySelector('.highlighted-stat');
    if (highlightedStat) {
        setInterval(() => {
            highlightedStat.style.animation = 'none';
            setTimeout(() => {
                highlightedStat.style.animation = 'pulse 2s infinite';
            }, 10);
        }, 4000);
    }
});

// Add window load event for additional initialization
window.addEventListener('load', function() {
    console.log('Portfolio fully loaded!');
    
    // Check if all images loaded successfully
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete || img.naturalHeight === 0) {
            console.warn('Image failed to load:', img.src);
            // If it's a project image, show the icon instead
            if (img.classList.contains('project-image-real')) {
                img.style.display = 'none';
                const icon = img.nextElementSibling;
                if (icon && icon.classList.contains('fas')) {
                    icon.style.display = 'flex';
                }
            }
        } else {
            console.log('Image loaded successfully:', img.src);
            // If project image loaded successfully, hide the icon
            if (img.classList.contains('project-image-real')) {
                const icon = img.nextElementSibling;
                if (icon && icon.classList.contains('fas')) {
                    icon.style.display = 'none';
                }
            }
        }
    });
});