#/bin/bash
name=$1
if [ -z "$name" ]
then
    name=remembrance-fe
fi

echo "STOP RUNNING API CONTAINER"
docker stop -t 30 ${name}
docker rm -f ${name}

echo "DONE STOPPING"
docker run --name ${name} -d \
            --network common-net \
            --env-file .dockerenv \
            -p 3000:3000 \
            remembrance-fe:latest
echo "DONE RUNNING"