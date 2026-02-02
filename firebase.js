import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJie-ZFkaSjxAck7ohpegafgTyy6e-2AY",
  authDomain: "sunilesports-ff-4f4ad.firebaseapp.com",
  projectId: "sunilesports-ff-4f4ad",
  storageBucket: "sunilesports-ff-4f4ad.firebasestorage.app",
  messagingSenderId: "929173626716",
  appId: "1:929173626716:web:15b971ba5ab9197da26b99"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.recaptchaVerifier = new RecaptchaVerifier(
  "recaptcha-container",
  { size: "normal" },
  auth
);

window.sendOTP = function () {
  const phone = document.getElementById("phone").value;

  signInWithPhoneNumber(auth, phone, window.recaptchaVerifier)
    .then((confirmationResult) => {
      window.confirmationResult = confirmationResult;
      alert("OTP sent");
    })
    .catch((e) => alert(e.message));
};

window.verifyOTP = function () {
  const otp = document.getElementById("otp").value;

  window.confirmationResult.confirm(otp)
    .then((result) => {
      localStorage.setItem("user", JSON.stringify({
        phone: result.user.phoneNumber
      }));
      window.location.href = "dashboard.html";
    })
    .catch(() => alert("Wrong OTP"));
};
