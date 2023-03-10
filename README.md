# π³ Using docker in a React project

This project was developed to put into practice the knowledge of docker acquired in my PDI. Using docker we can easily simulate infrastructure and build complex environments with little effort. Streamlining service maintenance and development.
<br><br>

π½ **Managing images:**

Images is what contains the minimum resources you need to have in your project, these images are downloaded from the link: [https://hub.docker.com/search?q=](https://hub.docker.com/ search?q=)

Having an image on your machine doesn't mean it's configured inside a container.

You can use the following commands to your advantage:

docker image ls β list the images you have on your machine

docker image rm image_id β Command used to delete images from your machine

docker image rmi image_id β Command also used to delete images from your machine

<br><br>

π¦**Managing containers:**

**docker ps** β list the containers that are running

**docker ps -a** β lists all containers on our machine, regardless of whether they are connected or not

**docker ps -h** β is the help for the ps command, tells you commands you can use that are tied to ps

**docker stop id_of_container** β It stops the container that is running

**docker rm id_of_container** β Remove the container

<br><br>

π©βπ» **Creating containers:**

You can google for βdocker postgres with volumeβ to find container creation commands, like this one from postgres:

`docker run -d -p 5432:5432 -v "volume_name:/var/lib/postgresql/data" -e POSTGRES_PASSWORD=postgres -e PRIMARY_USER=postgres postgres`

**docker volume create name_of_volume** β> Create a volume on your machine to store database data

docker run β the container is running

-d β is running the container in a hidden way

-p β set the port

-v β contains the volume name and path where the data will be stored

-e β are variables added to the command, such as password and primary user

<br><br>

βοΈ **building the project:**

docker build --tag poker .


π **Running the project where name is the name of the container and pocker is the name of the image:**

docker run -p 3000:3000 --name mikosa poker

<br><br>

β Once this is done, your project will be started with docker on port 3000


![Learnned Docker (1)](https://user-images.githubusercontent.com/60449239/211226553-445bdd46-a75b-4378-847e-49fb42ef856a.gif)



