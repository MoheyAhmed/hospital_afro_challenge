
let menuIcon = document.getElementById("bar_icon");
let serv_link = document.getElementsByClassName("serv-link");
let navMenu  = document.querySelector(".header .nav .links");
let drop_down = document.getElementsByClassName("drop-down");
window.addEventListener("load", function(){
    navMenu.classList.remove("open");
});
menuIcon.addEventListener("click", function(){
    navMenu.classList.toggle("open");

});
serv_link[0].addEventListener("click", function(){
    drop_down[0].style.height= "220px";
    drop_down[0].style.padding= "20px";
})

var b_doctor = document.getElementById("b-doctor")
let chat = document.getElementById("chat")
var b_close = document.getElementById("close-chat")
var b_doctor2 = document.getElementById("b-doctor2")
var b_doctor3 = document.getElementById("b-doctor3")
var b_doctor4 = document.getElementById("b-doctor4")
var b_doctor5 = document.getElementById("b-doctor5") 
var message_area = document.getElementsByClassName("message-area")   
var send = document.getElementById("send")
var text_area = document.getElementById("text-area")
b_doctor.onclick = function(){
    chat.classList.add("open");
    
}
b_close.onclick = function(){
    chat.classList.remove("open");
    message_area[0].innerHTML = "";
}
b_doctor2.onclick = function(){
    chat.classList.add("open");
}
b_doctor3.onclick = function(){
    chat.classList.add("open");
}
b_doctor4.onclick = function(){
    chat.classList.add("open");
}
b_doctor5.onclick = function(){
    chat.classList.add("open");
}
send.addEventListener("click", function(){
    if(text_area.value !== ""){
        var new_message = document.createElement("p");
        var message = document.createTextNode(text_area.value);
        var doctor_message = document.createElement("p")
        var text = document.createTextNode("Hello, How can I help you?")
        new_message.appendChild(message);
        new_message.classList.add("message-right")
        doctor_message.appendChild(text);
        doctor_message.classList.add("message-left")
        message_area[0].appendChild(new_message);
        text_area.value = ""
        setTimeout(function(){
            message_area[0].appendChild(doctor_message);
        },1000)
        


    }
})