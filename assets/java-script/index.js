var menuBtn=document.getElementById("menuBtn");
var sideNav=document.getElementById("sideNav");
var menu=document.getElementById("menu")

sideNav.style.right="-250px";
menuBtn.onclick=function(){
   
    if (sideNav.style.right=="-250px"){
        sideNav.style.right="0";
        menu.src="public/images/close.png"
    }
    else{
        sideNav.style.right="-250px";
       
        menu.src="public/images/menu.png"
    }
}

var formBtn = document.querySelector("#login-btn");
var loginForm=document.querySelector(".login-form-container");
var formClose=document.querySelector("#form-close");
loginForm.style.visibility="hidden";
formClose.onclick=()=>{
        loginForm.style.visibility="hidden";
    
}
formBtn.onclick=()=>{
    loginForm.style.visibility="visible";

}

var videoBtn=document.querySelectorAll(".vid-btn");

videoBtn.forEach(btn =>{
    btn.addEventListener("click",()=>{
        
        document.querySelector('.controls .active').classList.remove("active");
        btn.classList.add("active");
        let sr = btn.getAttribute("data-src");
        document.querySelector("#video-slider").src=sr;
    })
})

