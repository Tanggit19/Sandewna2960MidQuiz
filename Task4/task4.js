function Arrayfunc(){
    var Movies=["Spiderman","Nun","Anabel","Poos in boots","Bumblebee"];

    if(Movies[3][0]== "I"){
        console.log("Yay");
    }
    else{
        console.log("Nay");
    }
    while(Movies.length >0){
        Movies.pop();
    }   
    Movies.push("","","","Ironman","Bumblebee");
    console.log(Movies);
    
}
function Objectfunc(){
    var car=[{
        model:"PandaCross",
        colour:"Black",
        price:70
    }]
    if((car[0].price) > 50){
        console.log("Expensive");
    }
    else{
        console.log("Affordable"); 
    }
    console.log(car[0].colour);
}
Arrayfunc();
Objectfunc();