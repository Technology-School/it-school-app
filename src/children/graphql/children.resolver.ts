import { Query, Resolver } from '@nestjs/graphql'
import { Children, PrismaPromise } from '@prisma/client'
import { PrismaService } from 'src/prisma/prisma.service'

@Resolver('ChildrenResolver')
export class ChildrenResolver {
  constructor(private readonly prisma: PrismaService) { }

  @Query()
  children(): PrismaPromise<Children[]> {
    return this.prisma.children.findMany()
  }
}
