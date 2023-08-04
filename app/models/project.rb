class Project < ApplicationRecord
  has_many :recreate_project_technologies
  has_many :technologies, through: :recreate_project_technologies
end
