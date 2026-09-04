 
 document.getElementById("create").addEventListener("submit" , function(event){
  event.preventDefault();
 
 let name = document.getElementById("name").value;
  let password = document.getElementById("password").value;
  let repassword= document.getElementById("repassword").value;
  let phone = document.getElementById("phone").value;
  if (password !== repassword){
    alert("password doesnot match!!!");
    return;
    
  }
    localStorage.setItem("name", name);
    localStorage.setItem("password", password);
    localStorage.setItem("repassword", repassword)
    localStorage.setItem("phone", phone);
    console.log(localStorage);
    window.location.href="index3.html";
})




    
