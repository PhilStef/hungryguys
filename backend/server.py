# app.py
from flask import Flask, jsonify
from flask_cors import CORS
from serveraccess import inputs
from flask import request

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

@app.route('/submit', methods=['POST'])
def submit_data():
    # Get JSON data from the request body
    data = request.get_json()

    # Process the data as needed (for example, just print it)
    print("Received data:", data)


    # You can perform operations with the data here, e.g., save it to a database

    # Send a response back to the React app
    response = {"message": "Data received successfully", "data": data}
    return jsonify(response)

@app.route('/api/data', methods=['GET'])
def get_data():
    # Some data you want to send
    data = {"message": "Hello from Flask!"}
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)