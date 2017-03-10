import datetime
import logging.config
import os
import uuid
import configparser
from flask import Flask, jsonify

configs_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'config')
logging.config.fileConfig(os.path.join(configs_path, 'logger.ini'))
logger = logging.getLogger('app')
config = configparser.ConfigParser()
config.read(os.path.join(configs_path, 'app.ini'))
app_id = uuid.uuid4()

app = Flask(__name__)
wsgi_app = app.wsgi_app


@app.route('/connect')
def connect():
    message = {'appId': str(app_id), 'message': 'Connected', 'time': datetime.datetime.utcnow().isoformat(),
               'version': config['general']['version']}
    response = jsonify(message)
    response.headers['Access-Control-Allow-Origin'] = '*'
    return response

if __name__ == '__main__':
    app.run('0.0.0.0', 8080)
