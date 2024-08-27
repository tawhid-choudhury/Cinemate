class Movie < ApplicationRecord

  def age
    return 0 unless released
    ((Time.zone.now - released.to_time) / 1.year.seconds).floor
  end

  has_many :watchlists, dependent: :destroy
  has_many :cinemates_ratings, dependent: :destroy
end
