CREATE TABLE vdayvotes(
  id  SERIAL PRIMARY NOT NULL,
  name VARCHAR(50) NOT NULL,
  vote VARCHAR(100) NOT NULL
);

INSERT INTO vdayvotes( name, vote )
VALUES ( 'Test', 'Some Shit' );