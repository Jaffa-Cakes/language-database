FROM node:18.17.1-alpine3.18

### Create app directory
RUN mkdir /app
WORKDIR /app

### Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install

### Copy and build app
COPY . .
# Replace DB_URL with docker-compose service name
# This is required because the docker-compose service name is used as the hostname
RUN sed -i 's|DB_URL="postgresql://postgres:postgres@127.0.0.1:5432/ww_lang_app?schema=public"|DB_URL="postgresql://postgres:postgres@postgres:5432/ww_lang_app?schema=public"|g' .env
# Prisma client needs to be generated before building the app
RUN npx prisma generate
RUN npm run build

EXPOSE 3000

### Run the app
# This also runs any pending prisma migrations
CMD ["sh", "-c", "npx prisma migrate deploy && npm run start"]