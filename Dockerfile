FROM cypress/included:4.12.1
RUN apt update;apt install --yes openjdk-11-jdk
WORKDIR /app
COPY package.json .
COPY cypress.json .

#RUN npm i
ENTRYPOINT ["npm", "run"]