import {writable} from 'svelte/store';

export const searchTermStore = writable(['?', '?', '?', '?', '?']);
export const searchTermIndex = writable(0);