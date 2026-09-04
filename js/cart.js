let cart = JSON.parse(localStorage.getItem("cart")) || [];

function displayCart(){

    let cartProduct = "";

    for(let i = 0; i < cart.length; i++){

        cartProduct += `
        
        <div class="col-md-4">

            <div class="card">

                <img src="${cart[i].image}" 
                     class="card-img-top">

                <div class="card-body">

                    <h5>${cart[i].Name}</h5>

                    <p>
                        Price: ${cart[i].price}$
                    </p>

                    <button 
                        onclick="removeFromCart(${i})"
                        class="btn btn-danger">
                        Remove
                    </button>

                </div>

            </div>

        </div>

        `;
    }

    document.getElementById("cartProducts").innerHTML = cartProduct;
}

displayCart();


function removeFromCart(index){

    cart.splice(index, 1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    displayCart();
}