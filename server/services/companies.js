const collection =require('firebase/firestore');
const db =require('../db');

async function postCompanies(req) {
    const docRef = await addDoc(collection(db, "InvestmentCompany"), req.body)
}

module.exports = {
    postCompanies
}