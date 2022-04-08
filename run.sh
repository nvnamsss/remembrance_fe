#/bin/bash

echo "STOP RUNNING API CONTAINER"
docker stop -t 30 skm-fe-container 
docker rm -f skm-fe-container

echo "DONE STOPPING"
docker run --name skm-fe-container -d \
            --network common-net \
            --env-file .dockerenv \
            -p 3000:3000 \
            skm-fe:latest
echo "DONE RUNNING"