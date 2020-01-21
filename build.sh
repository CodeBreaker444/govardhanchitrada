docker build -t codebreaker444/govardhanchitrada:latest .
if [ $? -ne 0 ]; then
	echo ">>> Failed to Build Docker Image"
	echo ">>> Aborting Script, sorry!"
	exit 1
fi
docker push codebreaker444/govardhanchitrada:latest
if [ $? -ne 0 ]; then
	echo ">>> Failed to upload to docker-hub"
	echo ">>> Aborting script, sorry!"
	exit 1
fi