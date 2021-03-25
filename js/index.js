const productsBox = document.getElementById("products-box");
const products = document.querySelectorAll(".product-box__item");
const total = document.getElementById("total");
const catsSel = document.getElementById("cats");
const priceSel = document.getElementById("price");
const cartSel = document.getElementById("cart");
const totalPrice = document.getElementById("total-price");
const addCartInput = document.getElementsByClassName("qty__item");
const addBtn = document.getElementsByClassName("product-box__btn");
const order = document.getElementById("check");

let productRes = products;
// console.log(productRes);
// console.log(productsBox);
// console.log(products);

function render(data){
     console.log(data);
    if(data !== products){
        console.log(data)
        return  productsBox.innerHTML = data
    } else {
        return products
    }
}
render(products)

document.addEventListener("change", handleChange)

function handleChange(e){
    const { target } = e;
    if(target.id!== "cats" && target.id!== "price"){
        return;
    }
    const selectedCat = parseInt(catsSel.value)
    const selectedPrice = parseInt(priceSel.value)
    console.log(selectedCat, selectedPrice)

    const filter = Array.from(productRes).filter((item) => {
        return ( 
            //  console.log((parseInt(item.children[2].children[0].innerText))),
            // console.log((parseInt(item.children[2].children[0].innerText)) <= selectedPrice),
            selectedCat === -1 || selectedCat === parseInt(item.className) ||
            selectedPrice === -1 || parseInt(item.children[2].children[0].innerText) <= selectedPrice
        )
    })
    console.log(filter)
    console.log(products)
    //<!-- why doesn't work? -->
    if(selectedCat === 0 || selectedPrice === 0){
        (products),
        console.log(products)
    }
    //<!-- why doesn't work? -->

    // const filterProduct = products.forEach.call((product) => {
    //     return (
    //          selectedPrice === -1 || parseInt(product.children[2].children[0].innerText) <= selectedPrice &&
    //          selectedCat === -1 || parseInt(product.classList[0]) === selectedCat,
    //          console.log( selectedCat === -1 || parseInt(product.classList[0]) === selectedCat),
    //          console.log(parseInt(product.children[2].children[0].innerText) <= selectedPrice)
    //            )
    //       })
    // console.log(filterProduct),
    // if(filter === products){
    //     console.log(filter)
    //     console.log(products)
    //     filter = products
    // }

    render(filter)
}

document.addEventListener("click", handleClick)

function handleClick(e){
    if(!e.target.classList.contains("product-box__btn")){
        return
        }
    const cart = e.target;
    console.log(addCartInput[0].value)
     const addSum = parseInt(cart.previousElementSibling.previousElementSibling.innerText);
    let countEl = 0;
    let allSum = 0;
    // let allSum = [];
   

    for(let i = 0; i < addCartInput.length; i++) {
        let elem = parseInt(addCartInput[i].value);
        if(0 <= elem){
            countEl += elem;
             allSum += (elem * addSum)
            // oneSum = (elem * addSum)
            //  allSum.push(oneSum)
            // if(oneSum !== 0){
            //     console.log(oneSum)
            //     allSum += oneSum
            //     console.log(allSum)
            // }
        }
    }
        console.log(allSum)
        // let totalSum = allSum.reduce((item, currentValue)=> item, 0)
        // console.log(totalSum)

    const addCartSel = cartSel.innerHTML = countEl;
    if(totalPrice => 0){
        totalPrice.innerHTML = allSum;
    }
    console.log(addSum)
}

document.addEventListener("click", handleOpenContent)
function handleOpenContent(e) {
    const { target } = e;
    const openId = target.dataset.openid
    console.log(openId)
    if(!openId) {
        return;
    }
    e.preventDefault()
    const hiddenEl = document.getElementById(openId);
    console.log(hiddenEl);
    hiddenEl.classList.toggle("hidden");
}

document.addEventListener("submit", handleSubmit)

function handleSubmit(e){
    const { target } = e;
    console.log(target.name)
    if(target.name !== "check-form"){
        return;
    }
    const textEl = target.yourname
    if(!textEl.value.trim().length){
        alert("Введите, пожалуйста, имя");
        e.preventDefault()
        return;
    }
    const emailEl = target.youremail
    if(!emailEl.value.trim().length){
        alert("Введите, пожалуйста, email");
        e.preventDefault()
        return;
    }
    const sendEl = target.send
    if(sendEl.name === "send"){
        alert("Спасибо за покупку!");
        return;
    }
}