document.addEventListener('DOMContentLoaded', function() {
        var form = document.getElementById('sentimentForm');
        var predictionHeader = document.getElementById('prediction');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var tweetInput = form.querySelector('[name="tweet"]').value;
    
            getSentiment(tweetInput)
                .then(function(sentiment) {
                    predictionHeader.textContent = 'Predicted Sentiment: ' + sentiment;
                    predictionHeader.classList.remove('hidden');
                })
                .catch(function(error) {
                    console.error('Error getting sentiment:', error);
                    predictionHeader.textContent = 'Error predicting sentiment';
                    predictionHeader.classList.remove('hidden');
                });
        });
    
        function getSentiment(tweet) {
            return new Promise(function(resolve, reject) {
                fetch('/predict', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: 'tweet=' + encodeURIComponent(tweet),
                })
                .then(response => response.json())
                .then(data => resolve(data.sentiment))
                .catch(error => reject(error));
            });
        }
    });
    