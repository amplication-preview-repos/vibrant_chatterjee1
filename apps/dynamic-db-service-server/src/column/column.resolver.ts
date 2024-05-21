import * as graphql from "@nestjs/graphql";
import { ColumnResolverBase } from "./base/column.resolver.base";
import { Column } from "./base/Column";
import { ColumnService } from "./column.service";

@graphql.Resolver(() => Column)
export class ColumnResolver extends ColumnResolverBase {
  constructor(protected readonly service: ColumnService) {
    super(service);
  }
}
