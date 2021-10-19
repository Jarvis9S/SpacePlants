CREATE TABLE planttable(
    id SERIAL PRIMARY KEY,
    collectdate TIMESTAMP NOT NULL,
    nickname VARCHAR(64),
    "travelId" INTEGER,
    FOREIGN KEY ("travelId") REFERENCES traveltable(id)
);