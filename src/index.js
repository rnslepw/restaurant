import './styles.css';

import homeContent from './pages/homeContent';
import menuContent from './pages/menuContent';
import infoContent from './pages/infoContent';

const content = document.querySelector('#content');

homeContent(content);

const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {

  tab.addEventListener('click', (e) => {
    switch(e.target.textContent) {
      case "Home":
        homeContent(content);
        break;
      case "Menu":
        menuContent(content);
        break;
      case "Info":
        infoContent(content);
        break;
      default:
        homeContent(content);
        break;
    }
  })
})
