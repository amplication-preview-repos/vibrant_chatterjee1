import { Module } from "@nestjs/common";
import { AiDatabaseManagementService } from "./aidatabasemanagement.service";
import { AiDatabaseManagementController } from "./aidatabasemanagement.controller";
import { AiDatabaseManagementResolver } from "./aidatabasemanagement.resolver";

@Module({
  controllers: [AiDatabaseManagementController],
  providers: [AiDatabaseManagementService, AiDatabaseManagementResolver],
  exports: [AiDatabaseManagementService],
})
export class AiDatabaseManagementModule {}
