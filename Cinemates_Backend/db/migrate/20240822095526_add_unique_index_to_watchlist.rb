class AddUniqueIndexToWatchlist < ActiveRecord::Migration[7.2]
  def change
    add_index :watchlists, [:user_id, :movie_id], unique: true
  end
end
