import { initNavigation } from './js/navigation.js';
import { initGallery } from './js/gallery.js';
import { initAnimations } from './js/animations.js';
import { initContactForm } from './js/contact.js';
import { initImageViewer } from './js/imageViewer.js';

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initGallery();
    initAnimations();
    initContactForm();
    initImageViewer();
});