import * as graphql from "@nestjs/graphql";
import { RelationResolverBase } from "./base/relation.resolver.base";
import { Relation } from "./base/Relation";
import { RelationService } from "./relation.service";

@graphql.Resolver(() => Relation)
export class RelationResolver extends RelationResolverBase {
  constructor(protected readonly service: RelationService) {
    super(service);
  }
}
