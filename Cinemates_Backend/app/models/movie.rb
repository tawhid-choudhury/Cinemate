class Movie < ApplicationRecord

  def age
    return 0 unless released
    ((Time.zone.now - released.to_time) / 1.year.seconds).floor
  end

  has_many :watchlists
end
