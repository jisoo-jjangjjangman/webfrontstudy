
const inputs = document.querySelectorAll('.controls input');
const saveButton = document.getElementById("jsSave");
const uploadFile = document.getElementById("upImgFile")

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// 이미지 업로드기능 기능 

function uploadImgPreview() {
  let fileInfo = document.getElementById("upImgFile").files[0];
  let reader = new FileReader();

  reader.onload = function() {
    document.getElementById("thumbnailImg").src = reader.result;
    };

  if( fileInfo ) {
    reader.readAsDataURL( fileInfo );
    }
}

// 이미지 다운로드 기능 (미완성)

function SaveClick() {
  alert('앗! 아직 구현중입니다! ^ㅁ^')
  const link = 
  link.href = image;
  link.download = "potato";
  link.click();
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

if(uploadFile) {
    uploadFile.addEventListener("click", uploadImgPreview);
}
saveButton.addEventListener("click", SaveClick);
