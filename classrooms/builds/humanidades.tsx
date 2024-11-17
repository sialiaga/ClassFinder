import { Classrooms, ClassroomTypes } from "../typesClassrooms";
import { misc } from "./misc";

const images = {


    HAM: {
        normal1: require('../../assets/images/humanidades/HAM/normal1.gif')
    },
    H011: {
        normal1: require('../../assets/images/humanidades/H011/normal1.gif')
    },
    H012: {
        normal1: require('../../assets/images/humanidades/H012/normal1.gif')
    },
    H013: {
        normal1: require('../../assets/images/humanidades/H013/normal1.gif')
    },


    H101: {
        normal1: require('../../assets/images/humanidades/H101/normal1.gif')
    },
    H103: {
        normal1: require('../../assets/images/humanidades/H103/normal1.gif')
    },
    H104: {
        normal1: require('../../assets/images/humanidades/H104/normal1.gif')
    },
    H105: {
        normal1: require('../../assets/images/humanidades/H105/normal1.gif')
    },
    H107: {
        normal1: require('../../assets/images/humanidades/H107/normal1.gif')
    },
    H108: {
        normal1: require('../../assets/images/humanidades/H108/normal1.gif')
    },
    H109: {
        normal1: require('../../assets/images/humanidades/H109/normal1.gif')
    },
    H116: {
        normal1: require('../../assets/images/humanidades/H116/normal1.gif')
    },

    H201: {
        normal1: require('../../assets/images/humanidades/H201/normal1.gif')
    },
    H203: {
        normal1: require('../../assets/images/humanidades/H203/normal1.gif')
    },
    H204: {
        normal1: require('../../assets/images/humanidades/H204/normal1.gif')
    },
    H205: {
        normal1: require('../../assets/images/humanidades/H205/normal1.gif')
    },
    H207: {
        normal1: require('../../assets/images/humanidades/H207/normal1.gif')
    },
    H208: {
        normal1: require('../../assets/images/humanidades/H208/normal1.gif')
    },
    H211: {
        normal1: require('../../assets/images/humanidades/H211/normal1.gif')
    },
    H212: {
        normal1: require('../../assets/images/humanidades/H212/normal1.gif')
    },
    H213: {
        normal1: require('../../assets/images/humanidades/H213/normal1.gif')
    },
    H214: {
        normal1: require('../../assets/images/humanidades/H214/normal1.gif')
    },
    H219: {
        normal1: require('../../assets/images/humanidades/H219/normal1.gif')
    },
    H220: {
        normal1: require('../../assets/images/humanidades/H220/normal1.gif')
    },
    H221: {
        normal1: require('../../assets/images/humanidades/H221/normal1.gif')
    },

    HWC2: {
        M1: require('../../assets/images/humanidades/HWC2/M1.gif'),
        M2: require('../../assets/images/humanidades/HWC2/M2.gif'),
        W1: require('../../assets/images/humanidades/HWC2/W1.gif'),
        W2: require('../../assets/images/humanidades/HWC2/W2.gif'),
    },


    HCAFE: {
        normal1: require('../../assets/images/humanidades/HCAFE/normal1.gif')
    },
    HWC1: {
        M1: require('../../assets/images/humanidades/HWC1/M1.gif'),
        M2: require('../../assets/images/humanidades/HWC1/M2.gif'),
        W1: require('../../assets/images/humanidades/HWC1/W1.gif'),
        W2: require('../../assets/images/humanidades/HWC1/W2.gif'),
    },
    HWC0: {
        M1: require('../../assets/images/humanidades/HWC0/M1.gif'),
        M2: require('../../assets/images/humanidades/HWC0/M2.gif'),
        W1: require('../../assets/images/humanidades/HWC0/W1.gif'),
    },

    misc: {
        ladder: require('../../assets/images/humanidades/misc/ladder.gif'),
        ladder2: require('../../assets/images/humanidades/misc/ladder2.gif'),

    }
}

export const humanidades: Classrooms = {



    HAM: {
        id: "HAM",
        build: "humanidades",
        floor: "0",
        number: "AM",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder2, images.HAM.normal1
                ]
            }
        ]
    },
    H011: {
        id: "H011",
        build: "humanidades",
        floor: "0",
        number: "11",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder2, images.H011.normal1
                ]
            }
        ]
    },
    H012: {
        id: "H012",
        build: "humanidades",
        floor: "0",
        number: "12",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H012.normal1
                ]
            }
        ]
    },
    H013: {
        id: "H013",
        build: "humanidades",
        floor: "0",
        number: "13",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H013.normal1
                ]
            }
        ]
    },
    HWC0: {
        id: "HWC0",
        build: "humanidades",
        floor: "0",
        number: "WC-0",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [
                    images.misc.ladder, images.HWC0.M1
                ]
            },
            {
                type: "M2",
                resources: [
                    images.misc.ladder2, images.HWC0.M2
                ]
            },
            {
                type: "W1",
                resources: [
                    images.misc.ladder, images.HWC0.W1
                ]
            },
        ]},


    H101: {
        id: "H101",
        build: "humanidades",
        floor: "1",
        number: "01",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.H101.normal1
                ]
            }
        ]
    },
    H103: {
        id: "H103",
        build: "humanidades",
        floor: "1",
        number: "03",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.H103.normal1
                ]
            }
        ]
    },
    H104: {
        id: "H104",
        build: "humanidades",
        floor: "1",
        number: "04",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.H104.normal1
                ]
            }
        ]
    },
    H105: {
        id: "H105",
        build: "humanidades",
        floor: "1",
        number: "05",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.H105.normal1
                ]
            }
        ]
    },
    H107: {
        id: "H107",
        build: "humanidades",
        floor: "1",
        number: "07",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.H107.normal1
                ]
            }
        ]
    },
    H108: {
        id: "H108",
        build: "humanidades",
        floor: "1",
        number: "08",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.H108.normal1
                ]
            }
        ]
    },
    H109: {
        id: "H109",
        build: "humanidades",
        floor: "1",
        number: "09",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.H109.normal1
                ]
            }
        ]
    },
    H116: {
        id: "H116",
        build: "humanidades",
        floor: "1",
        number: "16",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.H116.normal1
                ]
            }
        ]
    },


    H201: {
        id: "H201",
        build: "humanidades",
        floor: "2",
        number: "01",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H201.normal1
                ]
            }
        ]
    },
    H203: {
        id: "H203",
        build: "humanidades",
        floor: "2",
        number: "03",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H203.normal1
                ]
            }
        ]
    },
    H204: {
        id: "H204",
        build: "humanidades",
        floor: "2",
        number: "04",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H204.normal1
                ]
            }
        ]
    },
    H205: {
        id: "H205",
        build: "humanidades",
        floor: "2",
        number: "05",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H205.normal1
                ]
            }
        ]
    },
    H207: {
        id: "H207",
        build: "humanidades",
        floor: "2",
        number: "07",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H207.normal1
                ]
            }
        ]
    },
    H208: {
        id: "H208",
        build: "humanidades",
        floor: "2",
        number: "08",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H208.normal1
                ]
            }
        ]
    },
    H211: {
        id: "H211",
        build: "humanidades",
        floor: "2",
        number: "11",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H211.normal1
                ]
            }
        ]
    },
    H212: {
        id: "H212",
        build: "humanidades",
        floor: "2",
        number: "12",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H212.normal1
                ]
            }
        ]
    },
    H213: {
        id: "H213",
        build: "humanidades",
        floor: "2",
        number: "13",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H213.normal1
                ]
            }
        ]
    },
    H214: {
        id: "H214",
        build: "humanidades",
        floor: "2",
        number: "14",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H214.normal1
                ]
            }
        ]
    },
    H219: {
        id: "H219",
        build: "humanidades",
        floor: "2",
        number: "19",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H219.normal1
                ]
            }
        ]
    },
    H220: {
        id: "H220",
        build: "humanidades",
        floor: "2",
        number: "20",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H220.normal1
                ]
            }
        ]
    },
    H221: {
        id: "H221",
        build: "humanidades",
        floor: "2",
        number: "21",
        show: true,
        type: ClassroomTypes.CLASS,
        resources: [
            {
                type: "normal",
                resources: [
                    images.misc.ladder, images.H221.normal1
                ]
            }
        ]
    },

    HWC2: {
        id: "HWC2",
        build: "humanidades",
        floor: "2",
        number: "WC-2",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [
                    images.misc.ladder, images.HWC2.M1
                ]
            },
            {
                type: "M2",
                resources: [
                    images.misc.ladder, images.HWC2.M2
                ]
            },
            {
                type: "W1",
                resources: [
                    images.misc.ladder, images.HWC2.W1
                ]
            },
            {
                type: "W2",
                resources: [
                    images.misc.ladder, images.HWC2.W2
                ]
            },
        ]
    },



    HCAFE: {
        id: "HCAFE",
        build: "humanidades",
        floor: "1",
        number: "CAFE",
        show: true,
        type: ClassroomTypes.CAFE,
        resources: [
            {
                type: "normal",
                resources: [
                    images.HCAFE.normal1
                ]
            }
        ]
    },
    HWC1: {
        id: "HWC1",
        build: "humanidades",
        floor: "1",
        number: "WC-1",
        show: true,
        type: ClassroomTypes.WC,
        resources: [
            {
                type: "M1",
                resources: [
                    images.HWC1.M1
                ]
            },
            {
                type: "M2",
                resources: [
                    images.HWC1.M2
                ]
            },
            {
                type: "W1",
                resources: [
                    images.HWC1.W1
                ]
            },
            {
                type: "W2",
                resources: [
                    images.HWC1.W2
                ]
            },
        ]
    },
}
