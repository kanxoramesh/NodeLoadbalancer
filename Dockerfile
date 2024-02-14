FROM node:12
WORKDIR /home/node/app
COPY app /home/node/app/
RUN npm install
# start is from package.json
CMD npm run start 
