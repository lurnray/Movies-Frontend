// // components/MovieList.js
// import React from "react";

// const MovieList = ({ movies }) => {
//   return (
//     <div>
//       {movies.map((movie) => (
//         <div key={movie.id}>
//           <h2>{movie.title}</h2>
//           <p>Year: {movie.year}</p>
//           {/* Display other movie details */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieList;

// import React from 'react';

// const MovieList = (props) => {
// 	const FavouriteComponent = props.favouriteComponent;
// 	return (
// 		<>
// 			{props.movies.map((movie, index) => (
// 				<div className='image-container d-flex justify-content-start m-3'>
// 					<img src={movie.Poster} alt='movie'></img>
// 					<div className='overlay d-flex align-items-center justify-content-center'>
// 						<FavouriteComponent />
// 					</div>
// 				</div>
// 			))}
// 		</>
// 	);
// };

// export default MovieList;


import React from 'react';

const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start m-3'>
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;



