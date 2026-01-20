document.addEventListener('DOMContentLoaded', () => {
    const titles = [
        "Himanshu Wagh",
        "Data Scientist",
        "ML Engineer",
        "Researcher"
    ];

    const titleElement = document.querySelector('.site-title');

    if (!titleElement) {
        return;
    }

    // Ensure transition property exists
    titleElement.style.transition = 'opacity 0.5s ease-in-out';

    let currentIndex = 0;

    setInterval(() => {
        // Fade out
        titleElement.style.opacity = '0';

        setTimeout(() => {
            // Change text
            currentIndex = (currentIndex + 1) % titles.length;
            titleElement.textContent = titles[currentIndex];

            // Fade in
            titleElement.style.opacity = '1';
        }, 500); // Wait for fade out to complete

    }, 3000); // Switch every 3 seconds
});
