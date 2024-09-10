class Post < ApplicationRecord

  belongs_to :user
  belongs_to :movie
  has_many :post_comments, dependent: :destroy
  has_many :post_likes, dependent: :destroy

  after_create :update_movie_post_count
  after_destroy :update_movie_post_count

  private

  def update_movie_post_count
    movie_post_count = MoviePostCount.find_or_create_by(movie: movie)
    total_posts = movie.posts.count
    movie_post_count.update(post_count: total_posts)
  end
end
