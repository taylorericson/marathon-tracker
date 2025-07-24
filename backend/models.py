from extensions import db

class Run(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.Date, nullable=False)
    distance = db.Column(db.Float, nullable=False)  # Distance in miles
    time = db.Column(db.Float, nullable=False)  # Time in minutes
    pace = db.Column(db.Float, nullable=False)  # Pace in minutes per mile

    def __repr__(self):
        return f'<Run {self.id} - {self.date} - {self.distance}km - {self.time}min - {self.pace}min/km>'