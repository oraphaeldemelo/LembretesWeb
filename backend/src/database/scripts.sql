CREATE DATABASE lembretes;

CREATE TABLE lembrete(
    id SERIAL PRIMARY KEY,
    usuario VARCHAR (40),
    assunto VARCHAR (200),
    dataCriacao TIMESTAMP,
    dataLembrete TIMESTAMP,
    estado VARCHAR (20)
);