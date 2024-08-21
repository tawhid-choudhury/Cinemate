# frozen_string_literal: true

class Users::PasswordsController < Devise::PasswordsController
  def create
    self.resource = resource_class.send_reset_password_instructions(resource_params)
    yield resource if block_given?

    if successfully_sent?(resource)
      render json: {
        code: 200,
        message: "You will receive an email with instructions on how to reset your password in a few minutes."
      }, status: :ok
    else
      render json: {
        code: 404,
        error: "Email not found"
      }, status: :not_found
    end
  end

  def update
    self.resource = resource_class.reset_password_by_token(resource_params)
    yield resource if block_given?

    if resource.errors.empty?
      resource.unlock_access! if unlockable?(resource)
      render json: { message: "Your password has been changed successfully." }, status: :ok
    else
      render json: { error: resource.errors.full_messages.join(", ") }, status: :unprocessable_entity
    end
  end
end
