(function() {

    let calculateAgeSubmitButton = document.getElementById('calculateAgeButton');
    let startDateTimeField = document.getElementById('startDateTimeField');
    let endDateTimeField = document.getElementById('endDateTimeField');
    let resultCard = document.getElementById('resultCard');

    calculateAgeSubmitButton.addEventListener("click", getAge);
    startDateTimeField.valueAsDateTime  = new Date() ;

    function getAge() {
        resultCard.classList.remove("d-none")
        if(!startDateTimeField.value){
            resultCard.querySelector('.jumbotron').innerHTML = `<h5>Start Date Time is required</h5>`;
            return;
        }
        if(!endDateTimeField.value){
            resultCard.querySelector('.jumbotron').innerHTML = `<h5>End Date Time is required</h5>`;
            return;
        }
        let startTimeDate = new Date(startDateTimeField.value);
        let endTimeDate = new Date(endDateTimeField.value);

        const diffTimeInMilliSeconds = Math.abs(endTimeDate - startTimeDate);
        const diffTimeInSeconds = parseFloat(diffTimeInMilliSeconds/1000).toFixed(0);
        const diffTimeInMinutes = parseFloat(diffTimeInMilliSeconds/(1000*60)).toFixed(0);
        const diffTimeInHours = parseFloat(diffTimeInMilliSeconds/(1000*60*60)).toFixed(0);
        console.log({diffTimeInMilliSeconds, diffTimeInSeconds, diffTimeInMinutes,diffTimeInHours });
        let result = `<table class="table table-hover result-card-table"><tbody>`;
        result += `<tr>
                  <td> <span class="">Milli Seconds:</td>
                  <td> <span class="bold ">${diffTimeInMilliSeconds}</span></td>
                </tr>
                `



        if(Math.floor(diffTimeInSeconds)>0){
            result += `<tr>
                  <td> <span class="">Seconds:</td>
                  <td> <span class="bold ">${diffTimeInSeconds}</span></td>
                </tr>`;
        }

        if(Math.floor(diffTimeInMinutes)>0){
            result += `<tr>
                  <td> <span class="">Minutes:</td>
                  <td> <span class="bold ">${diffTimeInMinutes}</span></td>
                </tr>`;
        }
        if(Math.floor(diffTimeInHours)>0){
            result += `<tr>
                  <td> <span class="">Hours:</td>
                  <td> <span class="bold ">${diffTimeInHours}</span></td>
                </tr>`;
        }

        result+=`
           </tbody>
            </table> 
        `
        resultCard.querySelector('.jumbotron').innerHTML = `<h5>${result}</h5>`;
    }
})();

