export default function homeContent(content, tab) {
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Menu';

  const text = document.createElement('p');
  text.textContent = 'We wil deliver your order on time!';

  const menuList = document.createElement('ul');
  const menu = ['Capucchino', 'Espresso', 'Americano'];
  menu.forEach(item => {
    const menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuList.appendChild(menuItem);
  })

  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(menuList);
};