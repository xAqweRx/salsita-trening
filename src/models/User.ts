export class User {
    name: string | undefined;
    surname: string | undefined;

    get giveName() {
        return this.name;
    }
}
