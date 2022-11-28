let allContainerCart = document.querySelector('.products');
let containerBuyCart = document.querySelector('.card-items');
let priceTotal = document.querySelector('.price-total');
//let amountProduct = document.querySelector('.count-product');

let buyThings = [];
let totalCard = 0;
//let countProduct = 0;

loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('bto')) {
        const selectProduct = e.target.parentElement;
        readTheContent(selectProduct);
    }
}

function deleteProduct(e) {

    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        //countProduct--;
    }
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        //amountProduct.innerHTML = 0;
    }
    loadhtml();
}
function readTheContent(product){
    const infoProduct = {
        name: product.querySelector('h4').textContent,
        price: product.querySelector('h2').textContent,
        id: product.querySelector('button').getAttribute('data-id'),
        amount: 1
    }
    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const produc = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...produc];
    } else {
        buyThings = [...buyThings, infoProduct]
        //countProduct++;
    }
    loadhtml();
    //console.log(infoProduct);
}
function loadhtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {name, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `

        <div class="item-content">
            <h5>${name}</h5>
            <h5 class="cart-price">${price}$</h5>
            <h6>Amount: ${amount}</h6>
        </div>
        <span class="delete-product" data-id="${id}">X</span>
    `;

    containerBuyCart.appendChild(row);

    priceTotal.innerHTML = totalCard;
    });
}
function clearHtml(){
    containerBuyCart.innerHTML = '';
}