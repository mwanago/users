const accordion = document.querySelector("#accordion");
export default function creatingListOfCompaniesWithUsers (list) {
    for (let i = 0; i<= list.length -1; i++) {
        const panelListGroup = document.createElement("div")
        panelListGroup.classList.add("panel", "list-group");
        const accordionSettings = document.createElement("a");
        accordionSettings.setAttribute('href', '#'+list[i].name);
        accordionSettings.classList.add("list-group-item");
        accordionSettings.setAttribute("data-parent", "#accordion");
        accordionSettings.setAttribute("data-toggle", "collapse");
        const companyName = document.createElement("h2");
        companyName.innerText = list[i].name;
        accordionSettings.append(companyName);
        panelListGroup.append(accordionSettings)

        const collapse = document.createElement("div");
        collapse.classList.add("collapse");
        collapse.setAttribute('id',list[i].name);
        const ul = document.createElement('ul');
        ul.classList.add("list-group-item-text");
        panelListGroup.append(collapse)
        const numberOfUsers = document.createElement("h3");
        numberOfUsers.innerText ='Number of users = '+list[i].usersOfSpecificCompany.length;
        collapse.append(numberOfUsers);
        collapse.appendChild(ul);
        list[i].usersOfSpecificCompany.forEach(renderingListOfUsers);
        function renderingListOfUsers (element) {
            const li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML += element;
        }
        accordion.append(panelListGroup);
    }
}
