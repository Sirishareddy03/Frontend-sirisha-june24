document.addEventListener("DOMContentLoaded",function()
{
    const toggle=document.getElementById("toggle")
    const container=document.querySelector(".container")
    toggle.addEventListener("click",function()
{
    toggle.classList.toggle("on");
    if(toggle.classList.container("on"))
    {
        container.style.backgroundColor="green";
    }
    else{
        container.style.backgroundColor="yellow";
    }
});
    
});