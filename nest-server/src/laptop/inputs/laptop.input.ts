import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class LaptopInput {
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
