const itemCarousel = document.querySelector(".item-carousel")
const itemData = document.querySelector(".item")
// fetch data from nike.json
fetch('./javascript/nike.json')
.then(response => response.json())
    .then(data => {
        let shoesData = ''
        data.shoes.forEach(shoes =>{
            shoesData += `
            <div class="item">
                <div class="picture-container">
                    <img class="images" src="${shoes.img}" alt="Nike Shoes">
                </div>
                <div class="name-and-price-container">
                    <p class="shoes-name">${shoes.ShoesName}</p>
                    <span class="price">${shoes.price}</span>
                    <span class="gender-shoes">${shoes.gender}</span>
                </div>
            </div>
            `
        })
        // passing data to "data shoes" index.html
        itemCarousel.innerHTML = shoesData
    })


// fetch data from featured image
const featuredFlex = document.querySelector(".featured-flex");

fetch('./javascript/featured-images.json')
.then(response => response.json())
    .then(data => {
        let featuredImages = ''
        data.featuredData.forEach(dataFeatured =>{
            featuredImages+= `
            <div class="featured-items-container">
                <div class="featured-image-container">
                    <img src=${dataFeatured.img} alt="Featured image" >
                </div>
                <div class="text-and-button-container">
                    <h2>${dataFeatured.text}</h2>
                    <button>${dataFeatured.button}</button>
                </div>
            </div>`
        })
        featuredFlex.innerHTML = featuredImages
    })