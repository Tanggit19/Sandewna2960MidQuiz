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