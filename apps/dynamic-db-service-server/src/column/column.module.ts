import { Module } from "@nestjs/common";
import { ColumnModuleBase } from "./base/column.module.base";
import { ColumnService } from "./column.service";
import { ColumnController } from "./column.controller";
import { ColumnResolver } from "./column.resolver";

@Module({
  imports: [ColumnModuleBase],
  controllers: [ColumnController],
  providers: [ColumnService, ColumnResolver],
  exports: [ColumnService],
})
export class ColumnModule {}
