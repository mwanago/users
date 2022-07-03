export default function creatingListOfUsers (usersRawData) {
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