FROM node:22 AS build

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

COPY . .

RUN npm run build

FROM nginx:1.23

COPY --from=build /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/admin.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
