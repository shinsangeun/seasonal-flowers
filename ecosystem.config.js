module.exports = {
    apps: [{
        name: 'seasonal-flowers',
        script: 'npm',
        args: 'run start',
        instances: 2,
        exec_mode: 'cluster',
    }]
}