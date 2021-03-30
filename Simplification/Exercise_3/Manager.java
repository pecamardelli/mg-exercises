package Simplification.Exercise_3;

public class Manager implements EmployeeType {
    Employee employee;
    public Manager(Employee employee) {
        this.employee = employee;
    }

    public double GetPaymentAmount() {
        return employee.MonthlySalary + employee.Bonus;
    }
}
