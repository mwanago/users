
export default function sortingCompaniesByAmountOfUsers (list) {
    list.sort((a,b) => a.usersOfSpecificCompany.length - b.usersOfSpecificCompany.length);
}
