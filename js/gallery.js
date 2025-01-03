export function initGallery() {
    const galleryImages = [
        './img/temple.jpg',
        './img/garadiya_mahadev_view_point.jpg',
        './img/garadiya_mahadev_view_point_2.jpg',
        './img/garadiya_mahadev_view_point_3.jpg',
        './img/garadiya_mahadev_view_point_4.jpg',
        './img/sunrise_at_stadium.jpg',
        './img/sunrise_behind_river.jpg',
        './img/sunset_behind_palm_trees.jpg',
    ];

    const galleryGrid = document.getElementById('gallery-grid');

    if (!galleryGrid) {
        console.error('Gallery grid element not found');
        return;
    }

    galleryImages.forEach(imageUrl => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = imageUrl.split('/').pop().replace(/_/g, ' ').replace('.jpg', '');

        galleryItem.appendChild(img);
        galleryItem.addEventListener('click', () => openFullscreen(img));

        galleryGrid.appendChild(galleryItem);
    });
}

function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen().catch(err => console.error(`Error attempting fullscreen: ${err.message}`));
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else {
        console.warn('Fullscreen API is not supported in this browser.');
    }
}
