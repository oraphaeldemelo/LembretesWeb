import React from 'react';
import api from '../../../service/api'
import EditReminder from '../EditReminder'

import '../Cards/style.css'


const Cards = ({reminder}) => {

    async function finishReminder(reminder) {
        const values = {
            id: reminder.id
        };        
        await api.post('/reminder/done', values);
    }

    async function deleteReminder(reminder) {
        await api.delete(`/reminder/${reminder.id}`);
    }

    function editButton(reminder){
        <div><EditReminder/></div>
    }

    return (
        <div className="col" key={reminder.id}>
            <div className="card" >
                <div className="card-body text-wrap">
                    <h5 className="card-title">{reminder.titulo}</h5>
                    <p className="card-text overflow-auto">{reminder.conteudo}</p>
                </div>
                <div className="list-group-item">
                    Data do Lembrete: {reminder.datalembrete}
                </div>
                <div className="list-group-item">
                    {reminder.estado === 'ativo' ? 
                        <button type="button" onClick={() => finishReminder(reminder)} className="btn btn-success">Feito</button> 
                    : null }
                    {reminder.estado === 'ativo' ?
                    <Button></Button>
                        <button type="button" className="btn btn-info mr-1 ml-1" onClick={() => editButton(reminder)}>Editar</button> 
                    : null}
                   
                    <button type="button" onClick={() => deleteReminder(reminder)} className="btn btn-danger">Excluir</button>
                </div>
            </div>
        </div>
    )

}

export default Cards;