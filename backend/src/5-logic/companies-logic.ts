import { db } from '../2-utils/dal';
import InvesmentCompanyModel from '../4-models/invesmentHouse-model';
import { plainToClass } from 'class-transformer';


async function addCompany(company: InvesmentCompanyModel): Promise<void> {
    try {
      // Convert the instance to a plain object
      const companyData = plainToClass(InvesmentCompanyModel, company, { excludeExtraneousValues: true });
      
      // Add the plain object to Firestore
      await db.collection('InvestmentCompany').add(companyData);
      
      console.log('Company data added successfully!');
    } catch (error) {
      console.error('Error adding company data:', error);
      throw error;
    }
  }

async function  getAllCompanies (){
    try {
      const allCompanies = await db.collection("InvestmentCompany").get()
    return allCompanies
    } catch(error:any) { 
   console.log(error.message)
    }
  }
  

 
export default{
    addCompany,
    getAllCompanies
  }