<script> 
import { format } from "date-fns"

export let data;

let currentTime = new Date().getTime()

setInterval(() => {
    currentTime = new Date().getTime()
}, 1000);

let albumImage;

</script>

<div class="flex flex-col gap-y-4 items-center mt-4 w-full text-[#fff]">
    <div class="text-center">
        <p class="text-2xl font-bold">Last 15 Tracks</p>
        <p class="text-md text-[#a8a8a8]">Current Time</p>
        <div class="mt-[1px] px-[2.5rem] py-2 border-[1px] border-[#252525]">
            <p class="text-md text-[#a8a8a8]">{format(currentTime, 'HH:mm:ssa')}</p>
        </div>
    </div>
    <div class="flex flex-col px-4 py-4 rounded-md gap-y-2">
        {#each data.track as track} 
            <div class="flex flex-row px-2 py-2 gap-x-4 rounded-md border-[1px] border-[#252525]">
                {#if track.image[2]['#text'] === 'https://lastfm.freetls.fastly.net/i/u/174s/2a96cbd8b46e442fc41c2b86b821562f.png'}
                    <img src="https://kharoxe.wtf/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsong.a188f83d.webp&w=96&q=75" class="rounded-md" height="75" width="75"  alt="">
                    {:else}
                    <img src={track.image[2]['#text']} class="rounded-md" height="75" width="75"  alt="">
                {/if}
                <div class="flex flex-col py-4">
                    <a href={track.url} target="_blank" class="hover:underline">
                        {track.artist['#text']} - {track.name}   
                    </a>     
                    <p class="text-sm text-[#a8a8a8]">
                        {track.album['#text']}
                    </p>               
                </div>
            </div>
        {/each}
    </div>
</div>