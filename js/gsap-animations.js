// Hero Section Animations
function initHeroAnimations() {
    // Initial setup - hide elements before animation
    gsap.set('.logo, .navbar a', { opacity: 0, y: -20 });
    gsap.set('.hero-content h1, .hero-content h3, .hero-content p, .btn-box, .social-icons', { opacity: 0, y: 30 });
    gsap.set('.bg-element', { scale: 0 });
    
    // Header animation
    gsap.to('.logo', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
    });
    
    gsap.to('.navbar a', {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.3
    });
    
    // Hero content animation
    gsap.to('.hero-content h1', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
    });
    
    gsap.to('.hero-content h3', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.8
    });
    
    gsap.to('.hero-content p', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.0
    });
    
    gsap.to('.btn-box', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.2
    });
    
    gsap.to('.social-icons', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 1.4
    });
    
    // Background elements animation
    gsap.to('.bg-element', {
        scale: 1,
        duration: 2,
        ease: 'elastic.out(1, 0.5)',
        delay: 0.5,
        stagger: 0.2
    });
    
    // Continuous subtle animations
    gsap.to('.element-1', {
        x: 20,
        y: 20,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
    
    gsap.to('.element-2', {
        x: -20,
        y: -20,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
    });
}

// Button hover effects
function initButtonEffects() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            gsap.to(btn, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
        
        btn.addEventListener('mouseleave', () => {
            gsap.to(btn, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });
}

// Initialize all animations
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initButtonEffects();
});
// Add these new animation functions to your existing gsap-animations.js

// About Section Animations
function initAboutAnimations() {
    gsap.from('.about-img', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.about-content', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    });
    
    gsap.from('.info-box', {
        scrollTrigger: {
            trigger: '.about',
            start: 'top 70%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        delay: 0.6
    });
}

// Skills Section Animations
function initSkillsAnimations() {
    // Add this to your animations file
function initSkillsAnimations() {
    gsap.from('.skills-box', {
        scrollTrigger: {
            trigger: '.skills',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });

    // Animate each skill bar individually
    const skills = [
        { selector: '.cpp', width: '90%' },
        { selector: '.python', width: '85%' },
        { selector: '.java', width: '80%' },
        { selector: '.kotlin', width: '75%' },
        { selector: '.git', width: '85%' },
        { selector: '.linux', width: '80%' },
        { selector: '.tableau', width: '75%' },
        { selector: '.hadoop', width: '70%' },
        { selector: '.pandas', width: '85%' },
        { selector: '.numpy', width: '80%' },
        { selector: '.r', width: '75%' },
        { selector: '.sql', width: '85%' }
    ];

    skills.forEach(skill => {
        gsap.to(skill.selector, {
            scrollTrigger: {
                trigger: skill.selector,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            width: skill.width,
            duration: 1.5,
            ease: 'power3.out'
        });
    });
}

// Don't forget to call this in your initialization
document.addEventListener('DOMContentLoaded', () => {
    // ... other initializations
    initSkillsAnimations();
});
}

// Projects Section Animations
function initProjectsAnimations() {
    gsap.from('.project-card', {
        scrollTrigger: {
            trigger: '.projects',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'power3.out'
    });
}

// Contact Section Animations
function initContactAnimations() {
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });
    
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact',
            start: 'top 80%',
            toggleActions: 'play none none none'
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.3
    });
}

// Update the initialization function
document.addEventListener('DOMContentLoaded', () => {
    initHeroAnimations();
    initButtonEffects();
    
    // Initialize ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    
    // Initialize other animations
    initAboutAnimations();
    initSkillsAnimations();
    initProjectsAnimations();
    initContactAnimations();
});