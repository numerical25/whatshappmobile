import { API_KEY, ANOTHER_CONFIG } from 'react-native-dotenv'
import { WebBrowser, Constants } from 'expo';

var ApiService = {  

  getPlatform: function() {
    return API_KEY
  },

  getVenues: function() {
    fetch('http://10.0.2.2:8000/api/query?resource=venue')
    .then((response) => response.json())
  }

};

export { ApiService as default };