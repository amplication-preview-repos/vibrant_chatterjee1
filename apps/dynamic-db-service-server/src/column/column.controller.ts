import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ColumnService } from "./column.service";
import { ColumnControllerBase } from "./base/column.controller.base";

@swagger.ApiTags("columns")
@common.Controller("columns")
export class ColumnController extends ColumnControllerBase {
  constructor(protected readonly service: ColumnService) {
    super(service);
  }
}
