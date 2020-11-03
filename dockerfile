FROM nginx:alpine
LABEL maintainer Jalal Hejazi <jalal.hejazi@gmail.com>

COPY dist/AngularBasics /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80