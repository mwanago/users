import './styles/styles.scss';

let listOfUsers = null;
let listOfCompanies = null;



window.onload = () => {
    const fetchUsers = fetch('http://localhost:3000/users');
    const fetchCompanies = fetch('http://localhost:3000/companies');
    Promise.allSettled([fetchUsers, fetchCompanies])
        .then(handleDataFetched)
};

function handleDataFetched (responses){
    Promise.allSettled([responses[0].value.json(), responses[1].value.json()])
        .then(dataArray => {
            const users = dataArray[0].value;
            const companies = dataArray[1].value;
            listOfUsers = creatingListOfUsers(users);
            listOfCompanies = creatingListOfCompanies(companies);
            pushingUsersToCompanies(listOfUsers,listOfCompanies);
            console.log(listOfCompanies);
        })
}
function pushingUsersToCompanies (users,companies) {
    for (let i=0; i<= users.length-1; i++){
        const userIndex = users[i].companyNumber;
        companies[userIndex].usersOfSpecificCompany.push(users[i].name);
    }
    return companies;
}

function creatingListOfUsers (usersRawData) {
  const usersList = [];
  for (let i = 0; i<= usersRawData.length -1; i++) {
      usersList.push ({
        name: usersRawData[i].name,
        email: usersRawData[i].email,
        company: usersRawData[i].uris.company,
        companyNumber: usersRawData[i].uris.company.substring(11)
    });
  }
  return usersList;
}

function creatingListOfCompanies (listOfCompanies) {
  const companiesList = [];
  for (let i = 0; i<= listOfCompanies.length -1 ; i++) {
     companiesList.push ({
        name: listOfCompanies[i].name,
        usersOfSpecificCompany: []
     });
  }
  return companiesList;
}

