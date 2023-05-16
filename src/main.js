
// $('#historyT').on('shown', function () {
//     $("#historyContent").scrollTop(0);
// });

// $('#historyT').on('shown.bs.modal', function () {
//     $('#historyT').animate({ scrollTop: 0 }, 'slow');
// });

// $('#historyT').show().scrollTop(0);

// $('#historyContent').animate({scrollTop: 0},400);

const acc = document.getElementById('history')


document.getElementById('buttonHistory').addEventListener('click', async (e)=>{
    setTimeout(()=>{
        if((document.getElementById('buttonHistory')).ariaExpanded){
            location.hash = "history"
        }else {
            location.hash=''

        }},170)   
})