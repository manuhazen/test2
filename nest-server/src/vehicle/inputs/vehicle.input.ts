import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class VehicleInput {
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
