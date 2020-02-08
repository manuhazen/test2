import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { VehicleInput } from './inputs/vehicle.input';

@Resolver()
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Query(() => String)
  async author() {
    return 'Hello World';
  }

  @Query(() => [CreateVehicleDto])
  async vehicles() {
    return this.vehicleService.findAll();
  }

  @Mutation(() => CreateVehicleDto)
  async createVehicle(@Args('input') input: VehicleInput) {
    return this.vehicleService.create(input);
  }
}
