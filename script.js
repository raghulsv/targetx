
function getproduct(){
  const baseurl = "http://[::1]:3000/products"; 
fetch(baseurl)
  .then(resp => resp.json())
  .then(data => {
   console.log(data);
   data.forEach((item) => {
    var card = document.createElement("div");
    card.className ='card';
    
    let imageblock =document.createElement("div");
    var p_image = document.createElement("img");
    imageblock.appendChild(p_image);
    imageblock.className ='pimage';
    p_image.src = (item.image);
    card.appendChild(imageblock);

    var p_name = document.createElement("p");
    p_name.className ='pname';
    let p_nametext = document.createTextNode(item.name);
    p_name.appendChild(p_nametext);
    card.appendChild(p_name)

    var p_desc = document.createElement("p");
    p_desc.className ='pname';
    let p_desctext = document.createTextNode(item.desc);
    p_desc.appendChild(p_desctext);
    card.appendChild(p_desc);

    var p_price = document.createElement("p");
    p_price.className ='pname';
    let p_pricetext = document.createTextNode(item.price+'rs');
    p_price.appendChild(p_pricetext);
    card.appendChild(p_price);
    document.getElementById("main-container").appendChild(card);


    var addtocart_btn=document.createElement("button");
    addtocart_btn.className ="addcartbtn";
     addtocart_btn.onclick = addtocart(item.id,item.name,item.image,item.price);
    let buttontext = document.createTextNode("add to cart");
    
    addtocart_btn.appendChild(buttontext);
    card.appendChild(addtocart_btn);


    
    
    
   });
   
 })
   
  
     
  
  
   .catch(e => {
    console.log(e);
    return e;
  });
}
function addtocart(id,name,image,price){
  const myPost = {
    product_id: id,
    product_name: name,
    product_image: image,
    product_price: price,
  }
  console.log(myPost);
  const options = {
    method: 'POST',
    body: myPost,
    headers: {
      'Content-Type': 'application/json'
    }
  };
  
  fetch('http://[::1]:3000/carts', options)
    .then(res => res.json())
    .then(res => console.log(res));
  

}

setTimeout(function () {
  getproduct();
  
},200);

    