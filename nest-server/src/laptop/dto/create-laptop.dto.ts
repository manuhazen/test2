import { ObjectType, Field, Int, ID, Float } from 'type-graphql';

@ObjectType()
export class CreateLaptopDto {
  @Field(() => ID)
  id: string;
  @Field()
  readonly gpu: string;
  @Field()
  readonly cpu: string;
  @Field()
  readonly ram: string;
  @Field()
  readonly ramType: string;
  @Field()
  readonly size: string;
  @Field()
  readonly brand: string;
  @Field()
  readonly model: string;
  @Field(() => Int)
  readonly year: number;
}
