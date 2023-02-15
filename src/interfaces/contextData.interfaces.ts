export interface ICompany {
  id: string
  name: string
  employees: number
  activeEmployees: number
}

export interface IMainNumbers {
  userProgramSession: number
  sleepDiaries: number
  techniques: number
}

export interface IDataContext {
  company: {
    companies: ICompany[]
    getCompanies: () => Promise<void>
    mainNumbers: IMainNumbers
    getMainNumbers: () => Promise<void>
  }
}
