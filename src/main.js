const acc = document.getElementById('history')

document.getElementById('buttonHistory').addEventListener('click', async (e)=>{
    setTimeout(()=>{
        if((document.getElementById('buttonHistory')).ariaExpanded){
            location.hash = "history"
        }else {
            location.hash=''

        }},170)   
})