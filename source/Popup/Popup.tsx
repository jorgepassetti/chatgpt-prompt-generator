import * as React from 'react';
import { openWebPage } from '../utils/chrome';
import './styles.scss';

const Popup: React.FC = () => {
  return (
    <section id='popup'>
      <div className='header'>
        <img
          src={chrome.runtime.getURL('assets/icons/favicon-128.png')}
          alt='An example image'
        />
        <h2>Chat GPT Prompt creator</h2>
      </div>

      <div className='links__holder'>
        <ul>
          <li>
            <button
              className='strong_button'
              type='button'
              onClick={(): any => {
                return openWebPage(
                  'https://www.buymeacoffee.com/jorgepassetti',
                );
              }}
            >
              Buy Me A Coffee
            </button>
          </li>

          <li className='ligth_button'>
            <button
              type='button'
              onClick={(): any => {
                return openWebPage('emailto:jorgepassetti@gmail.com');
              }}
            >
              Contact me
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Popup;
