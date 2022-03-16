(function () {
    let ipAddressCard = document.getElementById('ipAddressCard');
    let ipAddressBox = document.getElementById('ipAddressBox');
    const url = 'https://ipinfo.io/json?token=21395fc92f53f0';
    let ipHtmlData = '';
    $.getJSON(url, function (data) {
        ipAddressCard.classList.remove("d-none");
        ipHtmlData = `

            <h4 class="display-5">My IP Information:</h4>

            <table class="table table-hover ip-details">
              <tbody>
                <tr>
                  <td> <span class="lead">IP Address:</td>
                  <td> <span class="bold lead">${data.ip}</span></td>
                </tr>
                 <tr>
                  <td> <span class="lead">Country:</td>
                  <td> <span class="bold lead">${data.country}</span></td>
                </tr>
      
                 <tr>
                  <td> <span class="lead">Region:</td>
                  <td> <span class="bold lead">${data.region}</span></td>
                </tr>
 
                 <tr>
                  <td> <span class="lead">City:</td>
                  <td> <span class="bold lead">${data.city}</span></td>
                </tr>
                 <tr>
                  <td> <span class="lead">Cordinates:</td>
                  <td> <span class="bold lead">${data.loc}</span></td>
                </tr>
                 <tr>
                  <td> <span class="lead">Time Zone:</td>
                  <td> <span class="bold lead">${data.timezone}</span></td>
                </tr>

              </tbody>
            </table>    
        `
        ipAddressBox.innerHTML = ipHtmlData;
    })
    .fail(function() {
        ipAddressCard.classList.remove("d-none");
        ipAddressBox.innerHTML = `<h4 class="display-5">Could not get the location details. Please try again later</h4>`;;
    });
})();
