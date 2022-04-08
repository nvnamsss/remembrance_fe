#/bin/bash

echo "STOP RUNNING API CONTAINER"
docker stop -t 30 skm-fe-container 
docker rm -f skm-fe-container
echo "DONE STOPPING"