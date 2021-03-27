const Intern = require('../lib/Intern');

test ('creates an intern object', () => {
    const intern = new Intern('Sam', 2, 'sam@test.com', 'Utah State University');

    expect(intern.name).toBe('Sam');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('sam@test.com');
    expect(intern.getName()).toEqual(expect.stringContaining(intern.name.toString()));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email.toString()));
    expect(intern.school).toBe('Utah State University');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    expect(intern.getRole()).toEqual('Intern');
})