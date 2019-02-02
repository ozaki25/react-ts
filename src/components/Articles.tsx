import React from 'react';
import { articlesResource } from '../resources/articlesResources';
import { Article } from '../types/Article';

interface Props {
  articles: Article[];
}

const ArticlesWithResource = () => {
  const articles = articlesResource.read(null);
  return <Articles articles={articles} />;
};

const Articles = (props: Props) => (
  <ul>
    {props.articles.map(article => (
      <li key={article.id}>
        <a href={article.url}>{article.title}</a>
      </li>
    ))}
  </ul>
);

export default ArticlesWithResource;
