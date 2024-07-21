FROM node:18-alpine as builder
WORKDIR /
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "start"]

FROM nginx:stable-alpine
COPY --from=builder /build/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]