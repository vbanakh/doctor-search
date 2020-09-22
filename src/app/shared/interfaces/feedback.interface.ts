export interface IFeedback{
    id: number;
    nameUA: string;
    email: string;
    phone: string;
    theme: string;
    message: string;
    dateFB: Date;
    status?: string;
}