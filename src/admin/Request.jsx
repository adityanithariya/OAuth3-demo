import React from 'react';

const Request = () => {
    function loadXMLDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('demo').innerHTML = xhttp.responseText;
                console.log("working")
            }
        };
        xhttp.open('GET', '/admin-panel/request', true);
        xhttp.send();
    }
    // function loadXMLDoc() {
    //     var xmlhttp = new XMLHttpRequest();
    //     xmlhttp.onreadystatechange = function() {
    //       if (this.readyState === 4 && this.status === 200) {
    //         myFunction(this);
    //       }
    //     };
    //     xmlhttp.open("GET", "cd_catalog.xml", true);
    //     xmlhttp.send();
    //   }
      
    //   function myFunction(xml) {
    //     var x, i, xmlDoc, txt;
    //     xmlDoc = xml.responseXML;
    //     txt = "";
    //     x = xmlDoc.getElementsByTagName("name");
    //     for (i = 0; i< x.length; i++) {
    //       txt += x[i].childNodes[0].nodeValue + "<br>";
    //     }
    //     document.getElementById("demo").innerHTML = txt;
    //   }
      
    return (
        <div>
            <p id="demo"></p>
            <button className="btn btn-primary" onClick={loadXMLDoc}>
                Change
            </button>
        </div>
    );
};

export default Request