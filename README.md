# tp-microservices-nest

Microservices NestJS example with Kafka, gRPC, TypeORM, and GraphQL.

## Services

- catalog-service: HTTP API on port 3001
- stock-service: gRPC on port 5000
- order-service: HTTP API on port 3002
- notification-service: Kafka consumer
- query-service: GraphQL API on port 3004

## Run

1. Start Kafka and Zookeeper:

```bash
docker compose up -d
```

2. Install dependencies in each service folder.
3. Start the services one by one.

## Notes

The workspace contains the source files and package manifests. Dependencies are not installed automatically.
