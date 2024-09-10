class User < ApplicationRecord

  validates :uid, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true

  has_many :watchlists, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :cinemates_ratings, dependent: :destroy
  has_many :post_comments, dependent: :destroy
  has_many :post_likes, dependent: :destroy
  has_many :cinemates_recommendations, dependent: :destroy

end
