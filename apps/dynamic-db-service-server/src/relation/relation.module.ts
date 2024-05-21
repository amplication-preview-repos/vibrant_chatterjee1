import { Module } from "@nestjs/common";
import { RelationModuleBase } from "./base/relation.module.base";
import { RelationService } from "./relation.service";
import { RelationController } from "./relation.controller";
import { RelationResolver } from "./relation.resolver";

@Module({
  imports: [RelationModuleBase],
  controllers: [RelationController],
  providers: [RelationService, RelationResolver],
  exports: [RelationService],
})
export class RelationModule {}
