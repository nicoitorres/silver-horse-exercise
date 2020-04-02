export class User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string
        geo: Coordinates;
    };
    phone: string;
    website: string;
    company: {
        name: string;
        cathPhrase: string;
        bs: string
    }
}