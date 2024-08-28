class PostsController < ApplicationController

  before_action :authenticate_user!

  def index
    @posts = current_user.posts
    render json: @posts
  end

  def create

    unless Movie.exists?(post_params[:movie_id])
      render json: {
        code: 402,
        error: "Movie not found"
      }, status: :not_found
      return
    end

    if current_user.posts.exists?(movie_id: post_params[:movie_id])
      render json: { code: 422, error: "You have already posted about this movie" }, status: :unprocessable_entity
      return
    end

    @post = current_user.posts.new(post_params)
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end

  end

  private

  def post_params
    params.require(:post).permit(:movie_id, :content)
  end
end
