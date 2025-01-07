export default function homeContent(content, tab) {
  content.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = 'Squid Cofee';

  const text = document.createElement('p');
  text.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora eligendi voluptate dicta, reiciendis veniam vel similique, esse nihil exercitationem fugit repellat mollitia quas, officiis unde voluptatibus facilis.';

  content.appendChild(title);
  content.appendChild(text);
};