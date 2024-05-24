// Protürkten izle
https://www.youtube.com/@PROTOTURKCOM/playlists
const points = [70, 25, 35, 10, 75, 80, 27];

const result = points.reduce((value,point) => {
    if(point>50){
        value++
    }
    return value;
},0)

console.log(result);