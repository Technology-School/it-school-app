import { IsUUID } from 'class-validator';
import { ChildrenId } from '../domain/child.domain';

export class CreateChildContract {
	@IsUUID()
	id: ChildrenId
}