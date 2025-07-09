from db_settings import getConnection as gc

def getAllClients():
    conn = gc()
    cursor = conn.cursor()
    cursor.execute ("select * from clients;")
    clients = cursor.fetchall()
    cursor.close()
    conn.close()
    return clients

def addClient(name, last_name, curp, address, birth_date):
    conn = gc()
    cursor = conn.cursor()
    #Add a client
    cursor.execute(f"""INSERT INTO clients (name, last_name, curp, address, birth_date)
                    VALUES ('{name}', '{last_name}', '{curp}', '{address}', '{birth_date}')""")
    conn.commit()
    cursor.close()
    conn.close()

def updateClient(id, name, last_name, curp, address, birth_date):
    conn = gc()
    cursor = conn.cursor()
    cursor.execute(f"""UPDATE clients 
                        SET name='{name}', last_name='{last_name}', curp='{curp}', address='{address}', birth_date='{birth_date}'
                        WHERE id={id}
                    """)
    conn.commit()
    cursor.close()
    conn.close()

def dropClient(id):
    conn = gc()
    cursor = conn.cursor()
    cursor.execute(f"""DELETE FROM clients 
                        WHERE id={id}
                    """)
    conn.commit()
    cursor.close()
    conn.close()

#updateClient(1, 'Pedro', 'Prieto', 'pp...', '...', '07/08/25')
dropClient(2)
print(getAllClients())
