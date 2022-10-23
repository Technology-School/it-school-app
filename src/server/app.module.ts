import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { ChildModule } from 'src/child/child.module'
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  imports: [
    PrismaModule,
    ChildModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        typePaths: ['../**/graphql/*.graphql'],
      }),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
