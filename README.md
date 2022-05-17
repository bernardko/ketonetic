# ketonetic.com - A GatsbyJS frontend static generated website

This repository is an experiment on using Gatsby and GraphQL to generate a static website. It uses [headless-wagtail](https://github.com/bernardko/headless-wagtail) as the headless CMS to generate a static website.

## Requirements and Usage
- Updated to use GatsbyJS 4 and NodeJS 16+

Clone the repository and install dependancies:
```
git clone https://github.com/bernardko/ketonetic
cd ketonetic
npm install
```

Development Server:
```
npm run start
```

Build for production:
```
npm run build
```


## Deployment
This project has been also setup to be deployed to a VPS using pm2 and express.

Setup and Deployment using pm2:
```
pm2 deploy production setup
```
```
pm2 deploy production
```

Deploy build to surge.sh:
```
surge public/
```