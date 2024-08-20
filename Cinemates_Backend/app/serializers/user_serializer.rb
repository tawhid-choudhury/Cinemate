class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :first_name, :last_name, :remember_created_at
end
