const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Отримуємо список ul.gallery
const galleryList = document.querySelector('ul.gallery');

// Створюємо фрагмент, щоб додати до нього всі елементи галереї перед додаванням їх в DOM
const fragment = document.createDocumentFragment();

// Для кожного об'єкта в масиві images
images.forEach(image => {
  // Створюємо новий елемент <li>
  const listItem = document.createElement('li');

  // Створюємо новий елемент <img>
  const img = document.createElement('img');

  // Встановлюємо атрибути src та alt для зображення
  img.src = image.url;
  img.alt = image.alt;

  // Додаємо зображення в елемент <li>
  listItem.appendChild(img);

  // Додаємо елемент <li> в фрагмент
  fragment.appendChild(listItem);
});

// Додаємо всі елементи галереї разом з фрагменту в список ul.gallery в DOM за одну операцію
galleryList.appendChild(fragment);
