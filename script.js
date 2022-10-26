const uploadBox = document.getElementById("uploadBox"),
    previewImg = uploadBox.querySelector("img"),
    heightInput = document.querySelector(".height input"),
    widthInput = document.querySelector(".width input"),
    fileInput = uploadBox.querySelector("input");

const loadFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {//once img is loaded
        heightInput.value = previewImg.naturalHeight;
        widthInput.value = previewImg.naturalWidth;
        document.querySelector(".wrapper").classList.add("active");
    });
    console.log(file);
}

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());