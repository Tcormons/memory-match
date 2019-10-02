jQuery(document).ready(function() 
{
	const howlerList = {};
	
	for (var i = sounds.length - 1; i >= 0; i--) 
	{
		howlerList[sounds[i]] = new Howl(
		{
			src: ["/audio/ram/meeseeks/1/" + sounds[i] + ".mp3"]
		});
		
		jQuery("#" + sounds[i]).click(function() 
		{	
			Object.keys(howlerList).forEach(function(key) 
			{
				howlerList[key].stop();
			});
			
			howlerList[jQuery(this).attr("id")].play();
		});
	};
});