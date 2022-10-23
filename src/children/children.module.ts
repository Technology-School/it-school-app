import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ChildrenResolver } from './graphql/children.resolver'

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [ChildrenResolver],
  exports: [],
})
export class ChildrenModule { }
