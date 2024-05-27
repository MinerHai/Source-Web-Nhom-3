function loadForm() {
    var xhr = new XMLHttpRequest();
    var url = "../html/product-items/caichip.html";
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            document.getElementById("form-page").innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

function closeForm() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.form-page').style.display = 'none';
}

function showForm(formId, buttonId, className) {
    var selectedForm = document.getElementById(formId);
    if (selectedForm.style.display === 'block') {
        return;
    }
    var forms = document.querySelectorAll('.' + className);
    forms.forEach(function(form) {
        form.style.display = 'none';
    });
    selectedForm.style.display = 'block';

    var buttons = document.querySelectorAll('.form-button');
    buttons.forEach(function(button) {
        if (button.id === buttonId) {
            button.classList.add('active-button');
        } else {
            button.classList.remove('active-button');
        }
    });
}

var giohang = [];
window.onload = function() {
    loadCartFromLocalStorage();
    displayCartItems();
};

function themvaogiohang(x) {
    var productContainer = x.closest('.product-container');
    var imgElement = productContainer.querySelector('.product-img img');
    var imgSrc = imgElement.src;
    var nameElement = productContainer.querySelector('.product-content-name');
    var productName = nameElement.textContent.trim();
    var priceElement = productContainer.querySelector('.product-content-price');
    var productPrice = priceElement.textContent.trim();

    alert("Thêm sản phẩm thành công!!");
    var sanpham = [imgSrc, productName, productPrice, 1];
    giohang.push(sanpham);

    saveCartToLocalStorage();
    Solg_sp();
    displayCartItems();
}

function Solg_sp() {
    document.getElementById("count-sp").innerHTML = giohang.length;
}

function saveCartToLocalStorage() {
    localStorage.setItem('giohang', JSON.stringify(giohang));
}

function loadCartFromLocalStorage() {
    var storedCart = localStorage.getItem('giohang');
    if (storedCart) {
        giohang = JSON.parse(storedCart);
        Solg_sp();
    }
}

function displayCartItems() {
    var cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';

    if (giohang.length === 0) {
        cartItemsContainer.innerHTML = `<p style="color:red;">Giỏ hàng của bạn đang trống.</p>`;
        return;
    }

    var gioHangObject = {};

    giohang.forEach(function(item) {
        var key = item.slice(0, 3).join('|'); 
        if (gioHangObject[key]) {
            gioHangObject[key].quantity++;
        } else {
            gioHangObject[key] = {
                imgSrc: item[0],
                productName: item[1],
                productPrice: item[2],
                quantity: item[3]
            };
        }
    });

    for (var key in gioHangObject) {
        if (gioHangObject.hasOwnProperty(key)) {
            var product = gioHangObject[key];
            var itemHtml = `
            <div class="cart-item" data-key="${key}">
                <div class="row-product" id="col1">
                    <div class="col-img"><img src="${product.imgSrc}" alt="${product.productName}"></div>
                    <div><p id="black-text">${product.productName}</p></div>
                </div>
                <div class="row-product" id="col2"><p id="price-product" class="product-prices">${product.productPrice}</p></div>
                <div class="row-product" id="col3">
                    <div class="add-down-btn">
                        <button class="btn decrementBtn" data-key="${key}"><img src="../images/product-icon/Minus.png" alt=""></button>
                        <p id="value">${product.quantity}</p>
                        <button class="btn incrementBtn" data-key="${key}"><img src="../images/product-icon/Plus.png" alt=""></button>
                    </div>
                </div>
                <div class="row-product" id="col4">
                    <div class="getMoney" id="black-text"><p id="totalSum">${(product.quantity * parseFloat(product.productPrice.replace('$', ''))).toFixed(2)}</p></div>
                </div>
                <div class="row-product" id="col5">
                    <button class="btn-cuz" onclick="removeFromCart('${key}')">X</button>
                </div>
            </div>
            <hr style="color:#A35DFE; opacity: 0.3; display: block; margin: 0;">
            `;
            cartItemsContainer.innerHTML += itemHtml;
        }
    }

    document.querySelectorAll('.incrementBtn').forEach(button => {
        button.addEventListener('click', function() {
            updateQuantity(button.dataset.key, 1);
        });
    });

    document.querySelectorAll('.decrementBtn').forEach(button => {
        button.addEventListener('click', function() {
            updateQuantity(button.dataset.key, -1);
        });
    });

    tinhTien();
}

function updateQuantity(key, change) {
    giohang = giohang.map(item => {
        if (item.slice(0, 3).join('|') === key) {
            var newQuantity = item[3] + change;
            if (newQuantity > 0) {
                item[3] = newQuantity;
            }
        }
        return item;
    }).filter(item => item[3] > 0);

    saveCartToLocalStorage();
    displayCartItems();
    Solg_sp();
}

function removeFromCart(key) {
    giohang = giohang.filter(function(item) {
        return item.slice(0, 3).join('|') !== key;
    });

    saveCartToLocalStorage();
    displayCartItems();
    Solg_sp();
    alert("Đã xóa sản phẩm thành công");
}

function subTotal(x) {
    var totalSum = document.getElementById("totalSum");
    var priceText = document.getElementById('price-product').innerText;
    var price = parseFloat(priceText.replace('$', ''));
    totalSum.innerHTML = x * price;
}

function tinhTien() {
    var total = document.getElementById('Subtotal');
    var finaltotal = document.getElementById('final-total');
    const giasanpham = document.querySelectorAll('.getMoney');
    let subTotal = 0;

    giasanpham.forEach(p => {
        subTotal += parseFloat(p.textContent);
    });

    total.innerHTML = "$" + subTotal.toFixed(2);
    finaltotal.innerHTML = "$" + (subTotal + 0).toFixed(2); // Free shipping
}

function comingsoon() {
    alert('Coming Soon...');
}
