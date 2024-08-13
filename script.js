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

// nav scroll function
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
                // Add the 'visible' class to animate the section
                aboutSection.classList.add('visible');
            } else {
                // Remove the 'visible' class to reset the animation
                aboutSection.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger the animation when at least 20% of the element is visible
    });

    // Observe the about section element
    observer.observe(aboutSection);
});

// work scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const workItems = document.querySelectorAll('.work-item');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to animate the work item
                entry.target.classList.add('visible');
            } else {
                // Remove the 'visible' class to reset the animation
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

// artwork scroll animation
document.addEventListener('DOMContentLoaded', () => {
    const artworkItems = document.querySelectorAll('.artwork-item');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to animate the work item
                entry.target.classList.add('visible');
            } else {
                // Remove the 'visible' class to reset the animation
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.2 // Trigger the animation when at least 20% of the element is visible
    });

    // Observe each work item
    artworkItems.forEach(item => {
        observer.observe(item);
    });
});

// typewriting animation
document.addEventListener('DOMContentLoaded', () => {
    const typewriterElement = document.querySelector('.typewriter');

    // Create an intersection observer instance
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger the animation
                typewriterElement.classList.add('visible');
            } else {
                // Remove the 'visible' class to reset the animation
                typewriterElement.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.3 // Trigger the animation when at least 30% of the element is visible
    });

    // Observe the typewriter element
    observer.observe(typewriterElement);
});

