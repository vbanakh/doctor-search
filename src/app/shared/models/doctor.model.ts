import { IDoctor } from '../interfaces/doctor.interfsce';
import { ISpeciality } from '../interfaces/speciality.interface';
import { IClinic } from '../interfaces/clinic.interface';
import { ICity } from '../interfaces/city.interface';
import { IDistrict } from '../interfaces/district.interface';
export class Doctor implements IDoctor{
    constructor(public id: number,
                public nameEN: string,
                public lastnameEN: string,
                public nameUA: string,
                public lastnameUA: string,
                public speciality: ISpeciality,
                public clinic: IClinic,
                public city: ICity,
                public district: IDistrict,
                public office: string,
                public phoneNumber: number,
                public photo: string){}
}