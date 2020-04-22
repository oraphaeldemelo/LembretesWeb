const db = require('../database/db');

const getReminder = async (req, res) => {
    try{
        const response = await db.query('SELECT * FROM lembrete');    
        res.status(200).json(response.rows);
    } catch(err) {
        console.log(err);
        res.status(500).send('Houve um erro ao listar lembretes');
    }
}

const newReminder = async (req, res) => {
    const { title, content, reminderDate } = req.body;
    try{        
        const response = await db.query(`
        INSERT INTO lembrete(titulo, conteudo, dataCriacao, dataLembrete, estado)
        VALUES ($1, $2, CURRENT_TIMESTAMP, $3, 'ativo') RETURNING *`,
        [title, content, reminderDate]);
        
        res.status(200).json(response.rows);    
    } catch ( err ) {
        console.log(err);
        
        res.status(500).send('Houve um erro ao adicionar lembrete');
    }
}

const updateReminder = async (req, res) => {
    const id = req.params.id;
    const { titulo, conteudo, estado } = req.body;

    try{
        const response = await db.query(`
            UPDATE lembrete set titulo = $1, conteudo = $2, estado = $3
            WHERE id = $4 RETURNING * `, [ titulo, conteudo, estado, id ]);

        res.status(200).json(response.rows);
    } catch(e){
        console.log(e);
        res.status(500).send('Houve um erro ao atualizar');
    }
}

const deleteReminder = async (req, res) => {
    const id = req.params.id;
    try{
        const response = await db.query(`
        DELETE FROM lembrete WHERE id = $1`, [id]);

        res.status(200).send('Lembrete removido com sucesso');
    } catch(e){
        console.log(e);
        res.send(500).send('Houve um erro ao excluir o lembrete');
    }

}

module.exports = {
    getReminder,
    newReminder,
    updateReminder,
    deleteReminder
}