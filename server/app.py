from flask import Flask
from flask_socketio import SocketIO
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
socketIo = SocketIO(app, cors_allowed_origins='*')

app.debug = True
app.host = 'localhost'

@socketIo.on("connect")
def handle_join():
    print("Someone connected")

if __name__ == '__main__':
    socketIo.run(app)