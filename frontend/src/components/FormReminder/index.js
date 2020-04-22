import React, { useState } from 'react';
import DatePicker from  'react-datepicker';
import api from '../../service/api'

import 'react-datepicker/dist/react-datepicker.css';



const FormReminder = () => {
    
    const [ title, setTitle ] = useState();
    const [reminderDate, setReminderDate] = useState(new Date());
    const [ content, setContent ] = useState();

    async function saveReminder(title, reminderDate, content){
        const values = {
            title: title,
            reminderDate: reminderDate,
            content: content,
        }
        const response = await api.post('/reminder', values);
        setTitle('');
        setReminderDate(new Date());
        setContent('');
        
    }

    const handleReminder = e => {
        e.preventDefault();
        saveReminder(title, reminderDate, content);
    }

    
    return(
        <div className="container">
            <div className="row">
                <div className="col-10 text-left my-4">
                    <h5 className="display-5">Adicionar Lembrete</h5>
                </div>
            </div>

            <div className="row justify-content-left mb-1">
                <div className="border">
                    <form onSubmit={handleReminder}>
                        <div className="form-row mt-3 ml-3">
                            <div className="form-group col-sm-3">
                                <label for="title">Título</label>
                                <input type="text" className="form-control" id="title" placeholder="Titulo" 
                                value={title}
                                onChange={name => setTitle(name.target.value)} ></input>
                            </div>

                            <div className="form-group col-sm-3 ">
                                <label for="data_reminder">Data do Lembrete</label>
                                <DatePicker placeholderText="Clique para selecionar a data..."  
                                selected={reminderDate}
                                dateFormat="dd/MM/yyyy"
                                onChange={date => setReminderDate(date)}/>
                            </div>

                            <div className="form-group col-sm-4 ml-3">
                                <label for="content">Conteúdo</label>
                                <textarea type="textarea" className="form-control" id="content" placeholder="Conteúdo" 
                                value={content}
                                onChange={value => setContent(value.target.value)}></textarea>
                            </div>

                            <div className="col mt-5 ">
                                <button type="submit" className="btn btn-primary">Salvar</button>
                            </div>

                        </div>
                        

                    </form>
                </div>
            </div>

        </div>
    )
}

export default FormReminder;