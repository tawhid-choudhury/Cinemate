class CreateMoviePostCounts < ActiveRecord::Migration[7.2]
  def change
    create_table :movie_post_counts do |t|
      t.references :movie, null: false, foreign_key: true
      t.integer :post_count, default: 0, null: false
      t.timestamps
    end
  end
end
