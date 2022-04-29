To execute the restapi you need this command and a database on por 3306 as default with name dede (for more information check src > main > resources > application.properties):

```
java -jar restapi-springboot-0.0.1-SNAPSHOT.jar
```

This are the flags that can be added to the command to set a different database from default:
```
--MYSQL_HOST=localhost
--MYSQL_USER=root
--MYSQL_DATABASE_NAME=dede
--MYSQL_PASSWORD= 
```