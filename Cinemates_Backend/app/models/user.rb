class User < ApplicationRecord
  include Devise::JWT::RevocationStrategies::JTIMatcher

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :rememberable, :validatable, :recoverable,
         :jwt_authenticatable, jwt_revocation_strategy: self

  validates :password_confirmation, presence: true, on: :create
  validates :first_name, :last_name, presence: true
  validates :agree_terms_service, acceptance: { accept: true }

  has_many :watchlists, dependent: :destroy
  has_many :posts, dependent: :destroy
  has_many :cinemates_ratings, dependent: :destroy
  has_many :post_comments, dependent: :destroy
  has_many :post_likes, dependent: :destroy

end
