import { ObjectType, Field, Int, ID, Float } from 'type-graphql';

@ObjectType()
export class CreateApartmentDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly type: string;
  @Field()
  readonly island: boolean;
  @Field(() => Int)
  readonly size: number;
  @Field()
  readonly balcony: boolean;
  @Field(() => Float)
  readonly bathrooms: number;
  @Field(() => Float)
  readonly rooms: number;
}
