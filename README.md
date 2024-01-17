# Twitter Sentiment Analyzer

Twitter Sentiment Analyzer is a simple web application that predicts the sentiment (positive or negative) of a given tweet using a logistic regression model trained on Twitter data.

## Here's a brief summary of the project:

### Data Loading and Splitting
- Loaded Twitter dataset containing positive and negative tweets.
- Split the dataset into 80% training and 20% test sets.

### Text Preprocessing
- Removed retweet tags, hyperlinks, and hashtags from tweets.
- Tokenized and lowercased the text.
- Removed stopwords and punctuation.
- Applied stemming to reduce words to their root form.

### Building Frequencies:
- Built a vocabulary dictionary from the training data to store the frequency of words in positive and negative tweets.

### Feature Extraction:
- Extracted features from the frequency dictionary for each tweet.
- Features include a bias term, the sum of positive frequencies, and the sum of negative frequencies.

### Logistic Regression Model Training
- Implemented gradient descent to minimize the cost function during training.
- Trained the logistic regression model using the training features.

### Model Testing
- Created a function to predict sentiment for a given tweet.
- Evaluated the model on the test set and calculated the accuracy.

### Web Application using Flask
- Developed a simple web application using Flask for user interaction.
- Integrated the trained model to predict sentiment based on user-input tweets.

### HTML and CSS for UI
- Created a basic user interface using HTML and CSS.
- Styled the application for a better user experience.

### JavaScript for Asynchronous Requests
- Used JavaScript to handle form submission and make asynchronous requests to the Flask server.
- Updated the UI with predicted sentiment.


## Installation

1. Clone the repository
   
   git clone https://github.com/chyash1110/twitter-sentiment-analyzer.git

2. Change into the project directory

   cd twitter-sentiment-analyzer

3. Install dependencies

   pip install -r requirements.txt

## Usage

View the application here: https://1yash.pythonanywhere.com/

Run the Flask application:

1. python app.py
2. Open your web browser and navigate to http://localhost:5000.
3. Enter a tweet in the provided form and click "Predict Sentiment."
4. View the predicted sentiment.

## Dependencies
- Flask
- NumPy
- NLTK

## Contributing

#### If you'd like to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Clone your fork of the repository locally.
3. Create a new branch for your changes.
4. Make changes and commit them to your branch.
5. Push your changes to your fork on GitHub.
6. Open a pull request to the main repository.
