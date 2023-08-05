var mobileNoField = document.getElementById("mobileNo");

// constants
const waBaseUrl = "https://wa.me/";
const telegramBaseUrl = "https://t.me/";
const mobilePrefixIn = "+91";
const mobileRegex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
const mobileRegexWithoutCountryCode = /^[6-9]\d{9}$/;

function openWhatsApp() {
    // console.log(mobileNoField.value);
    var mobileNo = mobileNoField.value;
    var resultUrl = waBaseUrl;
    // console.log("length", mobileNo.length);
    if(mobileNo.includes("+") && mobileRegex.test(mobileNo)) {
        resultUrl += mobileNo.replace(" ", "").replace("-", "");
    } else if(mobileNo.length === 10 && mobileRegexWithoutCountryCode.test(mobileNo)) {
        resultUrl += (mobilePrefixIn + mobileNo);
    } else {
        alert("Please enter a valid mobile number");
        return;
    }
    // console.log(resultUrl);
    redirect(resultUrl);
}

function openTelegram() {
    // console.log(mobileNoField.value);
    var mobileNo = mobileNoField.value;
    var resultUrl = telegramBaseUrl;
    // console.log("length", mobileNo.length);
    if(mobileNo.includes("+") && mobileRegex.test(mobileNo)) {
        resultUrl += mobileNo.replace(" ", "").replace("-", "");
    } else if(mobileNo.length === 10 && mobileRegexWithoutCountryCode.test(mobileNo)) {
        resultUrl += (mobilePrefixIn + mobileNo);
    } else {
        alert("Please enter a valid mobile number");
        return;
    }
    // console.log(resultUrl);
    redirect(resultUrl);
}

function redirect(toUrl) {
    // console.log(toUrl);
    window.open(toUrl, "_blank");
}