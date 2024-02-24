const categoryItems = document.querySelectorAll('#categories .item');
console.log('Number of categories: ', categoryItems.length);

categoryItems.forEach(function (categoryItem) {
  const text = categoryItem.querySelector('h2');
  const lengthItem = categoryItem.querySelectorAll('li');
  console.log(`Category: `, text.textContent);
  console.log(`Elements: `, lengthItem.length);
});
