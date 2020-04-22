CREATE DATABASE lembretes;

CREATE TABLE lembrete(
    id SERIAL PRIMARY KEY,
    titulo VARCHAR (80),
    conteudo VARCHAR (200),
    dataCriacao TIMESTAMP,
    dataLembrete TIMESTAMP,
    estado VARCHAR (20)
);