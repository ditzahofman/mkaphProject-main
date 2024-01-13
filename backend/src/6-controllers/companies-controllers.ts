import express, { Request, Response, NextFunction } from "express";
import logic from "../5-logic/companies-logic";
import InvesmentHouse from "../4-models/invesmentHouse-model";
import { classToPlain } from 'class-transformer';
import InvesmentCompanyModel from "../4-models/invesmentHouse-model";

const router = express.Router();

// Create routers for all types of calls to the server

router.post('/addCompany', async function(req: Request, res: Response, next: NextFunction) {
    try {
      // Create an instance of InvesmentCompanyModel from the request body
      const company = new InvesmentCompanyModel(req.body);
  
      // Convert the instance to a plain object
      const companyData:any = classToPlain(company);
  
      // Add the plain object to Firestore using the logic function
      const addCompany = await logic.addCompany(companyData);
  
      res.status(201).json(addCompany);
    } catch (err) {
      console.error('Error while adding company:', err.message);
      next(err);
      res.sendStatus(400);
    }
  })

export default router;
