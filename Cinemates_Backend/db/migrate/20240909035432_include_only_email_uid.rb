class IncludeOnlyEmailUid < ActiveRecord::Migration[7.2]
  def change
    change_table :users, bulk: true do |t|
      t.remove :first_name, :last_name, :encrypted_password, :agree_terms_service, :reset_password_token,
               :reset_password_sent_at, :remember_created_at, :sign_in_count, :current_sign_in_at, :last_sign_in_at,
               :current_sign_in_ip, :last_sign_in_ip, :confirmation_token, :confirmed_at, :confirmation_sent_at,
               :unconfirmed_email, :failed_attempts, :unlock_token, :locked_at, :jti

      t.string :uid, null: false
    end

    add_index :users, :uid, unique: true
  end
end
