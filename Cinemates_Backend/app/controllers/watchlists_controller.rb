class WatchlistsController < ApplicationController

  before_action :set_movie, only: [:create]
  before_action :authenticate_user!

  def index
    @watchlists = current_user.watchlists.includes(:movie)
    render json: @watchlists, include: :movie
  end

  def create
    if current_user.watchlists.exists?(movie: @movie)
      render json: {
        code: 422,
        error: "Movie has already been added to your watchlist"
      }, status: :unprocessable_entity
      return
    end
    @watchlist = current_user.watchlists.new(movie: @movie)

    if @watchlist.save
      render json: @watchlist, status: :created
    else
      render json: @watchlist.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @watchlist = current_user.watchlists.find(params[:id])
    if @watchlist.destroy
      render json: { message: "Movie removed from watchlist successfully" }, status: :ok
    else
      render json: { code: 422, error: "Failed to remove movie from watchlist" }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { code: 404, error: "Watchlist item not found" }, status: :not_found
  end

  private
  def set_movie
    @movie = Movie.find(params[:movie_id])
  end
end
