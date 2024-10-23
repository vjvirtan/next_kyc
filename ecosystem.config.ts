module.exports = {
  apps: [
    {
      name: 'kyc-api',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      }
    }
  ]
}
