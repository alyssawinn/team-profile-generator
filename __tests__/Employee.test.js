const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Sam', 2, 'sam@test.com');

    expect(employee.name).toBe('Sam');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('sam@test.com');
    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
    expect(employee.getRole()).toEqual('Employee');
});

