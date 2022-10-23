import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module'
import { ChildResolver } from './graphql/child.resolver'

@Module({
  imports: [PrismaModule],
  controllers: [],
  providers: [ChildResolver],
  exports: [],
})
export class ChildModule { }
