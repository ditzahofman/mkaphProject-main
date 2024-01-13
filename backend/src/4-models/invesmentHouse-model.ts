class InvesmentCompanyModel{
public companyId:string
public companyNumber:number
public name:string
public adress:string
public email:string
public activeStatus:boolean
public updateDate:string

public constructor(inversmentCompany:InvesmentCompanyModel){
this.companyId = inversmentCompany.companyId
this.companyNumber =inversmentCompany.companyNumber
this.name = inversmentCompany.name
this.adress = inversmentCompany.adress
this.email = inversmentCompany.email
this.activeStatus = inversmentCompany.activeStatus
this.updateDate = inversmentCompany.updateDate
}
}
export default InvesmentCompanyModel