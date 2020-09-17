//images and text// 
var oddmem = []

oddmem[0] =  " <div id='differentto3columns'>   <strong>Superman</strong>: <br>Description: Born on a distant planet Krypton, he was raised as Clark Kent on planet Earth after he was sent here during the destruction of Krypton.  <br><strong>Powers and Abilities: </strong> Strongest man on earth. Can fly at unmatchable speeds. Shoots heat beams from his eyes. Shoots frost from his mouth <img src='images/superman.jpg' > </div> "

oddmem[1] = " <div id='differentto3columns'>   <strong>Batman: </strong>Witnessed a tragic childhood after his parents were murdered in front of him. This motivates him to dedicate his life to fight crime. <br><strong>Powers and Abilities:</strong>Goes through rigorous training to be mentally and physically agile. No superpowers. Highly developed detective skills. Massive resources. Unmatched dedication <img src='images/batman.jpg' > </div>"

oddmem[2] = "<div id='differentto3columns'> <strong>Green Lantern: </strong>The power ring chooses Hal Jordan as a member of the Green Lantern Corps. after a dying alien, Abir Sur, crash-lands his ship on earth.<br><strong> Powers and Abilities:</strong>Flight Ability to create and control constructs through his mind <img src='images/gl.jpg' > </div>"

oddmem[3] =  " <div id='differentto3columns'>   <strong>Aquaman: </strong>The King of the Seven Seas. Reluctant ruler of Atlantis. <br><strong>Powers:</strong> super strength, durability, control over sea life, exceptional swimming ability, ability to breathe underwater <img src='images/aquaman.jpg' >  </div> "

oddmem[4] = " <div id='differentto3columns'>   <strong>Wonder Woman: </strong>Comes from the Amazons, an all-female society that resides on the island nation of Themyscira (Paradise Island). When Captain Steve Trevors plane crashed on the island, he is nursed and taken care of by Diana. The Amazon sisters decide who will take Trevor back to the mans world by a competition, which Diana wins. <br><strong>Powers and Abilities:</strong> Super-strength. Very high mental and physical abilities. Resistance to fire. Telescopic vision and super hearing. Flight <img src='images/wonderwoman.jpg' > </div>"

oddmem[5] = " <div id='differentto3columns'>   <strong>Cyborg : </strong>Superhuman strength. Very high intelligence. Excellent hand-to-hand fighter <img src='images/cyborg.jpg' > </div>"


function oddMem() {
	var randomMembers = Math.floor(Math.random()*(oddmem.length));
	document.getElementById('oddMEMBERS').innerHTML = oddmem[randomMembers];
}


