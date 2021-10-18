CREATE TABLE planttable(
    id SERIAL PRIMARY KEY,
    birthdate TIMESTAMP NOT NULL,
    nickname VARCHAR(64),
    "travelId" INTEGER,
    FOREIGN KEY ("travelId") REFERENCES traveltable(id)
);