import { createConnection } from 'typeorm';

createConnection();

// docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
// yarn typeorm migration:create CreateProducts
// yarn typeorm migration:run
