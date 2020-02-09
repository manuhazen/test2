import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LaptopService } from './laptop.service';
import { CreateLaptopDto } from './dto/create-laptop.dto';
import { LaptopInput } from './inputs/laptop.input';
import { UpdateLaptopInput } from './inputs/update-laptop.input';

@Resolver()
export class LaptopResolver {
  constructor(private readonly laptopService: LaptopService) {}

  @Query(() => String)
  async laptopsTest() {
    return 'Hello World from Laptops';
  }

  @Query(() => [CreateLaptopDto])
  async laptops() {
    return this.laptopService.findAll();
  }

  @Mutation(() => CreateLaptopDto)
  async createLaptop(@Args('input') input: LaptopInput) {
    return this.laptopService.create(input);
  }

  @Mutation(() => CreateLaptopDto)
  async updateLaptop(
    @Args('id') id: string,
    @Args('input') input: UpdateLaptopInput,
  ) {
    return await this.laptopService.update(id, input);
  }

  @Mutation(() => String)
  async deleteLaptop(@Args('id') id: string) {
    await this.laptopService.delete(id);
    return 'Deleted Laptop';
  }
}
