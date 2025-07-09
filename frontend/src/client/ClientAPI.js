import React, { useState, useEffect} from 'react';
import axios from 'axios';
import ClientForm from './ClientForm';

function API(){
    const [clients, setClients] = useState([]);
    const [editingClient, setEditingClient] = useState(null);

    const API_URL = 'http://127.0.0.1:5000/clients';

    //Fetch all clients
    const fetchClients = async () => {
        try{
            const response = await axios.get(API_URL);
            setClients(Array.isArray(response.data.clients) && setClients(response.data.clients));
        }catch (err){
            console.log("Error while attempting to fetch clients: \n" + err);
        }
    }

    useEffect(() => {
        fetchClients();
    }, [])

    //create or update client
    const handleSubmit = async (clientData) => {
        try{
            if (editingClient) {
                const response = await axios.put(`${API_URL}/${editingClient.id}`, clientData);
                setClients
            }
        }
    }
}