class CreateCinematesRecommendations < ActiveRecord::Migration[7.2]
  def change
    create_table :cinemates_recommendations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :movie, null: false, foreign_key: true
      t.boolean :cm_recommendation, null: false, default: false
      t.timestamps
    end
  end
end
