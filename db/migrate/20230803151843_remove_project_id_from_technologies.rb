class RemoveProjectIdFromTechnologies < ActiveRecord::Migration[7.0]
  def change
    remove_column :technologies, :project_id
  end
end
