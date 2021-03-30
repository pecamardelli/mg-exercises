package Simplification.Exercise_3;

public class Salesman implements EmployeeType {
    Employee employee;
    public Salesman(Employee employee) {
        this.employee = employee;
    }

    public double GetPaymentAmount() {
        return employee.MonthlySalary + employee.Commission;
    }
}
