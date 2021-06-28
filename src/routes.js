import Article from "./Section/Article/Article";

const visitorRouters = [
    {
        path: "/Landing",
        name: "Landing",
        component: Article,
    },
    {
        path: "/ArticleDetails",
        name: "ArticleDetails",
        component: null,
     },

];
export default  visitorRouters;
