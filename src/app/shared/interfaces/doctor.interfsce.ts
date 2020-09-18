import { ISpeciality } from './speciality.interface';
import { ICity } from './city.interface';
import { IClinic } from './clinic.interface';
import { IDistrict } from './district.interface';
export interface IDoctor{
    id: number;
    nameEN: string;
    lastnameEN: string;
    nameUA: string;
    lastnameUA: string;
    speciality: ISpeciality;
    clinic: IClinic;
    city: ICity;
    district: IDistrict;
    office: string;
    phoneNumber: number;
    photo: string;
}