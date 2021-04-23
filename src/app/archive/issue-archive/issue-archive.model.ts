export interface IIssueArchive {
    recordCount: IRecordCount;
    issues: IIssue[];
}
interface IRecordCount {
    record_count: string;
}
interface IIssue {
    row_id: string;
    issue_id: string;
    issue_title: string;
    browser_title: string;
    issue_date: string;
    articleDetails: IArticle[];
    editorialDetails: IEditorial[];
    isNew:boolean;

}
interface IArticle {
    article_id: string;
    article_title: string;
    browser_title: string;
    short_description: string;
    author: string;
}
interface IEditorial {
    editorial_id: string;
    editorial_title: string;
    short_description: string;
    browser_title: string;
}
