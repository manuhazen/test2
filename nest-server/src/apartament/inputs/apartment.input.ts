import { InputType, Field, Int, ID, Float } from 'type-graphql';

@InputType()
export class ApartmentInput {
  @Field()
  readonly type: string;
  @Field(() => Int)
  readonly size: number;
  @Field(() => Float)
  readonly rooms: number;
  @Field()
  readonly island: boolean;
  @Field()
  readonly balcony: boolean;
  @Field(() => Float)
  readonly bathrooms: number;
}
