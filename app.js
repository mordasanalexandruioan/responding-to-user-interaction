let userName = document.querySelector('.name');
let submit = document.querySelector('.submit');
let invited = document.querySelector('.invited');
let invCard = document.querySelector('.card');


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