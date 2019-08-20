// url params to obj
function getAllUrlParams(url) {
	var queryString = url ? url.split('?')[1] : window.location.search.slice(1);
	var obj = {};
	if (queryString) {
		queryString = queryString.split('#')[0];
		var arr = queryString.split('&');
		for (var i = 0; i < arr.length; i++) {
			var a = arr[i].split('=');
			var paramNum = undefined;
			var paramName = a[0].replace(/\[\d*\]/, function (v) {
				paramNum = v.slice(1, -1);
				return '';
			});
			var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
			paramName = paramName;
			paramValue = paramValue;
			if (obj[paramName]) {
				if (typeof obj[paramName] === 'string') {
					obj[paramName] = [obj[paramName]];
				}
				if (typeof paramNum === 'undefined') {
					obj[paramName].push(paramValue);
				}
				else {
					obj[paramName][paramNum] = paramValue;
				}
			}
			else {
				obj[paramName] = paramValue;
			}
		}
	}
	return obj;
}
//season & episode data
var seasonNum = getAllUrlParams().S;
var S = "S"+seasonNum;
var episodeJson = JSON.parse('{ "S0": { "E1": { "title": "The Christmas Invasion", "year": "2005", "src": "video/S0/S2-E0.mp4" }, "E2": { "title": "The Runaway Bride", "year": "2006", "src": "video/S0/S2-E14.mp4" }, "E3": { "title": "Voyage of the Damned", "year": "2007", "src": "video/S0/S3-E15.mp4" }, "E4": { "title": "The Next Doctor", "year": "2008", "src": "video/S0/S4-E15.mp4" }, "E5": { "title": "Planet of the Dead", "year": "2009", "src": "video/S0/S4-E0.mp4" }, "E6": { "title": "The Waters of Mars", "year": "2009", "src": "video/S0/S4-E16.mp4" }, "E7": { "title": "The End of Time (1)", "year": "2009", "src": "video/S0/S4-E17.mp4" }, "E8": { "title": "The End of Time (2)", "year": "2010", "src": "video/S0/S4-E18.mp4" }, "E9": { "title": "A Christmas Carol", "year": "2010", "src": "video/S0/S5-E16.mp4" }, "E10": { "title": "The Doctor, the Widow and the Wardrobe", "year": "2011", "src": "video/S0/S6-E14.mp4" }, "E11": { "title": "Night and the Doctor: Bad Night", "year": "2011", "src": "video/S0/S6-E15.mp4" }, "E12": { "title": "Night and the Doctor: Good Night", "year": "2011", "src": "video/S0/S6-E16.mp4" }, "E13": { "title": "Night and the Doctor: First Night", "year": "2011", "src": "video/S0/S6-E17.mp4" }, "E14": { "title": "Night and the Doctor: Last Night", "year": "2011", "src": "video/S0/S6-E18.mp4" }, "E15": { "title": "Night and the Doctor: Up All Night", "year": "2011", "src": "video/S0/S6-E19.mp4" }, "E16": { "title": "The Snowmen", "year": "2012", "src": "video/S0/S6-E19.mp4" } },"S1":{"E1":{"title":"Rose","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_1.mp4"},"E2":{"title":"The End of the World","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_2.mp4"},"E3":{"title":"The Unquiet Dead","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_3.mp4"},"E4":{"title":"Aliens of London (1)","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_4.mp4"},"E5":{"title":"World War Three (2)","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_5.mp4"},"E6":{"title":"Dalek","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_6.mp4"},"E7":{"title":"The Long Game","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_7.mp4"},"E8":{"title":"Father\'s Day","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_8.mp4"},"E9":{"title":"The Empty Child (1)","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_9.mp4"},"E10":{"title":"The Doctor Dances (2)","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_10.mp4"},"E11":{"title":"Boom Town","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_11.mp4"},"E12":{"title":"Bad Wolf (1)","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_12.mp4"},"E13":{"title":"The Parting of the Ways (2)","year":"2005","src":"https://bunnbuns.net/doctorwho/video/S1/Doctor_Who_2005_Season_1_Season_13.mp4"}},"S2":{"E1":{"title":"New Earth","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_1.mp4"},"E2":{"title":"Tooth and Claw","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_2.mp4"},"E3":{"title":"School Reunion","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_3.mp4"},"E4":{"title":"The Girl in the Fireplace","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_4.mp4"},"E5":{"title":"Rise of the Cybermen (1)","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_5.mp4"},"E6":{"title":"The Age of Steel (2)","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_6.mp4"},"E7":{"title":"The Idiot\'s Lantern","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_7.mp4"},"E8":{"title":"The Impossible Planet (1)","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_8.mp4"},"E9":{"title":"The Satan Pit (2)","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_9.mp4.mp4"},"E10":{"title":"Love and Monsters","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_10.mp4"},"E11":{"title":"Fear Her","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_11.mp4"},"E12":{"title":"Army of Ghosts (1)","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_12.mp4"},"E13":{"title":"Doomsday (2)","year":"2006","src":"https://bunnbuns.net/doctorwho/video/S2/Doctor_Who_2005_Season_2_Season_13.mp4"}},"S3":{"E1":{"title":"Smith and Jones","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_1.mp4"},"E2":{"title":"The Shakespeare Code","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_2.mp4"},"E3":{"title":"Gridlock","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_3.mp4"},"E4":{"title":"Daleks in Manhattan (1)","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_4.mp4"},"E5":{"title":"Evolution of the Daleks (2)","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_5.mp4"},"E6":{"title":"The Lazarus Experiment","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_6.mp4"},"E7":{"title":"42","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_7.mp4"},"E8":{"title":"Human Nature (1)","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_8.mp4"},"E9":{"title":"The Family of Blood (2)","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_9.mp4"},"E10":{"title":"Blink","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_10.mp4"},"E11":{"title":"Utopia (1)","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_11.mp4"},"E12":{"title":"The Sound of Drums (2)","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_12.mp4"},"E13":{"title":"Last of the Time Lords (3)","year":"2007","src":"https://bunnbuns.net/doctorwho/video/S3/Doctor_Who_2005_Season_3_Season_13.mp4"}},"S4":{"E1":{"title":"Partners in Crime","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_1.mp4"},"E2":{"title":"The Fires of Pompeii","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_2.mp4"},"E3":{"title":"Planet of the Ood","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_3.mp4"},"E4":{"title":"The Sontaran Stratagem (1)","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_4.mp4"},"E5":{"title":"The Poison Sky (2)","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_5.mp4"},"E6":{"title":"The Doctor\'s Daughter","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_6.mp4"},"E7":{"title":"The Unicorn and the Wasp","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_7.mp4"},"E8":{"title":"Silence in the Library (1)","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_8.mp4"},"E9":{"title":"Forest of the Dead (2)","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_9.mp4"},"E10":{"title":"Midnight","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_10.mp4"},"E11":{"title":"Turn Left","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_11.mp4"},"E12":{"title":"The Stolen Earth (1)","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_12.mp4"},"E13":{"title":"Journey\'s End (2)","year":"2008","src":"https://bunnbuns.net/doctorwho/video/S4/Doctor_Who_2005_Season_4_Season_13.mp4"}},"S5":{"E1":{"title":"The Eleventh Hour","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_1.mp4"},"E2":{"title":"The Beast Below","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_2.mp4"},"E3":{"title":"Victory of the Daleks","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_3.mp4"},"E4":{"title":"The Time of Angels (1)","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_4.mp4"},"E5":{"title":"Flesh and Stone (2)","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_5.mp4"},"E6":{"title":"The Vampires of Venice","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_6.mp4"},"E7":{"title":"Amy\'s Choice","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_7.mp4"},"E8":{"title":"The Hungry Earth (1)","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_8.mp4"},"E9":{"title":"Cold Blood (2)","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_9.mp4"},"E10":{"title":"Vincent and the Doctor","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_10.mp4"},"E11":{"title":"The Lodger","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_11.mp4"},"E12":{"title":"The Pandorica Opens (1)","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_12.mp4"},"E13":{"title":"The Big Bang (2)","year":"2010","src":"https://bunnbuns.net/doctorwho/video/S5/Doctor_Who_2005_Season_5_Season_13.mp4"}},"S6":{"E1":{"title":"The Impossible Astronaut (1)","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_1.mp4"},"E2":{"title":"Day of the Moon (2)","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_2.mp4"},"E3":{"title":"The Curse of the Black Spot","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_3.mp4"},"E4":{"title":"The Doctor\'s Wife","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_4.mp4"},"E5":{"title":"The Rebel Flesh (1)","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_5.mp4"},"E6":{"title":"The Almost People (2)","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_6.mp4"},"E7":{"title":"A Good Man Goes to War (1)","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_7.mp4"},"E8":{"title":"Let\'s Kill Hitler (2)","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_8.mp4"},"E9":{"title":"Night Terrors","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_9.mp4"},"E10":{"title":"The Girl Who Waited","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_10.mp4"},"E11":{"title":"The God Complex","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_11.mp4"},"E12":{"title":"Closing Time","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_12.mp4"},"E13":{"title":"The Wedding of River Song","year":"2011","src":"https://bunnbuns.net/doctorwho/video/S6/Doctor_Who_2005_Season_6_Season_13.mp4"}},"S7":{"E1":{"title":"Asylum of the Daleks","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_1.mp4"},"E2":{"title":"Dinosaurs on a Spaceship","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_2.mp4"},"E3":{"title":"A Town Called Mercy","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_3.mp4"},"E4":{"title":"The Power of Three","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_4.mp4"},"E5":{"title":"The Angels Take Manhattan","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_5.mp4"},"E6":{"title":"The Bells of St John","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_6.mp4"},"E7":{"title":"The Rings of Akhaten","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_7.mp4"},"E8":{"title":"Cold War","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_8.mp4"},"E9":{"title":"Hide","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_9.mp4"},"E10":{"title":"Journey to the Centre of the TARDIS","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_10.mp4"},"E11":{"title":"The Crimson Horror","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_11.mp4"},"E12":{"title":"Nightmare in Silver","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_12.mp4"},"E13":{"title":"The Name of the Doctor","year":"2012","src":"https://bunnbuns.net/doctorwho/video/S7/Doctor_Who_2005_Season_7_Season_13.mp4"}},"S8":{"E1":{"title":"Deep Breath","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_1.mp4"},"E2":{"title":"Into the Dalek","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_2.mp4"},"E3":{"title":"Robot of Sherwood","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_3.mp4"},"E4":{"title":"Listen","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_4.mp4"},"E5":{"title":"Time Heist","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_5.mp4"},"E6":{"title":"The Caretaker","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_6.mp4"},"E7":{"title":"Kill the Moon","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_7.mp4"},"E8":{"title":"Mummy on the Orient Express","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_8.mp4"},"E9":{"title":"Flatline","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_9.mp4"},"E10":{"title":"In the Forest of the Night","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_10.mp4"},"E11":{"title":"Dark Water","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_11.mp4"},"E12":{"title":"Death In Heaven","year":"2014","src":"https://bunnbuns.net/doctorwho/video/S8/Doctor_Who_2005_Season_8_Season_12.mp4"}},"S9":{"E1":{"title":"The Magician\'s Apprentice (1)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_1.mp4"},"E2":{"title":"The Witch\'s Familiar (2)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_2.mp4"},"E3":{"title":"Under The Lake (1)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_3.mp4"},"E4":{"title":"Before The Flood (2)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_4.mp4"},"E5":{"title":"The Girl Who Died (1)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_5.mp4"},"E6":{"title":"The Woman Who Lived (2)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_6.mp4"},"E7":{"title":"The Zygon Invasion (1)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_7.mp4"},"E8":{"title":"The Zygon Inversion (2)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_8.mp4"},"E9":{"title":"Sleep No More","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_9.mp4"},"E10":{"title":"Face The Raven","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_10.mp4"},"E11":{"title":"Heaven Sent (1)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_11.mp4"},"E12":{"title":"Hell Bent (2)","year":"2015","src":"https://bunnbuns.net/doctorwho/video/S9/Doctor_Who_2005_Season_9_Season_12.mp4"}},"S10":{"E1":{"title":"The Pilot","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_1.mp4"},"E2":{"title":"Smile","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_2.mp4"},"E3":{"title":"Thin Ice","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_3.mp4"},"E4":{"title":"Knock Knock","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_4.mp4"},"E5":{"title":"Oxygen","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_5.mp4"},"E6":{"title":"Extremis","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_6.mp4"},"E7":{"title":"The Pyramid at the End of the World","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_7.mp4"},"E8":{"title":"The Lie of the Land","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_8.mp4"},"E9":{"title":"Empress of Mars","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_9.mp4"},"E10":{"title":"The Eaters of Light","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_10.mp4"},"E11":{"title":"World Enough and Time","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_11.mp4"},"E12":{"title":"The Doctor Falls","year":"2017","src":"https://bunnbuns.net/doctorwho/video/S10/Doctor_Who_2005_Season_10_Season_12.mp4"}},"S11":{"E1":{"title":"The Woman Who Fell to Earth","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_1.mp4"},"E2":{"title":"The Ghost Monument","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_2.mp4"},"E3":{"title":"Rosa","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_3.mp4"},"E4":{"title":"Arachnids in the UK","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_4.mp4"},"E5":{"title":"The Tsuranga Conundrum","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_5.mp4"},"E6":{"title":"Demons of the Punjab","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_6.mp4"},"E7":{"title":"Kerblam!","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_7.mp4"},"E8":{"title":"The Witchfinders","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_8.mp4"},"E9":{"title":"It Takes You Away","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_9.mp4"},"E10":{"title":"The Battle of Ranskoor Av Kolos","year":"2018","src":"https://bunnbuns.net/doctorwho/video/S11/Doctor_Who_2005_Season_11_Season_10.mp4"}}}');
var numSeasons = Object.keys(episodeJson).length;
if (typeof(Storage) !== "undefined") {

} else {
    console.log("Sorry, your browser does not support Web Storage...");
}