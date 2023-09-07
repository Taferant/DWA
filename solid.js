import { books, authors, genres, BOOKS_PER_PAGE } from './data.js';


function createElement(type, className, attributes = {}, content = '') {
    const element = document.createElement(type);
    element.classList = className;
    for (const [attr, value] of Object.entries(attributes)) {
        element.setAttribute(attr, value);
    }
    element.innerHTML = content;
    return element;
}


function populateDropdown(selector, options) {
    const dropdown = document.querySelector(selector);
    const fragment = document.createDocumentFragment();

    for (const [value, label] of Object.entries(options)) {
        const option = createElement('option', '', { value }, label);
        fragment.appendChild(option);
    }

    dropdown.appendChild(fragment);
}


function applyTheme(theme) {
    const colors = {
        night: { dark: '255, 255, 255', light: '10, 10, 20' },
        day: { dark: '10, 10, 20', light: '255, 255, 255' }
    };

    document.documentElement.style.setProperty('--color-dark', colors[theme].dark);
    document.documentElement.style.setProperty('--color-light', colors[theme].light);
}