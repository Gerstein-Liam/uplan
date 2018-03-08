<!--
- Copyright (c) 2013 Samsung Electronics Co., Ltd.   
- All rights reserved.   
-   
- Redistribution and use in source and binary forms, with or without   
- modification, are permitted provided that the following conditions are   
- met:   
-   
-     * Redistributions of source code must retain the above copyright   
-        notice, this list of conditions and the following disclaimer.  
-     * Redistributions in binary form must reproduce the above  
-        copyright notice, this list of conditions and the following disclaimer  
-        in the documentation and/or other materials provided with the  
-        distribution.  
-     * Neither the name of Google Inc. nor the names of its  
-       contributors may be used to endorse or promote products derived from  
-       this software without specific prior written permission.  
-  
- THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS  
- "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT  
- LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR  
- A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT  
- OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,  
- SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT  
- LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,  
- DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY  
- THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT  
- (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE  
- OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->

<!DOCTYPE html>
<html>
<head>
    <title>XHR1</title>
    <script>
        var client = new XMLHttpRequest();

        function upload() {
            var file = document.getElementById("uploadfile");

            //create new FormData instance to transfer as Form Type
            var formData = new FormData();
            // add the file intended to be upload to the created FormData instance
            formData.append("upload", file.files[0]);

            client.open("post", "/itrip_b/upload", true);
            client.setRequestHeader("Content-Type", "multipart/form-data");
            client.send(formData);  // send formData to the server using XHR
        }

        // register handler to check XHR instance's status when receiving the response
        client.onreadystatechange = function () {
            if (client.readyState == 4 && client.status == 200) {
                alert(client.statusText);
            }
        }
    </script>
</head>
<body>
    <h1>XHR tutorial</h1>
    <input type="file" id="uploadfile" name="uploadfile" />
    <input type="button" value="upload" onclick="upload()" />
</body>
</html>
