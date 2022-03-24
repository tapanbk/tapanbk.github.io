(function() {

    let calculateAgeSubmitButton = document.getElementById('calculateAgeButton');
    let startDateField = document.getElementById('startDateField');
    let endDateField = document.getElementById('endDateField');
    let ageCard = document.getElementById('ageCard');

    calculateAgeSubmitButton.addEventListener("click", getAge);
    endDateField.valueAsDate  = new Date() ;

    function getAge() {
        ageCard.classList.remove("d-none")
        if(!startDateField.value){
            ageCard.querySelector('.jumbotron').innerHTML = `<h5>Start Date is required</h5>`;
            return;
        }
        if(!endDateField.value){
            ageCard.querySelector('.jumbotron').innerHTML = `<h5>End Date is required</h5>`;
            return;
        }
        let startDate = new Date(startDateField.value);
        let endDate = new Date(endDateField.value);

        if(endDate.getTime() - startDate.getTime()<=0){
            let temp =  startDate;
            startDate = endDate;
            endDate = temp;
        }
        let yearNow = endDate.getFullYear();
        let monthNow = endDate.getMonth();
        let dateNow = endDate.getDate();

        let yearDob = startDate.getFullYear();
        let monthDob = startDate.getMonth();
        let dateDob = startDate.getDate();
        let ageString = "";
        let yearString = "";
        let monthString = "";
        let dayString = "";

        let yearAge = yearNow - yearDob;

        if (monthNow >= monthDob)
            var monthAge = monthNow - monthDob;
        else {
            yearAge--;
            var monthAge = 12 + monthNow - monthDob;
        }

        if (dateNow >= dateDob)
            var dateAge = dateNow - dateDob;
        else {
            monthAge--;
            var dateAge = 31 + dateNow - dateDob;

            if (monthAge < 0) {
                monthAge = 11;
                yearAge--;
            }
        }

        age = {
            years: yearAge,
            months: monthAge,
            days: dateAge
        };

        if (age.years > 1) yearString = " years";
        else yearString = " year";
        if (age.months > 1) monthString = " months";
        else monthString = " month";
        if (age.days > 1) dayString = " days";
        else dayString = " day";


        if ((age.years > 0) && (age.months > 0) && (age.days > 0))
            ageString = age.years + yearString + ", " + age.months + monthString + " " + age.days + dayString + " ";
        else if ((age.years == 0) && (age.months == 0) && (age.days > 0))
            ageString = " " + age.days + dayString + " ";
        else if ((age.years > 0) && (age.months == 0) && (age.days == 0))
            ageString = age.years + yearString + " ";
        else if ((age.years > 0) && (age.months > 0) && (age.days == 0))
            ageString = age.years + yearString + "  " + age.months + monthString + " ";
        else if ((age.years == 0) && (age.months > 0) && (age.days > 0))
            ageString = age.months + monthString + " " + age.days + dayString + " ";
        else if ((age.years > 0) && (age.months == 0) && (age.days > 0))
            ageString = age.years + yearString + " " + age.days + dayString + " ";
        else if ((age.years == 0) && (age.months > 0) && (age.days == 0))
            ageString = age.months + monthString + " ";
        else ageString = "Oops! Could not calculate age. Something wrong with the start date and end date!";
        ageCard.querySelector('.jumbotron').innerHTML = `<h5>${ageString}</h5>`;
    }
})();

