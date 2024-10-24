module.exports = {
  apps: [
    {
      name: 'kyc-api',
      script: './kyc-api.js', // Path to your script
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ],
  deploy : {
    production : {
      user : 'firehay',
      host : 'kyc.firehay.com',
   //   ref  : 'origin/main',
      repo : 'git@github.com:vjvirtan/next_kyc',
      path : '/home/firehay/Kyc-Api',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};

