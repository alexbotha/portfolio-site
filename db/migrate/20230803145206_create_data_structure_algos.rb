class CreateDataStructureAlgos < ActiveRecord::Migration[7.0]
  def change
    create_table :data_structure_algos do |t|
      t.string :dsa
      t.string :dsa_link
      t.text :description
      t.string :dsa_image
      t.string :difficulty

      t.timestamps
    end
  end
end
