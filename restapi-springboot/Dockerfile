#base docker image
FROM openjdk:11
LABEL maintainer="restapi-springboot"
ADD target/restapi-springboot-0.0.1-SNAPSHOT.jar restapi-springboot-docker.jar
ENTRYPOINT ["java", "-jar", "restapi-springboot-docker.jar"]