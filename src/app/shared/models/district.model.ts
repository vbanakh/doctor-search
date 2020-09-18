import { IDistrict } from '../interfaces/district.interface';
export class District implements IDistrict{
    constructor(public id: number,
                public nameEN: string,
                public nameUA: string){}
} 