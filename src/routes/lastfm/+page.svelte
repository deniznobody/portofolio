<script> 
import { format } from "date-fns"

export let data;

let currentTime = new Date().getTime()

setInterval(() => {
    currentTime = new Date().getTime()
}, 1000);
</script>

<div class="flex flex-col gap-y-4 items-center mt-4 w-full text-[#fff]">
    <div class="text-center">
        <p class="text-2xl font-bold">Last 15 Tracks</p>
        <p class="text-md text-[#a8a8a8]">Current Time</p>
        <div class="mt-[1px] px-[2.5rem] py-2 border-[1px] border-[#252525]">
            <p class="text-md text-[#a8a8a8]">{format(currentTime, 'H:m:ssa')}</p>
        </div>
    </div>
    <div class="flex flex-col px-4 py-4 rounded-md gap-y-2">
        {#each data.track as track} 
            <div class="flex flex-row px-2 py-2 gap-x-4 rounded-md border-[1px] border-[#252525]">
                <img src={track.image[3]['#text']} class="rounded-md" height="72" width="72"  alt="">
                <div class="flex flex-col py-4">
                    <p>
                        {track.name}   
                    </p>     
                    <p class="text-sm text-[#a8a8a8]">
                        {track.album['#text']}
                    </p>               
                </div>
            </div>
        {/each}
    </div>
</div>