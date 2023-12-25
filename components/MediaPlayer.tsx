"use client";


export default function MediaPlayer() {
    return (
<div className="player-container">
    <audio 
        slot="media" 
        preload="metadata" 
        crossorigin="anonymous" 
        src="">
    </audio>
</div>
    )

}


