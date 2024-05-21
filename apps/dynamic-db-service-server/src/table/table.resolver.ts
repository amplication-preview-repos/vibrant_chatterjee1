import * as graphql from "@nestjs/graphql";
import { TableResolverBase } from "./base/table.resolver.base";
import { Table } from "./base/Table";
import { TableService } from "./table.service";

@graphql.Resolver(() => Table)
export class TableResolver extends TableResolverBase {
  constructor(protected readonly service: TableService) {
    super(service);
  }
}
