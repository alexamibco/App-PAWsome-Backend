export interface Review {
  review_id?: string;
  user_id: string;
  place_id: string;
  review_title: string;
  review_rating: number;
  review_content: string;
}