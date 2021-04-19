import React from 'react';
import ArticlesList from '../reuseable-components/ArticlesList';
import NotFoundPage from './NotFoundPage';
import articleContent from './article-content';

//We want to link an article to display using URL Parameter
//in the construction we use the {match} params property to find out the current url and if it matches the match route
const ArticlePage = ({match}) => { 
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
 //for now we have used !article if statement to throw up an error message if article doesn't open    
    if (!article) return <NotFoundPage />

    //Create array of recommended articles showing all the articles apart fromt the one i'm on
    const otherArticles = articleContent.filter(article => article.name !== name);

    return (
    <>
    <h1>{article.title}</h1>
    {article.content.map((paragraph,key) => (
        <p key={key}>{paragraph}</p>
    ))}
    <h3>Other Articles:</h3>
    <ArticlesList articles={otherArticles} />
    </> 
    );
}    
export default ArticlePage;
