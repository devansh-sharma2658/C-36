class Form {
constructor(){

}
display(){
var title = createElement('h2');  
title.html("Car Racing Game")
title.position(400 , 0);
var input = createInput("Enter Name")
var button = createButton('Play')
var greeting = createElement('h3')
input.position(450,160);
button.position(470,200);

button.mousePressed(function(){
input.hide();
button.hide();
var name = input.value();
playerCount += 1;
player.update(name);
player.updateCount(playerCount);
greeting.html("Hello " + name);
greeting.position(470 , 160);
})
}








}