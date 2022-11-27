const audio = new Audio('audio/1.mp3');
// audio.play();


const musics=[
    {
        id:"1",
        musicName:` Naina Ashq Na Ho <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/1.jpg",
    },
    {
        id:"2",
        musicName:` Khairiyat  <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/2.jpg",
    },
    // all object type 
    {
        id:"3",
        musicName: `O Desh Mere <br><div class="subtitle"> Arjit Singh</div>`,
        poster: "img/arjit/3.jpg",
    },
    {
        id:"4",
        musicName: ` Tera naam Dhoga rakh du <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/4.jpg",
    },
    {
        id:"5",
        musicName: `Tera yaar hu me <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/5.jpg",
    },
    {
        id:"6",
        musicName: `Maai Teri chunariya <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/6.jpg",
    },
    {
        id:"7",
        musicName: `Galti se mistake <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/7.jpg",
    },
    {
        id:"8",
        musicName: `Hamari adhuri kahani <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/8.jpg",
    },
    {
        id:"9",
        musicName: `neki ki raah par tu chal <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/9.jpg",
    },
    {
        id:"10",
        musicName: `Jo tu mera hum dard h <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/10.jpg",
    },
    {
        id:"11",
        musicName: `mere yaara <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/11.jpg",
    },
    {
        id:"12",
        musicName: `Nashe se chad gyi oye <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/12.jpg",
    },
    {
        id:"13",
        musicName: `Ae Watan Watan Mere <br><div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/13.jpg",
    },
    {
        id:"14",
        musicName: `Agar Tum Saath Ho <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/14.jpg",
    },
    {
        id:15,
        musicName: `Pachtaoge <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "img/arjit/15.jpg",
    },
    // {
    //     id: 16,
    //     musicName:`Kinna Sona rab ne bnaya <br>
    //     <div class="subtitle">Jubin Nautiyal</div>`,
    //     poster:"img/16.jpg"
    // },
    // {
    //     id: 17,
    //     musicName:`Kya Baat Ay <br>
    //     <div class="subtitle"> Harrdy Sandhu</div>`,
    //     poster:"img/17.jpg"
    // },
    // {
    //     id: 18,
    //     musicName:`Oye Hoye Hoye  <br>
    //     <div class="subtitle">Jassie Gill</div>`,
    //     poster:"img/18.jpg"
    // },
    // {
    //     id: 19,
    //     musicName:`Tera Yaar Hoon Main <br>
    //     <div class="subtitle">Arijit Singh</div>`,
    //     poster:"img/19.jpg"
    // },
    // {
    //     id: 20,
    //     musicName:`Thoda Thoda Pyaar Hua Tumse  <br>
    //     <div class="subtitle">Stebin Ben</div>`,
    //     poster:"img/20.jpg"
    // },  
]

Array.from(document.getElementsByClassName('songList')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = musics[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = musics[i].musicName;
    
})
let play_button = document.getElementById('play_button');
let wave = document.getElementsByClassName('wave')[0];

play_button.addEventListener('click',()=>{
    if (audio.paused || audio.currentTime <=0) {
        audio.play();
        play_button.classList.remove('bi-play-circle');
        play_button.classList.add('bi-pause-circle');
        wave.classList.add('active1');
        
    } else {
        audio.pause();
        wave.classList.remove('active1');
        play_button.classList.add('bi-play-circle');
        play_button.classList.remove('bi-pause-circle');
       
    }


} );


const makeAllBackgrounds =() =>{
    Array.from(document.getElementsByClassName('songList')).forEach((el)=>{
        el.style.background = 'rgba(74, 21, 148, 0.1)';
    })

}
const makeAll_plays =() =>{
    Array.from(document.getElementsByClassName('playlistSong')).forEach((el)=>{
        el.classList.add('bi-play-circle');
        el.classList.remove('bi-pause-circle');
    })

}
let index = 0;
let poster_m_play = document.getElementById('poster_m_play');

Array.from(document.getElementsByClassName('playlistSong')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index=el.target.id;
        // console.log(index);
        audio.src = `audio/arjit/${index}.mp3`;
        poster_m_play.src = `img/arjit/${index}.jpg`;
        audio.play();
        play_button.classList.remove('bi-play-circle');
        play_button.classList.add('bi-pause-circle');
        
        let songTitles = musics.filter((elt)=>{
            return elt.id == index;
        });
        songTitles.forEach(eltt =>{
            let{musicName} = eltt;
            title.innerHTML = musicName;
        });

        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songList'))[index - 1].style.background = 'rgba(74, 21, 148, 0.1)';
        makeAll_plays();
        el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
        wave.classList.add('active1');  
    });
})

let Start=document.getElementById('Start');
let End=document.getElementById('End');
let seek=document.getElementById('seek');
let bar2=document.getElementById('bar2');
let dot=document.getElementsByClassName('dot')[0];

audio.addEventListener('timeupdate',()=>{
    let audio_curr= audio.currentTime;
    let audio_dur= audio.duration;
    
    let min2= Math.floor(audio_curr / 60);
    let sec2= Math.floor(audio_curr % 60);
    
    Start.innerText =`${min2}:${sec2}`;
    
    if(sec2 < 10 ){
        sec2=`0${sec2}`;
    }

    let min1 = Math.floor(audio_dur / 60);
    let sec1 = Math.floor(audio_dur % 60);
    // console.log(min1);
    if(sec1 < 10 ){
        sec1=`0${sec1}`;
    }
    End.innerText =`${min1}:${sec1}`;

    let progressBar =  parseInt((audio_curr / audio_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
    
});
seek.addEventListener('change', ()=>{
    audio.currentTime = seek.value * audio.duration/100;
});
// audio.addEventListener('ended', ()=>{
//     play_button.classList.add('bi-play-circle');
//     play_button.classList.remove('bi-pause-circle');
//     wave.classList.remove('active2');
// });
let volume_icon = document.getElementById('volume_icon');
let volume = document.getElementById('volume');
let volume_bar = document.getElementsByClassName('volume_bar')[0];
let volume_dot = document.getElementById('volume_dot');

volume.addEventListener('change', ()=>{
    if (volume.value == 0) {
        volume_icon.classList.remove('bi-volume-up');
        volume_icon.classList.remove(' bi-volume-down');
        volume_icon.classList.add('bi-volume-off');
    }
    if (volume.value > 0) {
        volume_icon.classList.remove('bi-volume-up');
        volume_icon.classList.add(' bi-volume-down');
        volume_icon.classList.remove('bi-volume-off');
    }
    if (volume.value >= 50) {
        volume_icon.classList.add('bi-volume-up');
        volume_icon.classList.remove(' bi-volume-down');
        volume_icon.classList.add('bi-volume-off');
    }
    

    let volume_a = volume.value;
    volume_bar.style.width = `${vol_a}%`;
    volume_dot.style.left = `${vol_a}%`;
    audio.volume = volume_a/100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index<1){
        index = Array.from(documnet.getElementsByClassName('songList')).length;
    }
    audio.src = `audio/arjit/${index}.mp3`;
        poster_m_play.src = `img/arjit/${index}.jpg`;
        audio.play();
        play_button.classList.remove('bi-play-circle');
        play_button.classList.add('bi-pause-circle');
        
        let songTitles = musics.filter((elt)=>{
            return elt.id == index;
        });
        songTitles.forEach(eltt =>{
            let{musicName} = eltt;
            title.innerHTML = musicName;
        });

        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songList'))[index - 1].style.background = 'rgba(74, 21, 148, 0.1)';
        makeAll_plays();
        el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
        wave.classList.add('active1');

});
next.addEventListener('click', ()=>{
    
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songList')).length){
        index = 1;
    }
    audio.src = `audio/${index}.mp3`;
        poster_m_play.src = `img/${index}.jpg`;
        audio.play();
        play_button.classList.remove('bi-play-circle');
        play_button.classList.add('bi-pause-circle');
        
        let songTitles = musics.filter((elt)=>{
            return elt.id == index;
        });
        songTitles.forEach(eltt =>{
            let{musicName} = eltt;
            title.innerHTML = musicName;
        });

        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songList'))[index - 1].style.background = 'rgba(74, 21, 148, 0.1)';
        makeAll_plays();
        el.target.classList.remove('bi-play-circle');
        el.target.classList.add('bi-pause-circle');
        wave.classList.add('active1');
});


let fam_song_left=document.getElementById('fam_song_left');
let fam_song_right=document.getElementById('fam_song_right');
let fam_song = document.getElementsByClassName('fam_song')[0];


fam_song_right.addEventListener('click',()=>{
    fam_song.scrollLeft += 300;
}
);
fam_song_left.addEventListener('click',()=>{
    fam_song.scrollLeft -= 300;
}
);
let fam_artist_left=document.getElementById('fam_artist_left');
let fam_artist_right=document.getElementById('fam_artist_right');
let item = document.getElementsByClassName('item')[0];

fam_song_right.addEventListener('click',()=>{
    item.scrollLeft += 350;
}
);
fam_song_left.addEventListener('click',()=>{
    item.scrollLeft -= 350;
}
);

