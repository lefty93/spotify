class song_info {
    constructor(name, producer, album, duration, source, pic) {
        this.song_name = name;
        this.producer_name = producer;
        this.length_of_song = duration;
        this.sauce = source;
        this.cover = pic;
    }
}

const nier_1 = new song_info("Voice of no return", "Square Enix", "Peacefull", 231, "/music/nier_1", "/music/nier_cover.jpeg");
const nier_2 = new song_info("Weight of the world", "Square Enix", "Peacefull", 231, "/music/nier_2", "/music/nier_cover.jpeg");
const nier_3 = new song_info("Sound of the end", "Square Enix", "Peacefull", 231, "/music/nier_3", "/music/nier_cover.jpeg");
const emils_shop = new song_info("emils_shop", "Square Enix", "Peacefull", 231, "/music/emils_shop", '/music/nier_cover.jpeg');
var songs = [nier_1, nier_2, nier_3, emils_shop];

function update_playelist(){
    var playlist = ``;
    for (let i = 0; i < songs.length; i++) {
        playlist += `<div><p>${i+1}</p><h3>${current_song.song_name}</h3></div>`;
    }
    document.querySelector("#playlist").innerHTML = playlist;
}

const current_playing_name = document.querySelector(".current_info_name");

var current_song = songs[1];
function change_song_name() {
    current_playing_name.innerHTML = `<div style="display:flex;align-items:center;height:10vh"><img style="height:8vh;border-radius:10px;margin-right:10px" src=${current_song.cover}><div style="display: flex;flex-direction: column;flex-wrap: wrap;justify-content: space-evenly;height:8vh"><p>${current_song.song_name}</p><p>${current_song.producer_name}</p></div></div>`;
}
change_song_name();
update_playelist();