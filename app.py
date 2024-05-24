import pickle
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Memuat model pickle saat aplikasi dimulai
with open('ai_vs_human_text', 'rb') as model_file:
    model = pickle.load(model_file)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')

@app.route('/classify', methods=['POST'])
def classify():
    dataku = request.json
    if 'text' in dataku:
        data = dataku['text']
        prediction = model.predict([data])
        hasil = "AI" if prediction == 1 else "HUMAN"
        return jsonify({'result': hasil})
    else:
        return jsonify({'error': 'No text provided'}), 400

if __name__ == '__main__':
    app.run(port=8000, debug=True)
