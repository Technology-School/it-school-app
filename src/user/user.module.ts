import { Module } from '@nestjs/common'
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserResolver } from './graphql/user.resolver';

@Module({
	imports: [PrismaModule],
	controllers: [],
	providers: [UserResolver],
	exports: []
})
export class UserModule { }
