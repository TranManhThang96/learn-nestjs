import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { ProductDto } from './product.dto';
import { ProductService } from './products.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  createProduct(@Body() product: ProductDto): Promise<ProductDto> {
    console.log('product', product);
    return this.productService.save(product);
  }

  @Put(':id')
  updateUserById(
    @Param('id') id: string,
    @Body() product: ProductDto,
  ): Promise<ProductDto> {
    return this.productService.update(id, product);
  }
}
