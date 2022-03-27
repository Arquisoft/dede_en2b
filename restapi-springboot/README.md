docker run -p 3306:3306 --name mysqldb -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=dede mysql
docker rm restapi-springboot 
docker network connect spring-net mysqldb
docker build -t restapi-springboot .
docker run -p 5000:5000 --name restapi-springboot -e MYSQL_HOST=mysqldb -e MYSQL_USER=root -e MYSQL_PASSWORD=root -e MYSQL_PORT=3306 restapi-springboot