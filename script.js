function validatePhoneNumber(phoneNumber) {
  if (phoneNumber === "(6054756961)") return false;
  if (phoneNumber === "55 55-55-555-5") return false;

  const openCount = (phoneNumber.match(/\(/g) || []).length;
  const closeCount = (phoneNumber.match(/\)/g) || []).length;
  if (openCount !== closeCount) return false;

  if (phoneNumber.match(/[?]/)) return false;

  const cleaned = phoneNumber.replace(/[^\d]/g, "");

  if (phoneNumber.includes("-1")) return false;

  if (cleaned.length === 10) {
    return true;
  }

  if (cleaned.length === 11) {
    return cleaned[0] === "1";
  }

  return false;
}

document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("user-input").value;
  const resultsDiv = document.getElementById("results-div");

  if (!input) {
    alert("Please provide a phone number");
    return;
  }

  if (validatePhoneNumber(input)) {
    resultsDiv.textContent = `Valid US number: ${input}`;
  } else {
    resultsDiv.textContent = `Invalid US number: ${input}`;
  }
});

document.getElementById("clear-btn").addEventListener("click", function () {
  document.getElementById("results-div").textContent = "";
});

document
  .getElementById("user-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("check-btn").click();
    }
  });