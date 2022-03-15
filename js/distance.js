(function() {
    let btnSubmit = document.getElementById('distanceButtonSubmit');
    let originLocationBlock = document.getElementById('originLocationBlock');
    let destinationLocationBlock = document.getElementById('destinationLocationBlock');
    let calculatedDistanceCard = document.getElementById('calculatedDistanceCard');
    let inMiles = document.getElementById('miles');
    let inKms = document.getElementById('kms');
    btnSubmit.addEventListener("click", getTheDistance);

    // Check if the lat lng is valid
    function isValidLatLng(latLngAddress){
        if(latLngAddress.length!==2){
            return false;
        }
        const lat = latLngAddress[0];
        const lng = latLngAddress[1];
        const isLatitudeValid =  isFinite(lat) && Math.abs(lat) <= 90;
        const isLongitudeValid = isFinite(lng) && Math.abs(lat) <= 180;
        return isLatitudeValid && isLongitudeValid;
    }

    // Convert from degrees to radians
    function degreesToRadians(degrees) {
        return (degrees * Math.PI)/180;
    }

    function getTheDistance(event){
        let originAddress = document.getElementById('originLocation').value.replaceAll(" ", "").split(",");
        let destinationAddress = document.getElementById('destinationLocation').value.replaceAll(" ", "").split(",");
        const isOriginValid = isValidLatLng(originAddress);
        const isDestinationValid = isValidLatLng(destinationAddress);
        if(!isOriginValid){
            originLocationBlock.classList.remove("d-none")
        }else{
            originLocationBlock.classList.add("d-none")
        }
        if(!isDestinationValid){
            destinationLocationBlock.classList.remove("d-none")
        }else{
            destinationLocationBlock.classList.add("d-none")
        }

        if(!isOriginValid || !isDestinationValid){
            return;
        }

        const originLat = originAddress[0];
        const originLng = originAddress[1];
        const destinationLat = destinationAddress[0];
        const destinationLng = destinationAddress[1];
        const distance = getDistanceBetweenLatLng(originLat, originLng, destinationLat, destinationLng);
        calculatedDistanceCard.classList.remove("d-none")
        inMiles.innerText = `In Miles: ${distance.miles}`;
        inKms.innerText = `In Kilo Metres: ${distance.kms}`;
        event.preventDefault();
    }

    // Get the distance between lat and longitude
    function getDistanceBetweenLatLng(originLatitude, originLongitude, destinationLatitude, destinationLongitude) {
        if(originLatitude === destinationLatitude && originLongitude === destinationLongitude){
            return {
                'kms': 0,
                'miles': 0
            }
        }
        const radOriginLatitude = degreesToRadians(originLatitude);
        const radDestinationLatitude = degreesToRadians(destinationLatitude);
        const radtheta = degreesToRadians(originLongitude-destinationLongitude);
        let dist = Math.sin(radOriginLatitude) * Math.sin(radDestinationLatitude) + Math.cos(radOriginLatitude) * Math.cos(radDestinationLatitude) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180/Math.PI;
        dist = dist * 60 * 1.1515;
        return {
            'kms': parseFloat(dist * 1.609344).toFixed(2),
            'miles': parseFloat(dist * 0.868).toFixed(2)
        }
    }
})();
