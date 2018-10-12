require 'cuba'
require 'safe_yaml'
require 'mysql2'
require "csv"
	
Cuba.define do	
  on get do
    on "csvExport" do
      client = Mysql2::Client.new(YAML.load(File.open("database.yml"), :safe => false))
      users = client.query("SELECT first_name, last_name, email, role FROM users", :cast => true)

      csv = CSV.generate do |csv|
        csv << ["first_name", "last_name", "email", "role"]
        users.each { |user| csv << [user['first_name'], user['last_name'], user['email'], user['role']] }
      end

      res.headers["Content-Type"] = "text/csv; charset=utf-8"
      res.write csv
    end
  end
end
	
run Cuba
