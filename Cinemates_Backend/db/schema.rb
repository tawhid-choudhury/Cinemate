# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.2].define(version: 2024_08_28_145856) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cinemates_ratings", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "movie_id", null: false
    t.integer "cm_rating", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id", "user_id"], name: "index_cinemates_ratings_on_movie_id_and_user_id", unique: true
    t.index ["movie_id"], name: "index_cinemates_ratings_on_movie_id"
    t.index ["user_id"], name: "index_cinemates_ratings_on_user_id"
  end

  create_table "movie_post_counts", force: :cascade do |t|
    t.bigint "movie_id", null: false
    t.integer "post_count", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id"], name: "index_movie_post_counts_on_movie_id"
  end

  create_table "movies", force: :cascade do |t|
    t.string "imdb_id", default: "no-info", null: false
    t.string "title", default: "no-info", null: false
    t.integer "year", default: 0, null: false
    t.string "rated", default: "no-info", null: false
    t.date "released"
    t.string "runtime", default: "no-info", null: false
    t.string "genre", default: "no-info", null: false
    t.string "director", default: "no-info", null: false
    t.string "writer", default: "no-info", null: false
    t.string "actors", default: "no-info", null: false
    t.text "plot", default: "no-info", null: false
    t.string "language", default: "no-info", null: false
    t.string "country", default: "no-info", null: false
    t.string "awards", default: "no-info", null: false
    t.string "poster", default: "no-info", null: false
    t.integer "metascore", default: 0, null: false
    t.float "imdb_rating", default: 0.0, null: false
    t.integer "imdb_votes", default: 0, null: false
    t.string "box_office", default: "no-info", null: false
    t.string "production", default: "no-info", null: false
    t.string "website", default: "no-info", null: false
    t.string "response", default: "no-info", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "avg_cm_rating", default: 0.0, null: false
    t.integer "avg_cm_recommendation", default: 0, null: false
  end

  create_table "post_comments", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "post_id", null: false
    t.text "content", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_post_comments_on_post_id"
    t.index ["user_id", "post_id"], name: "index_post_comments_on_user_id_and_post_id"
    t.index ["user_id"], name: "index_post_comments_on_user_id"
  end

  create_table "posts", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "movie_id", null: false
    t.text "content"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id"], name: "index_posts_on_movie_id"
    t.index ["user_id"], name: "index_posts_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.boolean "agree_terms_service", default: false, null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.integer "failed_attempts", default: 0, null: false
    t.string "unlock_token"
    t.datetime "locked_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "jti", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["jti"], name: "index_users_on_jti", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["unlock_token"], name: "index_users_on_unlock_token", unique: true
  end

  create_table "watchlists", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "movie_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["movie_id"], name: "index_watchlists_on_movie_id"
    t.index ["user_id", "movie_id"], name: "index_watchlists_on_user_id_and_movie_id", unique: true
    t.index ["user_id"], name: "index_watchlists_on_user_id"
  end

  add_foreign_key "cinemates_ratings", "movies"
  add_foreign_key "cinemates_ratings", "users"
  add_foreign_key "movie_post_counts", "movies"
  add_foreign_key "post_comments", "posts"
  add_foreign_key "post_comments", "users"
  add_foreign_key "posts", "movies"
  add_foreign_key "posts", "users"
  add_foreign_key "watchlists", "movies"
  add_foreign_key "watchlists", "users"
end
