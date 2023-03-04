function dropdownStatus() {
  var x = document.getElementById("status");
  var i = document.getElementById("icons");
  if (x.style.display === "none") {
    x.style.display = "block";
    document.getElementById("icons").style.transform = "rotate(180deg)";
    document.getElementById("icons").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-s").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-s").style.color = "#ff5417";
    document.getElementById("status").style.height = "fit-content !important";
  } else {
    x.style.display = "none";
    document.getElementById("status").style.height = "0 !important";
    document.getElementById("icons").style.transform = "rotate(0deg)";
    document.getElementById("taga-s").style.color = "#303030";
    document.getElementById("icons").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-s").style.transition = "all 0.3s ease-in-out";
  }
}

function dropdownModel() {
  var y = document.getElementById("model");
  var i = document.getElementById("iconm");
  if (y.style.display === "none") {
    y.style.display = "block";
    document.getElementById("iconm").style.transform = "rotate(180deg)";
    document.getElementById("iconm").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-m").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-m").style.color = "#ff5417";
    document.getElementById("model").style.height = "fit-content !important";
  } else {
    y.style.display = "none";
    document.getElementById("model").style.height = "0 !important";
    document.getElementById("iconm").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-m").style.transition = "all 0.3s ease-in-out";
    document.getElementById("iconm").style.transform = "rotate(0deg)";
    document.getElementById("taga-m").style.color = "#303030";
  }
}

function dropdownProduct() {
  var y = document.getElementById("product");
  var i = document.getElementById("iconp");
  if (y.style.display === "none") {
    y.style.display = "block";
    document.getElementById("iconp").style.transform = "rotate(180deg)";
    document.getElementById("iconp").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-p").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-p").style.color = "#ff5417";
    document.getElementById("model").style.height = "fit-content !important";
  } else {
    y.style.display = "none";
    document.getElementById("model").style.height = "0 !important";
    document.getElementById("iconp").style.transition = "all 0.3s ease-in-out";
    document.getElementById("taga-p").style.transition = "all 0.3s ease-in-out";
    document.getElementById("iconp").style.transform = "rotate(0deg)";
    document.getElementById("taga-p").style.color = "#303030";
  }
}

// List Product Page (Product List)

var product = [
  {
    id: "A6T016",
    name: "Track 6 Jazico - Low Top",
    price: 1195000,
    "mainImage": "../Assets/Images/Pro_A6T016_1.jpeg",
    images: [
      "../Assets/Images/Pro_A6T016_1.jpeg",
      "../Assets/Images/Pro_A6T016_2.jpeg",
      "../Assets/Images/Pro_A6T016_3.jpeg",
      "../Assets/Images/Pro_A6T016_4.jpeg",
    ],
    status: "New Arrival",
  },
  {
    id: "AV00174",
    name: "Vintas Jazico - High Top",
    price: 1190000,
    "mainImage": "../Assets/Images/Pro_AV00174_1.jpeg",
    images: [
      "../Assets/Images/Pro_AV00174_1.jpeg",
      "../Assets/Images/Pro_AV00174_2.jpeg",
      "../Assets/Images/Pro_AV00174_3.jpeg",
      "../Assets/Images/Pro_AV00174_4.jpeg",
    ],
    status: "New Arrival",
  },
  {
    id: "AV00173",
    name: "Vintas Jazico - Low Top",
    price: 1190000,
    mainImage: "../Assets/Images/Pro_AV00173_1.jpeg",
    images: [
      "../Assets/Images/Pro_AV00173_1.jpeg",
      "../Assets/Images/Pro_AV00173_2.jpeg",
      "../Assets/Images/Pro_AV00173_3.jpeg",
      "../Assets/Images/Pro_AV00173_4.jpeg",
    ],
    status: "New Arrival",
  },
];


function listProduct() {
    var html = "";
    for (var i = 0; i < product.length; i++) {
      html += `
          <div class="col-xl-4">
              <div class="single-item">
                  <div class="product-img">
                      <img src="${product[i].mainImage}" alt="${product[i].id}">
                      <a class="btn-muangay" href="../Pages/detail.html?id=${product[i].id}">Mua ngay</a>
                      <div class="new-product">
                          <span>${product[i].status}</span>
                      </div>
                      <div class="product-info">
                          <a href="product-detail.html">
                              <h6>${product[i].name}</h6>
                          </a>
                          <p>${product[i].price} VNĐ</p>
                      </div>
                  </div>
              </div>
          </div>
          `;
    }
    return html;
}
document.getElementById("product-list").innerHTML = listProduct();
