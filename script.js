/* INTRO TO JSON */






let restaurants = [
    {
      name: "SUSHI/SASHIMI",
      cover: "🍣",
      tags: ["🐟    Taro    🐟", "🐡    Uni 🐡", "🐣    Tamago  🐣", "🐄    Wagyu🐄"],


    },{
      name:  "SOUPS & NOODLES",
      cover: "🍜",

      tags:  ["🥣   Udon    🥣", "🍲  Ramen 🍲", "🥢 Soba   🥢", "🥄  Miso  🥄"]
    },{
      name: "APPETIZERS",
      cover: "🍢",
      tags: ["🥟    Gyoza   🥟", "🍤    Tempura 🍤", "🐓    Karaage 🐓", "🥘    okonomiyaki 🥘"]
    }
  ]
  
  for( var i=0;i<restaurants.length;i++){
    produceElement2(restaurants[i])
    
  }
  
  
  
function produceElement2(obj){
let body = document.body
let container = document.getElementById("container")


let emoji = document.getElementById("emoji")
emoji.style.textAlign="center"
body.appendChild(emoji)





let elRes =  document.createElement("div")
elRes.classList.add("res")



let elImageScale = document.createElement("div")
elImageScale.classList.add("imgscale")


    
    let elImage = document.createElement("h1")
    elImage.innerHTML = obj.cover
    elImageScale.appendChild(elImage)

    elImageScale.addEventListener("mouseover", function(){
        elImage.style.transform = "scale(2)"
        elImage.style.transition = "1s"
    })
    elImageScale.addEventListener("mouseout", function(){
        elImage.style.transform = "scale(1)"
    })
    

    
    let elTitle = document.createElement("h3")
    elTitle.setAttribute("class","title")
    elTitle.innerHTML = obj.name

    let elContainer = document.createElement("div")
    elContainer.classList.add("wrap")
    let elFoodList = document.createElement("ui")
    elFoodList.classList.add("foodList")
    for (var i=0; i<obj.tags.length; i++){
        let elFood = document.createElement("li")
        elFood.innerHTML = obj.tags [i]
        elFoodList.appendChild(elFood)
        elFood.style.transition = ".7s"

        elFood.addEventListener("mouseover", function(){
            elFood.style.color = "rgb(255,0,0)";
            elFood.style.fontSize = "2.5rem"
           
        });
        elFood.addEventListener("mouseout", function(){
            elFood.style.color = "black";
            elFood.style.fontSize = "2rem"
        });

    }


    container.appendChild(elRes)
    elRes.appendChild(elTitle)
    elRes.appendChild(elImageScale)
    elRes.appendChild(elFoodList)

}



// function produceElement1(obj){
//     let container = document.getElementById("container")

//     let starsHTML = ""
//     for(var i=0;i<obj.star;i++){
//       starsHTML+="<li>⭐️</li>"
//     }
//     let tagsHTML = ""
//     for(var i=0;i<obj.tags.length;i++){
//       tagsHTML+="<li>"+obj.tags[i]+ "</li>"
//     }
//     // console.log(starsHTML)
//     // container.innerHTML = "<ul>"+starsHTML+"</ul>"


//     let genHTML = `<div class="res">
//       <img src="`+ obj.cover+ `" alt="">
//       <h3>` + obj.name+`</h3>
//       <ul class=starlist>
//         `+starsHTML + `
//       </ul>
//       <ul>
//         `+tagsHTML + `
//       </ul>
//     </div>`

//     container.innerHTML+=genHTML
// }
