class Technology < ApplicationRecord
  has_many :recreate_project_technologies
  has_many :projects, through: :recreate_project_technologies
end
