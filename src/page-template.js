const generateTeam = teamDataArr => {
    return `
    ${teamDataArr
        .map(({}))}
    <card>
        <div>
        <h2>${managerData.getName()}</h2>
        </div>
        <div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </card>
    `
}

module.exports = teamData => {
    return `
        <div>My team</div>
        <div>${teamData[0].name}</div>
    `
}