import { v4, validate } from 'uuid'

export type UUID = string & { readonly UUID: unique symbol }

/**
 * It returns an object with two methods, `new` and `ofString`, that can be used to create a new UUID or convert a string to a UUID
 */
export const buildUuidBrandMethods = <ID extends string>() => ({
	new: () => {
		return v4() as ID
	},
	ofString: (value: string): ID => {
		if (!validate(value)) {
			throw new Error(`Invalid value of uuid:${value}`)
		}
		return value as ID
	},
})