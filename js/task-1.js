// Отримуємо список категорій за допомогою їх ідентифікатора
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи li з класом "item"
const categoriesItems = categoriesList.querySelectorAll('li.item');

// Виводимо кількість категорій у консоль
console.log('Number of categories:', categoriesItems.length);

// Для кожної категорії виводимо текст заголовка та кількість елементів
categoriesItems.forEach(category => {
  // Отримуємо текст заголовка (тегу <h2>)
  const categoryName = category.querySelector('h2').textContent;

  // Отримуємо всі елементи списку підкатегорій
  const subcategories = category.querySelectorAll('ul > li');

  // Пораховуємо кількість підкатегорій
  const subcategoriesCount = subcategories.length;

  // Виводимо інформацію у консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subcategoriesCount}`);
});
