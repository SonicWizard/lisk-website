var adviser = [
	{
		name: "Charles Hoskinson",
		img : "charles_hoskinson",
		company: "Input Output HK",
		description: "Senior Adviser",
		linked: "https://www.linkedin.com/in/charles-hoskinson-1a95a4b4",
		twitter: "https://twitter.com/IOHK_Charles"
	},	
	{
		name: "Steven Nerayoff",
		img : "steven_nerayoff",
		company: "Maple Ventures",
		description: "Senior Adviser",
		linked: "https://www.linkedin.com/in/nerayoff",
		twitter: "https://twitter.com/stevennerayoff"
	},	
	{
		name: "Boris Povod",
		img : "boris_povod",
		company: "Wings",
		description: "Technical Adviser",
		linked: "https://www.linkedin.com/in/boris-povod-361a1b79/en",
		twitter: "https://twitter.com/Mr_Povod"
	},
	{
		name: "Axel Hellinger",
		img : "hellinger",
		company: "Kanzlei Hellinger",
		description: "Legal Adviser",
		linked: "https://de.linkedin.com/in/ahellinger"
	}
];

var correspondents = [
	{
		name: "Luiz Chen",
		lang: "china",
		country: "China",
		btt: "https://bitcointalk.org/index.php?topic=1350375",
		qq: "377193016",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=306645"
	},
	{
		name: "Daniel B.",
		lang: "germany",
		country: "Germany",
		twitter: "https://twitter.com/Lisk_DE",
		facebook: "https://www.facebook.com/LiskDE",
		btt: "https://bitcointalk.org/index.php?topic=1348884",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=174939"
	},
	{
		name: "Nick Friedrich",
		lang: "netherlands",
		country: "Netherlands",
		twitter: "https://twitter.com/lisknederland",
		btt: "https://bitcointalk.org/index.php?topic=1368751",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=231239"
	},
	{
		name: "Joel Fernández",
		lang: "puertorico",
		country: "Puerto Rico",
		btt: "https://bitcointalk.org/index.php?topic=1347362",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=157356",
		linked: "https://www.linkedin.com/in/joel-fernández-92669359"
	},
	{
		name: "Samuel Heinrichs",
		lang: "brazil",
		country: "Brazil",
		facebook: "https://www.facebook.com/groups/liskbr/",
		btt: "https://bitcointalk.org/index.php?topic=1348132",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=821447"
	},
	{
		name: "Kostyantyn Ahafontsev",
		lang: "ukraine",
		country: "Ukraine",
		twitter: "https://twitter.com/liskukraine",
		btt: "https://forum.lisk.io/viewforum.php?f=33"
	},
	{
		name: "Stefan Neagu",
		lang: "romania",
		country: "Romania",
		twitter: "https://twitter.com/liskromania",
		facebook: "https://www.facebook.com/LiskRomania/",
		btt: "https://bitcointalk.org/index.php?topic=1434407",
		linked: "https://ro.linkedin.com/in/stenea"
	},
	{
		name: "Denis Smirnov",
		lang: "russia",
		country: "Russia",
		facebook: "https://www.facebook.com/lisk.russia/",
		btt: "https://bitcointalk.org/index.php?topic=1346837",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=534708",
		linked: "https://ru.linkedin.com/in/densmirnov"
	},
	{
		name: "Samuel Heinrichs",
		lang: "brazil",
		country: "Brazil",
		facebook: "https://www.facebook.com/groups/liskbr/",
		btt: "https://bitcointalk.org/index.php?topic=1348132",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=821447",
		linked: "https://www.linkedin.com/in/samuel-heinrichs-243891a0"
	},
	{
		name: "Rendra Permana",
		lang: "indonesia",
		country: "Indonesia",
		btt: "https://bitcointalk.org/index.php?topic=1357381",
		twitter: "https://twitter.com/Lisk_Indonesia",
		facebook: "https://www.facebook.com/Lisk-Indonesia-182561438776664/",
		linked: "https://www.linkedin.com/in/rendra-permana-18b641b4",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=384646"
	},
	{
		name: "Petros Anagnostou",
		lang: "greece",
		country: "Greece",
		facebook: "https://www.facebook.com/Lisk-Greece-1097089743664106",
		twitter: "https://twitter.com/LiskGreece",
		btt: "https://bitcointalk.org/index.php?topic=1370696",
		pm: "https://bitcointalk.org/index.php?action=pm;sa=send;u=517454",
		linked: "https://www.linkedin.com/in/petrosanagnostou"
	}
];

var conferences = [
	{
		name: "√ BlueYard: Decentralized & Encrypted",
		country: "germany",
		website: "https://medium.com/@BlueYard/join-the-people-working-on-upgrading-the-internet-decentralized-encrypted-7ff2b6ac1f8#.a9poen7uk",
		date: "1st June 2016"
	},
	{
		name: "Global Blockchain Summit",
		country: "china",
		website: "http://www.global-blockchain-summit.com",
		date: "22nd - 24th June 2016"
	},
	{
		name: "BIP 001: Black Sea Edition",
		country: "ukraine",
		website: "http://bip001.com",
		date: "7th July 2016"
	},
	{
		name: "Euroforum: Blockchain an einem Tag",
		country: "germany",
		website: "http://www.euroforum.de/blockchain/",
		date: "19th September 2016"
	}
];

module.exports = function (app) {
	app.get("/team", function (req, res) {
		return res.render("team", {pageId: "team", title: "Team", conferences: conferences, correspondents: correspondents, adviser : adviser, description: "Take a look at the team which makes hard problems simple and maintain Lisk on a regular basis.", words: "lisk, crypti, contact, team, dapp, dapps, decentralized application, dapp store, crypto, currency, cryptocurrency, smart contracts, smart contract, decentralized applications, wallet, blockchain", hasScript: false});
	});
}
