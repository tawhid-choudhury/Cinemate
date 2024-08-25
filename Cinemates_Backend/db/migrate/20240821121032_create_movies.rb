class CreateMovies < ActiveRecord::Migration[7.2]
  def change
    create_table :movies do |t|
      t.string :imdb_id, null: false, default: "no-info"
      t.string :title, null: false, default: "no-info"
      t.integer :year, null: false, default: 0
      t.string :rated, null: false, default: "no-info"
      t.date :released, null: true
      t.string :runtime, null: false, default: "no-info"
      t.string :genre, null: false, default: "no-info"
      t.string :director, null: false, default: "no-info"
      t.string :writer, null: false, default: "no-info"
      t.string :actors, null: false, default: "no-info"
      t.text :plot, null: false, default: "no-info"
      t.string :language, null: false, default: "no-info"
      t.string :country, null: false, default: "no-info"
      t.string :awards, null: false, default: "no-info"
      t.string :poster, null: false, default: "no-info"
      t.integer :metascore, null: false, default: 0
      t.float :imdb_rating, null: false, default: 0.0
      t.integer :imdb_votes, null: false, default: 0
      t.string :box_office, null: false, default: "no-info"
      t.string :production, null: false, default: "no-info"
      t.string :website, null: false, default: "no-info"
      t.string :response, null: false, default: "no-info"
      t.timestamps
    end
  end
end
