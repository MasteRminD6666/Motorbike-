let rate = function(){
   let stars = prompt("Rate Our Website");
    stars = parseInt(stars);
   while (stars>5){
    alert("Rating Should Be Less Than 6")
    
   
   }
   if (stars<=5){
       document.getElementById("rating").innerHTML =
  "Your rate is:" +" "+ stars + " "+"Thank you";
   }
   return stars
}

let about = document.getElementById('about')
about.addEventListener('click' ,function(){
    rate()

})
  
// function showingRate()
// {
//    document.getElementById("rating").innerHTML =
//    "Rate:" + stars; 
  
// }
// showingRate()
