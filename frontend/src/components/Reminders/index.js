import React, { useState, useEffect } from 'react';
import api from '../../service/api'
import Cards from '../Reminders/Cards'
import '../Reminders/style.css'

const Reminders = () => {
    const [ reminders, setReminders ] = useState([]);
    const [ finished, setFinished ] = useState([]);

    useEffect(() => {
        async function loadReminders(){
        const response = await api.get('/reminder/active');
        setReminders(response.data);
        }
        loadReminders();
    })

    useEffect(() => {
        async function loadFinished(){
        const response = await api.get('/reminder/inactive');
        setFinished(response.data);  
        }
        loadFinished();
    }, [finished])

    return (
            <div className="container">
                <div className="row">
                    <div className="col-10 text-left my-2">
                        <h5 className="display-5">Lembretes Pendentes</h5>
                    </div>
                </div>

                <div className="scrollmenu">
                    <div className="d-flex flex-row flex-nowrap">
                        {reminders.length === 0 ? <div><h6>Não existem lembretes pendentes</h6> </div> :
                        reminders.map(reminder =>(
                            <Cards reminder={reminder} />
                        ))}
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 text-left my-2">
                        <h5 className="display-5">Lembretes Finalizados</h5>
                    </div>
                </div>

                <div className="scrollmenu">
                    <div className="d-flex flex-row flex-nowrap">

                        {finished.length === 0 ? <div><h6>Não existem lembretes finalizados</h6> </div> : 
                        finished.map(reminder =>(
                            <Cards reminder={reminder} />
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default Reminders;