from flask import Flask, jsonify, request
from flask_cors import CORS
from extensions import db 
from models import Run

app = Flask(__name__)
CORS(app)

# Configure PostgreSQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Pumpernickel7!!@localhost:5433/marathon_tracker'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db.init_app(app)

@app.route('/')
def home():
    return jsonify({"message": "Welcome to the Marathon Tracker API!"})

@app.route('/runs', methods=['POST'])
def add_run():
    data = request.json
    new_run = Run(
        date=data['date'],
        distance=data['distance'],
        time=data['time'],
        pace=data['pace']
    )
    db.session.add(new_run)
    db.session.commit()
    return jsonify({"message": "Run added successfully!"}), 201

@app.route('/runs', methods=['GET'])
def get_runs():
    runs = Run.query.all()
    runs_list = [
        {
            "id": run.id,
            "date": run.date.strftime('%Y-%m-%d'),
            "distance": run.distance,
            "time": run.time,
            "pace": run.pace
        }
        for run in runs
    ]
    return jsonify(runs_list), 200

if __name__ == '__main__':
    app.run(debug=True)