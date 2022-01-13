FROM node:16.13.2
WORKDIR /app
COPY ./app /app
RUN npm install
CMD ["npm","start"]