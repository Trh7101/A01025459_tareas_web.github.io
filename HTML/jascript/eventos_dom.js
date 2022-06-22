function main(){
    //6
    document.getElementById("demo").onmouseenter = function() {mouseEnter()};
    document.getElementById("image").onmouseenter = function() {mouseEnteri()};
    document.getElementById("demo").onmouseleave = function() {mouseLeave()};
    document.getElementById("image").onmouseleave = function() {mouseLeavei()};

    //1
    document.addEventListener('mousemove', (event)=>
    {
        const mouse_position = document.getElementById(`mousePosition`)

        mouse_position.innerHTML = `Posicion del mouse: ${event.clientX} - ${event.clientY}`
    })
}

//1 position
function mouseMovement(event){
    const mouse_position = document. 
    getElementById('mouse_position')

    mouse_position.innerHTML = `Posicion del mouse:  ${event. clientX} - ${event. clientY}`
    console.log("X", event.clientX)
    console.log("Y", event.clientY)
}


// //3 add onclick
document.getElementById("sampleTable").onclick = function() {insertRow()};
function insertRow() {
   document.getElementById("sampleTable").innerHTML = "YOU CLICKED ME!";
 }

 document.getElementById("sampleTable").onclick = function() {insertColumn()};
 function insertColumn() {
   document.getElementById("sampleTable").innerHTML = "YOU CLICKED ME!";
 }

//5 lists adds


//6 change onmove
function mouseEnter() {
    document.getElementById("demo").style.color = "red";
    console.log(document.getElementById("demo"));
}
function mouseEnteri() {
    document.getElementById("image").style.size = "500", "500";
    console.log(document.getElementById("image"));
}
  
function mouseLeave() {
    document.getElementById("demo").style.color = "black";
}
function mouseLeavei() {
    document.getElementById("image").style.size = "100", "100";
}







var form = document.getElementById("myForm");
document.getElementById("myForm").onsubmit = function() {submit()};
//2 pendiente



document.getElementById("image").style.resize = 300,
<img src="http://placekitten.com/200/300"> </img>
window.addEventListener('load', main)