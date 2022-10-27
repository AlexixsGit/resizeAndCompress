const uploadBox = document.getElementById("uploadBox"),
    previewImg = uploadBox.querySelector("img"),
    heightInput = document.querySelector(".height input"),
    widthInput = document.querySelector(".width input"),
    rationInput = document.querySelector(".ratio input"),
    downloadBtn = document.querySelector(".download-btn"),
    qualityInput = document.querySelector(".quality input"),
    fileInput = uploadBox.querySelector("input");

const loadFile = (e) => {
    const file = e.target.files[0];

    if (!file) return;
    previewImg.src = URL.createObjectURL(file);
    previewImg.addEventListener("load", () => {//once img is loaded
        heightInput.value = previewImg.naturalHeight;
        widthInput.value = previewImg.naturalWidth;
        ogImageRatio = previewImg.naturalWidth / previewImg.naturalHeight;
        document.querySelector(".wrapper").classList.add("active");
    });
}
widthInput.addEventListener("keyup", () => {
    const height = rationInput.checked ? widthInput.value / ogImageRatio : heightInput.value;
    heightInput.value = Math.floor(height);


})

heightInput.addEventListener("keyup", () => {
    const width = rationInput.checked ? heightInput.value * ogImageRatio : widthInput.value;
    widthInput.value = Math.floor(width);
})

const resizeAndDownload = () => {
    const a = document.createElement("a");
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const imgQuality = qualityInput.checked ? 0.7 : 1.0;

    canvas.width = widthInput.value;
    canvas.height = heightInput.value;

    ctx.drawImage(previewImg, 0, 0, canvas.width, canvas.height);

    a.href = canvas.toDataURL("image/jpeg", imgQuality);
    a.download = new Date().getTime();
    a.click();
}

downloadBtn.addEventListener("click", resizeAndDownload);

fileInput.addEventListener("change", loadFile);
uploadBox.addEventListener("click", () => fileInput.click());