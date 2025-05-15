import { useEffect, useState } from "react";
import css from "./MovieReviews.module.css";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../movies-api";

export default function MovieReviews() {
  const { filmId } = useParams();
  const [reviews, setReviews] = useState([]);

  const [expandedIds, setExpandedIds] = useState([]);

  useEffect(() => {
    fetchReviews(filmId).then((reviews) => setReviews(reviews));
  }, [filmId]);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((el) => el !== id) : [...prev, id]
    );
  };
  return (
    <div>
      {reviews.length > 0 &&
        reviews.map((review) => {
          const isExpanded = expandedIds.includes(review.id);
          return (
            <div key={review.id} className={css.reviewItem}>
              <h3 className={css.reviewAuthor}>Author: {review.author}</h3>
              <p
                className={`${css.reviewContent} ${
                  isExpanded ? css.expanded : ""
                }`}
                onClick={() => toggleExpand(review.id)}
              >
                {review.content}
              </p>
            </div>
          );
        })}
    </div>
  );
}
