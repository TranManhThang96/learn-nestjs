import { Repository } from 'typeorm';
import { BaseEntity } from './base.entity';
import { plainToInstance } from 'class-transformer';

export class BaseService<Entity extends BaseEntity, dto> {
  constructor(protected repo: Repository<Entity>) {}

  async save(entity: dto): Promise<dto> {
    const savedEntity = await this.repo.save(entity as any);
    return plainToInstance(dto, savedEntity, {
      excludeExtraneousValues: false,
    });
  }

  async update(id: string, entity: dto): Promise<dto> {
    const updatedEntity = await this.repo.update(id, entity as any);
    return plainToInstance(dto, updatedEntity, {
      excludeExtraneousValues: false,
    });
  }
}
