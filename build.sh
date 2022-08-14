#/bin/bash
image_name=remembrance-fe
echo "REMOVING OLD IMAGE"
docker image rm -f $image_name
echo "BUILDING NEW IMAGE"
docker build . -t $image_name
echo "DONE BUILDING"