import React, { useState, useEffect } from 'react';

function ClientForm({ onSubmit, editingClient }){
    const [client, setClient] = useState({
        'name':'',
        'last_name':'',
        'curp':'',
        'address':'',
        'birth_date':''
    });

    useEffect(() => {
        if (editingClient) {
            setClient(editingClient);
        }
    }, [editingClient]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ client });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nombre</label>
                <input 
                    type='text' 
                    value={client.name} 
                    onChange={(e) => setClient({...client, name:e.target.value})}
                />
            </div>
            <div>
                <label>Apellidos</label>
                <input 
                    type='text' 
                    value={client.last_name} 
                    onChange={(e) => setClient({...client, last_name:e.target.value})}
                />
            </div>
            <div>
                <label>Curp</label>
                <input 
                    type='text' 
                    value={client.curp} 
                    onChange={(e) => setClient({...client, curp:e.target.value})}
                />
            </div>
            <div>
                <label>Dirección</label>
                <input 
                    type='text' 
                    value={client.address} 
                    onChange={(e) => setClient({...client, address:e.target.value})}
                />
            </div>
            <div>
                <label>Año de nacimiento</label>
                <input 
                    type='text' 
                    value={client.birth_date} 
                    onChange={(e) => setClient({...client, birth_date:e.target.value})}
                />
            </div>
            <button type='submit'>{ editingClient ? 'Actualizar' : 'Añadir'}</button>
        </form>
    );
}

export default ClientForm;