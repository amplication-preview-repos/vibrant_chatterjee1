import { Module } from "@nestjs/common";
import { TableModuleBase } from "./base/table.module.base";
import { TableService } from "./table.service";
import { TableController } from "./table.controller";
import { TableResolver } from "./table.resolver";

@Module({
  imports: [TableModuleBase],
  controllers: [TableController],
  providers: [TableService, TableResolver],
  exports: [TableService],
})
export class TableModule {}
