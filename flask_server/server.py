from flask import Flask, jsonify, request
from flask_cors import CORS

import logging
logging.basicConfig(level=logging.DEBUG)


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}}) #TODO: see the warning located here to determine if you do not want to allow route requests globally (https://testdriven.io/blog/developing-a-single-page-app-with-flask-and-vuejs/)


# sanity check route
@app.route('/logIn', methods=['POST'])
def log_in():
    #return request.json
    data = request.json
    logging.debug(data["username"])
    return data["username"][::-1]


if __name__ == '__main__':
    app.run()
