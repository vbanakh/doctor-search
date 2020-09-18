import { IAppointment } from '../interfaces/ appointment.interface';
import { IDoctor } from '../interfaces/doctor.interfsce';
export class Appointment implements IAppointment{
    constructor(public id: number,
                public firstName: string,
                public lastName: string,
                public email:string,
                public phone:string,
                public complaint: string,
                public dateUser: Date,
                public timeUser: Date,
                public doctorApp: IDoctor,
                public  dateApp: Date,
                public  status: string = 'новий'){} 
}