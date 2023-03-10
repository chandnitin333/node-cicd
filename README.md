# icad
# CICD application
   create node image from docker with specifix version
   
      FROM node:16.17-alpine as base  

      WORKDIR /app

      COPY package*.json ./

      COPY . .


      RUN npm install --production=false



      EXPOSE 3000

      CMD ["npm","run","dev"]   # application run command 


#  DockerComposer
   Use for build you docker file
   
         version: '3.3'     // verson 
      services:
        web:
          build: .        // run your docker file
          ports:
            - "3000:3000"  // expose port run your application
     
     docker-composer up   # setup  your application inside docekr 

#  Workflow
      github workflow write in .githubwork

# also added self hosted runner



In this video we will see how to set GitHub Action for cicd with aws EC2 with an example of nodejs API in hindi
GitHub workflows
Cicd pipeline and auto deploy to AWS EC2
CICD pipeline for nodejs express application in hindi 

We will Use github action to set up CI CD pipeline to Deploy your project  to AWS EC2
Full guide to automatic deployment to AWS EC2 using GitHub Action with nodejs api as example in hindi



It will automatic test build and deploy to aws ec2 after every changes commit and merged

step 1- 

login to aws console and create an ec2 instance

step 2- 

Login to ec2 instance

step 3-

install nodejs and nginx

sudo apt update

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -

sudo apt-get install nodejs

sudo apt-get install nginx

step 4-

push your projects to github 

step5 -

 create github action 

 it will create a yml file under .github/workflow

 just edit yml file acording to your project

step 6-

set up github action on ec2

Not start with sudo 

After GitHub configuration run this command

sudo ./svc.sh install

sudo ./svc.sh start

step 7-

install pm2 and run backend in background

npm i pm2 -g 

pm2 start server.js 

step 8-

add  the command in yml script of project to restart after every commit 

-run: sudo pm2 restart server.js

step 9- 

config nginx and restart it 

Cd /etc/nginx

Cd sites-available

sudo nano default


    location /api/ {

        proxy_pass  http://localhost:8000/;

        proxy_set_header Host $host;

        proxy_set_header X-Real-IP $remote_addr;

        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    }

sudo systemctl restart nginx



  location / {
            proxy_pass http://product:8002;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'Upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

        location ~ ^/shopping {
            rewrite ^/shopping/(.*) /$1 break;
            proxy_pass http://order:8003;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'Upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }

         location ~ ^/user {
            rewrite ^/user/(.*) /$1 break;
            proxy_pass http://user:8001;
            proxy_http_version 1.1;
            proxy_set_header Upgrade $http_upgrade;
            proxy_set_header Connection 'Upgrade';
            proxy_set_header Host $host;
            proxy_cache_bypass $http_upgrade;
        }
    }
