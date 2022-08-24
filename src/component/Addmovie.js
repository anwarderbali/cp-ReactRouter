
import React from "react";
import { useRef } from "react";
import  "./Addmovie.css"

const Addmovie = ({ addData }) => {
    const titleRef = useRef();
    const posterRef = useRef();
    const descRef = useRef();
    const ratingRef = useRef();

    const SubmitMovie = (event) => {
        event.preventDefault();
        let movieObject = { title: titleRef.current.value, description: descRef.current.value, posterURL: posterRef.current.value, rating: ratingRef.current.value };
        addData(movieObject)
    };

    return (
        <div>
            <form onSubmit={SubmitMovie} className="inputMovie">
                poster<input type="text" ref={posterRef} /> <br />
                title:<input type="text" ref={titleRef} /><br />
                description<textarea cols="20" rows="2"ref={descRef}></textarea><br />
                rating:<input type="text" ref={ratingRef} /><br />
                <button type="submit">add</button>
            </form>
        </div>
    );
};
export default Addmovie;