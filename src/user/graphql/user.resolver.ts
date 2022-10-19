import { Query, Resolver } from '@nestjs/graphql';
import { PrismaPromise, User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver('UserResolver')
export class UserResolver {

	constructor(private readonly prisma: PrismaService) { }

	@Query()
	users(): PrismaPromise<User[]> {
		return this.prisma.user.findMany()
	}
}