<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDd4rvmoAovhxQHr94OMe5oRCoIJZeF5JY",
    authDomain: "missaocumprida-1ea4f.firebaseapp.com",
    projectId: "missaocumprida-1ea4f",
    storageBucket: "missaocumprida-1ea4f.firebasestorage.app",
    messagingSenderId: "811739187214",
    appId: "1:811739187214:web:d1b952d7b51cd41a6c545f",
    measurementId: "G-HEYJRDYDSX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>
