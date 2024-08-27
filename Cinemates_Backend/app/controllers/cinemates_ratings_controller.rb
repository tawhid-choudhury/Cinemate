class CinematesRatingsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_cinemates_rating, only: [:update]

  def create
    unless Movie.exists?(cm_rating_params[:movie_id])
      render json: { code: 404, error: "Movie not found" }, status: :not_found
      return
    end

    @cm_rating = current_user.cinemates_ratings.new(cm_rating_params)
    if @cm_rating.save
      update_movie_avg_cm_rating(@cm_rating.movie_id)
      render json: { code: 201, message: "Rating created successfully", data: @cm_rating }, status: :created
    else
      render json: { code: 422, error: format_errors(@cm_rating) }, status: :unprocessable_entity
    end
  end

  def update
    if @cm_rating.update(cm_rating_params)
      update_movie_avg_cm_rating(@cm_rating.movie_id)
      render json: { code: 200, message: "Rating updated successfully", data: @cm_rating }, status: :ok
    else
      render json: { code: 422, error: format_errors(@cm_rating) }, status: :unprocessable_entity
    end
  end

  private

  def set_cinemates_rating
    @cm_rating = current_user.cinemates_ratings.find_by(id: params[:id])
    unless @cm_rating
      render json: { code: 404, error: "Rating not found" }, status: :not_found
    end
  end

  def cm_rating_params
    params.require(:cinemates_rating).permit(:movie_id, :cm_rating)
  end

  def format_errors(record)
    record.errors.full_messages.join(", ")
  end

  def update_movie_avg_cm_rating(movie_id)
    movie = Movie.find(movie_id)
    avg_rating = movie.cinemates_ratings.average(:cm_rating).to_f
    movie.update(avg_cm_rating: avg_rating)
  end

end