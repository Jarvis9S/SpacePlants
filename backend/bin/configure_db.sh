#!/bin/bash

dropdb spaceplantsdb
createdb spaceplantsdb

echo "Configuring spaceplantsdb..."

psql -U node_user spaceplantsdb < ./bin/sql/travel.sql
psql -U node_user spaceplantsdb < ./bin/sql/plant.sql

echo "Spaceplantsdb has configured."
