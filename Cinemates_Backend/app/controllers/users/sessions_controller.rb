class Users::SessionsController < Devise::SessionsController
  respond_to :json

  def create
    if params[:user][:email].blank?
      render json: {
        status: {
          code: 422,
          message: 'Email cannot be blank.'
        }
      }, status: :unprocessable_entity
      return
    end

    self.resource = warden.authenticate!(auth_options)
    if resource
      respond_with(resource, _opt = {})
    else
      render json: {
        status: {
          code: 401,
          message: 'Invalid email or password.'
        }
      }, status: :unauthorized
    end
  end

  private

  def respond_with(resource, _opt = {})
    @token = request.env['warden-jwt_auth.token']
    headers['Authorization'] = @token

    render json: {
      status: {
        code: 200, message: 'Logged in successfully.',
        token: @token,
        data: {
          user: UserSerializer.new(resource).serializable_hash[:data][:attributes]
        }
      }
    }, status: :ok
  end

  def respond_to_on_destroy
    if request.headers['Authorization'].present?
      jwt_payload = JWT.decode(request.headers['Authorization'].split.last,
                               ENV["DEVISE_JWT_SECRET_KEY"]).first

      current_user = User.find(jwt_payload['sub'])
    end

    if current_user
      render json: {
        status: 200,
        message: 'Logged out successfully.'
      }, status: :ok
    else
      render json: {
        status: 401,
        message: "Couldn't find an active session."
      }, status: :unauthorized
    end
  end
end