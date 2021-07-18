export function getLengthOfMissingArray(arrayOfArrays: any[]): number {

    if (arrayOfArrays.length === 0) {
        return 0;
    }

    let lenArray: number[] = [];

    arrayOfArrays.forEach(function (value) {
        lenArray[value.length - 1] = 1;
    });

    for (let i = 0; i < lenArray.length; i++) {
        if (lenArray[i] !== 1) {
            return (i + 1);
        }
    }

    return 0;
}

export function divideSmallestNumber(numbers: number[]): string {

    const evenNumbers = [...numbers]
        .filter(function (number) {
            return (number % 2 === 0)
        })
        .sort(function (a, b) {
            return a - b;
        })
    evenNumbers[0] = evenNumbers[0] / 2

    return (evenNumbers[0]) < 10 ? "0" + evenNumbers[0] : "" + evenNumbers[0];

}

export function decipherThis(str: string): string {
    let arr = str.split(" ");
    let decode: string[] = [];

    arr.forEach(function (value) {
        if (value.length < 2) {
            decode.push(value);
            return;
        }

        const asciNum = parseInt(value);
        let asciChar = "";
        if (!isNaN(asciNum)) asciChar = String.fromCharCode(asciNum);

        let txtDecode = value.split("" + asciNum)[1];
        if (value.length > 2) {
            if (txtDecode.length != 1) txtDecode = txtDecode.slice(-1) + txtDecode.slice(1, txtDecode.length - 1) + txtDecode[0]
            decode.push(asciChar + txtDecode);
        } else {
            decode.push(asciChar);
        }
    })

    return decode.join(" ");
}

export function getGenderByOrderType(order: any): string {
    /* Vyhody
     * kod je citatelny prehladny
     * staci mi dopisat do objektu nove rozsirenia a mozem ich hned pouzivat
     * nevyhody netusim ale rad sa naucim nieco nove
     */

    const result: Record<string, any> = {
        'flight': {
            'F': 'FEMALE',
            'M': 'MALE'
        },

        'vacation': {
            'F': 'WOMAN',
            'M': 'MAN'
        }
    }

    return (result[order.type.toLowerCase()] ?? "")[order.genre.toUpperCase()] ?? "";
}

export const upperCaseIfNotStartsWithNumber = (object: any): any => {

    const keys = Object.keys(object)

    keys.forEach(function (key) {
        if (isNaN(parseInt(object[key]))) {
            object[key] = object[key].toUpperCase()
        }
    })

    return object
};

