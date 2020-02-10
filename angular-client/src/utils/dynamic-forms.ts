import {
  getIntrospectionQuery,
  buildClientSchema,
  IntrospectionQuery,
  TypeKind,
  isScalarType,
  isNonNullType,
  getNullableType
} from "graphql";
import request from "graphql-request";

async function getSchema(graphQLUrl: string) {
  const introspectionQuery = getIntrospectionQuery();
  const introspection = await request<IntrospectionQuery>(
    graphQLUrl,
    introspectionQuery
  );
  const schema = buildClientSchema(introspection);
  return schema;
}

async function createForms() {
  const schema = await getSchema("http://localhost:3000/graphql");
  const rootQueryType = schema.getQueryType();
  const fields = rootQueryType?.getFields();
  const forms = Object.keys(fields).map(fieldName => {
    const field = fields[fieldName];
    const args = field.args;
    const inputs = args.reduce<JSX.Element[]>((acc, arg) => {
      const nullableType = getNullableType(arg.type);
      if (isScalarType(nullableType)) {
        const isRequired = isNonNullType(arg.type);
        let inputType =
          nullableType.name === "String"
            ? "text"
            : nullableType.name === "Boolean"
            ? "checkbox"
            : ["Number", "Float"].includes(nullableType.name)
            ? "number"
            : null;
        if (inputType) {
          return [...acc, <input type={inputType} required={isRequired} />];
        }
      }
      return acc;
    }, []);
  });
}
