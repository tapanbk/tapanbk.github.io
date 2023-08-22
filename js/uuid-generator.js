(function () {
    let uuid_number = document.getElementById('uuid_number');
    let btn = document.getElementById('generate-new-uui');
    btn.addEventListener("click", clickHandler);

    function update_text(uuid){
        uuid_number.innerHTML = `<p>${uuid}<br />${uuid.replaceAll('-','')}</p>`;
    }
    function clickHandler(){
        update_text(uuidv4())
    }

    function uuidv4() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
            .replace(/[xy]/g, function (c) {
                const r = Math.random() * 16 | 0,
                    v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
    }
    const random_uuid = uuidv4();
    update_text(random_uuid);

})();
