import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ApartmentService } from './apartment.service';
import { CreateApartmentDto } from './dto/create-apartment.dto';
import { ApartmentInput } from './inputs/apartment.input';

@Resolver()
export class ApartmentResolver {
  constructor(private readonly apartmentService: ApartmentService) {}

  @Query(() => String)
  async apartmentsTest() {
    return 'Hello World from Apartments';
  }

  @Query(() => [CreateApartmentDto])
  async apartments() {
    return this.apartmentService.findAll();
  }

  @Mutation(() => CreateApartmentDto)
  async createApartment(@Args('input') input: ApartmentInput) {
    return this.apartmentService.create(input);
  }

  @Mutation(() => CreateApartmentDto)
  async updateApartment(@Args('input') id: string, data: ApartmentInput) {
    return await this.apartmentService.update(id, data);
  }

  @Mutation(() => String)
  async deleteApartment(@Args('id') id: string) {
    await this.apartmentService.delete(id);
    return 'Deleted Apartment';
  }
}
