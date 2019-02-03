import { unstable_createResource as createResource } from 'react-cache';
import { Article } from 'src/types/Article';
import { fetchArticles } from 'src/utils/fetchUtils';

export const articlesResource = createResource<any, Article[]>(fetchArticles);
