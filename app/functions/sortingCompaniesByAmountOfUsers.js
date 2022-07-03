
export default function sortingCompaniesByAmountOfUsers (list) {
    list.sort((a,b) => {
        if (a.usersOfSpecificCompany.length < b.usersOfSpecificCompany.length) { return -1; }
        if (a.usersOfSpecificCompany.length > b.usersOfSpecificCompany.length) { return 1; }
        return 0;
    });
}
