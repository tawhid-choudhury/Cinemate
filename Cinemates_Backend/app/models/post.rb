class Post < ApplicationRecord

  belongs_to :user
  belongs_to :movie

  after_create :increment_movie_post_count
  after_destroy :decrement_movie_post_count

  private

  def increment_movie_post_count
    movie_post_count = MoviePostCount.find_or_create_by(movie: movie)
    movie_post_count.increment!(:post_count)
  end

  def decrement_movie_post_count
    movie_post_count = MoviePostCount.find_by(movie: movie)
    movie_post_count.decrement!(:post_count) if movie_post_count
  end
end
