class Movie < ApplicationRecord

  has_many :watchlists, dependent: :destroy
  has_many :cinemates_ratings, dependent: :destroy
  has_many :posts, dependent: :destroy

  def age
    return 0 unless released
    ((Time.zone.now - released.to_time) / 1.year.seconds).floor
  end
end
