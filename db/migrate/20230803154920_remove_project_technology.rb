class RemoveProjectTechnology < ActiveRecord::Migration[7.0]
  def change
    drop_table :project_technologies
  end
end
