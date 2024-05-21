import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ColumnServiceBase } from "./base/column.service.base";

@Injectable()
export class ColumnService extends ColumnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
