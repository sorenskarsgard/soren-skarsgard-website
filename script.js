// ===== Typewriter Effect =====
const typewriterTexts = [
    'Founder & CEO',
    'Entrepreneur',
    'AI Developer',
    'Technologist',
    'Innovation Seeker'
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typewriterElement = document.querySelector('.typewriter-text');
const cursorElement = document.querySelector('.cursor');

function typeWriter() {
    const currentText = typewriterTexts[currentTextIndex];
    
    if (isDeleting) {
        typewriterElement.textContent = currentText.substring(0, currentCharIndex - 1);
        currentCharIndex--;
    } else {
        typewriterElement.textContent = currentText.substring(0, currentCharIndex + 1);
        currentCharIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentCharIndex === currentText.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && currentCharIndex === 0) {
        isDeleting = false;
        currentTextIndex = (currentTextIndex + 1) % typewriterTexts.length;
        typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
}

// Start typewriter effect
if (typewriterElement) {
    typeWriter();
}

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navigation Active State =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinksContainer = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });
}


// ===== Notification System =====
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: var(--bg-secondary);
        border: 1px solid var(--accent-primary);
        color: var(--accent-primary);
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 15px rgba(0, 217, 255, 0.3);
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);


// ===== Social Links Configuration =====
// Update these with your actual social media links
const socialLinks = {
    email: {
        link: '#', // Will be handled by mailto
        handle: 'soren@vastvision.io'
    },
    linkedin: {
        link: 'https://www.linkedin.com/in/soren-skarsgard',
        handle: 'linkedin.com/in/soren-skarsgard'
    },
    instagram: {
        link: 'https://www.instagram.com/yngsoren',
        handle: '@yngsoren'
    },
    x: {
        link: 'https://x.com/sorenskarsgard',
        handle: '@sorenskarsgard'
    }
};

// Update social links
function updateSocialLinks() {
    // Email
    const emailLink = document.getElementById('email-link');
    const emailHandle = document.getElementById('email-handle');
    if (emailLink && emailHandle) {
        emailLink.href = `mailto:${socialLinks.email.handle}`;
        emailHandle.textContent = socialLinks.email.handle;
    }

    // LinkedIn
    const linkedinLink = document.getElementById('linkedin-link');
    const linkedinHandle = document.getElementById('linkedin-handle');
    if (linkedinLink && linkedinHandle) {
        linkedinLink.href = socialLinks.linkedin.link;
        linkedinHandle.textContent = socialLinks.linkedin.handle;
    }

    // Instagram
    const instagramLink = document.getElementById('instagram-link');
    const instagramHandle = document.getElementById('instagram-handle');
    if (instagramLink && instagramHandle) {
        instagramLink.href = socialLinks.instagram.link;
        instagramHandle.textContent = socialLinks.instagram.handle;
    }

    // X (Twitter)
    const xLink = document.getElementById('x-link');
    const xHandle = document.getElementById('x-handle');
    if (xLink && xHandle) {
        xLink.href = socialLinks.x.link;
        xHandle.textContent = socialLinks.x.handle;
    }
}

// Initialize social links
updateSocialLinks();

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// ===== Parallax Effect for Hero =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// ===== Code Terminal Animation =====
const codeCursor = document.querySelector('.code-cursor-blink');
if (codeCursor) {
    setInterval(() => {
        codeCursor.style.opacity = codeCursor.style.opacity === '0' ? '1' : '0';
    }, 530);
}

// ===== Resume Download Handler =====
const resumeDownloadLink = document.getElementById('resume-download-link');
if (resumeDownloadLink) {
    resumeDownloadLink.addEventListener('click', async function(e) {
        e.preventDefault();
        
        const resumePath = '/resume.pdf';
        
        try {
            // Fetch the PDF as a blob
            const response = await fetch(resumePath);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const blob = await response.blob();
            
            // Create a blob URL
            const blobUrl = window.URL.createObjectURL(blob);
            
            // Create a temporary anchor element to force download
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'Soren_Skarsgard_Resume.pdf';
            link.style.display = 'none';
            
            // Append to body, click, and remove
            document.body.appendChild(link);
            link.click();
            
            // Clean up
            setTimeout(() => {
                document.body.removeChild(link);
                window.URL.revokeObjectURL(blobUrl);
            }, 100);
        } catch (error) {
            console.error('Download failed:', error);
            // Fallback: try direct download with absolute path
            const link = document.createElement('a');
            // Try absolute path
            link.href = '/resume.pdf';
            link.download = 'Soren_Skarsgard_Resume.pdf';
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            setTimeout(() => {
                document.body.removeChild(link);
            }, 100);
        }
    });
}

// ===== Initialize on Load =====
window.addEventListener('load', () => {
    // Trigger initial animations
    document.body.style.opacity = '1';
    
    // Update active nav on load
    updateActiveNav();
});

// ===== Console Easter Egg =====
console.log('%c👋 Hey there!', 'font-size: 20px; color: #00d9ff; font-weight: bold;');
console.log('%cThanks for checking out the code!', 'font-size: 14px; color: #a1a1aa;');
console.log('%cBuilt with passion and modern web technologies.', 'font-size: 12px; color: #7c3aed;');
