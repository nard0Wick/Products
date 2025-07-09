from flask import Flask, jsonify
from flask_cors import CORS
import serviceClient as sc

app = Flask(__name__)
CORS(app) #Enable CORS for cross-origin requests from React

@app.route('/clients')
def get_data():
    #return jsonify({"message": "Hello from Flask!"})
    clients = sc.getAllClients()
    #print(clients)
    return jsonify ({"clients": clients})

if __name__ == '__main__':
    app.run(debug=True)
