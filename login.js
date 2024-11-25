// Initialize the intl-tel-input plugin
var input = document.querySelector("#phone");

var iti = intlTelInput(input, {
    // Automatically detect the country based on the user's IP
    initialCountry: "auto",  // This allows for auto-detection based on IP
    geoIpLookup: function(callback) {
        // Use ipinfo.io to fetch the user's country (replace with your actual token)
        fetch('https://ipinfo.io/json?token=YOUR_API_TOKEN')  // Replace YOUR_API_TOKEN with your ipinfo.io token
            .then(response => response.json())
            .then(data => {
                var countryCode = (data && data.country) ? data.country : "us";  // Default to 'us' if lookup fails
                callback(countryCode);  // Pass the country code to the callback
            })
            .catch(() => {
                callback("us");  // Fallback to 'us' if there's an error
            });
    },
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"  // This is the utility script for formatting
});
