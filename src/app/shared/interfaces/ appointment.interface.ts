import { IDoctor } from './doctor.interfsce';
export interface IAppointment{
    id: number;
    firstName: string;
    lastName: string;
    email:string;
    phone:string;
    complaint: string;
    dateUser: Date;
    timeUser: Date;
    doctorApp: IDoctor;
    dateApp: Date;
    status?: string;
}