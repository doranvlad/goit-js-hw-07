const categories = document.querySelectorAll('.item')

console.log(`Number of categories: ${categories.length}`);

for (const category of categories) {
    console.log(`Category: ${category.querySelector('h2').textContent}`)
    console.log(`Elements: ${category.querySelector('ul').children.length}`)
}