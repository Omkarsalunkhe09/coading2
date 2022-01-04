var cart =  (JSON.parse(localStorage.getItem("cartitems"))) || [];
var pr = (JSON.parse(localStorage.getItem("price"))) || [];
var sum = 0;
    
cart.map(function(elem,index){
    var div = document.createElement("div")
    var img = document.createElement("img")
    img.setAttribute("src", elem.strMealThumb)

    var p = document.createElement("p")
    p.textContent=elem.strMeal;

    div.append(img,p)

   for(var i = 0; i<pr.length; i++){
       sum = sum + pr[i];
   }
 document.querySelector("#pri").innerHTML="Total price is "+ sum;

    var pe = pr;

    var p2 = document.createElement("p")
    p2.textContent=pe.shift();
    div.append(p2);

 


    var d = document.createElement("button")
    d.textContent="Delete"
    d.addEventListener("click", function(){
        del(index);
    })
    
    // var div = document.createElement("div")

    div.append(d)
    document.querySelector("#ct").append(div);
})

function del(index){
    cart.splice(index,1)
    localStorage.setItem("cartitems", JSON.stringify(cart));
    location.reload();

}

var total = JSON.parse(localStorage.getItem("cart"))

var sum = 0;
cart.map(function(elem){
    sum = sum + (+elem.prs)
   document.querySelector("#ttp").innerHTML="Total price is "+ sum;
})