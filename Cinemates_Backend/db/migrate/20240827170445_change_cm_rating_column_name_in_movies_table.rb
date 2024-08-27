class ChangeCmRatingColumnNameInMoviesTable < ActiveRecord::Migration[7.2]
  def change
    rename_column :movies, :cm_rating, :avg_cm_rating
    rename_column :movies, :cm_recommendation, :avg_cm_recommendation
  end
end
