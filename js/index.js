const productsBox = document.getElementById("products-box");
const products = document.querySelectorAll(".product-box__item");
const catsSel = document.getElementById("cats");
const priceSel = document.getElementById("price");
const cartSel = document.getElementById("cart");
const totalPrice = document.getElementById("total-price");
const addCartInput = document.getElementsByClassName("qty__item");
const addBtn = document.getElementsByClassName("product-box__btn");
const order = document.getElementById("check");
//let productRes = products;
console.log(cartSel.innerHTML)
function render(data){
     console.log(data);
    if(data !== products){
        return  productsBox.innerHTML = data
    } 
    else if(data === products) {
            return  productsBox;
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
    
    // const filter = Array.from(productRes).filter((item) => {
    //     return ( 
    //         selectedCat === -1 ||  selectedCat === parseInt(item.className) ||
    //         selectedPrice === -1 ||  parseInt(item.children[2].children[0].innerText) <= selectedPrice
    //     )
    // })

    // const filterProduct = products.forEach((product) => {
    //     return (
    //        selectedPrice === -1 || parseInt(product.children[2].children[0].innerText) <= selectedPrice &&
    //        selectedCat === -1 || parseInt(product.classList[0]) === selectedCat
    //            )
    //       })

    let items = productsBox.getElementsByClassName("product-box__item");
    for (let i = 0; i<items.length; i++){
        if(items[i].classList.contains(selectedCat) || (parseInt(items[i].children[2].children[0].innerHTML) <= selectedPrice)){
            items[i].style.display = 'block';
            }   else if((!(items[i].classList.contains(selectedCat)) && selectedCat === 0) && (!(parseInt(items[i].children[2].children[0].innerHTML) <= selectedPrice) && selectedPrice === 0)){
                items[i].style.display = 'block';
               } 
               else { items[i].style.display = "none";
               }
    }  

    // let items = productsBox.getElementsByClassName("product-box__item");
    // for (let i = 0; i<items.length; i++){
    //     if(items[i].classList.contains(selectedCat)){
    //         items[i].style.display = 'block';
    //         }   else if(!(items[i].classList.contains(selectedCat)) && selectedCat === 0){
    //             items[i].style.display = 'block';
    //            } else { items[i].style.display = "none";
    //              }
    //      }  
    // for (let i = 0; i<items.length; i++){
    //    if(parseInt(items[i].children[2].children[0].innerHTML) <= selectedPrice){
    //    items[i].style.display = 'block';
    //    } else if(!(parseInt(items[i].children[2].children[0].innerHTML) <= selectedPrice) && selectedPrice === 0)  {
    //         items[i].style.display = 'block';
    //         } else { items[i].style.display = "none";
    //      }
    //    }
    // render(filter)
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
    console.log(target)
    console.log(target.name)
    if(target.name !== "check-form"){
        return;
    } 
    // else if(cartSel.innerHTML === ""){
    //         alert ('Пожалуйста, выберите что-нибудь.')
    //         return
    // }
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