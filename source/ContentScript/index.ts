import { showDialog } from './src/components/dialog';

declare const chrome: any;

//import { PRIMARY_COLOR } from './src/constants/styles';

const link = document.createElement('link');
link.href = chrome.runtime.getURL('assets/styles/index.css'); // Replace with the path to your CSS file
link.rel = 'stylesheet';

// Insert the link element into the head of the page
document.head.insertAdjacentElement('beforeend', link);

console.log('Content script running');

const img = document.createElement('img');
img.src = chrome.runtime.getURL('assets/icons/favicon-128.png'); // Replace with the path to your image
img.alt = 'Button Image'; // Replace with a descriptive alt text for accessibility
// Set the position of the button to fixed
img.style.position = 'fixed';

// Set the location of the button on the screen
img.style.top = '20px'; // Align to the top of the screen
img.style.right = '20px'; // Align to the right of the screen
img.style.transform = 'none'; // Remove translateY transformation
img.classList.add('my-tappable-image');

// Add a click event listener to the button
img.addEventListener('click', () => {
  showDialog();
});

// Add the button to the document
document.body.appendChild(img);
