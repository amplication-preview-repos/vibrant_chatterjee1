import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RelationServiceBase } from "./base/relation.service.base";

@Injectable()
export class RelationService extends RelationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
