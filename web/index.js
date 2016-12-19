/**
 * Created by fokion on 19/12/16.
 */
function fileSelected() {
    var file = document.getElementById('fileToUpload').files[0];
    if (file) {
        var fileSize = 0;
        if (file.size > 1024 * 1024)
            fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
        else
            fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
        document.getElementById('fileName').innerHTML = 'Name: ' + file.name;
        document.getElementById('fileSize').innerHTML = 'Size: ' + fileSize;
        document.getElementById('fileType').innerHTML = 'Type: ' + file.type;
    }
}
function uploadSelected(){
    var file = document.getElementById('fileToUpload').files[0];
    var req = new XMLHttpRequest();
    var formData = new FormData();
    formData.append("file", file);
    req.onreadystatechange = function(){
        if (req.readyState === XMLHttpRequest.DONE) {
            if (req.status === 200) {
                console.log(req.responseText);
            } else {
                alert('There was a problem with the request.');
            }
        }
    };
    req.open('POST', "http://localhost:8080/upload");
    req.send(formData);
}
