module.exports = {
  apps: [
    {
      name: 'receiptor',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: 'npm',
      args: 'run preview'
    }
  ]
}
