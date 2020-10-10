export interface IPDFIssueArchive{
    isRecordFound:boolean;
    pdfsInfo:IPDFInfo[];
}
export interface IRecordCount{
    record_count:number;
}
interface IPDFInfo{
    row_id:number;
    id:number;
    filename:string;
    title:string;
    publishdate:Date;
}
