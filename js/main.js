import { initScrollAnimations } from './animations.js';
import { initSmoothScroll, initNavbarActive } from './navigation.js';
import { initContactForm } from './contact.js';

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initSmoothScroll();
    initNavbarActive();
    initContactForm();
});