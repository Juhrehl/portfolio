// Back to Top Button Script
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');

    // Show or hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show button after scrolling down 300px
            backToTopButton.style.display = 'flex';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Smooth scroll to top on button click
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Nav scroll function
window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.classList.add('minimal');
    } else {
        nav.classList.remove('minimal');
    }
};

// About scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const aboutSection = document.getElementById('about');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('visible');
            } else {
                aboutSection.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger the animation when at least 20% of the element is visible
    });

    // Observe the about section element
    observer.observe(aboutSection);
});

// Work scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.work-item');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger the animation when at least 20% of the element is visible
    });

    // Observe each work item
    workItems.forEach(item => {
        observer.observe(item);
    });
});

// Artwork scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const artworkItems = document.querySelectorAll('.artwork-item');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger the animation when at least 20% of the element is visible
    });

    // Observe each artwork item
    artworkItems.forEach(item => {
        observer.observe(item);
    });
});

// Typewriting animation
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.typewriter');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typewriterElement.classList.add('visible');
            } else {
                typewriterElement.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3 // Trigger the animation when at least 30% of the element is visible
    });

    // Observe the typewriter element
    observer.observe(typewriterElement);
});

// Services scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const services = document.querySelectorAll('.service');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger the animation when at least 20% of the element is visible
    });

    // Observe each service
    services.forEach(service => {
        observer.observe(service);
    });
});
