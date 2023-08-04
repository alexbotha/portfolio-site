class TechnologySerializer < ActiveModel::Serializer
  attributes :id, :name, :project_title

  def project_title
    object.projects.map(&:name)
  end

end
