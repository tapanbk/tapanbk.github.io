(function () {
    let ipAddressCard = document.getElementById('ipAddressCard');
    let ipAddressBox = document.getElementById('ipAddressBox');
    const url = 'http://ip-api.com/json';
    $.getJSON(url, function (data) {
        let ipHtmlData = '';
        if (data.status == 'success') {
            ipAddressCard.classList.remove("d-none");
            ipHtmlData = `

                <h4 class="display-5">My IP Information:</h4>

                <table class="table table-hover ip-details">
                  <tbody>
                    <tr>
                      <td> <span class="lead">IP Address:</td>
                      <td> <span class="bold lead">${data.query}</span></td>
                    </tr>
                     <tr>
                      <td> <span class="lead">Country:</td>
                      <td> <span class="bold lead">${data.country}</span></td>
                    </tr>
                     <tr>
                      <td> <span class="lead">Country Code:</td>
                      <td> <span class="bold lead">${data.countryCode}</span></td>
                    </tr>
                     <tr>
                      <td> <span class="lead">Region:</td>
                      <td> <span class="bold lead">${data.region}</span></td>
                    </tr>
                     <tr>
                      <td> <span class="lead">Region Name</td>
                      <td> <span class="bold lead">${data.regionName}</span></td>
                    </tr>
                     <tr>
                      <td> <span class="lead">City:</td>
                      <td> <span class="bold lead">${data.city}</span></td>
                    </tr>
                     <tr>
                      <td> <span class="lead">Cordinates:</td>
                      <td> <span class="bold lead">${data.lat}, ${data.lon}</span></td>
                    </tr>
                     <tr>
                      <td> <span class="lead">Time Zone:</td>
                      <td> <span class="bold lead">${data.timezone}</span></td>
                    </tr>
                       <tr>
                      <td> <span class="lead">ISP:</td>
                      <td> <span class="bold lead">${data.isp}</span></td>
                    </tr>
                  </tbody>
                </table>    
            `
        }else{
            ipHtmlData =  `<h4 class="display-5">Could not get the location details. Pleasse try again later</h4>`;
        }
        ipAddressBox.innerHTML = ipHtmlData;

    })
    .fail(function() {
        ipAddressCard.classList.remove("d-none");
        ipAddressBox.innerHTML = `<h4 class="display-5">Could not get the location details. Please try again later</h4>`;;
    });
})();
