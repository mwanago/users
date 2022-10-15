export default function creatingListOfCompanies (listOfCompanies) {
    const companiesList = [];
    for (let i = 0; i<= listOfCompanies.length -1 ; i++) {
        companiesList.push ({
            name: listOfCompanies[i].name,
            usersOfSpecificCompany: [],
        });
    }
    return companiesList;
}