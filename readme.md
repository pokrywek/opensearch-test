# Dummy Opensearch Server

Serves sample OpenSearch functionality and logs all requests.

```sh
# Start server
docker-compose up
# or using npm
npm start

# Send some requests
curl "http://localhost:8081/description"
curl "http://localhost:8081/search"
```
