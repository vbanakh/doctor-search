import { IClinic } from "../interfaces/clinic.interface";

export class Clinic implements IClinic{
    constructor(public id: number,
                public nameEN: string,
                public nameUA: string,
                public address: string,
                public ownership: string){}
}