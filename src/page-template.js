const generateTeam = teamDataArr => {
    return `
    ${teamDataArr
        .filter(( role ) => role.getRole() === 'Manager')
        .map((employee) => {
            return `
                <div class="card m-2" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        <h3>${employee.name}</h3>
                        <h4><span class="fas fa-mug-hot px-1"></span>Manager</h4>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                        <li class="list-group-item">Office number: ${employee.officeNum}</li>
                    </ul>
                </div>
            `;
        })
        .join('')}

        ${teamDataArr
            .filter(( role ) => role.getRole() === 'Engineer')
            .map((employee) => {
                return `
                    <div class="card m-2" style="width: 18rem;">
                        <div class="card-header bg-primary text-white">
                            <h3>${employee.name}</h3>
                            <h4><span class="fas fa-glasses px-1"></span>Engineer</h4>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ID: ${employee.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                            <li class="list-group-item">Github: <a href="https://github.com/${employee.github}">${employee.github}</a></li>
                        </ul>
                    </div>
                `;
            })
            .join('')}

            ${teamDataArr
                .filter(( role ) => role.getRole() === 'Intern')
                .map((employee) => {
                    return `
                        <div class="card m-2" style="width: 18rem;">
                            <div class="card-header bg-primary text-white">
                                <h3>${employee.name}</h3>
                                <h4><span class="fas fa-user-graduate px-1"></span>Intern</h4>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">ID: ${employee.id}</li>
                                <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                                <li class="list-group-item">School: ${employee.school}</li>
                            </ul>
                        </div>
                    `;
                })
                .join('')}
                `
}

module.exports = teamData => {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="bg-danger text-white d-flex justify-content-center p-3">
        <h1>${teamData[0].getName()}'s Team</h1>
    </header>
    <section>
        <div class="d-flex container justify-content-center flex-wrap">
            ${generateTeam(teamData)}
        </div>
    </section>
</body>
</html>
    `
}