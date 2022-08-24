import React from "react";
import StarRatingComponent from "react-star-rating-component";

function Filter({ search, handleRating }) {
    return (
        <div>
            <input
                placeholder="Search movie"
                type="text"
                onChange={(e) => search(e.target.value)}
            />
            <StarRatingComponent
                name="filter"
                starCount={10}
                emptyStarColor={String}
                onStarClick={(value) => handleRating(value)}
                editing={true}
            />
        </div>
    );
}

export default Filter;
