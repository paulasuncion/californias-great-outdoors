let main = document.getElementById('main_menu');
let sub = document.getElementById('sub_menu');

main.addEventListener('change', function(){
    let selected_option = parkTypesArray;
    while(sub.options.length > 0) {
        sub.options.remove(0);
    }

    Array.from(selected_option).forEach(function(el){
        let option = new Option(el, el);
        sub.appendChild(option);
    })
})