import { PRIMARY_COLOR, SECONDARY_COLOR } from '../constants/styles';
import Prompt, { Language, Variable } from '../interfaces/Prompt';

let inputsValues: any = {};
const enterEvent = new KeyboardEvent('keydown', {
  key: 'Enter',
  bubbles: true,
  cancelable: true,
  keyCode: 13,
});

function buttonContainerCreator(
  item: Prompt,
  dialog: HTMLDialogElement,
  listItem: HTMLLIElement,
  language: 'spanish' | 'english',
): HTMLDivElement {
  // Create a button container element for the item
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.justifyContent = 'center';
  listItem.appendChild(buttonContainer);

  // Create a button element for the item
  const button = document.createElement('button');
  button.textContent =
    language === 'spanish' ? 'Generar instrucción' : 'Create prompt';
  button.style.backgroundColor = SECONDARY_COLOR;
  button.style.color = '#fff';
  button.style.padding = '8px';
  button.style.borderRadius = '5px';
  button.style.border = 'none';
  button.style.cursor = 'pointer';
  button.style.fontSize = '16px';

  // Append the button to the button container
  buttonContainer.appendChild(button);

  // Add event listener to the button to save the input values
  button.addEventListener('click', () => {
    const variables = item.variables || [];
    for (const variable of variables) {
      item.prompt = item.prompt.replaceAll(
        variable.key,
        inputsValues[variable.key],
      );
    }

    // Get the textarea element by its ID
    const textarea = document.getElementById(
      'prompt-textarea',
    ) as HTMLTextAreaElement;

    dialog.close();
    textarea.focus();
    textarea.value = item.prompt;
    textarea.dispatchEvent(
      new Event('input', { bubbles: true, cancelable: true }),
    );
    textarea.dispatchEvent(enterEvent);
  });

  return buttonContainer;
}

function inputContainerCreator(variable: Variable) {
  // Create a div to hold label and input elements in the same column
  const inputContainer = document.createElement('div');
  inputContainer.style.display = 'flex';
  inputContainer.style.flexDirection = 'column';
  inputContainer.style.width = '48%';

  // Create a label element for the variable
  const label = document.createElement('label');
  label.textContent = variable.key;
  label.style.marginRight = '10px';

  // Create an input element for the variable
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = variable.value;
  input.style.width = '100%';
  input.style.padding = '8px';
  input.style.borderRadius = '5px';
  input.style.border = 'none';
  input.style.marginTop = '10px';
  input.style.marginBottom = '10px';
  input.style.color = PRIMARY_COLOR;
  input.id = variable.key;
  input.addEventListener('input', (event: any) => {
    inputsValues[variable.key] = event?.target?.value;
  });

  // Append the label and input to the list item
  inputContainer.appendChild(label);
  inputContainer.appendChild(input);

  return inputContainer;
}

export default function promptCreator(
  items: Prompt[],
  dialog: HTMLDialogElement,
  language: Language = 'english',
) {
  // Create a list element
  const list = document.createElement('ul');
  list.style.listStyleType = 'none';
  list.style.padding = '0';
  list.style.paddingTop = '20px';

  // Loop through the items and create a list item for each one
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    // Create a list item element
    const listItem = document.createElement('li');
    listItem.style.marginBottom = '30px';

    // Create a title element for the item
    const title = document.createElement('h4');
    title.textContent = `${i + 1}. ${item.title}`;
    title.style.margin = '0';
    title.style.fontSize = '18px';

    // Append the title to the list item
    listItem.appendChild(title);

    const inputsContainer = document.createElement('div');
    inputsContainer.style.display = 'flex';
    inputsContainer.style.flexWrap = 'wrap';
    inputsContainer.style.justifyContent = 'space-between';
    listItem.appendChild(inputsContainer);

    // Loop through the variables and create an input element for each one
    for (const variable of item.variables || []) {
      // Create a div to hold label and input elements in the same column
      const inputContainer = inputContainerCreator(variable);

      // Append the input container to the list item
      inputsContainer.appendChild(inputContainer);
    }

    const buttonContainer = buttonContainerCreator(
      item,
      dialog,
      listItem,
      language,
    );

    // Append the button to the list item
    listItem.appendChild(buttonContainer);

    // Append the horizontal rule to the list item
    const hr = document.createElement('hr');
    hr.style.marginTop = '10px';
    listItem.appendChild(hr);

    // Append the list item to the list
    list.appendChild(listItem);
  }

  return list;
}
