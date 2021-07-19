let userName = document.querySelector('.name');
let submit = document.querySelector('.submit');
let invited = document.getElementById('invited');
let invCard = document.getElementsByClassName('card');


function addButtons(li) {
    let edit = document.createElement('button');

    edit.className = "edit";
    edit.textContent = "edit";
    li.className = "btn";
    li.appendChild(edit);



    let remove = document.createElement('button');

    remove.className = "remove";
    remove.textContent = "remove";
    li.appendChild(remove);
}


function addCheck(li) {
    let lab = document.createElement('label');
    lab.textContent = "Confirmed";
    li.className = "conf";
    li.appendChild(lab);

    let inp = document.createElement('input');
    inp.type = "checkbox";
    inp.id = "confirm";
    li.appendChild(inp);
}

submit.addEventListener('click', () => {
    let newCard = document.createElement('div');
    newCard.className = "card";
    newCard.textContent = userName.value;
    let liConf = document.createElement('li');
    let liButtons = document.createElement('li');

    userName.value = "";


    addCheck(liConf);

    addButtons(liButtons);


    newCard.append(liConf);
    newCard.append(liButtons);
    invited.append(newCard);
})

invited.addEventListener('click', (e) => {
    let obj = e.target;
    let li = obj.parentNode;
    let card = li.parentNode;
    let inv = card.parentNode;


    if (obj.tagName == "BUTTON") {
        if (obj.className == 'remove') {
            inv.removeChild(card);
        }
    }
})

let invitationsBox = document.querySelector('.inviteBox');
invitationsBox.addEventListener('click', (e) => {
    let obj = e.target;

    let check = document.getElementById('checkInv');
    let conf = document.getElementById('confirm');

    check = obj.parentNode;

    if (obj.tagName == "INPUT") {
        if (obj.id == "checkInv") {

        }
    }
})