import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class UpdateLaptopInput {
  @Field({ nullable: true })
  readonly gpu: string;
  @Field({ nullable: true })
  readonly cpu: string;
  @Field({ nullable: true })
  readonly ram: string;
  @Field({ nullable: true })
  readonly ramType: string;
  @Field({ nullable: true })
  readonly size: string;
  @Field({ nullable: true })
  readonly brand: string;
  @Field({ nullable: true })
  readonly model: string;
  @Field({ nullable: true })
  readonly year: number;
}
