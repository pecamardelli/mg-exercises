package Simplification.Exercise_3;

public class Engineer implements EmployeeType {
    Employee employee;
    public Engineer(Employee employee) {
        this.employee = employee;
    }

    public double GetPaymentAmount() {
        return employee.MonthlySalary;
    }
}
