import Redis, { Redis as RedisTypes } from 'ioredis';
import cacheConfigs from '@config/cache';
import ICacherProvider from '../model/ICacheProvoder';

class RedisCacheProvider implements ICacherProvider {
  private client: RedisTypes;

  constructor() {
    this.client = new Redis(cacheConfigs.configs.redis);
  }

  public async save(key: string, value: any): Promise<void> {
    await this.client.set(key, JSON.stringify(value));
  }

  public async recover<T>(key: string): Promise<T | null> {
    const data = await this.client.get(key);
    if (!data) {
      return null;
    }
    const parseData = JSON.parse(data) as T;
    return parseData;
  }

  public async invalidate(key: string): Promise<void> {
    // todo
  }
}

export default RedisCacheProvider;
