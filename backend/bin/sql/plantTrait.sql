CREATE TABLE plantTrait(
    "traitId" INTEGER,
    "plantId" INTEGER,
    FOREIGN KEY ("traitId") REFERENCES traittable(id),
    FOREIGN KEY ("plantId") REFERENCES planttable(id)
);