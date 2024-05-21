import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AiDatabaseManagementService } from "./aidatabasemanagement.service";
import { AiQueryInput } from "../aiDatabaseManagement/AiQueryInput";

@swagger.ApiTags("aiDatabaseManagements")
@common.Controller("aiDatabaseManagements")
export class AiDatabaseManagementController {
  constructor(protected readonly service: AiDatabaseManagementService) {}

  @common.Post("/ai-query")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async HandleAiQuery(
    @common.Body()
    body: AiQueryInput
  ): Promise<string> {
        return this.service.HandleAiQuery(body);
      }
}
