import * as graphql from "@nestjs/graphql";
import { AiQueryInput } from "../aiDatabaseManagement/AiQueryInput";
import { AiDatabaseManagementService } from "./aidatabasemanagement.service";

export class AiDatabaseManagementResolver {
  constructor(protected readonly service: AiDatabaseManagementService) {}

  @graphql.Mutation(() => String)
  async HandleAiQuery(
    @graphql.Args()
    args: AiQueryInput
  ): Promise<string> {
    return this.service.HandleAiQuery(args);
  }
}
