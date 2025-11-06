import mysql.connector

# Database connection configuration
db = mysql.connector.connect(
    host="localhost",
    user="Kim",
    password="kim@pogi202520",
    database="kimstore_db"
)

# Create cursor
cursor = db.cursor(dictionary=True)
