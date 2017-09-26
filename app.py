from flask import Flask, session, redirect, url_for, escape, request, render_template,flash,send_from_directory
import os
app = Flask(__name__)


@app.route('/')
def userhome():
    return render_template("index.html")

@app.route('/projects')
def projects():
    return render_template("projects.html")

if __name__ == '__main__':
	app.run(debug=True)
