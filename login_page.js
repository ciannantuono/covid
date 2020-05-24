
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyC05256MINRTc1KNrrwFMjHoaPEoym_OG8",
    authDomain: "artech-covid-form.firebaseapp.com",
    databaseURL: "https://artech-covid-form.firebaseio.com",
    projectId: "artech-covid-form",
    storageBucket: "artech-covid-form.appspot.com",
    messagingSenderId: "862428008696",
    appId: "1:862428008696:web:45e9396ff569f23da3eb0d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signIn(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

  }

  //Take user to a different page
  auth.onAuthStateChanged(function(user){
    if(user){
      // is signed in
      var email = user.email;
      window.location.href = 'covid_form.html';

      window.onunload = function () {
          auth.signOut();
      };


    }else{
      //no user is signed in
    }

  });
