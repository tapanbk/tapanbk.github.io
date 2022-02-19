(function() {
    const hexField = document.getElementById('hexField');
    const RGBField = document.getElementById('RGBField');
    hexField.addEventListener("change", convertfromHexToRgb);
    function convertfromHexToRgb(){
        const stringArray = hexToRgbConvertor(hexField.value);
        if(stringArray.length){
            RGBField.innerText = stringArray;
        }else{
            RGBField.innerText = "Wrong Hex Code. Please enter correct hex code"
        }
    }
    function hexToRgbConvertor(hexColor){
        let stringArray = [];
        const reg=/^([0-9a-f]{3}){1,2}$/i;
        if(hexColor.substring(0, 1) === '#') hexColor = hexColor.substring(1);
        if(!(reg.test(hexColor))){
            return [];
        }
        if(hexColor.length === 6) {
            stringArray[0] = hexColor.slice(0, 2);
            stringArray[1] = hexColor.slice(2, 4);
            stringArray[2] = hexColor.slice(4, 6);
        } else if(hexColor.length === 3) {
            stringArray[0] = hexColor[0].toString() + hexColor[0].toString()
            stringArray[1] = hexColor[1].toString() + hexColor[1].toString()
            stringArray[2] = hexColor[2].toString() + hexColor[2].toString()
        }
        if(stringArray){
             const stringRGB = stringArray.map((item)=>{
                return parseInt(item, 16)
            });
            return stringRGB.toString().replaceAll(',', ', ');
        }
        return [];
    }


    function hexRgbGenerator(){
        let row_data = '';
        let rowData= [
            {'name': 'Black', 'hex': '#000000'},
            {'name': 'Navy', 'hex': '#000080'},
            {'name': 'Dark Blue', 'hex': '#00008B'},
            {'name': 'Medium Blue', 'hex': '#0000CD'},
            {'name': 'Blue', 'hex': '#0000FF'},
            {'name': 'Dark Green', 'hex': '#006400'},
            {'name': 'Green', 'hex': '#008000'},
            {'name': 'Teal', 'hex': '#008080'},
            {'name': 'Dark Cyan', 'hex': '#008B8B'},
            {'name': 'Deep Sky Blue', 'hex': '#00BFFF'},
            {'name': 'DarkTurquoise', 'hex': '#00CED1'},
            {'name': 'MediumSpringGreen', 'hex': '#00FA9A'},
            {'name': 'Lime', 'hex': '#00FF00'},
            {'name': 'Spring Green', 'hex': '#00FF7F'},
            {'name': 'Aqua', 'hex': '#00FFFF'},
            {'name': 'Cyan', 'hex': '#00FFFF'},
            {'name': 'Midnight Blue', 'hex': '#191970'},
            {'name': 'DodgerBlue', 'hex': '#1E90FF'},
            {'name': 'FireBrick', 'hex': '#B22222'},
            {'name': 'FloralWhite', 'hex': '#FFFAF0'},
            {'name': 'ForestGreen', 'hex': '#228B22'},
            {'name': 'Fuchsia', 'hex': '#FF00FF'},
            {'name': 'Gainsboro', 'hex': '#DCDCDC'},
            {'name': 'GhostWhite', 'hex': '#F8F8FF'},
            {'name': 'Gold', 'hex': '#FFD700'},
            {'name': 'GoldenRod', 'hex': '#DAA520'},
            {'name': 'Gray', 'hex': '#808080'},
            {'name': 'Grey', 'hex': '#808080'},
            {'name': 'Green', 'hex': '#008000'},
            {'name': 'GreenYellow', 'hex': '#ADFF2F'},
            {'name': 'HoneyDew', 'hex': '#F0FFF0'},
            {'name': 'HotPink', 'hex': '#FF69B4'},
            {'name': 'IndianRed', 'hex': '#CD5C5C'},
            {'name': 'Indigo', 'hex': '#4B0082'},
            {'name': 'Ivory', 'hex': '#FFFFF0'},
            {'name': 'Khaki', 'hex': '#F0E68C'},
            {'name': 'Lavender', 'hex': '#E6E6FA'},
            {'name': 'LavenderBlush', 'hex': '#FFF0F5'},
            {'name': 'LawnGreen', 'hex': '#7CFC00'},
            {'name': 'LemonChiffon', 'hex': '#FFFACD'},
            {'name': 'LightBlue', 'hex': '#ADD8E6'},
            {'name': 'LightCoral', 'hex': '#F08080'},
            {'name': 'LightCyan', 'hex': '#E0FFFF'},
            {'name': 'LightGoldenRodYellow', 'hex': '#FAFAD2'},
            {'name': 'LightGray', 'hex': '#D3D3D3'},
            {'name': 'LightGrey', 'hex': '#D3D3D3'},
            {'name': 'LightGreen', 'hex': '#90EE90'},
            {'name': 'LightPink', 'hex': '#FFB6C1'},
            {'name': 'LightSalmon', 'hex': '#FFA07A'},
            {'name': 'LightSeaGreen', 'hex': '#20B2AA'},
            {'name': 'LightSkyBlue', 'hex': '#87CEFA'},
            {'name': 'LightSlateGray', 'hex': '#778899'},
            {'name': 'LightSteelBlue', 'hex': '#B0C4DE'},
            {'name': 'LightYellow', 'hex': '#FFFFE0'},
            {'name': 'Lime', 'hex': '#00FF00'},
            {'name': 'LimeGreen', 'hex': '#32CD32'},
            {'name': 'Linen', 'hex': '#FAF0E6'},
            {'name': 'Magenta', 'hex': '#FF00FF'},
            {'name': 'Maroon', 'hex': '#800000'},
            {'name': 'MediumAquaMarine', 'hex': '#66CDAA'},
            {'name': 'MediumBlue', 'hex': '#0000CD'},
            {'name': 'MediumOrchid', 'hex': '#BA55D3'},
            {'name': 'MediumPurple', 'hex': '#9370DB'},
            {'name': "MediumSeaGreen", 'hex':"#3CB371"},
            {'name': "MediumSlateBlue", 'hex':"#7B68EE"},
            {'name': "MediumSpringGreen", 'hex':"#00FA9A"},
            {'name': "MediumTurquoise", 'hex':"#48D1CC"},
            {'name': "MediumVioletRed",'hex':"#C71585"},
            {'name': "MidnightBlue", 'hex':"#191970"},
            {'name': "MintCream", 'hex':"#F5FFFA"},
            {'name': "MistyRose", 'hex':"#FFE4E1"},
            {'name': "Moccasin", 'hex':"#FFE4B5"},
            {'name': "NavajoWhite", 'hex':"#FFDEAD"},
            {'name': "Navy", 'hex':"#000080"},
            {'name': "OldLace", 'hex':"#FDF5E6"},
            {'name': "Olive", 'hex':"#808000"},
            {'name': "OliveDrab", 'hex':"#6B8E23"},
            {'name': "Orange", 'hex':"#FFA500"},
            {'name': "OrangeRed", 'hex':"#FF4500"},
            {'name': "Orchid", 'hex':"#DA70D6"},
            {'name': "PaleGoldenRod", 'hex':"#EEE8AA"},
            {'name': "PaleGreen", 'hex':"#98FB98"},
            {'name': "PaleTurquoise", 'hex':"#AFEEEE"},
            {'name': "PaleVioletRed", 'hex':"#DB7093"},
            {'name': "PapayaWhip", 'hex':"#FFEFD5"},
            {'name': "PeachPuff", 'hex':"#FFDAB9"},
            {'name': "Peru", 'hex':"#CD853F"},
            {'name': "Pink", 'hex':"#FFC0CB"},
            {'name': "Plum", 'hex':"#DDA0DD"},
            {'name': "PowderBlue", 'hex':"#B0E0E6"},
            {'name': "Purple", 'hex':"#800080"},
            {'name': "RebeccaPurple", 'hex':"#663399"},
            {'name': "Red", 'hex':"#FF0000"},
            {'name': "RosyBrown", 'hex':"#BC8F8F"},
            {'name': "RoyalBlue", 'hex':"#4169E1"},
            {'name': "SaddleBrown", 'hex':"#8B4513"},
            {'name': "Salmon", 'hex':"#FA8072"},
            {'name': "SandyBrown", 'hex':"#F4A460"},
            {'name': "SeaGreen", 'hex':"#2E8B57"},
            {'name': "SeaShell", 'hex':"#FFF5EE"},
            {'name': "Sienna", 'hex':"#A0522D"},
            {'name': "Silver", 'hex':"#C0C0C0"},
            {'name': "SkyBlue", 'hex':"#87CEEB"},
            {'name': "SlateBlue", 'hex':"#6A5ACD"},
            {'name': "SlateGray", 'hex':"#708090"},
            {'name': "SlateGrey", 'hex':"#708090"},
            {'name': "Snow", 'hex':"#FFFAFA"},
            {'name': "SpringGreen", 'hex':"#00FF7F"},
            {'name': "SteelBlue", 'hex':"#4682B4"},
            {'name': "Tan", 'hex':"#D2B48C"},
            {'name': "Teal", 'hex':"#008080"},
            {'name': "Thistle", 'hex':"#D8BFD8"},
            {'name': "Tomato", 'hex':"#FF6347"},
            {'name': "Turquoise", 'hex':"#40E0D0"},
            {'name': "Violet", 'hex':"#EE82EE"},
            {'name': "Wheat", 'hex':"#F5DEB3"},
            {'name': "White", 'hex':"#FFFFFF"},
            {'name': "WhiteSmoke", 'hex':"#F5F5F5"},
            {'name': "Yellow", 'hex':"#FFFF00"},
            {'name': "YellowGreen", 'hex':"#9ACD32"},
        ];

        for (let i = 0; i < rowData.length; ++i) {
            let calculatedValue = hexToRgbConvertor(rowData[i].hex);
            row_data += `<tr><td>${i+1}</td></td><td>${rowData[i].name}</td>
                            <td style="background-color: ${rowData[i].hex}!important; color: black">${rowData[i].hex}</td>
                            <td>${calculatedValue}</td></tr>`;
        }
        $('#hex-rgb-table').empty().append(row_data);
    }
    hexRgbGenerator();
})();

