const people = [
    { name: 'adri'},
    { name: 'becky'},
    { name: 'chris'},
    { name: 'dillon'},
    { name: 'evan'},
    { name: 'frank'},
    { name: 'georgette'},
    { name: 'hugh'},
    { name: 'igor'},
    { name: 'jacoby'},
    { name: 'kristina'},
    { name: 'lemony'},
    { name: 'matilda'},
    { name: 'nile'},
    { name: 'ophelia'},
    { name: 'patrick'},
    { name: 'quincy'},
    { name: 'roslyn'},
    { name: 'solene'},
    { name: 'timothy'},
    { name: 'uff'},
    { name: 'violet'},
    { name: 'wyatt'},
    { name: 'x'},
    { name: 'yadri'},
    { name: 'zack'},
];

let searchInputE1 = document.getElementById("search");

searchInputE1.addEventListener('input', text => {
    let valueInput = text.target.value;
    //find element in array using filter()
    let valueFind = people.filter(persona => persona.name.includes(valueInput));
    try {
    setItemsToView(valueFind);
    } catch (error) {
      console.error(error);
    }

})

function setItemsToView(itemsFind) {
    for (const item of itemsFind ) {
        let itemEl = document.createElement("li");
        let listItems = document.getElementById("list-items");
        let text = document.createTextNode(item.name);
        itemEl.appendChild(text);
        listItems.appendChild(itemEl);
    }
}