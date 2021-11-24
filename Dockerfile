FROM node:15

WORKDIR /usr/src/app

COPY package.json .

ARG APP_ENV

RUN if [ "${APP_ENV}" = "dev" ]; \
        then npm install; \
        else npm install --only-production; \
    fi

COPY . .

ENV PORT=3000

EXPOSE ${PORT}

CMD [ "node", "index.js" ]