require 'cuba'
require 'safe_yaml'
require 'mysql2'
require 'json'
	
Cuba.define do	
  on get do
    on "dataExport" do
      client = Mysql2::Client.new(YAML.load(File.open("database.yml"), :safe => false))
      users = client.query("SELECT first_name, last_name, email, role FROM users", :cast => false).map { | user | user }

      res.headers["Content-Type"] = "application/json; charset=utf-8"
      res.write users.to_json
    end
  end
end
	
run Cuba
