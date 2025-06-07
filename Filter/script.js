const productList= document.getElementById('product-list');
const searchInput= document.getElementById('search-input');
const searchBtn= document.getElementById("search-btn");
const categoryBtns= document.querySelectorAll(".category-btn");

let filterProduct= ()=>{
    const searchValue= searchInput.value.toLowerCase();
    const productItems= document.querySelectorAll(".product-item");
    productItems.forEach(item=>{
        const title= item.querySelector("h3").innerText.toLowerCase(); // Here using querySelector we can get the vlaue inside the given element.
        const activeCategory= document.querySelector('.category-btn.active').dataset.category;
        const category= item.dataset.category;// to achieve the data-category value we should use dataset.attribute_name.
        // console.log(category);
        if((title.includes(searchValue) || searchValue=="") && (category===activeCategory || activeCategory==='all')){
            // console.log(item)
            item.style.display="block";
        }

        else{
            item.style.display="none";
        }
    })
}

let setCategory= (e)=>{
    categoryBtns.forEach(btn=>{
        btn.classList.remove('active');
        // console.log(e.target)
        e.target.classList.add('active');
        filterProduct()
    })
}
searchBtn.addEventListener('click', filterProduct);
searchInput.addEventListener('keyup',filterProduct);
categoryBtns.forEach(btn=>{
    btn.addEventListener("click", setCategory);
})
// filterProduct();