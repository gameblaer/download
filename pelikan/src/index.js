"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
exports.upperCaseIfNotStartsWithNumber = exports.getGenderByOrderType = exports.decipherThis = exports.divideSmallestNumber = exports.getLengthOfMissingArray = void 0;
function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays.length === 0) {
        return 0;
    }
    var lenArray = [];
    arrayOfArrays.forEach(function (value) {
        lenArray[value.length - 1] = 1;
    });
    for (var i = 0; i < lenArray.length; i++) {
        if (lenArray[i] !== 1) {
            return (i + 1);
        }
    }
    return 0;
}
exports.getLengthOfMissingArray = getLengthOfMissingArray;
function divideSmallestNumber(numbers) {
    var evenNumbers = __spreadArray([], numbers).filter(function (number) {
        return (number % 2 === 0);
    })
        .sort(function (a, b) {
        return a - b;
    });
    evenNumbers[0] = evenNumbers[0] / 2;
    return (evenNumbers[0]) < 10 ? "0" + evenNumbers[0] : "" + evenNumbers[0];
}
exports.divideSmallestNumber = divideSmallestNumber;
function decipherThis(str) {
    var arr = str.split(" ");
    var decode = [];
    arr.forEach(function (value) {
        if (value.length < 2) {
            decode.push(value);
            return;
        }
        var asciNum = parseInt(value);
        var asciChar = "";
        if (!isNaN(asciNum))
            asciChar = String.fromCharCode(asciNum);
        var txtDecode = value.split("" + asciNum)[1];
        if (value.length > 2) {
            if (txtDecode.length != 1)
                txtDecode = txtDecode.slice(-1) + txtDecode.slice(1, txtDecode.length - 1) + txtDecode[0];
            decode.push(asciChar + txtDecode);
        }
        else {
            decode.push(asciChar);
        }
    });
    return decode.join(" ");
}
exports.decipherThis = decipherThis;
function getGenderByOrderType(order) {
    /* Vyhody
     * kod je citatelny prehladny
     * staci mi dopisat do objektu nove rozsirenia a mozem ich hned pouzivat
     * nevyhody netusim ale rad sa naucim nieco nove
     */
    var _a, _b;
    var result = {
        'flight': {
            'F': 'FEMALE',
            'M': 'MALE'
        },
        'vacation': {
            'F': 'WOMAN',
            'M': 'MAN'
        }
    };
    return (_b = ((_a = result[order.type.toLowerCase()]) !== null && _a !== void 0 ? _a : "")[order.genre.toUpperCase()]) !== null && _b !== void 0 ? _b : "";
}
exports.getGenderByOrderType = getGenderByOrderType;
var upperCaseIfNotStartsWithNumber = function (object) {
    /*    const keys = Object.keys(object)
    
        keys.forEach(function (key) {
            if (isNaN(parseInt(object[key]))) {
                object[key] = object[key].toUpperCase()
            }
        })
    
        return object*/
    //version 2
    for (var key in object) {
        if (isNaN(parseInt(object[key]))) {
            object[key] = object[key].toUpperCase();
        }
    }
    return object;
};
exports.upperCaseIfNotStartsWithNumber = upperCaseIfNotStartsWithNumber;
