function detail(id) {
    window.location.href = "detail.html/p=" + id;
}



function detailProduct(id) {
    var html = "";
    for (var i = 0; i < product.length; i++) {
        if (product[i].id == id) {

            var name = product[i].name;
            var price = product[i].price;
            // Cắt chuỗi price thành 1.000.000 VNĐ
            var price1 = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); 
            
            var html1 = "";
            {product[i].images.map((item) => {
                html1 += `
                    <div class="multi-img-item">
                        <img src="${item}" onclick="${item}">
                    </div>
                `
                })
            }
            html += `
                <div class="col-xl-6">
                    <div class="detail-img">
                        <img src="${product[i].mainImage}" id="mainImages">   
                    </div>
                    <div class="multi-img" >
                       
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="detail-info">
                        <h1>${product[i].name}</h1>
                        <p>Mã sản phẩm: <b>${product[i].id}</b></p>
                        <h3 id="product-price"></h3>
                        <div class="line-dotted"></div>
                        <div class="select-detail">
                            <div class="size">
                                <h4>SIZE</h4>
                                <select name="#" id="#">
                                    <div class="optional">
                                        <option value="1">36</option>
                                        <option value="2">37</option>
                                        <option value="3">38</option>
                                        <option value="4">39</option>
                                        <option value="5">40</option>
                                        <option value="6">41</option>
                                        <option value="7">42</option>
                                        <option value="8">43</option>
                                        <option value="9">44</option>
                                        <option value="10">45</option>
                                    </div>
                                </select>
                            </div>
                            <div class="quantity">
                                <h4>SỐ LƯỢNG</h4>
                                <select name="#" id="#">
                                    <div class="optional">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                    </div>
                                </select>
                            </div>
                        </div>
                        <div class="function-cart">
                            <button class="btn-add" onclick="addCart()">THÊM VÀO GIỎ HÀNG</button>
                            <button class="btn-luv"><i class="fa-regular fa-heart"></i></button>
                        </div>
                        <button class="btn-payy">THANH TOÁN</button>
                    </div>
                </div>
            `;

            
        }
    }
    document.getElementById("detail").innerHTML = html;
    document.querySelector(".multi-img").innerHTML = html1;
    document.getElementById("product-name").innerHTML = name;
    document.getElementById("product-price").innerHTML = price1 + " VNĐ";
    
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),

        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var id = getParameterByName('id');
detailProduct(id);


// ====================================================================
// Path: Assets\JS\cart.js
function addCart() {
    var id = getParameterByName('id');
    var name = document.getElementById("product-name").innerHTML;

    // Chuyển price từ string sang number để tính toán
    var price = document.getElementById("product-price").innerHTML;
    var price1 = price.replace(/[^0-9]/g, '');
    var price2 = parseInt(price1);

    var cart = JSON.parse(localStorage.getItem("cart"));
    if (cart == null) {
        cart = [];
    }
    var check = false;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart[i].quantity++;
            check = true;
        }
    }
    if (check == false) {
        var item = {
            id: id,
            name: name,
            price: price2,
            quantity: 1
        }
        cart.push(item);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Bạn đang có " + cart.length + " sản phẩm trong giỏ hàng");
    document.getElementsByName("quantity").value = cart.length;
    location.reload();
}


function removeItem(id) {
    var cart = JSON.parse(localStorage.getItem("cart"));
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id == id) {
            cart.splice(i, 1);
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    showCart();
}

function totalPrice() {
    var cart = JSON.parse(localStorage.getItem("cart"));
    var total = 0;
    for (var i = 0; i < cart.length; i++) {
        total += cart[i].quantity * cart[i].price;
    }
    return total;
}
document.getElementById("total-price").innerHTML = totalPrice().toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + " VNĐ";




function deleteAll(){
    localStorage.clear();
    location.reload();
}