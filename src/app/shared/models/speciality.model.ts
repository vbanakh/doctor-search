import { ISpeciality } from '../interfaces/speciality.interface';
export class Speciality implements ISpeciality{
    constructor(public id: number,
                public nameEN: string,
                public nameUA: string){}
} 