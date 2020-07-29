export interface IWebExclusiveDteails {
    id: string;
    secndid: string;
    title: string;
    browsertitle: string;
    shortdescription: string;
}

export interface IAllWebExclusiveDetails {
    webExclusive: IWebExclusiveDteails[];
}
export interface IArticleDetails{
    article_id:string;
    article_title:string;
    browser_title:string;
    short_description:string;
    author:string;  
}
export interface IEditorialDetails{
    editorial_id:string;
    editorial_title:string;
    short_description:string;
    browser_title:string;
}
export interface IIssue{
    issue_id:string;
    issue_title:string;
    issue_date:string;
    articleDetails:IArticleDetails[];
    editorialDetails:IEditorialDetails[];

}