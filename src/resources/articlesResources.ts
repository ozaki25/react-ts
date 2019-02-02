import { unstable_createResource as createResource } from 'react-cache';
import { Article } from '../types/Article';
import { fetchArticles } from '../utils/fetchUtils';

export const articlesResource = createResource<any, Article[]>(fetchArticles);
