export class Customer {
  constructor(
    public name: string,
    public id: string,
    public email: string,
    public password: string,
    public active: boolean,
  ) {}
}
