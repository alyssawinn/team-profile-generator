const Manager = require('../lib/Manager');

test ('creates a manager object', () => {
    const manager = new Manager('Sam', 2, 'sam@test.com', 220);

    expect(manager.name).toBe('Sam');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('sam@test.com');
    expect(manager.getName()).toEqual(expect.stringContaining(manager.name.toString()));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email.toString()));
    expect(manager.officeNum).toEqual(expect.any(Number));
    expect(manager.getRole()).toEqual('Manager');
})