<script lang="ts">
	import { onMount } from 'svelte';
	
	let recentTracks;
	let lastTrack: any;
	let arrlastTrack: any;
	

	onMount(async () => {
		setInterval(async () => {
		const res = await fetch(`/api/last`);
			recentTracks = await res.json();
			arrlastTrack = Object.entries(recentTracks.track)[0];
			lastTrack = JSON.parse(JSON.stringify(arrlastTrack))[1];
			if(!lastTrack['@attr']) {
				lastTrack = undefined
			}
		}, 3000)		

	});

</script>

<div class="text-texts flex flex-col justify-center items-center min-h-screen w-full">
	<img
		src="https://api.lanyard.rest/1274308572150501408.png"
		height="48"
		width="128"
		alt=""
		class="rounded-full border-[1px] border-[#252525]"
	/>

	<p class="text-text mt-2">dêniz</p>
	<p class="text-[#a8a8a8] text-sm">Real eyes realize real lies.</p>
		{#if lastTrack} 
			<div class="flex flex-row items-center p-4 w-max-48  gap-x-4 mt-4 h-24 m text-text shadow-lg border-[1px] border-[#252525] rounded-md justify-center mt-t">
				{#if lastTrack.image[2]['#text'] === 'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2'}
					<img class="rounded-md" src="https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2" height="75" width="75" alt=""> 
				{:else}
					<img class="rounded-md" src={lastTrack.image[2]['#text']} height="75" width="75" alt=""> 
				{/if}
				<div class="flex flex-col">
					{lastTrack.artist['#text']} - {lastTrack.name}
					<div class="flex flex-row gap-x-2 text-[#a8a8a8] shadow-lg text-sm">
						<p>{lastTrack.album['#text']}</p>
						<p>- Listening now</p>
					</div>
				</div>
			</div>
		{:else}
			<div class="flex flex-row items-center p-4 w-max-48  gap-x-4 mt-4 h-24 m text-text border-[1px] shadow-lg  border-[#252525] rounded-md justify-center mt-t">
				<img class="rounded-md border-[2px] border-[#252525]" src="https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2" height="75" width="75" alt=""> 
				<div class="flex flex-col">
					Not listening to anything.
					<div class="flex flex-row gap-x-2 text-[#a8a8a8] text-sm">
						Spotify
					</div>
				</div>
			</div>
		{/if}
	<div
		class="w-48 h-12 text-text flex flex-row items-center justify-center mt-4 rounded-md gap-4"
	>
		<a
			href="https://discord.com/users/1149375668057034752"
			target="_blank"
			class="hover:cursor-pointer hover:text-primary transition-all duration-300"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
				><path
					fill="currentColor"
					d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"
				/></svg
			>
		</a>
		<a
			href="https://t.me/oddbaijanian"
			target="_blank"
			class="hover:cursor-pointer hover:text-primary transition-all duration-300"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"
				><path
					fill="currentColor"
					d="M26.07 3.996a2.974 2.974 0 0 0-.933.223h-.004c-.285.113-1.64.683-3.7 1.547l-7.382 3.109c-5.297 2.23-10.504 4.426-10.504 4.426l.062-.024s-.359.118-.734.375a2.03 2.03 0 0 0-.586.567c-.184.27-.332.683-.277 1.11c.09.722.558 1.155.894 1.394c.34.242.664.355.664.355h.008l4.883 1.645c.219.703 1.488 4.875 1.793 5.836c.18.574.355.933.574 1.207c.106.14.23.257.379.351a1.119 1.119 0 0 0 .246.106l-.05-.012c.015.004.027.016.038.02c.04.011.067.015.118.023c.773.234 1.394-.246 1.394-.246l.035-.028l2.883-2.625l4.832 3.707l.11.047c1.007.442 2.027.196 2.566-.238c.543-.437.754-.996.754-.996l.035-.09l3.734-19.129c.106-.472.133-.914.016-1.343a1.807 1.807 0 0 0-.781-1.047a1.872 1.872 0 0 0-1.067-.27zm-.101 2.05c-.004.063.008.056-.02.177v.011l-3.699 18.93c-.016.027-.043.086-.117.145c-.078.062-.14.101-.465-.028l-5.91-4.531l-3.57 3.254l.75-4.79l9.656-9c.398-.37.265-.448.265-.448c.028-.454-.601-.133-.601-.133l-12.176 7.543l-.004-.02l-5.836-1.965v-.004l-.015-.003a.27.27 0 0 0 .03-.012l.032-.016l.031-.011s5.211-2.196 10.508-4.426c2.652-1.117 5.324-2.242 7.379-3.11a807.312 807.312 0 0 1 3.66-1.53c.082-.032.043-.032.102-.032z"
				/></svg
			>
		</a>
		<a
			href="https://github.com/deniznobody"
			target="_blank"
			class="hover:cursor-pointer hover:text-primary transition-all duration-300"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-github"
				><path
					d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
				/><path d="M9 18c-4.51 2-5-2-7-2" /></svg
			>
		</a>
		<a
			href="https://www.last.fm/user/deniznobody"
			target="_blank"
			class="hover:cursor-pointer hover:text-primary transition-all duration-300"
		>
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path fill="currentColor" d="m225.8 367.1l-18.8-51s-30.5 34-76.2 34c-40.5 0-69.2-35.2-69.2-91.5c0-72.1 36.4-97.9 72.1-97.9c66.5 0 74.8 53.3 100.9 134.9c18.8 56.9 54 102.6 155.4 102.6c72.7 0 122-22.3 122-80.9c0-72.9-62.7-80.6-115-92.1c-25.8-5.9-33.4-16.4-33.4-34c0-19.9 15.8-31.7 41.6-31.7c28.2 0 43.4 10.6 45.7 35.8l58.6-7c-4.7-52.8-41.1-74.5-100.9-74.5c-52.8 0-104.4 19.9-104.4 83.9c0 39.9 19.4 65.1 68 76.8c44.9 10.6 79.8 13.8 79.8 45.7c0 21.7-21.1 30.5-61 30.5c-59.2 0-83.9-31.1-97.9-73.9c-32-96.8-43.6-163-161.3-163C45.7 113.8 0 168.3 0 261c0 89.1 45.7 137.2 127.9 137.2c66.2 0 97.9-31.1 97.9-31.1z"/></svg>
		</a>
		<a
			href="https://sptfy.com/dnizwrld"
			target="_blank"
			class="hover:cursor-pointer hover:text-primary transition-all duration-300"
		>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M17.9 10.9C14.7 9 9.35 8.8 6.3 9.75c-.5.15-1-.15-1.15-.6c-.15-.5.15-1 .6-1.15c3.55-1.05 9.4-.85 13.1 1.35c.45.25.6.85.35 1.3c-.25.35-.85.5-1.3.25m-.1 2.8c-.25.35-.7.5-1.05.25c-2.7-1.65-6.8-2.15-9.95-1.15c-.4.1-.85-.1-.95-.5c-.1-.4.1-.85.5-.95c3.65-1.1 8.15-.55 11.25 1.35c.3.15.45.65.2 1m-1.2 2.75c-.2.3-.55.4-.85.2c-2.35-1.45-5.3-1.75-8.8-.95c-.35.1-.65-.15-.75-.45c-.1-.35.15-.65.45-.75c3.8-.85 7.1-.5 9.7 1.1c.35.15.4.55.25.85M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2Z"/></svg>
		</a>
	</div>
</div>
