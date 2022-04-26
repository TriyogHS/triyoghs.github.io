// snake_case.will_be_used
const search_list = [
    {'name': "sports week IV-VI", 'uri': '/events/sports-week-iv-vi-22.html'},
    {'name': "ted x triyog", 'uri': '/events/ted-x-triyog.html'}
]

function search() {
    let input = document.getElementById('search').value
    input = input.toLowerCase();
    let x = search_list;
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        }
        else {
            x[i].style.display = "list-item";                 
        }
    }
}