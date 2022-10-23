import { CreateChildContract } from './create-child.contract';

export class CreateChildCommand {
	constructor(readonly input: CreateChildContract) { }
}