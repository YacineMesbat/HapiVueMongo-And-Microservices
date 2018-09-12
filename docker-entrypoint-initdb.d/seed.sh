#!/usr/bin/env bash
mongoimport -d reports -c crimes --type csv --file /docker-entrypoint-initdb.d/crime_incident_reports.datadump-2.csv --headerline