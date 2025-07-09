import application.repo.repoClient as re
from flask import jsonify
def getAllClients():
    clients = re.getAllClients()

    data = [
        {
            'id' : row[0],
            'name' : row[1],
            'last_name' : row[2],
            'curp' : row[3],
            'address' : row[4],
            'birth_date' : row[5]
        } for row in clients
    ]

    return data


print(getAllClients())