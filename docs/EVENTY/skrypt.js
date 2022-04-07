let zdarzenia = document.getElementsByClassName("zdarzenie");
let zdarzenia_tekst = document.getElementsByClassName("zdarzenie_tekst")

let test_obj = document.getElementById("test");

function event_from_id(id)
{
    let eventname = "";
    for(let i = 3; i < id.length; i++)
        eventname+=id[i];
    return eventname;
}

let prompt_i = 0;
function prompt()
{
    prompt_i++;
    test_obj.innerHTML=prompt_i;
}

function ogarnij_zdarzenia(zd_array)
{
    for(let i = 0; i < zd_array.length; i++)
    {
        let child = zd_array[i].firstElementChild;
        let child_event = event_from_id(child.id);
        child.addEventListener(child_event, prompt);
    }
}
ogarnij_zdarzenia(zdarzenia);
ogarnij_zdarzenia(zdarzenia_tekst);