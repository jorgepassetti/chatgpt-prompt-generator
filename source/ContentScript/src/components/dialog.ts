/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Prompts, PromptsSpanish } from '../constants/prompts';
import { Language } from '../interfaces/Prompt';
import promptCreator from './promptCreator';

function closeIconCreator(dialog: HTMLDialogElement) {
  const closeIcon = document.createElement('span');
  closeIcon.textContent = 'x';
  closeIcon.style.position = 'absolute';
  closeIcon.style.top = '10px';
  closeIcon.style.right = '10px';
  closeIcon.style.fontSize = '24px';
  closeIcon.style.cursor = 'pointer';
  closeIcon.addEventListener('click', () => {
    dialog.close();
  });

  return closeIcon;
}

function languageSelectCreator(onChangeCallback: {
  (selectedLanguage: Language): void;
  (arg0: string): void;
}) {
  // Add a dropdown

  // Create a container for the dropdown
  const dropdownContainer = document.createElement('div');
  dropdownContainer.style.marginBottom = '10px'; // Adjust the margin as needed

  const languageDropdown = document.createElement('select');

  languageDropdown.id = 'languageDropdown';
  // Set the color for all options in the dropdown
  languageDropdown.style.color = 'black';

  // Add options to the dropdown
  const optionEnglish = document.createElement('option');
  optionEnglish.value = 'english';
  optionEnglish.textContent = 'English';

  const optionSpanish = document.createElement('option');
  optionSpanish.value = 'spanish';
  optionSpanish.textContent = 'Spanish';

  // Add options to the dropdown
  languageDropdown.appendChild(optionEnglish);
  languageDropdown.appendChild(optionSpanish);

  // Add event listener for the change event
  languageDropdown.addEventListener('change', () => {
    onChangeCallback(languageDropdown.value);
  });

  // Add the dropdown to the container
  dropdownContainer.appendChild(languageDropdown);

  return dropdownContainer;
}

export function showDialog() {
  const dialog = document.createElement('dialog');

  // Set the text content of the dialog
  dialog.textContent = 'Select your language';
  dialog.style.fontSize = '20px';
  dialog.style.paddingBottom = '20px';

  // Add a dropdown
  let languageSelected: Language = 'english'; // Initialize the selected language
  const languageDropdown = languageSelectCreator((selectedLanguage: string) => {
    languageSelected = selectedLanguage as Language;
    updateList();
  });
  dialog.appendChild(languageDropdown);

  // Add a close icon to the dialog
  const closeIcon = closeIconCreator(dialog);
  dialog.appendChild(closeIcon);

  // Set the properties of the dialog
  dialog.style.position = 'sticky';
  dialog.style.marginRight = '50%';
  dialog.style.width = '50%';
  dialog.style.height = '80%';
  dialog.style.transform = 'translate(50%, -20%)';
  dialog.style.backgroundColor = '#001d3d';
  dialog.style.padding = '20px';
  dialog.style.borderRadius = '10px'; // Add round borders

  // Function to update the list based on the selected language
  const updateList = () => {
    // Remove the existing list
    const existingList = dialog.querySelector('.prompt-list');
    if (existingList) {
      existingList.remove();
    }

    // Add a new list
    const list = promptCreator(
      languageSelected === 'spanish' ? PromptsSpanish : Prompts,
      dialog,
      languageSelected,
    );
    list.classList.add('prompt-list'); // Add a class for easier removal
    dialog.appendChild(list);
  };

  // Add the initial list
  const initialList = promptCreator(Prompts, dialog);
  initialList.classList.add('prompt-list'); // Add a class for easier removal
  dialog.appendChild(initialList);

  // Add the dialog to the document
  document.body.appendChild(dialog);

  // Show the dialog
  dialog.showModal();
}
