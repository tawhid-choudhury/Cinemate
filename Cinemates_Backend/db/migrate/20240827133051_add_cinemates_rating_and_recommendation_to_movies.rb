class AddCinematesRatingAndRecommendationToMovies < ActiveRecord::Migration[7.2]
  def change
    add_column :movies, :cm_rating, :float, null: false, default: 0.0
    add_column :movies, :cm_recommendation, :integer, null: false, default: 0
  end
end
