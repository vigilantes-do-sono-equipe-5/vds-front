export interface ICompany {
  id: string
  name: string
  employees: number
  activeEmployees: number
}

export interface IDataContext {
  company: { companies: ICompany[]; getCompanies: () => Promise<void> }
}
