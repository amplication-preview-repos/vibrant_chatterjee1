import { Injectable } from "@nestjs/common";
import { AiQueryInput } from "../aiDatabaseManagement/AiQueryInput";

@Injectable()
export class AiDatabaseManagementService {
  constructor() {}
  async HandleAiQuery(args: AiQueryInput): Promise<string> {
    throw new Error("Not implemented");
  }
}
