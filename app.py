from flask import Flask, render_template, request, redirect, make_response
import sqlite3

app = Flask(__name__)

def init_db():
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        username TEXT NOT NULL,
                        password TEXT NOT NULL)''')
    cursor.execute('INSERT INTO users (username, password) VALUES (?, ?)', ('admin', 'Flag{063a5bda0b5a2a5d7b700d989f73902b}'))
    conn.commit()
    conn.close()

def check_user(cookie_value):
    conn = sqlite3.connect('database.db')
    cursor = conn.cursor()
    query = f"SELECT * FROM users WHERE username = '{cookie_value}'"
    cursor.execute(query)
    result = cursor.fetchone()
    conn.close()
    return result

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        resp = make_response(redirect('/welcome'))
        resp.set_cookie('auth', username)
        return resp
    return render_template('login.html')

@app.route('/welcome')
def welcome():
    auth_cookie = request.cookies.get('auth')
    
    if auth_cookie:
        user = check_user(auth_cookie)
        if user:
            return f"<h3>Welcome, {auth_cookie}! You've logged in successfully.</h3>"
        else:
            return "<h3>Invalid login attempt.</h3>"
    else:
        return redirect('/login')

if __name__ == '__main__':
    init_db()
    app.run(debug=True)
