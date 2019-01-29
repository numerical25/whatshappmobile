import { IOS_END_POINT, ANDROID_END_POINT } from 'react-native-dotenv'
import {Platform} from 'react-native';
import axios from 'axios';

var ApiService = { 
  fakeMarkers: [ 
    {
      id:1,
      title: "Home",
      latitude: 39.9547861,
      longitude: -82.8121191,
      latlng: {
        latitude: 39.9547861,
        longitude: -82.8121191,
      },
      subtitle: '1234 Foo Drive',
      description: "This is a Description"
    },
    {
      id:2,
      title: "The Derby East",
      latitude: 39.94244000,
      longitude: -82.82895000,
      latlng: {
        latitude: 39.94244000,
        longitude: -82.82895000,
      },
      subtitle: '1234 Foo Drive',
      description: "This is a Description"
    }
  ],
  getEndPoint: function() {
    if(Platform.OS === 'ios') {
      return IOS_END_POINT
    } else if(Platform.OS === 'android') {
      return ANDROID_END_POINT
    }
  },

  getFakeMarkers: function() {
    return this.fakeMarkers
  },

  getVenues: function(callBack) { 
    if(!callBack) {
      console.error("No Callback Provided");
      return
    }
    var query = this.getEndPoint()+'query?resource=venue';
    console.log("Fetching "+query)
    axios.get(query)
    .then(response => {
      callBack(response.data);
    })
  },
  getTrendingEvents: function(coords, callBack) { 
    var query = this.getEndPoint()+'query?resource=venue&action=get-trending-events';
    query += "&latitude="+coords.latitude+"&longitude="+coords.longitude
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
    axios.get(query)
    .then(response => {
      callBack(response.data);
    })
    .catch(reason => {
      console.log(reason)
      var r = reason; 
    }) 
  },
  saveSnap:function(data) {
    const type = 'video/${data.codec}';
    const form = new FormData();
    form.append("attachment_file", {
        name: "mobile-video-upload",
        type,
        uri
    });
    form.append("attachment_file", {
      name: "mobile-video-upload",
      type,
      uri
    });
    form.append('user_id',1);
    form.append('event_id',1);
    form.append('message','Recorded Data');
    var query = this.getEndPoint()+'query?resource=comment';
    query += "&XDEBUG_SESSION_START=1";
    axios.post(query,form).then( response => {
      var r = response;
    })
  }
};

export { ApiService as default };