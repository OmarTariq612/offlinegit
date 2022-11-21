export interface Repo {
    Url: string
    Name: string
    Slug: string
    CreatedAt: Number
}


export interface File {
    IsDir: Boolean
    Name: string
    Path: string
    Extension: string
    Content: string
    Childrens: File[]

}