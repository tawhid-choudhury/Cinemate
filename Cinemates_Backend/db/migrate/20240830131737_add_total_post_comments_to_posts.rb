class AddTotalPostCommentsToPosts < ActiveRecord::Migration[7.2]
  def change
    add_column :posts, :total_post_comments, :integer, null: false, default: 0
  end
end
