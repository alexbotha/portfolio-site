class CreateRecreateProjectTechnologies < ActiveRecord::Migration[7.0]
  def up
    create_table :recreate_project_technologies do |t|
      t.integer :project_id
      t.integer :technology_id

      t.timestamps
    end
  end
end
