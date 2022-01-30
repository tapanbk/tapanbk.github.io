(function() {
    const defaultRootSize = 16;
    const pxField = document.getElementById('pxField');
    const remField = document.getElementById('remField');
    let rootFontSizeField = document.getElementById('rootFontSize');
    let rootFontSizeValue = rootFontSizeField.value;
    if(rootFontSizeValue <=0){
        rootFontSizeValue = defaultRootSize;
        rootFontSizeField.value = defaultRootSize;
    }
    rootFontSizeValue = parseFloat(rootFontSizeValue);
    pxField.addEventListener("change", pxInputFieldChange);
    remField.addEventListener("change", remInputFieldChange);
    rootFontSizeField.addEventListener("change", rootFontSizeChange);
    function pxInputFieldChange(){
        remField.value =  getPxTorem(pxField.value);
    }

    function remInputFieldChange(){
        pxField.value = getRemToPx(remField.value)
    }

    function rootFontSizeChange(){
        rootFontSizeValue = rootFontSizeField.value;
        pxInputFieldChange();
        addItemToPxToRemTable();
        addItemToRemToPxTable();
    }

   function addItemToPxToRemTable(){
        let row_data = '';
        let rowData= [1, 2, 3, 4, 5, 6, 8, 10, 12, 14, 15, 16, 18, 20, 24, 25, 28, 32, 36, 40, 44, 48, 50, 56, 64, 72, 75, 80, 90, 100 ];
       for (let i = 0; i < rowData.length; ++i) {
           let calculatedValue = getPxTorem(rowData[i]);
           row_data += `<tr><td>${rowData[i]}</td> <td>${calculatedValue}</td></tr>`;
       }
       $('#px_to_rem').empty().append(row_data);
   }
   function addItemToRemToPxTable(){
       let row_data = '';
       let rowData= [0.01, 0.03, 0.05, 0.08, 0.1, 0.15, 0.2, 0.5, 1, 2, 3, 4, 5, 6, 8, 10, 15, 20, 30, 40, 50, 55, 60,65, 70, 80, 85, 90, 95,  100 ];
       for (let i = 0; i < rowData.length; ++i) {
           let calculatedValue = getRemToPx(rowData[i]);
           row_data += `<tr><td>${rowData[i]}</td> <td>${calculatedValue}</td></tr>`;
       }
       $('#rem_to_px').empty().append(row_data);
   }

   function getPxTorem(value){
       return (value/rootFontSizeValue).toFixed(3).replace(/(\.0+|0+)$/, '');
   }

   function getRemToPx(value){
        return (value*rootFontSizeValue).toFixed(3).replace(/(\.0+|0+)$/, '');
   }
    addItemToPxToRemTable();
    addItemToRemToPxTable();
})();
