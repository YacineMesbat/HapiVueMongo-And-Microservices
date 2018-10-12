require 'cuba'
require 'safe_yaml'
require 'mysql2'
require 'json'
require 'socket'
	
Cuba.define do	
  on get do
    on "dataExport" do
      mysql = YAML.load(File.open("database.yml"), :safe => false)
      client = Mysql2::Client.new(
        :host => mysql[:host],
        :database => mysql[:database],
        :username => mysql[:user],
        :password => mysql[:password]
      )

      res.headers["Content-Type"] = "application/json; charset=utf-8"
      res.write client.query("SELECT * FROM users", :cast => false).to_json
    end
  end
end
	
run Cuba
