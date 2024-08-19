class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  private

  def respond_with(resource, _opts = {})
    if resource.persisted?
      @token = request.env['warden-jwt_auth.token']
      headers['Authorization'] = @token

      render json: {
        status: { code: 200, message: 'Signed up successfully.',
                  token: @token,
                  data: UserSerializer.new(resource).serializable_hash[:data][:attributes] }
      }
    else
      render json: {
        status: {
          code: 422,
          message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}" }
      }, status: :unprocessable_entity
    end
  end

  # Override the sign_up_params method to permit password_confirmation
  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation,
                                 :agree_terms_service)
  end
end