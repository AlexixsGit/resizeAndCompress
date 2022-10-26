const uploadBox = document.getElementById("uploadBox"),
    fileInput = uploadBox.querySelector("input");

uploadBox.addEventListener("click", () => fileInput.click());