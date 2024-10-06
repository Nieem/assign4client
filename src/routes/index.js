export const ROUTES={
    HOME:"/",
    COURSES:"/courses",
    SINGLE_COURSES:{
        STATIC:"/courses/:courseId",
        DYNAMIC:(courseId)=>`/courses/${courseId}`,
    },
    
};