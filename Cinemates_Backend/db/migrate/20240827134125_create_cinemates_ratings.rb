class CreateCinematesRatings < ActiveRecord::Migration[7.2]
  def change
    create_table :cinemates_ratings do |t|
      t.references :user, null: false, foreign_key: true
      t.references :movie, null: false, foreign_key: true
      t.integer :cm_rating, null: false, default: 0
      t.timestamps
    end
  end
end
