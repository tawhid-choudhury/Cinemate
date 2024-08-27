class MoviesController < ApplicationController

  def index
    @movies = Movie.all
    render json: @movies
  end


  def create
    movie_name = params[:movie_name]
    movie_release_year = params[:movie_release_year]
    api_key = ENV['OMDB_API_KEY']

    if movie_name.blank?
      render json:
               { code: 422,
                 error: "Movie name cannot be empty"
               }, status: :unprocessable_entity
      return
    end

    url = "https://www.omdbapi.com/?t=#{movie_name}"
    url += "&y=#{movie_release_year}" if movie_release_year.present?
    url += "&apikey=#{api_key}"

    response = HTTParty.get(url)

    if response.success?
      movie_data = response.parsed_response

      if movie_data["imdbID"].blank? || movie_data.values.all? { |value| value == "no-info" }
        render json: { code: 422, error: "Invalid movie data" }, status: :unprocessable_entity
        return
      end

      existing_movie = Movie.find_by(imdb_id: movie_data["imdbID"])
      if existing_movie
        render json: { code: 422, error: "Movie already exists" }, status: :unprocessable_entity
        return
      end

      @movie = Movie.new(
        imdb_id: movie_data["imdbID"] || "no-info",
        title: movie_data["Title"] || "no-info",
        year: movie_data["Year"].to_i || 0,
        rated: movie_data["Rated"] || "no-info",
        released: movie_data["Released"] ? Date.parse(movie_data["Released"]) : nil,
        runtime: movie_data["Runtime"] || "no-info",
        genre: movie_data["Genre"] || "no-info",
        director: movie_data["Director"] || "no-info",
        writer: movie_data["Writer"] || "no-info",
        actors: movie_data["Actors"] || "no-info",
        plot: movie_data["Plot"] || "no-info",
        language: movie_data["Language"] || "no-info",
        country: movie_data["Country"] || "no-info",
        awards: movie_data["Awards"] || "no-info",
        poster: movie_data["Poster"] || "no-info",
        metascore: movie_data["Metascore"] == "N/A" ? 0 : movie_data["Metascore"].to_i,
        imdb_rating: movie_data["imdbRating"] == "N/A" ? 0.0 : movie_data["imdbRating"].to_f,
        imdb_votes: movie_data["imdbVotes"].present? ? movie_data["imdbVotes"].gsub(',', '').to_i : 0,
        box_office: movie_data["BoxOffice"] || "no-info",
        production: movie_data["Production"] || "no-info",
        website: movie_data["Website"] || "no-info",
        response: movie_data["Response"] || "no-info"
      )

      if @movie.save
        render json: @movie, status: :created
      else
        render json: @movie.errors, status: :unprocessable_entity
      end
    else
      render json: { error: "Failed to fetch movie data" }, status: :bad_request
    end
  end

  def featured_today
    movies = Movie.all

    movies_with_age = movies.map do |movie|
      {
        id: movie.id,
        name: movie.title,
        genres: movie.genre,
        imdb_rating: movie.imdb_rating,
        age: movie.age,
        poster: movie.poster
      }
    end

    render json: movies_with_age, status: :ok
  end

end
