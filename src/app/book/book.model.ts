export interface IBook{
    BookID:string;
    chapterID:string;
    BookBrowserTitle:string;
    BookTitle:string;
    BookPublishDate:string;


}
export interface IBooks{
    Books:IBook[];
}
export interface IChapter{
    BookID: number;
    BookBrowserTitle: string;
    BookTitle: string;
    BookPublishDate: Date;
    DefaultChapterID: string;
    ChapterID: string;
    ChapterBrowserTitle: string;
    ChapterIndex: number;
    ChapterTitle: string;
    ChapterFilename: string;
    PreviousChapterID: string;
    NextChapterID: string;
}
export interface IBookDetails{
    Chapters:IChapter[]
}
