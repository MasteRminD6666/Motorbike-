const Welcome = () => {
    alert("HELLO Chose A Motorbike betwen 1 to 4 to Add it")
    let motortype = prompt("Enter 1 2 3 Or 4");
    console.log(typeof motortype)
    if(typeof motortype !='string'){
        alert('Please Enter a vaild input')
        Welcome()

    }
    else if( motortype == '1'){
       document.write('<img src="https://www.bennetts.co.uk/-/media/bikesocial/2020-june-images/motorcycle-types-guide/harley_fat_boy_cruiser.ashx?h=493&w=740&la=en&hash=070B31B0992716E1ED7953C1252CBF00ECE7C551">')

    }
    else if( motortype == 2){
         document.write('<img src="https://cdn.shopify.com/s/files/1/0965/7500/products/RKv9re4_1024x1024_82671096-ec81-4884-a309-6bb8147a295e.jpg?v=1553829485">')

    }
    else if( motortype == 3){
        alert("you choosed the perfect one")
         document.write('<img src="https://i.pinimg.com/736x/a5/f2/53/a5f253c5fede594fdf0376cd7a487303.jpg">')


    }
    else if( motortype == 4){
        alert("you chosed the bad one try again")
        document.write('<img src="https://cdn1.vectorstock.com/i/1000x1000/65/25/scooter-motorbike-vector-22666525.jpg">')
        
    }


}

var about= document.getElementById('about')
about.addEventListener('click' ,function(){
    alert("about page not created yet")
})

Welcome()