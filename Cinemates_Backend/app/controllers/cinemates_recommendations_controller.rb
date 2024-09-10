class CinematesRecommendationsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_recommendation, only: [:destroy]

  def index
    @recommendations = current_user.cinemates_recommendations
    render json: @recommendations
  end

  def create
    unless Movie.exists?(recommendation_params[:movie_id])
      render json: { code: 404, error: "Movie not found" }, status: :not_found
      return
    end

    existing_recommendation = CinematesRecommendation.find_by(
      user: current_user,
      movie_id: recommendation_params[:movie_id]
    )

    if existing_recommendation
      render json: { code: 422, error: "You have already recommended this movie" }, status: :unprocessable_entity
      return
    end

    @recommendation = current_user.cinemates_recommendations.new(
      movie_id: recommendation_params[:movie_id],
      cm_recommendation: true
    )

    if @recommendation.save
      update_movie_avg_cm_recommendation(@recommendation.movie_id)
      render json: { code: 201, message: "Recommendation created successfully", data: @recommendation }, status: :created
    else
      render json: { code: 422, errors: @recommendation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @recommendation.destroy
      update_movie_avg_cm_recommendation(@recommendation.movie_id)
      render json: { code: 200, message: "Recommendation deleted successfully" }, status: :ok
    else
      render json: { code: 422, errors: @recommendation.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_recommendation
    @recommendation = current_user.cinemates_recommendations.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { code: 404, error: "Recommendation not found" }, status: :not_found
  end

  def recommendation_params
    params.require(:cinemates_recommendation).permit(:movie_id)
  end

  def update_movie_avg_cm_recommendation(movie_id)
    movie = Movie.find(movie_id)
    total_users = User.count
    recommended_users = CinematesRecommendation.where(movie_id: movie_id, cm_recommendation: true).count
    avg_cm_recommendation = (recommended_users.to_f / total_users) * 100
    movie.update(avg_cm_recommendation: avg_cm_recommendation)
  end
end