export const ROUTES={
    HOME:"/",
    BOOKS:"/books",
    SINGLE_BOOKS:{
        STATIC:"/books/:bookId",
        DYNAMIC:(bookId)=>`/books/${bookId}`,
    },
    
};