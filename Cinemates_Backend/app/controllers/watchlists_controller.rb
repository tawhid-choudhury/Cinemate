# app/controllers/watchlists_controller.rb
class WatchlistsController < ApplicationController
  before_action :authenticate_user_by_token
  before_action :set_movie, only: [:create]

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

  def remove_from_watchlist
    if params[:watch_list_id].blank?
      render json: { error: 'watch_list_id is required' }, status: :bad_request
      return
    end

    @watchlist = current_user.watchlists.find(params[:watch_list_id])

    if @watchlist.destroy
      render json: { message: "Movie removed from watchlist successfully" }, status: :ok
    else
      render json: { code: 422, error: "Failed to remove movie from watchlist" }, status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    render json: { code: 404, error: "Watchlist item not found" }, status: :not_found
  end

  private

  def authenticate_user_by_token
    id_token = request.headers['Authorization']&.split(' ')&.last
    if id_token
      client = FirebaseTokenAuth.build
      result = client.verify_id_token(id_token)
      @current_user = User.find_by(uid: result.uid)
    end

    unless @current_user
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  rescue FirebaseTokenAuth::ValidationError => e
    render json: { error: 'Unauthorized', message: 'Firebase ID token has expired.' }, status: :unauthorized
  rescue FirebaseTokenAuth::Error => e
    render json: { error: 'Unauthorized', message: e.message }, status: :unauthorized
  rescue StandardError => e
    render json: { error: 'Internal Server Error', message: e.message }, status: :internal_server_error
  end

  def current_user
    @current_user
  end

  def set_movie
    if params[:movie_id].blank?
      render json: { error: 'movie_id is required' }, status: :bad_request
      return
    end

    @movie = Movie.find_by(id: params[:movie_id])
    unless @movie
      render json: { error: 'Movie not found' }, status: :not_found
    end
  end
end