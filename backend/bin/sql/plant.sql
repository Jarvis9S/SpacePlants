CREATE TABLE planttable(
    id SERIAL PRIMARY KEY,
    birthdate TIMESTAMP NOT NULL,
    nickname VARCHAR(64),
    "generationId" INTEGER,
    "travelId" INTEGER,
    FOREIGN KEY ("travelId") REFERENCES traveltable(id)
);