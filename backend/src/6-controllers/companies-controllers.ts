import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/companies-logic";
import InvesmentHouse from "../4-models/invesmentHouse-model";
import { classToPlain } from 'class-transformer';
import InvesmentCompanyModel from "../4-models/invesmentHouse-model";

const router = express.Router();

// Create routers for all types of calls to the server

router.post('/addCompany', async function(req: Request, res: Response, next: NextFunction) {
  try {
     const company = new InvesmentCompanyModel(req.body);
     const companyData :any= classToPlain(company);
     await logic.addCompany(companyData);
     res.status(201).json(companyData);
  } catch (err) {
     console.error('Error while adding company:', err.message);
     next(err);
     res.sendStatus(400);
  }
});

  router.get('/allCompanies', async function(req: Request, res: Response, next: NextFunction) {
    try {
       const allEntries = await logic.getAllCompanies();
       return res.status(200).json(allEntries);
    } catch (err) {
       console.error('Error while getting all companies:', err.message)
       next(err);
       res.sendStatus(400);
    }
 });
 
export default router;
