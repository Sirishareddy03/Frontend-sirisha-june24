
document.addEventListener("DOMContentLoaded",function()
{
    const box=document.getElementById("box")
    const button=document.getElementById("button")
    const colorcode=document.getElementById("colorcode")
     
    function getrandomcolor()
    {
        const letters='0123456789ABCDEF'
        let color='#';
        for( var i=0;i<6;i++)
        {
            color=color+letters[Math.floor(Math.random()*16)]

        }return color;

    }
    button.addEventListener("click",function()
{
    const newcolor=getrandomcolor();
    box.style.backgroundColor=newcolor;
    colorcode.textContent=newcolor;
})
})

