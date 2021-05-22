import React from 'react';
import {Link} from 'react-router-dom';

//this component allows me to create a resable articles list page 
//It also gives a breif extract of the page 


const ArticlesList = ({articles}) => (
    <>
    {articles.map((article,key) => (
        <Link className="article-list-item" key={key} to={`/article/${article.name}`}>
        <h3>{article.title}</h3>
        <p>{article.content[0].substring(0, 150)}...</p>
        </Link>
        
    ))}
    </>
);

export default ArticlesList;
