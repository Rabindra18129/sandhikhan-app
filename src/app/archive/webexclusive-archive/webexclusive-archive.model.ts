export interface IWebExclusiveArchive{
    webExclusives:IWebExclusive[];
}
export interface IRecordCount {
    record_count: string;
}
interface IWebExclusive{
    row_id:string;
    id:number;
    title:string;
    browsertitle:string;
    shortdescription:string;
    publish_date:string;
}