import {User} from 'src/app/core/models/interfaces/User';

export interface PageResponse {
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
  data: User [];
}
