class AddUniqueIndexToCinematesRatings < ActiveRecord::Migration[7.2]
  def change
    add_index :cinemates_ratings, [:movie_id, :user_id], unique: true
  end
end
