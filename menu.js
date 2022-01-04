var count = 0;
var pr =(JSON.parse(localStorage.getItem("price"))) || [];
var cart = (JSON.parse(localStorage.getItem("cartitems"))) || [];

async function getmenu(){
    try{
        let res = await fetch(
            "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
        );
        let data = await res.json();
       var user = data.meals;
        console.log(user)
       for(var i = 0; i<19; i++){
        user.shift();
       }
       appnddata(user)
      
    }
    catch(err){
        console.log("err");
    }
}

getmenu();

function appnddata(user){
    user.map(function(elem){
        var img = document.createElement("img");
        img.src = elem.strMealThumb;

        var name = document.createElement("p");
        name.innerText=elem.strMeal;

        var x = Math.floor((Math.random()*100)+400)
        var n = document.createElement("p")
         n.innerText ="$"+x;

        var bt = document.createElement("button")
        bt.innerText="Add To Cart"
        bt.addEventListener("click", function(){
            count++;
            document.querySelector("#crc").innerHTML="";
            discount();
            addcart(elem,x);
            // add(elem.strMealThumb,elem.strMeal,x);
        })

      

        var div = document.createElement("div");

        div.append(img,name,n,bt)

        document.querySelector("#ct").append(div);
      })
}

function discount(){
    document.querySelector("#crc").innerHTML=count;
}

function addcart(elem,x){
    cart.push(elem);
    console.log(elem);
    pr.push(x);
    console.log(pr);
    localStorage.setItem("price", JSON.stringify(pr));
    localStorage.setItem("cartitems", JSON.stringify(cart));
}