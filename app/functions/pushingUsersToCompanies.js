export default function pushingUsersToCompanies (users,companies) {
    for (let i=0; i<= users.length-1; i++){
        const userIndex = users[i].companyNumber;
        companies[userIndex].usersOfSpecificCompany.push(users[i].name+' '+users[i].email);
    }
    return companies;
}