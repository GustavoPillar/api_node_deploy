import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  config: {
    redis: RedisOptions;
  };
  driver: string;
}

export default {
  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASS || undefined,
      // expire: 60 * 60 * 24, = Tempo de Expiração 24h
    },
  },
  driver: 'redis',
} as ICacheConfig;
