FROM node:22 AS build

ARG REACT_APP_API_URL

ENV REACT_APP_API_URL=${REACT_APP_API_URL}

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile

ENV NODE_OPTIONS="--max-old-space-size=4096"

COPY . .

RUN echo "API URL is: $REACT_APP_API_URL"

RUN npm run build

FROM nginx:1.25

COPY --from=build /app/build /usr/share/nginx/html

# Копируем конфигурационный файл
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]