# app/controllers/users_controller.rb
class UsersController < ApplicationController
  before_action :authenticate_user_by_token, except: [:create]
  before_action :verify_token_for_create, only: [:create]

  def create
    email = params[:user][:email]
    uid = params[:user][:uid]

    if email && uid
      user = User.find_or_initialize_by(uid: uid)
      user.email = email

      if user.new_record?
        if user.save
          render json: user, status: :ok
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { message: 'User already registered' }, status: :ok
      end
    else
      render json: { error: 'Invalid data' }, status: :unprocessable_entity
    end
  end

  def update_by_uid
    email = params[:user][:email]

    if email
      if @current_user.update(email: email)
        render json: @current_user, status: :ok
      else
        render json: { errors: @current_user.errors.full_messages }, status: :unprocessable_entity
      end
    else
      render json: { error: 'Invalid data' }, status: :unprocessable_entity
    end
  end

  private

  def authenticate_user_by_token

    id_token = request.headers['Authorization']&.split(' ')&.last
    if id_token
      client = FirebaseTokenAuth.build
      result = client.verify_id_token(id_token)
      @current_user = User.find_by(uid: result.uid)
    end

    unless @current_user
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end
  rescue FirebaseTokenAuth::ValidationError => e
    render json: { error: 'Unauthorized', message: 'Firebase ID token has expired.' }, status: :unauthorized
  rescue FirebaseTokenAuth::Error => e
    render json: { error: 'Unauthorized', message: e.message }, status: :unauthorized
  rescue StandardError => e
    render json: { error: 'Internal Server Error', message: e.message }, status: :internal_server_error

  end

  def verify_token_for_create

    id_token = request.headers['Authorization']&.split(' ')&.last
    if id_token
      client = FirebaseTokenAuth.build
      result = client.verify_id_token(id_token)
      params[:user][:uid] = result.uid
    else
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end

  rescue FirebaseTokenAuth::ValidationError => e
    render json: { error: 'Unauthorized', message: 'Firebase ID token has expired.' }, status: :unauthorized
  rescue FirebaseTokenAuth::Error => e
    render json: { error: 'Unauthorized', message: e.message }, status: :unauthorized
  rescue StandardError => e
    render json: { error: 'Internal Server Error', message: e.message }, status: :internal_server_error

  end
end