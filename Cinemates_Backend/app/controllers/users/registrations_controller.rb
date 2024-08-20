class Users::RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    build_resource(sign_up_params)

    resource.save
    yield resource if block_given?
    if resource.persisted?
      if resource.active_for_authentication?
        # Remove the call to sign_in(resource_name, resource)
        render json: {
          status: { code: 200, message: 'Signed up successfully.' },
        }
      else
        expire_data_after_sign_in!
        render json: {
          status: { code: 200, message: 'Signed up successfully. Please confirm your email.' },
        }
      end
    else
      clean_up_passwords resource
      set_minimum_password_length
      render json: {
        status: { code: 422, message: "User couldn't be created successfully. #{resource.errors.full_messages.to_sentence}" }
      }, status: :unprocessable_entity
    end
  end

  def destroy
    if current_user.destroy
      render json: {
        status: { code: 200, message: 'User deleted successfully.' }
      }
    else
      render json: {
        status: { code: 422, message: "User couldn't be deleted successfully." }
      }, status: :unprocessable_entity
    end
  end

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