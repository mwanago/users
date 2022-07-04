const accordion = document.querySelector("#accordion");

export default function creatingListOfCompaniesWithUsers (list) {
    for (let i = 0; i<= list.length -1; i++) {
        const panelListGroup = document.createElement("div")
        panelListGroup.classList.add("panel", "list-group");
        const addingAccordionContainer = creatingAccordionSettings(list[i]);
        panelListGroup.append(addingAccordionContainer.accordionSettings)
        const collapseList = creatingCollapseList (list[i])
        panelListGroup.append(collapseList.collapse)
        accordion.append(panelListGroup);
    }
}
function creatingAccordionSettings (inputCompany) {
    const accordionSettings = document.createElement("a");
    accordionSettings.setAttribute('href', '#'+inputCompany.name);
    accordionSettings.classList.add("list-group-item");
    accordionSettings.setAttribute("data-parent", "#accordion");
    accordionSettings.setAttribute("data-toggle", "collapse");
    const companyName = document.createElement("h2");
    companyName.innerText = inputCompany.name;
    accordionSettings.append(companyName);

    return {
        accordionSettings,
        companyName
    }
}

function creatingCollapseList (inputCompany) {
    const collapse = document.createElement("div");
    collapse.classList.add("collapse");
    collapse.setAttribute('id',inputCompany.name);
    const ul = document.createElement('ul');
    ul.classList.add("list-group-item-text");
    const numberOfUsers = document.createElement("h3");
    numberOfUsers.innerText ='Number of users = '+inputCompany.usersOfSpecificCompany.length;
    collapse.append(numberOfUsers);
    collapse.appendChild(ul);
    inputCompany.usersOfSpecificCompany.forEach(renderingListOfUsers);
    function renderingListOfUsers (element) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML += element;
    }
    return {
        collapse,
        numberOfUsers,
        ul
    }
}