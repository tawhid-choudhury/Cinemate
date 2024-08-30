class PostCommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post

  def create
    @post_comment = @post.post_comments.new(post_comment_params)
    @post_comment.user = current_user

    if @post_comment.save
      render json: {
        code: 201,
        message: "Comment created successfully",
        data: @post_comment
      }, status: :created
    else
      render json: {
        code: 422,
        errors: @post_comment.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  private
  def set_post
    @post = Post.find(params[:post_id])
  rescue ActiveRecord::RecordNotFound
    render json: {
      code: 404,
      error: "Post not found"
    }, status: :not_found
  end

  def post_comment_params
    params.require(:post_comment).permit(:content)
  end

end
