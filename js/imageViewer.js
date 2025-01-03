export function initImageViewer() {
    // Create fullscreen viewer element
    const viewer = document.createElement('div');
    viewer.className = 'fullscreen-viewer';
    viewer.addEventListener('click', () => viewer.classList.remove('active'));
    document.body.appendChild(viewer);

    // Handle hero image click
    const heroSection = document.querySelector('.hero');
    heroSection.addEventListener('click', () => {
        const backgroundImage = getComputedStyle(heroSection).backgroundImage;
        const imageUrl = backgroundImage.slice(backgroundImage.indexOf('url(') + 4, -1).replace(/['"]/g, '');
        
        viewer.style.backgroundImage = `url(${imageUrl})`;
        viewer.classList.add('active');
    });

    // Add cursor pointer to hero section
    heroSection.style.cursor = 'pointer';
}