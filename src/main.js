
// $('#historyT').on('shown', function () {
//     $("#historyContent").scrollTop(0);
// });

// $('#historyT').on('shown.bs.modal', function () {
//     $('#historyT').animate({ scrollTop: 0 }, 'slow');
// });

// $('#historyT').show().scrollTop(0);

// $('#historyContent').animate({scrollTop: 0},400);

const acc = document.getElementById('history')
console.log(acc)

document.getElementById('buttonHistory').addEventListener('click', async (e)=>{
    setTimeout(()=>{

        if(location.hash=='#history'){
            location.hash=''

        }else {

            location.hash = "history"
        }},170)   
})