import { InputType, Field, Int, ID } from 'type-graphql';

@InputType()
export class UpdateVehicleInput {
  @Field({ nullable: true })
  readonly brand: string;
  @Field({ nullable: true })
  readonly model: string;
  @Field(() => Int, { nullable: true })
  readonly year: number;
  @Field({ nullable: true })
  readonly new: boolean;
  @Field(() => Int, { nullable: true })
  readonly milleage: number;
}
