import { Classrooms, ClassroomTypes } from "../typesClassrooms";
import { misc } from "./misc";



export const images = {
    C101: {
        normal1: require("../../assets/images/ciencias/C101/normal1.gif"),
    },
    C104: {
        normal1: require("../../assets/images/ciencias/C104/normal1.gif"),
    },
    C109: {
        normal1: require("../../assets/images/ciencias/C109/normal1.gif"),
    },
    C114: {
        normal1: require("../../assets/images/ciencias/C114/normal1.gif"),
    },
    C116: {
        normal1: require("../../assets/images/ciencias/C116/normal1.gif"),
    },
    C117: {
        normal1: require("../../assets/images/ciencias/C117/normal1.gif"),
    },
    C118: {
        normal1: require("../../assets/images/ciencias/C118/normal1.gif"),
    },
    C119: {
        normal1: require("../../assets/images/ciencias/C119/normal1.gif"),
    },
    C120: {
        normal1: require("../../assets/images/ciencias/C120/normal1.gif"),
    },
    C201: {
        normal1: require("../../assets/images/ciencias/C201/normal1.gif"),
    },
    C203: {	
        normal1: require("../../assets/images/ciencias/C203/normal1.gif"),	
    },
    C204: {	
        normal1: require("../../assets/images/ciencias/C204/normal1.gif"),	
    },
    C205: {	
        normal1: require("../../assets/images/ciencias/C205/normal1.gif"),	
    },
    C209: {
        normal1: require("../../assets/images/ciencias/C209/normal1.gif"),
    },
    C213: {	
        normal1: require("../../assets/images/ciencias/C213/normal1.gif"),	
    },
    C214: {	
        normal1: require("../../assets/images/ciencias/C214/normal1.gif"),	
    },
    C215: {	
        normal1: require("../../assets/images/ciencias/C215/normal1.gif"),	
    },
    C217: {	
        normal1: require("../../assets/images/ciencias/C217/normal1.gif"),	
    },
    C218: {	
        normal1: require("../../assets/images/ciencias/C218/normal1.gif"),	
    },
    C219: {	
        normal1: require("../../assets/images/ciencias/C219/normal1.gif"),	
    },
    C220: {	
        normal1: require("../../assets/images/ciencias/C220/normal1.gif"),	
    },
    C221: {	
        normal1: require("../../assets/images/ciencias/C221/normal1.gif"),	
    },



    //AHORA SALAS: C012-C014, C017-C019 Y C025

    C012: {
        normal1: require("../../assets/images/ciencias/C012/normal1.gif"),
    },
    C013: {
        normal1: require("../../assets/images/ciencias/C013/normal1.gif"),
    },
    C014: {
        normal1: require("../../assets/images/ciencias/C014/normal1.gif"),
    },
    C017: {
        normal1: require("../../assets/images/ciencias/C017/normal1.gif"),
    },
    C018: {
        normal1: require("../../assets/images/ciencias/C018/normal1.gif"),
    },
    C019: {
        normal1: require("../../assets/images/ciencias/C019/normal1.gif"),
    },
    C025: {
        normal1: require("../../assets/images/ciencias/C025/normal1.gif"),
    },


    CWC1: {
        M1: require('../../assets/images/ciencias/CWC1/M1.gif'),
        W1: require('../../assets/images/ciencias/CWC1/W1.gif'),
        M2: require('../../assets/images/ciencias/CWC1/M2.gif'),
        W2: require('../../assets/images/ciencias/CWC1/W2.gif'),
    },
    CWC0: {
        M1: require('../../assets/images/ciencias/CWC0/M1.gif'),
        W1: require('../../assets/images/ciencias/CWC0/W1.gif'),
        M2: require('../../assets/images/ciencias/CWC0/M2.gif'),
        W2: require('../../assets/images/ciencias/CWC0/W2.gif'),
    },
    CWC2: {	
        M1: require('../../assets/images/ciencias/CWC2/M1.gif'),	
        W1: require('../../assets/images/ciencias/CWC2/W1.gif'),	
        M2: require('../../assets/images/ciencias/CWC2/M2.gif'),	
        W2: require('../../assets/images/ciencias/CWC2/W2.gif'),	
    },
    misc: {
        ladder: require('../../assets/images/ciencias/misc/ladder.gif'),
        ladder2: require('../../assets/images/ciencias/misc/ladder2.gif'),
    },
    COFFEE: {
        COFFEE: require('../../assets/images/ciencias/COFFEE/coffee.gif'),
    },
};




export const ciencias: Classrooms = {
    C101: {
        id: "C101",
        build: "ciencias",
        floor: "1",
        number: "101",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C101.normal1],
            },
        ],
    },
    C104: {
        id: "C104",
        build: "ciencias",
        floor: "1",
        number: "104",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C104.normal1],
            },
        ],
    },
    C109: {
        id: "C109",
        build: "ciencias",
        floor: "1",
        number: "109",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C109.normal1],
            },
        ],
    },
    C114: {
        id: "C114",
        build: "ciencias",
        floor: "1",
        number: "114",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C114.normal1],
            },
        ],
    },
    C116: {
        id: "C116",
        build: "ciencias",
        floor: "1",
        number: "116",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C116.normal1],
            },
        ],
    },
    C117: {
        id: "C117",
        build: "ciencias",
        floor: "1",
        number: "117",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C117.normal1],
            },
        ],
    },
    C118: {
        id: "C118",
        build: "ciencias",
        floor: "1",
        number: "118",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C118.normal1],
            },
        ],
    },
    C119: {
        id: "C119",
        build: "ciencias",
        floor: "1",
        number: "119",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C119.normal1],
            },
        ],
    },
    C120: {
        id: "C120",
        build: "ciencias",
        floor: "1",
        number: "120",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.C120.normal1],
            },
        ],
    },


    CWC1: {
        id: "CWC1",
        build: "ciencias",
        floor: "1",
        number: "WC-1",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [images.CWC1.M1],
            },
            {
                type: "M2",
                resources: [
                    images.CWC1.M2
                ]
            },
            {
                type: "W1",
                resources: [images.CWC1.W1],
            },
            {
                type: "W2",
                resources: [
                    images.CWC1.W2
                ]
            },
        ],
    },


    CCAFE: {
        id: "CCAFE",
        build: "ciencias",
        floor: "1",
        number: "COFFEE",
        show: true,
        type: ClassroomTypes.CAFE,
        resources: [
            {
                type: "COFFEE",
                resources: [images.COFFEE.COFFEE],
            },

        ],
    },

    C012: {
        id: "C012",
        build: "ciencias",
        floor: "0",
        number: "012",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder, images.C012.normal1],
            },
        ],
    },

    C013: {
        id: "C013",
        build: "ciencias",
        floor: "0",
        number: "013",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder, images.C013.normal1],
            },
        ],
    },

    C014: {
        id: "C014",
        build: "ciencias",
        floor: "0",
        number: "014",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder, images.C014.normal1],
            },
        ],
    },

    C017: {
        id: "C017",
        build: "ciencias",
        floor: "0",
        number: "017",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder, images.C017.normal1],
            },
        ],
    },

    C018: {
        id: "C018",
        build: "ciencias",
        floor: "0",
        number: "018",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder, images.C018.normal1],
            },
        ],
    },

    C019: {
        id: "C019",
        build: "ciencias",
        floor: "0",
        number: "019",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder, images.C019.normal1],
            },
        ],
    },

    C025: {
        id: "C025",
        build: "ciencias",
        floor: "0",
        number: "025",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder, images.C025.normal1],
            },
        ],
    },

    CWC0: {
        id: "CWC0",
        build: "ciencias",
        floor: "0",
        number: "WC-0",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [images.misc.ladder, images.CWC0.M1],
            },
            {
                type: "M2",
                resources: [
                    images.misc.ladder, images.CWC0.M2
                ]
            },
            {
                type: "W1",
                resources: [images.misc.ladder, images.CWC0.W1],
            },
            {
                type: "W2",
                resources: [
                    images.misc.ladder, images.CWC0.W2
                ]
            },
        ],
    },
    CWC2: {
        id: "CWC2",
        build: "ciencias",
        floor: "2",
        number: "WC-2",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [images.misc.ladder2, images.misc.ladder2, images.CWC2.M1],
            },
            {
                type: "M2",
                resources: [
                    images.misc.ladder2, images.CWC2.M2
                ]
            },
            {
                type: "W1",
                resources: [images.misc.ladder2, images.CWC2.W1],
            },
            {
                type: "W2",
                resources: [
                    images.misc.ladder2, images.CWC2.W2
                ]
            },
        ],
    },

    C201: {
        id: "C201",
        build: "ciencias",
        floor: "2",
        number: "201",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C201.normal1],
            },
        ],
    },
    C203: {
        id: "C203",
        build: "ciencias",
        floor: "2",
        number: "203",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C203.normal1],
            },
        ],
    },
    C204: {
        id: "C204",
        build: "ciencias",
        floor: "2",
        number: "204",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C204.normal1],
            },
        ],
    },
    C205: {
        id: "C205",
        build: "ciencias",
        floor: "2",
        number: "205",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C205.normal1],
            },
        ],
    },
    C209: {
        id: "C209",
        build: "ciencias",
        floor: "2",
        number: "209",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C209.normal1],
            },
        ],
    },
    C213: {
        id: "C213",
        build: "ciencias",
        floor: "2",
        number: "213",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C213.normal1],
            },
        ],
    },
    C214: {
        id: "C214",
        build: "ciencias",
        floor: "2",
        number: "214",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C214.normal1],
            },
        ],
    },
    C215: {
        id: "C215",
        build: "ciencias",
        floor: "2",
        number: "215",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C215.normal1],
            },
        ],
    },
    C217: {
        id: "C217",
        build: "ciencias",
        floor: "2",
        number: "217",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C217.normal1],
            },
        ],
    },
    C218: {
        id: "C218",
        build: "ciencias",
        floor: "2",
        number: "218",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C218.normal1],
            },
        ],
    },
    C219: {
        id: "C219",
        build: "ciencias",
        floor: "2",
        number: "219",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C219.normal1],
            },
        ],
    },
    C220: {
        id: "C220",
        build: "ciencias",
        floor: "2",
        number: "220",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C220.normal1],
            },
        ],
    },
    C221: {
        id: "C221",
        build: "ciencias",
        floor: "2",
        number: "221",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "Normal",
                resources: [images.misc.ladder2, images.C221.normal1],
            },
        ],
    },
    



};
