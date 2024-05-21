import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RelationService } from "./relation.service";
import { RelationControllerBase } from "./base/relation.controller.base";

@swagger.ApiTags("relations")
@common.Controller("relations")
export class RelationController extends RelationControllerBase {
  constructor(protected readonly service: RelationService) {
    super(service);
  }
}
