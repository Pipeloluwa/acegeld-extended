
export interface IPolicyTermsBaseComponent{
    title: string;
    description: string;
}


export interface IPolicyTermsComponent{
    description? : string
    data: IPolicyTermsBaseComponent[]
}