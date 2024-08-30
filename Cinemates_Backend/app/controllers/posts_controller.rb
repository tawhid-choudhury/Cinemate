class PostsController < ApplicationController

  before_action :authenticate_user!
  before_action :set_post, only: [:like_post, :dislike_post]

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

  def like_post
    if @post.post_likes.exists?(user: current_user)
      render json: { code: 422, error: "You have already liked this post" }, status: :unprocessable_entity
      return
    end

    @post_like = @post.post_likes.new(user: current_user)
    if @post_like.save
      render json: { code: 201, message: "Post liked successfully", data: @post_like }, status: :created
    else
      render json: { code: 422, errors: @post_like.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def dislike_post
    @post_like = @post.post_likes.find_by(user: current_user)
    unless @post_like
      render json: { code: 422, error: "You have not liked this post" }, status: :unprocessable_entity
      return
    end

    if @post_like.destroy
      render json: { code: 200, message: "Post disliked successfully" }, status: :ok
    else
      render json: { code: 422, errors: @post_like.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: {
      code: 404,
      error: "Post not found"
    }, status: :not_found
  end

  def post_params
    params.require(:post).permit(:movie_id, :content)
  end
end
