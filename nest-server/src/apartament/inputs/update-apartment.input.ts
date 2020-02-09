import { InputType, Field, Int, ID, Float } from 'type-graphql';

@InputType()
export class UpdateApartmentInput {
  @Field({ nullable: true })
  readonly type: string;
  @Field(() => Int, { nullable: true })
  readonly size: number;
  @Field(() => Float, { nullable: true })
  readonly rooms: number;
  @Field({ nullable: true })
  readonly island: boolean;
  @Field({ nullable: true })
  readonly balcony: boolean;
  @Field(() => Float, { nullable: true })
  readonly bathrooms: number;
}
