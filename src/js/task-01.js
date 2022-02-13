const categoriesByItem = document.querySelectorAll('.item');
console.log(` Number of categories: ${categoriesByItem.length}`);

categoriesByItem.forEach(itemEl =>
    console.log(`Category: ${itemEl.firstElementChild.textContent}
    Elements: ${itemEl.lastElementChild.children.length}`),
  );