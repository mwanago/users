import './styles/styles.scss';
import creatingListOfUsers from './functions/creatingListOfUsers';
import creatingListOfCompanies from './functions/creatingListOfCompanies';
import pushingUsersToCompanies from './functions/pushingUsersToCompanies';
import sortingCompaniesByAmountOfUsers from './functions/sortingCompaniesByAmountOfUsers';
import creatingListOfCompaniesWithUsers from './functions/creatingListOfCompaniesWithUsers';
const accordion = document.querySelector('#accordion');
const buttonForSorting = document.querySelector('.btn');

let listOfUsers = null;
let listOfCompanies = null;

window.onload = () => {
  const fetchUsers = fetch('http://localhost:3000/users');
  const fetchCompanies = fetch('http://localhost:3000/companies');
  Promise.allSettled([fetchUsers, fetchCompanies])
    .then(handleDataFetched);
};

function handleDataFetched (responses) {
  Promise.allSettled([responses[0].value.json(), responses[1].value.json()])
    .then(dataArray => {
      const users = dataArray[0].value;
      const companies = dataArray[1].value;
      listOfUsers = creatingListOfUsers(users);
      listOfCompanies = creatingListOfCompanies(companies);
      pushingUsersToCompanies(listOfUsers,listOfCompanies);
      creatingListOfCompaniesWithUsers(listOfCompanies);

    });
}

buttonForSorting?.addEventListener('click', (event) => {
  accordion.innerHTML = '';
  sortingCompaniesByAmountOfUsers(listOfCompanies);
  creatingListOfCompaniesWithUsers(listOfCompanies);
});


