const Engineer = require('../lib/Engineer');

test ('creates an engineer object', () => {
    const engineer = new Engineer('Sam', 2, 'sam@test.com', 'alyssawinn');

    expect(engineer.name).toBe('Sam');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('sam@test.com');
    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name.toString()));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email.toString()));
    expect(engineer.github).toBe('alyssawinn');
    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
    expect(engineer.getRole()).toEqual('Engineer');
})