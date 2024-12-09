import { writable } from 'svelte/store';

export let isMobile = writable(window.innerWidth <= 768);

window.addEventListener('resize', () => {
    isMobile.set(window.innerWidth <= 768);
});
