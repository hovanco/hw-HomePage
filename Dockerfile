FROM node:14-alpine

WORKDIR /app
ADD . /app/
RUN apk update \
 && apk add --no-cache tzdata
ENV TZ=Asia/Ho_Chi_Minh
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN npm i
RUN node_modules/typescript/bin/tsc
RUN cp ./ecosystem.config.js ./build

CMD ["node_modules/pm2/bin/pm2-runtime", "start", "./build/ecosystem.config.js"]