import { array } from './personajes.js';
import { imprim } from './templates.js';

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        let html = '';
        array.forEach((item) => {
            html += imprim(item);
        });
        document.querySelector('.characters-list').innerHTML = html;
    });
})();
