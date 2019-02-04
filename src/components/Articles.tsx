import React from 'react';
import { articlesResource } from 'src/resources/articlesResources';
import { ArticleType } from 'src/types/Article';

interface Props {
  articles: ArticleType[];
}

function ArticlesWithResource() {
  const articles = articlesResource.read(null);
  return <Articles articles={articles} />;
}

function Articles(props: Props) {
  return (
    <ul>
      {props.articles.map(article => (
        <li key={article.id}>
          <a href={article.url}>{article.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default ArticlesWithResource;
