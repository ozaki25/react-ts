import { Article } from 'src/types/Article';

const api = 'https://qiita.com/api/v2/users/ozaki25/items';

export const fetchArticles = async (): Promise<Article[]> => {
  const articles = await fetch(api).then(res => res.json());
  console.table(articles);
  return articles;
};
