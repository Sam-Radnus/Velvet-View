import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useEffect } from 'react'
import Comment from './secondary/Comment';
import '../App.css';
function LiveComment(props) {
    const [comments, setComments] = useState([]);
    const [movieName, setMoviename] = useState('');
    const fetchComments = async () => {
        const rand=Math.random(100,1000);
        const url = "https://api.themoviedb.org/3/movie/11/reviews?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US&page=1";
        const data = await fetch(url);
        const parsedData = await data.json();

        
        const token = parsedData.id;

        const url2 = `https://api.themoviedb.org/3/movie/${token}?api_key=2023616ed87a6faf2ec9cd6de24b46ed&language=en-US`;
        const details = await fetch(url2);
        const parsedDetails = await details.json();

        const titles = parsedDetails.title;

        setMoviename(titles);

        const review = parsedData.results;
        setComments(review);

    }
    useEffect(() => {
        fetchComments();

    }, []);
    return (
        <>
            <h1 className='feature'>Live Comments</h1>
            {comments.slice(0, 3).map(element => (
                <Comment key={element.id} userName={element.author} MovieName={movieName} Review={element.content.slice(0, 76)} />
            ))}
        </>
    )
}

LiveComment.propTypes = {}

export default LiveComment
