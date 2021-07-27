import {expect} from 'chai';
import {
    getLengthOfMissingArray,
    divideSmallestNumber,
    decipherThis,
    getGenderByOrderType,
    upperCaseIfNotStartsWithNumber
} from '../src';

/*
describe("Test funkcie getLengthOfMissingArray", () => {
    let arrays = [
        {
            arr: [
                [4, 6, 8, 1],
                [2, 1],
                [899, null, 5, 0],
                [17]
            ],
            result: 3
        },
        {
            arr: [
                [1, 2],
                [4, 5, 1, 1],
                [1],
                [5, 6, 7, 8, 9]
            ],
            result: 3
        },
        {
            arr: [
                [5, 2, 9],
                [4, 5, 1, 1],
                [1],
                [5, 6, 7, 8, 9]
            ],
            result: 2
        },
        {
            arr: [[]],
            result: 0
        },
        {
            arr: [[null], [null, null, null]],
            result: 2
        },
        {
            arr: [
                ['a', 'a', 'a'],
                ['a', 'a'],
                ['a', 'a', 'a', 'a'],
                ['a'],
                ['a', 'a', 'a', 'a', 'a', 'a']
            ],
            result: 5
        },
        {
            arr: [],
            result: 0
        },
    ]

    let i = 1
    arrays.forEach((value) => {
        describe("Test " + i++ + ".", () => {

            let result = getLengthOfMissingArray(value.arr);
            it("vstup:\t\t\t '" + JSON.stringify(value.arr) + "'\n" +
                "\tocakvany vysledok:\t '" + value.result + "'\n" +
                "\tvratena hodnota:\t '" + result + "'", () => {

                expect(result).to.equal(value.result);
            });
        })
    });
});

describe("Test funkcie decipherThis", () => {
    let arrays = [
        {
            arr: "72olle 103doo 100ya",
            result: "Hello good day"
        },
        {
            arr: "72olle 103doo a 72 100ya",
            result: "Hello good a H day"
        },
        {
            arr: "82yade 115te 103o",
            result: "Ready set go"
        },
        {
            arr: "82yade 115te 72a 103o",
            result: "Ready set Ha go"
        },
        {
            arr: "82yade 115te 49 103o",
            result: "Ready set 1 go"
        }
    ]

    let i = 1
    arrays.forEach((value) => {
        describe("Test " + i++ + ".", () => {

            let result = decipherThis(value.arr);
            it("vstup:\t\t\t '" + value.arr + "'\n" +
                "\tocakvany vysledok:\t '" + value.result + "'\n" +
                "\tvratena hodnota:\t '" + result + "'", () => {

                expect(result).to.equal(value.result);
            });
        })
    });
});

describe("Test funkcie getGenderByOrderType", () => {
    let arrays = [
        {
            arr: {type: "flight", genre: "F"},
            result: "FEMALE"
        },
        {
            arr: {type: "flightg", genre: "G"},
            result: ""
        },
        {
            arr: {type: "flight", genre: "M"},
            result: "MALE"
        },
        {
            arr: {type: "flight", genre: "S"},
            result: ""
        },
        {
            arr: {type: "fLight", genre: "f"},
            result: "FEMALE"
        },
        {
            arr: {type: "vacations", genre: "F"},
            result: ""
        },
        {
            arr: {type: "vacation", genre: "F"},
            result: "WOMAN"
        },
        {
            arr: {type: "vacation", genre: ""},
            result: ""
        },
        {
            arr: {type: "vacation", genre: "M"},
            result: "MAN"
        },
        {
            arr: {type: "vacations", genre: "T"},
            result: ""
        },
        {
            arr: {type: "VacaTion", genre: "m"},
            result: "MAN"
        }
    ]

    let i = 1
    arrays.forEach((value) => {
        describe("Test " + i++ + ".", () => {

            let result = getGenderByOrderType(value.arr);
            it("vstup:\t\t\t '" + JSON.stringify(value.arr) + "'\n" +
                "\tocakvany vysledok:\t '" + value.result + "'\n" +
                "\tvratena hodnota:\t '" + result + "'", () => {

                expect(result).to.equal(value.result);
            });
        })
    });
});

describe("Test funkcie upperCaseIfNotStartsWithNumber", () => {
    let arrays = [
        {
            arr: {
                'firstName': 'John',
                'lastName': 'Doe',
                'height': '185 cm',
                'kids': '2 sons',
                'from': 'Philadelphia'
            },
            result: {
                'firstName': 'JOHN',
                'lastName': 'DOE',
                'height': '185 cm',
                'kids': '2 sons',
                'from': 'PHILADELPHIA'
            }
        },
        {
            arr: {
                'firstName': 'Janko15',
                'lastName': 'Mrkvicka',
                'height': '165 cm',
                'kids': '3 deti',
                'from': 'Slovakia'
            },
            result: {
                'firstName': 'JANKO15',
                'lastName': 'MRKVICKA',
                'height': '165 cm',
                'kids': '3 deti',
                'from': 'SLOVAKIA'
            }
        },
        {
            arr: {
                'firstName': 'Martin',
                'lastName': 'vrták',
                'height': '175 cm',
                'kids': '2 deti',
                'from': 'Slovakia',
                'car': 'Lamborghini'
            },
            result: {
                'firstName': 'MARTIN',
                'lastName': 'VRTÁK',
                'height': '175 cm',
                'kids': '2 deti',
                'from': 'SLOVAKIA',
                'car': 'LAMBORGHINI'
            }
        },
    ]

    let i = 1
    arrays.forEach((value) => {
        describe("Test " + i++ + ".", () => {

            const valArr = {...value.arr}
            upperCaseIfNotStartsWithNumber(value.arr);
            it("vstup:\t\t\t '" + JSON.stringify(valArr) + "'\n" +
                "\tocakvany vysledok:\t '" + JSON.stringify(value.result) + "'\n" +
                "\taktualna hodnota:\t '" + JSON.stringify(value.arr) + "'", () => {

                expect(JSON.stringify(value.arr)).to.equal(JSON.stringify(value.result));
            });
        })
    });
});

describe("Test funkcie divideSmallestNumber", () => {
    let arrays = [
        {
            arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
            result: "01"
        },
        {
            arr: [4, 5, 6, 7, 8, 9, 10, 12],
            result: "02"
        },
        {
            arr: [12, 11, 10, 9, 8, 7, 6, 5],
            result: "03"
        },
        {
            arr: [120, 11, 100, 9, 55, 686, 56, 450],
            result: "28"
        },
    ]

    let i = 1
    arrays.forEach((value) => {
        describe("Test " + i++ + ".", () => {

            let result = divideSmallestNumber(value.arr);
            it("vstup:\t\t\t '" + JSON.stringify(Object.assign({}, value.arr)) + "'\n" +
                "\tocakvany vysledok:\t '" + value.result + "'\n" +
                "\tvratena hodnota:\t '" + result + "'", () => {

                expect(result).to.equal(value.result);
            });
        })
    });
});
*/

testIt( [
    {
        arr: [
            [4, 6, 8, 1],
            [2, 1],
            [899, null, 5, 0],
            [17]
        ],
        result: 3
    },
    {
        arr: [
            [1, 2],
            [4, 5, 1, 1],
            [1],
            [5, 6, 7, 8, 9]
        ],
        result: 3
    },
    {
        arr: [
            [5, 2, 9],
            [4, 5, 1, 1],
            [1],
            [5, 6, 7, 8, 9]
        ],
        result: 2
    },
    {
        arr: [[]],
        result: 0
    },
    {
        arr: [[null], [null, null, null]],
        result: 2
    },
    {
        arr: [
            ['a', 'a', 'a'],
            ['a', 'a'],
            ['a', 'a', 'a', 'a'],
            ['a'],
            ['a', 'a', 'a', 'a', 'a', 'a']
        ],
        result: 5
    },
    {
        arr: [],
        result: 0
    },
], getLengthOfMissingArray)
testIt( [
    {
        arr: "72olle 103doo 100ya",
        result: "Hello good day"
    },
    {
        arr: "72olle 103doo a 72 100ya",
        result: "Hello good a H day"
    },
    {
        arr: "82yade 115te 103o",
        result: "Ready set go"
    },
    {
        arr: "82yade 115te 72a 103o",
        result: "Ready set Ha go"
    },
    {
        arr: "82yade 115te 49 103o",
        result: "Ready set 1 go"
    }
], decipherThis)
testIt( [
    {
        arr: {type: "flight", genre: "F"},
        result: "FEMALE"
    },
    {
        arr: {type: "flightg", genre: "G"},
        result: ""
    },
    {
        arr: {type: "flight", genre: "M"},
        result: "MALE"
    },
    {
        arr: {type: "flight", genre: "S"},
        result: ""
    },
    {
        arr: {type: "fLight", genre: "f"},
        result: "FEMALE"
    },
    {
        arr: {type: "fLigHT", genre: "f"},
        result: "FEMALE"
    },
    {
        arr: {type: "vacations", genre: "F"},
        result: ""
    },
    {
        arr: {type: "vacation", genre: "F"},
        result: "WOMAN"
    },
    {
        arr: {type: "vacation", genre: ""},
        result: ""
    },
    {
        arr: {type: "vacation", genre: "M"},
        result: "MAN"
    },
    {
        arr: {type: "vacations", genre: "T"},
        result: ""
    },
    {
        arr: {type: "VacaTion", genre: "m"},
        result: "MAN"
    }
], getGenderByOrderType)
testIt( [
    {
        arr: {
            'firstName': 'John',
            'lastName': 'Doe',
            'height': '185 cm',
            'kids': '2 sons',
            'from': 'Philadelphia'
        },
        result: {
            'firstName': 'JOHN',
            'lastName': 'DOE',
            'height': '185 cm',
            'kids': '2 sons',
            'from': 'PHILADELPHIA'
        }
    },
    {
        arr: {
            'firstName': 'Janko15',
            'lastName': 'Mrkvicka',
            'height': '165 cm',
            'kids': '3 deti',
            'from': 'Slovakia'
        },
        result: {
            'firstName': 'JANKO15',
            'lastName': 'MRKVICKA',
            'height': '165 cm',
            'kids': '3 deti',
            'from': 'SLOVAKIA'
        }
    },
    {
        arr: {
            'firstName': 'Martin',
            'lastName': 'vrták',
            'height': '175 cm',
            'kids': '2 deti',
            'from': 'Slovakia',
            'car': 'Lamborghini'
        },
        result: {
            'firstName': 'MARTIN',
            'lastName': 'VRTÁK',
            'height': '175 cm',
            'kids': '2 deti',
            'from': 'SLOVAKIA',
            'car': 'LAMBORGHINI'
        }
    },
], upperCaseIfNotStartsWithNumber)
testIt( [
    {
        arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12],
        result: "01"
    },
    {
        arr: [4, 5, 6, 7, 8, 9, 10, 12],
        result: "02"
    },
    {
        arr: [12, 11, 10, 9, 8, 7, 6, 5],
        result: "03"
    },
    {
        arr: [120, 11, 100, 9, 55, 686, 56, 450],
        result: "28"
    },
], divideSmallestNumber)

/**
 *
 * @param arrays arr example [
 {<br>
        arr: [
            [4, 6, 8, 1],
            [2, 1],
            [899, null, 5, 0],
            [17]
        ], <br>
        result: 3<br>
    },...]
 * @param funcName example "getLengthOfMissingArray"
 */
function testIt(arrays, funcName) {
    if (arrays[0].result instanceof Object) {
        describe("Test Objectu funkcie: "+funcName.name, () => {
            let i = 1
            arrays.forEach((value) => {
                describe("Test " + i++ + ".", () => {

                    const valArr = {...value.arr}
                    funcName(value.arr);
                    it("vstup:\t\t\t '" + JSON.stringify(valArr) + "'\n" +
                        "\tocakvany vysledok:\t '" + JSON.stringify(value.result) + "'\n" +
                        "\taktualna hodnota:\t '" + JSON.stringify(value.arr) + "'", () => {

                        expect(JSON.stringify(value.arr)).to.equal(JSON.stringify(value.result));
                    });
                })
            });
        });
    } else {
        describe("Test funkcie: "+funcName.name, () => {
            let i = 1
            arrays.forEach((value) => {
                describe("Test " + i++ + ".", () => {

                    let result = funcName(value.arr);
                    it("vstup:\t\t\t '" + JSON.stringify(Object.assign({}, value.arr)) + "'\n" +
                        "\tocakvany vysledok:\t '" + value.result + "'\n" +
                        "\tvratena hodnota:\t '" + result + "'", () => {

                        expect(result).to.equal(value.result);
                    });
                })
            });
        });
    }
}
