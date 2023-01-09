# 🐳 Using docker in a React project

This project was developed to put into practice the knowledge of docker acquired in my PDI. Using docker we can easily simulate infrastructure and build complex environments with little effort. Streamlining service maintenance and development.

💽 **Managing images:**

Images is what contains the minimum resources you need to have in your project, these images are downloaded from the link: [https://hub.docker.com/search?q=](https://hub.docker.com/ search?q=)

Having an image on your machine doesn't mean it's configured inside a container.

You can use the following commands to your advantage:

docker image ls → list the images you have on your machine

docker image rm image_id → Command used to delete images from your machine

docker image rmi image_id → Command also used to delete images from your machine


📦**Managing containers:**

**docker ps** → list the containers that are running

**docker ps -a** → lists all containers on our machine, regardless of whether they are connected or not

**docker ps -h** → is the help for the ps command, tells you commands you can use that are tied to ps

**docker stop id_of_container** → It stops the container that is running

**docker rm id_of_container** → Remove the container


👩‍💻 **Creating containers:**

You can google for “docker postgres with volume” to find container creation commands, like this one from postgres:

`docker run -d -p 5432:5432 -v "volume_name:/var/lib/postgresql/data" -e POSTGRES_PASSWORD=postgres -e PRIMARY_USER=postgres postgres`

**docker volume create name_of_volume** —> Create a volume on your machine to store database data

docker run → the container is running

-d → is running the container in a hidden way

-p → set the port

-v → contains the volume name and path where the data will be stored

-e → are variables added to the command, such as password and primary user



⚙️ **building the project:**

docker build - -tag poker .


🔌 **Running the project where name is the name of the container and pocker is the name of the image:**

docker run -p 3000:3000 - -name mikosa poker


✅ Once this is done, your project will be started with docker on port 3000



