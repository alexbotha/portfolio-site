class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :github_url, :image, :details, :technologies

end
