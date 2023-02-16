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

export interface IChosenGoals {
  concentration: number
  energy: number
  relationships: number
  humor: number
}

export interface ICompanyContext {
  companyStates: {
    companies: ICompany[]
    mainNumbers: IMainNumbers
    chosenGoals: IChosenGoals
  }
  companyFunctions: {
    getCompanies: () => Promise<void>
    getMainNumbers: (id: string) => Promise<void>
    getChosenGoals: (id: string) => Promise<void>
  }
}
