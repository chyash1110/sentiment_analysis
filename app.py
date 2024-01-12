from flask import Flask, render_template, request, jsonify
from twitter_sentiment import predict_tweet, freqs, theta

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        tweet = request.form.get('tweet')
        prediction = predict_tweet(tweet, freqs, theta)
        sentiment = "Positive" if prediction > 0.5 else "Negative"
        return jsonify({'sentiment': sentiment})
    except Exception as e:
        print(f"Error predicting sentiment: {e}")
        return jsonify({'sentiment': 'Error'})

if __name__ == '__main__':
    app.run(debug=True)
