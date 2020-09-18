import { ICity } from '../interfaces/city.interface';
export class City implements ICity{
    constructor(public id: number,
                public nameEN: string,
                public nameUA: string){}
} 