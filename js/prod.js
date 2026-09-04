let productname=document.getElementById('prodName');
let productCat=document.getElementById('Benefits');
let productPrice=document.getElementById('prodPrice');
let productDes=document.getElementById('How');
let productImage = document.getElementById('image');
let arrProduct=JSON.parse(localStorage.getItem("product")) || []
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let UpdateIndex = -1;
// showProduct
function displayProduct(products=arrProduct){


let flower=""; //html inside product
for(let i=0; i<products.length; i++){
    flower += `
    <div class="col-12 col-sm-6 col-md-4 col-lg-4 bigcard">
        <div class="card h-75 ">

            <img src="${products[i].image}"
                 onclick="showProduct(${i})"
                 class="card-img-top h-50"
                 alt="${products[i].Name}">

            <div class="card-body">

                <h5 class="hname">${products[i].Name}</h5>

                <p class="price text-center">
                    price: ${products[i].price}$ (300gm)
                </p>

                <div class="space">
                    <button onclick="deleteProduct(${i})" class="debtn">
                        Delete
                    </button>

                    <button onclick="updateProduct(${i})" class="upbt">
                        Update
                    </button>

                    <button onclick="addToCart(${i})"  class="buttja">
                        Add To Cart
                    </button>
                </div>

            </div>
        </div>
    </div>
`;
}

document.getElementById('formProduct').innerHTML=flower;

}
displayProduct(arrProduct);

function add(){

    if(UpdateIndex != -1){

        arrProduct[UpdateIndex].Name = productname.value;
        arrProduct[UpdateIndex].Benefits = productCat.value;
        arrProduct[UpdateIndex].price = productPrice.value;
        arrProduct[UpdateIndex].description = productDes.value;

        if(productImage.files.length > 0){

            let reader = new FileReader();

            reader.onload = function(){
                arrProduct[UpdateIndex].image = reader.result;

                localStorage.setItem(
                    "product",
                    JSON.stringify(arrProduct)
                );

                clearProduct();
                displayProduct(arrProduct);
                UpdateIndex = -1;
            };

            reader.readAsDataURL(productImage.files[0]);

        }else{

            localStorage.setItem(
                "product",
                JSON.stringify(arrProduct)
            );

            clearProduct();
            displayProduct(arrProduct);
            UpdateIndex = -1;
        }

    }else{

        // ADD

        let reader = new FileReader();

        reader.onload = function(){

            let product = {
                Name: productname.value,
                Benefits: productCat.value,
                price: productPrice.value,
                description: productDes.value,
                image: reader.result
            };

            arrProduct.push(product);

            localStorage.setItem(
                "product",
                JSON.stringify(arrProduct)
            );

            clearProduct();
            displayProduct(arrProduct);
        };

        if(productImage.files.length > 0){
    reader.readAsDataURL(productImage.files[0]);
}
    }
}
function clearProduct(){
    productname.value="";
    productCat.value="";
    productPrice.value="";
    productDes.value="";
}


function deleteProduct(index){
    arrProduct.splice(index,1);
    localStorage.setItem("product", JSON.stringify(arrProduct));
    displayProduct(arrProduct);
}

function updateProduct(index){
    console.log("update clicked", index);
    
    UpdateIndex=index;

    productname.value=arrProduct[index].Name;
    productCat.value=arrProduct[index].Benefits;
    productPrice.value=arrProduct[index].price;
    productDes.value=arrProduct[index].description;




}
function addToCart(index){

    cart.push(arrProduct[index]);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    console.log(cart);

    alert("Added to cart!");
}







function searchProduct(x){
    let matchproduct=[];
    for(let i=0;i<arrProduct.length;i++){

        if(arrProduct[i].Name.toLowerCase().includes(x.toLowerCase())){
            matchproduct.push(arrProduct[i]);
               
        }
        
    }
    console.log(matchproduct);
    displayProduct(matchproduct);
} 




// function showProduct(index) {

//     // Check that the product exists
//     if (!arrProduct[index]) {
//         console.log("Product not found");
//         return;
//     }

//     // Get modal elements
//     let modelName = document.getElementById("model-name");
//     let modelImage = document.getElementById("model-image");
//     let modelCat = document.getElementById("modelcat");
//     let modelPrice = document.getElementById("modelprice");
//     let modelDes = document.getElementById("modeldes");

//     // Check if elements exist
//     if (!modelName || !modelImage || !modelCat || !modelPrice || !modelDes) {
//         console.log("Modal element not found");
//         return;
//     }

//     // Put product data inside modal
//     modelName.innerHTML = arrProduct[index].Name;

//     modelImage.src = arrProduct[index].image;

//     modelCat.innerHTML =
//         "Benefits: " + arrProduct[index].Benefits;

//     modelPrice.innerHTML =
//         "Price: $ " + arrProduct[index].price;

//     modelDes.innerHTML =
//         "How to make: " + arrProduct[index].description;

//     // Show modal
//     let modalElement = document.getElementById("modell");

//     let modal = new bootstrap.Modal(modalElement);

//     modal.show();
// }





// function showProduct(index){
//     document.getElementById("model-name").innerHTML=arrProduct[index].Name
//     arrProduct[index].Name;
//     document.getElementById("model-image").src =
//         arrProduct[index].image;
//   document.getElementById("modelcat").innerHTML =
//      "Benefits:" +  arrProduct[index].Benefits;

//     document.getElementById("modelprice").innerHTML =
//      "price: $ "  + arrProduct[index].price;

//    document.getElementById("modeldes").innerHTML =
//       "How to make:" + arrProduct[index].description;



//     let modal = new bootstrap.Modal(
//         document.querySelector(".modal")
//     );
//   modal.show();
// }


function showProduct(index) {

    if (!arrProduct[index]) {
        console.log("Product not found");
        return;
    }

    let modelName = document.getElementById("model-name");
    let modelImage = document.getElementById("model-image");
    let modelCat = document.getElementById("modelcat");
    let modelPrice = document.getElementById("modelprice");
    let modelDes = document.getElementById("modeldes");

    modelName.innerHTML = arrProduct[index].Name;

    modelImage.src = arrProduct[index].image;

    modelCat.innerHTML =
        "Benefits: " + arrProduct[index].Benefits;

    modelPrice.innerHTML =
        "Price: $ " + arrProduct[index].price;

    modelDes.innerHTML =
        "How to make: " + arrProduct[index].description;

    let modalElement = document.getElementById("modell");

    let modal = new bootstrap.Modal(modalElement);

    modal.show();
}



function logout(){
    localStorage.removeItem("login");
    window.location.href="index3.html"
}


// function showAddForm(){

//     document.getElementById("showAddForm").style.display = "block";

// }
// function showAddForm() {
//     let form = document.getElementById("showaddForm");

//     if (form.style.display === "none") {
//         form.style.display = "block";
//     } else {
//         form.style.display = "none";
//     }
// }

// let form = document.getElementById("showAddForm");
// form.style.display = "none";



//  document.getElementById("showAddForm");

//   form.style.display = "none";

// document.getElementById("showFormBtn").onclick = function () {
//     form.style.display = "block";
// };

// function showAddForm() {

//     let form=
//     document.getElementById("formProduct").classList.remove("d-none");


// form.classList.remove("d-none");}