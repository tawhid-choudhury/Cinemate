# config/initializers/firebase_token_auth.rb
FirebaseTokenAuth.configure do |config|
  config.project_id = "cinemates-be" # required

  # Set the path to the credentials file based on the Rails environment
  config.json_key_io = if Rails.env.production?
                         "/etc/secrets/cinemates-be-firebase-adminsdk-qpscl-8f3a4f3cdb.json"
                       else
                         "#{Rails.root}/config/initializers/cinemates-be-firebase-adminsdk-qpscl-8f3a4f3cdb.json"
                       end
end