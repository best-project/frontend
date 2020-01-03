FROM node:alpine as builder

COPY ./yarn.lock ./
COPY ./package.json ./

RUN yarn

COPY . .

RUN yarn build

FROM nginx

COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf
COPY --from=builder /build /build
