abstract class Department {
  protected readonly id: string;
  private name: string;
  protected employees: string[] = [];

  constructor(id: string, n: string) {
    this.id = id;
    this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;
  // {
  //   console.log("Department: " + this.name);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];

  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT Department: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d3", []);
    return this.instance;
  }

  describe() {
    console.log("Accounting Department: " + this.id);
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
}

const it = new ITDepartment("d2", ["Jack"]);
console.log(it);
it.describe();

// const accounting = new AccountingDepartment("d3", []);
const accounting = AccountingDepartment.getInstance();
accounting.addReport("Something went wrong...");
accounting.mostRecentReport = "Well, well, well...";
console.log(accounting.mostRecentReport);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
accounting.describe();

// const someDepartment = new Department("d1", "Accounting");
// someDepartment.addEmployee("Max");
// someDepartment.addEmployee("Manu");
// someDepartment.employees[2] = "Anna";
// someDepartment.describe();
// someDepartment.printEmployeeInformation();

const employee1 = Department.createEmployee("Roman");
console.log(employee1);
