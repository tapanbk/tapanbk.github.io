(function () {
    let resultCard = document.getElementById('utc-date-time');
    resultCard.classList.remove("d-none");

    const now = new Date();
    const year = now.getUTCFullYear();
    const month = ('0' + (now.getUTCMonth() + 1)).slice(-2); // Adding 1 because getUTCMonth() returns zero-based month
    const day = ('0' + now.getUTCDate()).slice(-2);
    let hours = ('0' + now.getUTCHours()).slice(-2);
    const minutes = ('0' + now.getUTCMinutes()).slice(-2);
    const seconds = ('0' + now.getUTCSeconds()).slice(-2);
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    resultCard.querySelector('.jumbotron').innerHTML  = `UTC TIME: ${year}-${month}-${day}   ${hours}:${minutes}:${seconds}   ${ampm}`;
})();
