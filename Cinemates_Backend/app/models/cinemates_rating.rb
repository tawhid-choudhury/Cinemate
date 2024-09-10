class CinematesRating < ApplicationRecord

  belongs_to :user
  belongs_to :movie

  validates :cm_rating, presence: true, numericality: {
    only_integer: true,
    greater_than_or_equal_to: 1,
    less_than_or_equal_to: 10
  }
  validates :user_id, uniqueness: { scope: :movie_id, message: "has already rated this movie" }
end
