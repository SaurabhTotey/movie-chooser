import Image from "next/image";
import { FC, ReactNode } from "react";
import { MovieApiMovieInformation } from "../helpers/MovieApiManager";
import style from "../styles/MovieCard.module.css";

interface MovieCardPropType {
	movie: MovieApiMovieInformation;
	children?: ReactNode;
}

const MovieCard: FC<MovieCardPropType> = ({ movie, children }) => {
	return (
		<div className={style["movieCard"]}>
			<h3 className={style["movieCardTitle"]}>{movie.title}</h3>
			<div className={style["movieCardImageContainer"]}>
				{movie.posterPath && (
					<Image
						src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
						alt={`Poster for ${movie.title}.`}
						width={500}
						height={750}
					/>
				)}
			</div>
			<div className={style["movieCardInformationContainer"]}>
				<p>{movie.summary}</p>
				{movie.release && <p>Released: {new Intl.DateTimeFormat("en-US").format(new Date(movie.release))}</p>}
			</div>
			{children && <hr />}
			{children}
		</div>
	);
};
export default MovieCard;
