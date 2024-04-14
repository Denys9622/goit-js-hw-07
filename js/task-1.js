const categoriesList = document.getElementById('categories');

const categoriesItems = categoriesList.querySelectorAll('li.item');

console.log('Number of categories:', categoriesItems.length);

categoriesItems.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;

  const subcategories = category.querySelectorAll('ul > li');

  const subcategoriesCount = subcategories.length;

  // Виводимо інформацію у консоль
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${subcategoriesCount}`);
});
