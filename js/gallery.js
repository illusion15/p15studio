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

    galleryImages.forEach(imageUrl => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = 'Gallery Image';

        galleryItem.appendChild(img);
        galleryItem.addEventListener('click', () => openFullscreen(img));

        galleryGrid.appendChild(galleryItem);
    });
}


function openFullscreen(element) {
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) { // Safari
        element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { // IE11
        element.msRequestFullscreen();
    }
}
