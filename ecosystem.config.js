module.exports = {
    apps : [
        {
          name: "ketonetic",
          script: "./app.js",
          watch: true,
          instances  : 4,
          exec_mode  : "cluster",
          increment_var : 'PORT',
          env: {
              "PORT": 8001,
              "NODE_ENV": "development"
          },
          env_production: {
              "PORT": 22000,
              "NODE_ENV": "production"
          }
        },
    ],
    deploy: {
        production: {
          host: 'syn',
          user: 'bunz',
          ref: 'origin/production', // (use 'origin/master' for your master branch,
          repo: "ssh://bunz@charlotte:/mnt/data/crux/git/ketonetic.git", // your repo url
          path: "/srv/ketonetic",
          "post-deploy":
            "npm install && pm2 reload ecosystem.config.js --env production && pm2 save",
          "post-setup":
            "npm install && pm2 start ecosystem.config.js -i 8 --env production && pm2 save"
        }
    }
}