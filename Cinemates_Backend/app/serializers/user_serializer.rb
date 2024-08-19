class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :first_name, :last_name, :created_at, :updated_at, :remember_created_at
end
