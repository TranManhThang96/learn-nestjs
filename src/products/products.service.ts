import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';
import { ProductDto } from './product.dto';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async save(product: ProductDto): Promise<ProductDto> {
    const savedProduct = await this.productRepository.save(product);
    return plainToInstance(ProductDto, savedProduct, {
      excludeExtraneousValues: false,
    });
  }

  async update(id: string, product: ProductDto): Promise<ProductDto> {
    const updatedProduct = await this.productRepository.update(id, product);
    return plainToInstance(ProductDto, updatedProduct, {
      excludeExtraneousValues: false,
    });
  }
}
