import { ObjectType, Field, Int, ID } from 'type-graphql';

@ObjectType()
export class CreateVehicleDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly brand: string;
  @Field()
  readonly model: string;
  @Field(() => Int)
  readonly year: number;
  @Field()
  readonly new: boolean;
  @Field(() => Int)
  readonly milleage: number;
}
