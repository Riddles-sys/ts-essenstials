interface Contact extends Address {
	// property for interface.
	// strictly exist to provide types, not like classes.
	id: number;
	name: string;
	// adding the ? means it is optional
	birthDate?: Date;
}

interface Address {
	line1?: string;
	line2?: string;
	province?: string;
	region?: string;
	postalCode: string;
}
let primaryContact: Contact = {
	id: 0,
	name: 'James Smith',
	postalCode: '',
};
