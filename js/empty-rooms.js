const newDevelopment = [
    {
        name: 'Miss Scarlet',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': true},
            {'billiard room': false},
            {library: true}
        ]
    },
    {
        name: 'Reverend Green',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Colonel Mustard',
        present: true,
        rooms: [
            {kitchen: false},
            {ballroom: false},
            {conservatory: true},
            {'dining room': false},
            {'billiard room': true},
            {library: false}
        ]
    },
    {
        name: 'Professor Plum',
        present: true,
        rooms: [
            {kitchen: true},
            {ballroom: false},
            {conservatory: false},
            {'dining room': true},
            {'billiard room': false},
            {library: false}
        ]
    }
];

const notInRoom = (suspects, suspectRooms) => {
    _.forEach(suspects, function (suspect) {
        let rooms = _.reduce(suspect.rooms, (result =[], value) => {
            if (Object.values(value)[0] === false){
                result.push(Object.keys(value)[0]);
            }
            return result
        }, []);
        suspectRooms.push(rooms);
    });
}
let myArr = [];
notInRoom(newDevelopment, myArr);
let commonRooms = _.intersection(...myArr);
console.log(commonRooms[0]);