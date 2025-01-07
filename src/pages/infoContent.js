export default function homeContent(content, tab) {
  content.innerHTML = '';
  
  const title = document.createElement('h2');
  title.textContent = 'Info';

  const text = document.createElement('p');
  text.textContent = 'You can find us at:';

  const address = document.createElement('p');
  address.textContent = 'City Centre, Main St., 123';

  const phone = document.createElement('p');
  phone.textContent = '(123) 456 78 90';

  content.appendChild(title);
  content.appendChild(text);
  content.appendChild(address);
  content.appendChild(phone);
};