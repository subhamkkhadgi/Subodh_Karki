
        function showSurveyPopup() {
            document.querySelector('.popup').style.display = 'block';
            document.querySelector('.popup-overlay').style.display = 'block';
        }

        function submitSurvey() {
            document.querySelector('.popup').style.display = 'none';
            document.querySelector('.popup-results').style.display = 'block';
        }

        function closePopup() {
            document.querySelector('.popup-results').style.display = 'none';
            document.querySelector('.popup-overlay').style.display = 'none';
        }
