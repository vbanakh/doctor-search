import { IFeedback } from '../interfaces/feedback.interface';

export class Feedback implements IFeedback{
    constructor(public id: number,
                public nameUA: string,
                public email: string,
                public phone: string,
                public theme: string,
                public message: string,
                public  dateFB: Date,
                public  status: string = 'нове'){}
} 