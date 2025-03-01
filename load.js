// loosely attemting to organize this, wip
// og author's stuff is at the top (mostly)
// my stuff follows, with the sections:
// - miscelenious word swaps (these could be by category)
// - swears 
// - grammar changes
// - spelling changes 
// - slang 


var defaults = [

	// organize these by category? 

	{
		"Category": "general",
		"American": "apartment",
		"AmericanForms": "apartment, apartments",
		"British": "flat",
		"Explanation": "A place to live in a multi-family building is a <em>flat</em>, not an <em>apartment</em>."
	},
	{
		"Category": "general",
		"American": "coworker",
		"AmericanForms": "co-worker, coworker, co-workers, coworkers",
		"British": "colleague",
		"Explanation": "Someone you work with is a <em>colleague</em>, not a <em>co-worker</em>."
	},
	{
		"Category": "car",
		"American": "gas",
		"AmericanForms": "gas",
		"British": "petrol",
		"Explanation": "What fuels your car is <em>petrol</em>, not <em>gas</em>."
	},
	{
		"Category": "general",
		"American": "cell phone",
		"AmericanForms": "cell phone, cell phones, mobile phone, cell, smart phone",
		"British": "mobile",
		"Explanation": "Either <em>mobile</em> or <em>phone</em> are acceptable replacements for American <em>cell phone</em>."
	},
	{
		"Category": "general",
		"American": "elevator",
		"AmericanForms": "elevator, elevators",
		"British": "lift",
		"Explanation": "A vertical people mover is a <em>lift</em>, not an <em>elevator</em>."
	},
	{
		"Category": "general",
		"American": "nightstand",
		"AmericanForms": "nightstand, nightstands",
		"British": "beside table, beside cabinet",
		"Explanation": "A small table/cupboard next to the bed isn&apos;t a <em>nightstand</em> but a <em>bedside table</em> or <em>beside cabinet</em>."
	},
	{
		"Category": "general",
		"American": "sidewalk",
		"AmericanForms": "sidewalk, sidewalks",
		"British": "pavement",
		"Explanation": "You walk on the <em>pavement</em>, not the <em>sidewalk</em>."
	},
	{
		"Category": "general",
		"American": "stoop",
		"AmericanForms": "stoop",
		"British": "step",
		"Explanation": "The small porch-like thing in front of a house isn&apos;t a <em>stoop</em> but a <em>step</em>."
	},
	{
		"Category": "general",
		"American": "normalcy",
		"AmericanForms": "normalcy, normalcies",
		"British": "normality",
		"Explanation": "The state of being <em>normal</em> isn&apos;t <em>normalcy</em> but <em>normality</em>."
	},
	{
		"Category": "general",
		"American": "trash can",
		"AmericanForms": "trash can, trash cans, trash bin",
		"British": "bin",
		"Explanation": "Rubbish goes in a <em>bin</em>."
	},
	{
		"Category": "general",
		"American": "garbage, trash",
		"AmericanForms": "garbage, trash",
		"British": "rubbish",
		"Explanation": "The things you discard are <em>rubbish</em> in British English."
	},
	{
		"Category": "general",
		"American": "wager",
		"AmericanForms": "wager, wagers",
		"British": "bet",
		"Explanation": "A gambler does not make a <em>wager</em>; he makes a <em>bet</em>."
	},
	{
		"Category": "general",
		"American": "store",
		"AmericanForms": "store, stores",
		"British": "shop",
		"Explanation": "You buy things not in a <em>store</em> but in a <em>shop</em>."
	},
	{
		"Category": "general",
		"American": "mall",
		"AmericanForms": "mall, malls",
		"British": "shopping centre",
		"Explanation": "A large, probably out-of-town-centre collection of shops might be a <em>mall</em>, but usually such a collection is just a <em>shopping centre</em>."
	},
	{
		"Category": "general",
		"American": "obligated",
		"AmericanForms": "obligated",
		"British": "obliged",
		"Explanation": "Across the pond, you aren&apos;t <em>obligated</em>, you&apos;re <em>obliged</em>."
	},
	{
		"Category": "general",
		"American": "momentarily",
		"AmericanForms": "momentarily",
		"British": "very soon, in a moment",
		"Explanation": "<em>Momentarily</em> means <em>for an instant</em> across the pond. Use <em>very soon</em> or <em>in a moment</em> instead."
	},
	{
		"Category": "general",
		"American": "washcloth",
		"AmericanForms": "washcloth, washclothes",
		"British": "flannel, facecloth",
		"Explanation": "After sexytiems, you might clean up with a <em>flannel</em> or <em>facecloth</em>, not a <em>washcloth</em>."
	},
	{
		"Category": "general",
		"American": "start over",
		"AmericanForms": "start over, starts over, started over, starting over",
		"British": "start again",
		"Explanation": "The English aren&apos;t such big fans of the more metaphorical uses of <em>over</em>."
	},
	{
		"Category": "car",
		"American": "trunk",
		"AmericanForms": "trunk",
		"British": "boot",
		"Explanation": "The luggage compartment in a car is a <em>boot</em>, not a <em>trunk</em>."
	},
	{
		"Category": "car",
		"American": "hood",
		"AmericanForms": "hood",
		"British": "bonnet",
		"Explanation": "The front cover of a car is a <em>bonnet</em>, not a <em>hood</em>."
	},
	{
		"Category": "general",
		"American": "faucet",
		"AmericanForms": "faucet, faucets",
		"British": "tap",
		"Explanation": "You might wash your hands under a <em>tap</em>, not a <em>faucet</em>."
	},
	{
		"Category": "general",
		"American": "quit",
		"AmericanForms": "quit, quits, quitting",
		"British": "stop",
		"Explanation": "Across the pond, <em>quitting</em> only applies to jobs. Everything else you <em>stop</em> doing."
	},
	{
		"Category": "general",
		"American": "mom",
		"AmericanForms": "mom",
		"British": "mum, mother",
		"Explanation": "It&apos;s the Queen <em>Mother</em> or <em>Mum</em>, naturally, not <em>Mom</em>."
	},
	{
		"Category": "general",
		"American": "pop, pa",
		"AmericanForms": "pop, pa",
		"British": "dad, father",
		"Explanation": "I haven&apos;t actually heard <em>pop</em> or <em>pa</em> outside of <em>Little House on the Prairie</em>. But regardless: an English father figure is a <em>dad</em> or <em>father</em>."
	},
	{
		"Category": "general",
		"American": "check",
		"AmericanForms": "check, checks",
		"British": "cheque",
		"Explanation": "I you want to employ an exceedingly old-fashioned method of transacting money, you write a <em>cheque</em>, not a <em>check</em>."
	},
	{
		"Category": "general",
		"American": "check",
		"AmericanForms": "check, checks",
		"British": "bill",
		"Explanation": "In a restaurant, you ask for the <em>bill</em>, not the <em>check</em>."
	},
	{
		"Category": "general",
		"American": "jail",
		"AmericanForms": "jail, jails",
		"British": "prison",
		"Explanation": "Temporary police custody is being in <em>prison</em> or <em>in the cells</em> across the pond, apparently, not <em>jail</em>."
	},
	{
		"Category": "general",
		"American": "cop",
		"AmericanForms": "cop, cops",
		"British": "policeman, the police",
		"Explanation": "<em>The police</em> can be used regardless of the amount of police. Also note that a <em>policeman</em> in the U.K. likely does not carry a firearm."
	},
	{
		"Category": "general",
		"American": "backyard, yard",
		"AmericanForms": "backyard, yard, backyards, yards",
		"British": "back garden, garden",
		"Explanation": "As long as there is the smallest piece of grass, or a flower bed and no grass, hell, even just a pot of herbs, it&apos;s called a <em>garden</em>. Only if it&apos;s completely concrete/paved and used to store bikes and bins would it be called a <em>yard</em>. School playgrounds are often called yards."
	},
	{
		"Category": "general",
		"American": "closet",
		"AmericanForms": "closet, closets",
		"British": "wardrobe, cupboard",
		"Explanation": "Instead of built-in <em>closets</em>, furniture <em>wardrobes</em> are more common in the U.K. Note that <em>wardrobes</em> are specifically for clothes. <em>Cupboard</em> is for anything else used for storage."
	},
	{
		"Category": "food",
		"American": "candy",
		"AmericanForms": "candy, candies",
		"British": "sweets",
		"Explanation": "A Brit with a sweet tooth eats a lot of <em>sweets</em>, not <em>candy</em>."
	},
	{
		"Category": "food",
		"American": "takeout",
		"AmericanForms": "takeout, take-out",
		"British": "takeaway",
		"Explanation": "Lazy people in the British Isles order <em>takeaway</em>, not <em>take-out</em>."
	},
	{
		"Category": "food",
		"American": "steep",
		"AmericanForms": "steep, steeps, steeped, steeping",
		"British": "brew",
		"Explanation": "All of the tea consumption in Britain occurs after <em>brewing</em> it, not <em>steeping</em> it."
	},
	{
		"Category": "food",
		"American": "jello",
		"AmericanForms": "jello",
		"British": "jelly",
		"Explanation": "The 60s-era sweet treat is <em>jelly</em>, not <em>Jell-O</em>."
	},
	{
		"Category": "food",
		"American": "jelly",
		"AmericanForms": "jelly, jellies",
		"British": "jam",
		"Explanation": "What you put on your toast is <em>jam</em>, not <em>jelly</em>."
	},
	{
		"Category": "food",
		"American": "broil",
		"AmericanForms": "broil, broils, broiled, broiling",
		"British": "grill",
		"Explanation": "When you cook something under a massive heat source, you are <em>grilling</em> it in the U.K., not <em>broiling</em> it."
	},
	{
		"Category": "appearance",
		"American": "bangs",
		"AmericanForms": "bangs",
		"British": "fringe",
		"Explanation": "The short hair that falls over your forehead is <em>fringe</em>, not <em>bangs</em>."
	},
	{
		"Category": "appearance",
		"American": "braids",
		"AmericanForms": "braid, braids, braiding, braided",
		"British": "plaits",
		"Explanation": "The method of winding together three strands of hair is <em>plaiting</em>, not <em>braiding</em>."
	},
	{
		"Category": "appearance",
		"American": "zipper",
		"AmericanForms": "zipper, zippers",
		"British": "zip",
		"Explanation": "Most jeans have a <em>zip</em>, not a <em>zipper</em>."
	},
	{
		"Category": "appearance",
		"American": "panty hose",
		"AmericanForms": "panty hose",
		"British": "tights",
		"Explanation": "<em>Tights</em> is the only word for the sheer leggings women wear."
	},
	{
		"Category": "appearance",
		"American": "panties",
		"AmericanForms": "panties",
		"British": "knickers, pants",
		"Explanation": "If <em>Sixteen Candles</em> were a British movie, Samantha would have given The Geek her <em>knickers</em> or her <em>pants</em>, not her <em>panties</em>."
	},
	{
		"Category": "appearance",
		"American": "pants",
		"AmericanForms": "pants",
		"British": "trousers",
		"Explanation": ""
	},
	{
		"Category": "appearance",
		"American": "sweatpants",
		"AmericanForms": "sweatpants",
		"British": "jogging bottoms, tracksuit bottoms, trackies, joggers",
		"Explanation": "shrug"
	},
	{
		"Category": "appearance",
		"American": "plaid",
		"AmericanForms": "plaid",
		"British": "check, checked, tartan, plaid",
		"Explanation": "The pattern known as <em>plaid</em> to Americans is sometimes <em>check(ed)</em> or <em>tartan</em> (most associated with Scotland and kilts) across the pond."
	},
	{
		"Category": "appearance",
		"American": "purse",
		"AmericanForms": "purse, purses",
		"British": "handbag",
		"Explanation": "Women carry <em>handbags</em>, not <em>purses</em>."
	},
	{
		"Category": "appearance",
		"American": "wallet",
		"AmericanForms": "wallet, wallets",
		"British": "wallet, purse",
		"Explanation": "Women keep money, credit cards, stamps etc. in a <em>purse</em> (U.S. <em>wallet</em>) which lives in their <em>handbag</em>. <em>Wallets</em> are masculine and <em>purses</em> are feminine, but both are flat small things that hold money and cards."
	},
	{
		"Category": "appearance",
		"American": "vest",
		"AmericanForms": "vest, vests",
		"British": "waistcoat",
		"Explanation": "Part of a three-piece suit is a <em>waistcoat</em>, not a <em>vest</em>."
	},
	{
		"Category": "appearance",
		"American": "undershirt, wife-beater",
		"AmericanForms": "undershirt, wife-beater, undershirts, wife-beaters",
		"British": "vest",
		"Explanation": "English <em>vests</em> are what Americans call <em>undershirts</em> or <em>wife-beaters</em> – sleeveless tops to wear underneath a shirt in winter."
	},
	{
		"Category": "appearance",
		"American": "shorts, underwear",
		"AmericanForms": "shorts, underwear",
		"British": "boxers, Y-fronts, etc.",
		"Explanation": "<em>Underwear</em> is only a collective noun that refers to all underclothes generally, never referring to one pair. Use boxers, Y-fronts, or (under)pants instead."
	},
	{
		"Category": "appearance",
		"American": "pants",
		"AmericanForms": "pants",
		"British": "trousers",
		"Explanation": "Brits will think you are talking about something else if you use <em>pants</em> where you should use <em>trousers</em>!"
	},
	{
		"Category": "appearance",
		"American": "sneakers",
		"AmericanForms": "sneakers",
		"British": "trainers",
		"Explanation": "Casual sporty shoes are <em>trainers</em>, not <em>sneakers</em>."
	},
	{
		"Category": "appearance",
		"American": "suspenders",
		"AmericanForms": "suspenders",
		"British": "braces",
		"Explanation": "Men sometimes hold up their <em>trousers</em> with <em>braces</em>, not <em>suspenders</em>."
	},
	{
		"Category": "general",
		"American": "couple weeks",
		"AmericanForms": "couple weeks",
		"British": "couple of weeks",
		"Explanation": "Apparently it sounds strange to Brits without the <em>of</em>."
	},
	{
		"Category": "general",
		"American": "is all",
		"AmericanForms": "is all",
		"British": "just",
		"Explanation": "Instead of something like <em>I&apos;m tired is all</em>, use <em>I&apos;m just tired</em>."
	},
	{
		"Category": "general",
		"American": "off of",
		"AmericanForms": "off of",
		"British": "off, from",
		"Explanation": "For example, a smell doesn&apos;t emanate <em>off of</em> something stinky, it just emanates <em>from</em> it."
	},
	{
		"Category": "general",
		"American": "pissed",
		"AmericanForms": "pissed",
		"British": "drunk, pissed, hammered, sloshed, trollyed, smashed, shitfaced",
		"Explanation": "This is an important one! To get <em>pissed</em> is to get <em>drunk</em>, not <em>angry</em>. But <em>pissed off</em> still means <em>angry</em>."
	},
	{
		"Category": "general",
		"American": "guess",
		"AmericanForms": "guess, guesses, guessed, guessing",
		"British": "suppose, presume",
		"Explanation": "<em>Guess</em> is only really used for actual quantitative estimates."
	},
	{
		"Category": "general",
		"American": "dumb",
		"AmericanForms": "dumb, dumber",
		"British": "stupid",
		"Explanation": "<em>Dumb</em> has kept its original meaning of <em>mute</em>. Don&apos;t use it to mean <em>stupid</em>."
	},
	{
		"Category": "general",
		"American": "bathroom",
		"AmericanForms": "bathroom, washroom, restroom",
		"British": "toilet, loo",
		"Explanation": "Unless you are actually going for a bath, you do not go to the <em>bathroom</em>, but to the <em>toilet</em> or <em>loo</em>."
	},
	{
		"Category": "general",
		"American": "wait in line",
		"AmericanForms": "wait in line, waits in line, waited in line, waiting in line",
		"British": "queue",
		"Explanation": "The British <em>queue</em> instead of <em>waiting in line</em>."
	},
	{
		"Category": "education",
		"American": "public school",
		"AmericanForms": "public school, public schools",
		"British": "state school",
		"Explanation": "A <em>public school</em> in Britain is a very posh, fee-paying type of school. Schools the government runs are <em>state schools</em>."
	},
	{
		"Category": "education",
		"American": "grade",
		"AmericanForms": "grade",
		"British": "year",
		"Explanation": "A cohort of students is called a <em>year</em>, not a <em>grade</em>."
	},
	{
		"Category": "education",
		"American": "grades",
		"AmericanForms": "grades, graded, grading",
		"British": "mark",
		"Explanation": "School work is not <em>graded</em>, it&apos;s <em>marked</em>. And you might get good <em>marks</em> at the end of the <em>term</em>, not good <em>grades</em>."
	},
	{
		"Category": "education",
		"American": "graduate",
		"AmericanForms": "graduate, graduates, graduated, graduating",
		"British": "leave",
		"Explanation": "You don&apos;t <em>graduate</em> from high school, you just <em>leave</em>. (Sounds nice!) You do <em>graduate</em> from university/uni, however."
	},
	{
		"Category": "education",
		"American": "college",
		"AmericanForms": "college, colleges",
		"British": "university, uni",
		"Explanation": "OxBridge have colleges as part of their structure, but the general term for education beyond the secondary school level is <em>university</em> or <em>uni</em>, not <em>college</em>."
	},
	{
		"Category": "general",
		"American": "drugstore",
		"AmericanForms": "drugstore, drugstores",
		"British": "chemist, pharmacy",
		"Explanation": "The equivalent of a CVS or Walgreens across the pond is a <em>chemist</em> or just a <em>pharmacy</em>."
	},
	{
		"Category": "food",
		"American": "fix",
		"AmericanForms": "fix, fixes, fixed, fixing",
		"British": "cook",
		"Explanation": "Brits never <em>fix</em> their meals, they <em>cook</em> them."
	},
	{
		"Category": "food",
		"American": "teapot",
		"AmericanForms": "tea pot, teapot, tea pots, teapots",
		"British": "kettle",
		"Explanation": "You boil water for tea in a <em>kettle</em>, not a <em>teapot</em>."
	},
	{
		"Category": "general",
		"American": "pinkie",
		"AmericanForms": "pinkie, pinky",
		"British": "little finger, pinkie, pinky",
		"Explanation": "This depends on region or something, idk."
	},
	{
		"Category": "general",
		"American": "mail",
		"AmericanForms": "mail, mails, mailed, mailing",
		"British": "post",
		"Explanation": "As both a verb and a noun, it&apos;s <em>post</em>, not <em>mail</em>."
	},
	{
		"Category": "general",
		"American": "block",
		"AmericanForms": "block, blocks",
		"British": "?",
		"Explanation": "The distance between two streets is not a <em>block</em>."
	},
	{
		"Category": "education",
		"American": "kindergarten",
		"AmericanForms": "kindergarten, kindergartens",
		"British": "nursery school, reception",
		"Explanation": "British children may attend <em>nursery school</em>, not <em>kindergarten</em>. <em>Nursery school</em> is before <em>Reception</em>, which is the equivalent to 1st grade in U.S."
	},
	{
		"Category": "education",
		"American": "high school",
		"AmericanForms": "high school, high schools",
		"British": "secondary school",
		"Explanation": "British children go to <em>secondary school</em>, not <em>high school</em> (at least in the south of England)."
	},
	{
		"Category": "general",
		"American": "butt",
		"AmericanForms": "butt, butts",
		"British": "bum",
		"Explanation": "A more polite worse for your <em>arse</em> is your <em>bum</em>, not <em>butt</em>."
	},
	{
		"Category": "general",
		"American": "fall",
		"AmericanForms": "fall",
		"British": "autumn",
		"Explanation": "The season is <em>autumn</em>, not <em>fall</em>."
	},
	{
		"Category": "appearance",
		"American": "pumps",
		"AmericanForms": "pumps",
		"British": "high-heeled shoes, high-heels, heels",
		"Explanation": "In England, <em>pumps</em> are flat shoes."
	},
	{
		"Category": "general",
		"American": "crush",
		"AmericanForms": "crush, crushes",
		"British": "fancy",
		"Explanation": "Brits don&apos;t generally have <em>crushes</em> on people they like; instead, they <em>fancy</em> them."
	},
	{
		"Category": "food",
		"American": "soda",
		"AmericanForms": "soda, pop, Coke",
		"British": "fizzy drink",
		"Explanation": "Carbonated and sweetened beverages are <em>fizzy drinks</em>, not <em>soda</em> or <em>pop</em> or (generic) <em>Coke</em>."
	},
	{
		"Category": "general",
		"American": "plushie",
		"AmericanForms": "plushie",
		"British": "soft toy",
		"Explanation": "A child&apos;s teddy bear is a <em>soft toy</em>, not a <em>plushie</em>."
	},
	{
		"Category": "car",
		"American": "parking lot",
		"AmericanForms": "parking lot, parking lots",
		"British": "carpark",
		"Explanation": "You park a car in a <em>carpark</em>, not a <em>parking lot</em>."
	},
	{
		"Category": "car",
		"American": "put it into park",
		"AmericanForms": "put it into park, put the car into park, puts the car into park, puts it into park, putting the car into park, putting it into park",
		"British": "put the gear stick into neutral and put the handbrake up",
		"Explanation": "Britian uses largely manual cars instead of automatic cars."
	},
	{
		"Category": "general",
		"American": "grocery store",
		"AmericanForms": "grocery store, grocery stores",
		"British": "supermarket",
		"Explanation": "You buy all your foodstuffs and household things at a <em>supermarket</em>, not a <em>grocery store</em>."
	},
	{
		"Category": "general",
		"American": "commercial",
		"AmericanForms": "commercial, commercials",
		"British": "ad, advert",
		"Explanation": "Your telly programs get interrupted by <em>ads</em>, not <em>commercials</em>."
	},
	{
		"Category": "sports",
		"American": "bleachers",
		"AmericanForms": "bleachers",
		"British": "stands, stalls",
		"Explanation": "Apparently you sit in <em>stands</em> or <em>stalls</em> at a sporting event in Britain, not <em>bleachers</em>? Might want to double-check this one."
	},
	{
		"Category": "food",
		"American": "cookie",
		"AmericanForms": "cookie, cookies",
		"British": "biscuit",
		"Explanation": "Sweet baked treats are <em>biscuits</em>, not <em>cookies</em>."
	},
	{
		"Category": "food",
		"American": "biscuit",
		"AmericanForms": "biscuit, biscuits",
		"British": "scone",
		"Explanation": "If you&apos;re using the word <em>biscuit</em>, make sure you&apos;re talking about something similar to an American <em>cookie</em>, not a bread-y baked thing like a <em>scone</em>."
	},
	{
		"Category": "general",
		"American": "flashlight",
		"AmericanForms": "flashlight, flash light, flashlights, flash lights",
		"British": "torch",
		"Explanation": "A handheld object that provides illumination is a <em>torch</em>, not a <em>flashlight</em>."
	},
	{
		"Category": "general",
		"American": "hickey",
		"AmericanForms": "hickey, hickeys",
		"British": "love bite, hickey",
		"Explanation": "A bruise resulting from kissing or sucking on skin might be a <em>love bite</em> rather than a <em>hickey</em>. Either can be used."
	},


	// misc word swaps 
	{
		"Category": "appearence",
		"American": "sweater",
		"AmericanForms": "sweater, sweaters",
		"British": "jumper",
		"Explanation": "British English may also use sweater (in more modern colloquial) but it means a specific type of jumper. A jumper made of like sweatshirt material, and is fleecy on the inside."
	},
	{
		"Category": "general",
		"American": "alright",
		"AmericanForms": "alright, you alright",
		"British": "okay",
		"Explanation": "<em>Alright?</em> is a general greeting and not someone asking you if you're alright. If being asked about your wellbeing, <em>You okay?</em> is used instead. (Though the full <em>Are you alright?</em> <b>is</b> asking if you're alright.)"
	},
	{
		"Category": "sports",
		"American": "soccer",
		"AmericanForms": "soccer",
		"British": "football",
		"Explanation": "The game with the round black and white ball you kick with your feet is called <em>football</em>."
	},
	{
		"Category": "car",
		"American": "blinker",
		"AmericanForms": "blinker, blinkers",
		"British": "indicator, indicators",
		"Explanation": "For cars, you use the <em>indicators</em> when you want to turn."
	},
	{
		"Category": "car",
		"American": "windshield",
		"AmericanForms": "windshield, windshields",
		"British": "windscreen",
		"Explanation": "In a car, a bug hits your <em>windscreen</em>."
	},
	{
		"Category": "education",
		"American": "professor",
		"AmericanForms": "professor, professors, prof",
		"British": "lecturer, lecturers",
		"Explanation": "In university, your teacher isn't a <em>professor</em> he's a <em>lecturer</em>."
	},
	{
		"Category": "general",
		"American": "call",
		"AmericanForms": "call",
		"British": "ring, phone",
		"Explanation": "When you're calling someone's phone, you give them a <em>ring</em>, or maybe you <em>phone</em> them."
	},
	{
		"Category": "general",
		"American": "mail",
		"AmericanForms": "mail, mailman",
		"British": "post, postman",
		"Explanation": "There's no <em>post</em> on Sundays."
	},
	{
		"Category": "general",
		"American": "package",
		"AmericanForms": "package, packages",
		"British": "parcel",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "vacation",
		"AmericanForms": "vacation, vacations, vacay",
		"British": "holiday",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "vacationing",
		"AmericanForms": "vacationing",
		"British": "go on holiday",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "zucchini",
		"AmericanForms": "zucchini, zucchinis",
		"British": "courgette, courgettes",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "eggplant",
		"AmericanForms": "eggplant, eggplants",
		"British": "aubergine",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "arugula",
		"AmericanForms": "arugula",
		"British": "rocket",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "cilantro",
		"AmericanForms": "cilantro",
		"British": "coriander",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "squishy",
		"AmericanForms": "squishy",
		"British": "squidgy",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "kiddie pool",
		"AmericanForms": "kiddie pool",
		"British": "paddling pool",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "crack your knuckles",
		"AmericanForms": "crack your knuckles, cracks his knuckles, cracked his knuckles, crack his knuckles, cracks her knuckles, cracked her knuckles, crack her knuckles",
		"British": "click your knuckles",
		"Explanation": "Depending on where you are, <em>crack</em> may be fine."
	},
	{
		"Category": "general",
		"American": "eraser",
		"AmericanForms": "eraser, erasers",
		"British": "rubber",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "rubber",
		"AmericanForms": "rubber",
		"British": "condom",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "erase",
		"AmericanForms": "erase, erase it, erases it, erased it",
		"British": "rub it out",
		"Explanation": "truly unfortunate phrasing"
	},
	{
		"Category": "general",
		"American": "crosswalk",
		"AmericanForms": "crosswalk, crosswalks",
		"British": "zebra crossing, pelican crossing, puffin crossing, toucan crossings",
		"Explanation": "A <em>zebra crossing</em> is black and white crossings with a zigzag line on the road. A <em>pelican crossing</em> is a controlled crossing with a flashing amber light. A <em>puffin crossing</em> is an intelligent crossing with a sensor that detects when people are on the crossing. A <em>toucan crossing</em> is a controlled crossing for cyclists and pedestrians. (Real British people don't remember these.)"
	},
	{
		"Category": "general",
		"American": "crossing guard",
		"AmericanForms": "crossing guard, crossing guards",
		"British": "lollipop man, lollipop lady",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "oatmeal",
		"AmericanForms": "oatmeal",
		"British": "porridge",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "commercial",
		"AmericanForms": "commercial, commercials, advertisement, advertisements, ad",
		"British": "advert",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "baby fever",
		"AmericanForms": "baby fever",
		"British": "broody",
		"Explanation": "(I barely understand the American English for this, sorry)"
	},
	{
		"Category": "general",
		"American": "dog-eared",
		"AmericanForms": "dog-ear, dog-eared, dog-earing",
		"British": "folded page",
		"Explanation": "\"Do you need a bookmark?\" \"Nah, I just <em>fold the page</em>.\" or \"I left off at the <em>folded page</em>.\""
	},
	{
		"Category": "general",
		"American": "box of berries",
		"AmericanForms": "box of berries",
		"British": "punnet of berries",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "the wave",
		"AmericanForms": "the wave",
		"British": "Mexican wave",
		"Explanation": "As in, people raising their arms consecutively in a crowd during a sports game or concert. "
	},
	{
		"Category": "general",
		"American": "tic tac toe",
		"AmericanForms": "tic tac toe",
		"British": "noughts and crosses",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "checkout",
		"AmericanForms": "checkout",
		"British": "till",
		"Explanation": "This is used for the noun. You go to the <em>till</em> to buy your things. There is no verb form for the American English equivalent."
	},
	{
		"Category": "general",
		"American": "line",
		"AmericanForms": "line",
		"British": "queue",
		"Explanation": "Specifically for people standing in a <em>queue</em> waiting for something."
	},
	{
		"Category": "general",
		"American": "cutting it close",
		"AmericanForms": "cut it close, cutting it close, cuts it close",
		"British": "cutting it fine",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "December 26",
		"AmericanForms": "December 26, December 26th, the day after Christmas",
		"British": "Boxing Day",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "sick",
		"AmericanForms": "sick",
		"British": "poorly, ill",
		"Explanation": "When someone isn't feeling well, they feel <em>ill</em>, or they feel <em>poorly</em>."
	},
	{
		"Category": "general",
		"American": "stopper",
		"AmericanForms": "stopper",
		"British": "bung",
		"Explanation": "The rubber or cork at the top of a bottle to keep the liquid in is called a <em>bung</em>."
	},
	{
		"Category": "general",
		"American": "umbrella",
		"AmericanForms": "umbrella, umbrellas",
		"British": "brolly",
		"Explanation": "Don't forget your <em>brolly</em> when it rains! But everyone in Britian just uses a raincoat, anyway."
	},
	{
		"Category": "general",
		"American": "pull the rug out",
		"AmericanForms": "pull the rug out, pulled the rug out, rug pulled out",
		"British": "pull the carpet out",
		"Explanation": "To be surprised, in a bad way."
	},
	{
		"Category": "general",
		"American": "cigarette",
		"AmericanForms": "cigarette, cigarettes",
		"British": "fag, cig",
		"Explanation": "sorry u_u"
	},
	{
		"Category": "general",
		"American": "steal",
		"AmericanForms": "steal, borrow",
		"British": "bum",
		"Explanation": "To <em>bum</em> a cig, or <em>bum</em> a light."
	},
	{
		"Category": "general",
		"American": "dibs",
		"AmericanForms": "dibs, call dibs",
		"British": "bagsy",
		"Explanation": "I <em>bagsy</em> the last packet of rolos."
	},
	{
		"Category": "general",
		"American": "pulp",
		"AmericanForms": "pulp",
		"British": "with bits",
		"Explanation": "For drinks. Do you like orange juice <em>with bits</em>?"
	},
	{
		"Category": "general",
		"American": "kidding",
		"AmericanForms": "kidding",
		"British": "joking",
		"Explanation": "Are you <em>joking</em> me? (Though both <em>joking</em> and <em>kidding</em> are used.)"
	},
	{
		"Category": "general",
		"American": "couch",
		"AmericanForms": "couch, couches",
		"British": "sofa",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "comforter",
		"AmericanForms": "comforter, comforters",
		"British": "duvet",
		"Explanation": "On a bed, it goes fitted sheet, flat sheet, <em>duvet</em>. (Comforters, top blankets without covers, do not exist in britian?)"
	},
	{
		"Category": "general",
		"American": "top sheet",
		"AmericanForms": "top sheet, top sheets",
		"British": "flat sheet",
		"Explanation": "For bedding."
	},
	{
		"Category": "car",
		"American": "highway",
		"AmericanForms": "highway, freeway",
		"British": "motorway",
		"Explanation": ""
	},
	{
		"Category": "car",
		"American": "intersection",
		"AmericanForms": "intersection",
		"British": "junction",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "tire",
		"AmericanForms": "tire, tires",
		"British": "tyre",
		"Explanation": "n., on a car"
	},
	{
		"Category": "general",
		"American": "semi-truck",
		"AmericanForms": "semi, semitruck, semi-truck, semi truck, semi-trucks, semitrucks",
		"British": "lorry, lorries",
		"Explanation": "In Britian, the big motorized vehicle used for transporting goods is refered to as a <em>lorry</em> not a <em>semi-truck</em>. In addition, a <em>semi</em> always refers to a half-hard errection."
	},
	{
		"Category": "general",
		"American": "whine",
		"AmericanForms": "whine, whining, whined, complain, complaining, complained",
		"British": "whinge",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "nap",
		"AmericanForms": "nap",
		"British": "kip",
		"Explanation": "The noun form is more common, but the verb form is allowed. e.g., He's <em>kipping</em> on the sofa."
	},
	{
		"Category": "general",
		"American": "piehole",
		"AmericanForms": "piehole",
		"British": "cakehole",
		"Explanation": "For mouth, e.g. Shut your <em>cakehole</em>."
	},


	// brand name changes 
	{
		"Category": "general",
		"American": "band-aid",
		"AmericanForms": "bandaid, bandaids, band-aid, band-aids",
		"British": "plaster",
		"Explanation": "You put a <em>plaster</em> on a cut or other small injury, not a <em>band-aid</em>."
	},
	{
		"Category": "general",
		"American": "rain boots",
		"AmericanForms": "rain boots",
		"British": "wellies, wellington boots",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "aspirin",
		"AmericanForms": "aspirin, aspirins",
		"British": "paracetamol",
		"Explanation": "Aspirin is an American brand of painkiller medication, and in Britian paracetamol is the commonly used alternative."
	},
	{
		"Category": "general",
		"American": "advil",
		"AmericanForms": "advil, advils",
		"British": "ibuprofen",
		"Explanation": "Advil is an American brand of ibupropfen."
	},
	{
		"Category": "general",
		"American": "cold medicine",
		"AmericanForms": "cold medicine, cold medication, cold meds, flu medicine",
		"British": "lemsip",
		"Explanation": "Lemsip is a British brand of cold medication"
	},
	{
		"Category": "general",
		"American": "Kleenex",
		"AmericanForms": "Kleenex, Kleenexes",
		"British": "tissue",
		"Explanation": "Kleenex is an American brand of tissues."
	},
	{
		"Category": "general",
		"American": "realtor",
		"AmericanForms": "realtor, realtors",
		"British": "estate agent",
		"Explanation": "Realtor is actually an American brand name."
	},
	{
		"Category": "general",
		"American": "scotch tape",
		"AmericanForms": "scotch tape, tape",
		"British": "sellotape",
		"Explanation": "Scotch tape is an American brand."
	},
	{
		"Category": "general",
		"American": "mace",
		"AmericanForms": "mace",
		"British": "pepper spray",
		"Explanation": "(but also pepper spray is illegal in britain)"
	},
	{
		"Category": "general",
		"American": "popsicle",
		"AmericanForms": "popsicle, popsicles",
		"British": "ice-lolly",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "laundromat",
		"AmericanForms": "laundromat",
		"British": "laundrette",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "tupperware",
		"AmericanForms": "tupperware, tupperware container",
		"British": "plastic container",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "xerox",
		"AmericanForms": "xerox",
		"British": "photocopier",
		"Explanation": "not sure if anyone is using this word anymore, but I don't work in an office, what would I know"
	},
	{
		"Category": "general",
		"American": "crock-pot",
		"AmericanForms": "crock-pot, crockpot",
		"British": "slow cooker",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "post-it",
		"AmericanForms": "post-it",
		"British": "post-it note",
		"Explanation": "Never JUST a <em>post-it</em> in British English."
	},

	



	// idioms 
	{
		"Category": "general",
		"American": "two cents worth",
		"AmericanForms": "two cents worth, two cent's worth, two cents",
		"British": "two bob's worth",
		"Explanation": "To giving an opinion, e.g., “I’ll give my <em>two bob’s worth</em>.”"
	},
	{
		"Category": "general",
		"American": "beating a dead horse",
		"AmericanForms": "beating a dead horse, beat a dead horse",
		"British": "flogging a dead horse",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "head over heels",
		"AmericanForms": "head over heels, head-over-heels",
		"British": "arse-over-tit",
		"Explanation": ""
	},
	



	// swears 
	{
		"Category": "general",
		"American": "cuss",
		"AmericanForms": "cuss, cussed, cussing, cusses, curse, curses, cursing, cursed",
		"British": "swear",
		"Explanation": "Curse is for witchy things. Cuss is seen as generally more American. Swear is the most commonly used in British English."
	},
	{
		"Category": "general",
		"American": "ass",
		"AmericanForms": "ass, asses",
		"British": "arse",
		"Explanation": "British English can use either, I'm told it's vibes based."
	},
	{
		"Category": "general",
		"American": "asshole",
		"AmericanForms": "asshole, assholes",
		"British": "arsehole, asshole",
		"Explanation": "Either <em>asshole</em> or <em>arsehole</em> can be used. As an insult, <em>arse</em> should be used rather than the full <em>arsehole</em>."
	},
	{
		"Category": "general",
		"American": "shithole",
		"AmericanForms": "shithole, shitholes",
		"British": "shitehole",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "bullshit",
		"AmericanForms": "bullshit",
		"British": "bollocks, bullshit",
		"Explanation": "To express that you think what someone just said is false, consider using <em>bollocks</em>, not <em>bullshit</em>. (Though <em>bullshit</em> is also used in British English.)"
	},
	{
		"Category": "general",
		"American": "balls",
		"AmericanForms": "balls",
		"British": "bollocks",
		"Explanation": "For swearing specifically, not for sports balls."
	},



	// 
	// GRAMMAR CHANGES
	// 
	{
		"Category": "general",
		"American": "on accident",
		"AmericanForms": "on accident",
		"British": "by accident",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "a half hour",
		"AmericanForms": "a half hour",
		"British": "half an hour",
		"Explanation": "I personally don't know anyone who says <em>a half hour</em> but I'm told it's a thing."
	},
	{
		"Category": "general",
		"American": "half past",
		"AmericanForms": "half past",
		"British": "half",
		"Explanation": "When talking about time, 10:30 is <em>half</em> ten not <em>half past</em> ten."
	},
	{
		"Category": "general",
		"American": "monday through friday",
		"AmericanForms": "monday through friday",
		"British": "monday to friday",
		"Explanation": "i should flag every instance of this but oof"
	},
	{
		"Category": "general",
		"American": "sign in",
		"AmericanForms": "sign in, signing in",
		"British": "sign on, signing on",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "supposed to",
		"AmericanForms": "supposed to",
		"British": "meant to",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "get along with",
		"AmericanForms": "get along with, getting along with, get along",
		"British": "get on with",
		"Explanation": "You <em>get on with</em> your friends, rather than <em>getting along</em> with them."
	},

	// **the two of these are going to recursively flag each other and be minorly broken. should account for somehow. but hm. 
	// the loop SHOULDN'T be looking at words put in by the tool, but it is. 
	{
		"Category": "general",
		"American": "addicting",
		"AmericanForms": "addicting",
		"British": "addictive",
		"Explanation": "i may need more explaination on these. The American <em>addicting</em> becomes <em>addictive</em> and <em>addictive</em> becomes <em>moreish</em>?"
	},
	{
		"Category": "general",
		"American": "addictive",
		"AmericanForms": "addictive",
		"British": "moreish",
		"Explanation": "i may need more explaination on these. The American <em>addicting</em> becomes <em>addictive</em> and <em>addictive</em> becomes <em>moreish</em>?"
	},
	{
		"Category": "general",
		"American": "flavorful",
		"AmericanForms": "flavorful",
		"British": "flavoursome",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "gotten",
		"AmericanForms": "gotten",
		"British": "got",
		"Explanation": "The perfect participle of <em>get</em> is just <em>got</em>, not <em>gotten</em>."
	},
	{
		"Category": "general",
		"American": "give it a try",
		"AmericanForms": "give it a try",
		"British": "give it a go",
		"Explanation": ""
	},



  //
	// SPELLING CHANGES 
  //

	// ize to ise rule 
	// this is true for all(?) instances of words ending in ize, but we can't just flag on ize. only common words (or words i have personally used and had to correct) are included.
	{
		"Category": "general",
		"American": "realize",
		"AmericanForms": "realize, realizes, realized, realizing",
		"British": "realise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "organize",
		"AmericanForms": "organize, organizes, organized, organizing",
		"British": "organise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "maximize",
		"AmericanForms": "maximize, maximizes, maximized, maximizing",
		"British": "maximise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "philosophize",
		"AmericanForms": "philosophize, philosophizes, philosophized, philosophizing",
		"British": "philosophise",
		"Explanation": "not sure about 'philosophizing', is that real"
	},
	{
		"Category": "general",
		"American": "apologize",
		"AmericanForms": "apologize, apologizes, apologized, apologizing",
		"British": "apologise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "utilize",
		"AmericanForms": "utilize, utilizes, utilized, utilizing",
		"British": "utilise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "criticize",
		"AmericanForms": "criticize, criticizes,  criticized, criticizing",
		"British": "criticise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "traumatize",
		"AmericanForms": "traumatize, traumatized, traumatizes, traumatizing",
		"British": "traumatise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "summarize",
		"AmericanForms": "summarize, summarized, summarizes, summarizing",
		"British": "summarise",
		"Explanation": ""
	},


	// yze to yse rule 
	{
		"Category": "general",
		"American": "analyze",
		"AmericanForms": "analyze, analyzes, analyzed, analyzing",
		"British": "analyse",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "paralyze",
		"AmericanForms": "paralyze, paralyzes, paralyzed, paralyzing",
		"British": "paralyse",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "catalyze",
		"AmericanForms": "catalyze, catalyzes, catalyzed,catalyzing",
		"British": "catalyse",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "dialyze",
		"AmericanForms": "dialyze, dialyzes, dialyzed, dialyzing",
		"British": "dialyse",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "hydrolyze",
		"AmericanForms": "hydrolyze, hydrolyzes, hydrolyzed, hydrolyzing",
		"British": "hydrolyse",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "sterilize",
		"AmericanForms": "sterilize, sterilized, sterilizes, sterilizing",
		"British": "sterilise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "customize",
		"AmericanForms": "customize, customized, customizes, customizing",
		"British": "customise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "authorize",
		"AmericanForms": "authorize, authorized, authorizes, authorizing",
		"British": "authorise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "unauthorize",
		"AmericanForms": "unauthorize, unauthorized, unauthorizes, unauthorizing",
		"British": "unauthorise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "emphasize",
		"AmericanForms": "emphasize, emphasized, emphasizes, emphasizing",
		"British": "emphasise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "criticize",
		"AmericanForms": "criticize, criticized, criticizes, criticizing",
		"British": "criticise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "socialize",
		"AmericanForms": "socialize, socialized, socializes, socializing",
		"British": "socialise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "formalize",
		"AmericanForms": "formalize, formalized, formalizes, formalizing",
		"British": "formalise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "capitalize",
		"AmericanForms": "capitalize, capitalized, capitalizes, capitalizing",
		"British": "capitalise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "sexualize",
		"AmericanForms": "sexualize, sexualized, sexualizes, sexualizing",
		"British": "sexualise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "fantasize",
		"AmericanForms": "fantasize, fantasized, fantasizes, fantasizing",
		"British": "fantasise",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "patronize",
		"AmericanForms": "patronize, patronized, patronizes, patronizing",
		"British": "patronize",
		"Explanation": ""
	},

	// er to re rule 
	{
		"Category": "general",
		"American": "theater",
		"AmericanForms": "theater, theaters",
		"British": "theatre",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "meter",
		"AmericanForms": "meter, meters",
		"British": "metre",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "center",
		"AmericanForms": "center, centered",
		"British": "centre",
		"Explanation": "Center becomes centre, centered becomes centred."
	},
	{
		"Category": "general",
		"American": "fiber",
		"AmericanForms": "fiber, fibers",
		"British": "fibre",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "liter",
		"AmericanForms": "liter, liters",
		"British": "litre",
		"Explanation": ""
	},

	// double L for -ed rule, for Ls following vowels 
	{
		"Category": "general",
		"American": "labeled",
		"AmericanForms": "labeled",
		"British": "labelled",
		"Explanation": "British English uses two Ls for some words ending in -ed."
	},
	{
		"Category": "general",
		"American": "canceled",
		"AmericanForms": "canceled, canceling",
		"British": "cancelled",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "quarreling",
		"AmericanForms": "quarreling",
		"British": "quarrelling",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "woolen",
		"AmericanForms": "woolen",
		"British": "woollen",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "modeling",
		"AmericanForms": "modeling",
		"British": "modelling",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "modeled",
		"AmericanForms": "modeled",
		"British": "modelled",
		"Explanation": "not sure about this one tbh"
	},
	{
		"Category": "general",
		"American": "traveler",
		"AmericanForms": "traveler, travelers",
		"British": "traveller",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "traveling",
		"AmericanForms": "traveling, travelings",
		"British": "travelling",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "traveled",
		"AmericanForms": " traveled",
		"British": "travelled",
		"Explanation": "is this real"
	},

	// double L to single L rule
	{
		"Category": "general",
		"American": "enroll",
		"AmericanForms": "enroll, enrollment",
		"British": "enrol",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "fulfill",
		"AmericanForms": "fulfill, fulfillment",
		"British": "fulfilment",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "installment",
		"AmericanForms": "installment",
		"British": "instalment",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "willful",
		"AmericanForms": "willful, willfully",
		"British": "wilful",
		"Explanation": ""
	},

	// un-drop the E in some words rule 
	{
		"Category": "general",
		"American": "sizable",
		"AmericanForms": "sizable",
		"British": "sizeable",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "livable",
		"AmericanForms": "livable, livably",
		"British": "liveable",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "unshakable",
		"AmericanForms": "unshakable, unshakably, unshaken",
		"British": "unshakeable",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "judgment",
		"AmericanForms": "judgment, judgments",
		"British": "judgement",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "acknowledgment",
		"AmericanForms": "acknowledgment, acknowledgments",
		"British": "acknowledgement",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "aging",
		"AmericanForms": "aging",
		"British": "ageing",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "likable",
		"AmericanForms": "likable, likablity",
		"British": "likeable",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "salable",
		"AmericanForms": "salable",
		"British": "saleable",
		"Explanation": "wtf is salable lol"
	},

	// put back the - rule 
	{
		"Category": "general",
		"American": "cooperate",
		"AmericanForms": "cooperate, cooperates, cooperating",
		"British": "co-operate",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "reenter",
		"AmericanForms": "reenter, reenterty, reentering",
		"British": "re-enter",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "preschool",
		"AmericanForms": "preschool",
		"British": "pre-school",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "nonprofit",
		"AmericanForms": "nonprofit, nonprofits",
		"British": "non-profit",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "counterattack",
		"AmericanForms": "counterattack, counterattacks",
		"British": "counter-attack",
		"Explanation": ""
	},

	// e to oe (like french) rule 
	{
		"Category": "general",
		"American": "estrogen",
		"AmericanForms": "estrogen",
		"British": "oestrogen",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "esophagus",
		"AmericanForms": "esophagus",
		"British": "oesophagus",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "edema",
		"AmericanForms": "edema",
		"British": "oedema",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "fetus",
		"AmericanForms": "fetus, fetuses",
		"British": "foetus",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "diarrhea",
		"AmericanForms": "diarrhea",
		"British": "diarrhoea",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "encyclopedia",
		"AmericanForms": "encyclopedia, encyclopedias",
		"British": "encyclopaedia",
		"Explanation": ""
	},

	// e to ae rule 
	{
		"Category": "general",
		"American": "medieval",
		"AmericanForms": "medieval",
		"British": "mediaeval",
		"Explanation": "either is fine"
	},
	{
		"Category": "general",
		"American": "pediactric",
		"AmericanForms": "pediactric, pediactrics",
		"British": "paediatric",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "orthopedic",
		"AmericanForms": "orthopedic, orthopedics",
		"British": "orthopaedic",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "ameba",
		"AmericanForms": "ameba, amebas",
		"British": "amoeba",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "anemia",
		"AmericanForms": "anemia, anemic",
		"British": "anaemia",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "gynecology",
		"AmericanForms": "gynecology, gynecologist",
		"British": "gynaecology",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "leukemia",
		"AmericanForms": "leukemia",
		"British": "leukaemia",
		"Explanation": ""
	},

	// ed to t rule (some slangs use it more heavily than others)
	{
		"Category": "general",
		"American": "burned",
		"AmericanForms": "burned",
		"British": "burnt",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "learned",
		"AmericanForms": "learned",
		"British": "learnt",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "spelled",
		"AmericanForms": "spelled",
		"British": "spelt",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "dreamed",
		"AmericanForms": "dreamed",
		"British": "drempt",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "smelled",
		"AmericanForms": "smelled",
		"British": "smelt",
		"Explanation": ""
	},

	// g to gue rule 
	{
		"Category": "general",
		"American": "analog",
		"AmericanForms": "analog, analogs",
		"British": "analogue",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "catalog",
		"AmericanForms": "catalog, catalogs, cataloging",
		"British": "catalogue",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "dialog",
		"AmericanForms": "dialog, dialogs",
		"British": "dialogue",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "monolog",
		"AmericanForms": "monolog, monologs",
		"British": "monologue",
		"Explanation": ""
	},

	// o to ou rule 
	{
		"Category": "general",
		"American": "color",
		"AmericanForms": "color, colors, coloring",
		"British": "colour",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "favor",
		"AmericanForms": "favor, favors, favoring, favorite",
		"British": "favour",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "labor",
		"AmericanForms": "labor, labors, laboring",
		"British": "labour",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "neighbor",
		"AmericanForms": "neighbor, neighbors, neighboring",
		"British": "neighbour",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "endeavor",
		"AmericanForms": "endeavor, endeavors, endeavoring",
		"British": "endeavour",
		"Explanation": ""
	},

	// the singular entry in the mme rule 
	{
		"Category": "general",
		"American": "program",
		"AmericanForms": "program, programs",
		"British": "programme",
		"Explanation": "British English uses programme when wefering to TV shows, events, or plans; but computer programs remain 'program'."
	},

	// add an S for directions rule 
	{
		"Category": "general",
		"American": "backward",
		"AmericanForms": "backward",
		"British": "backwards",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "forward",
		"AmericanForms": "forward",
		"British": "forwards",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "toward",
		"AmericanForms": "toward, untoward",
		"British": "towards",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "gray",
		"AmericanForms": "gray, grays, graying, grayed, grayish",
		"British": "grey",
		"Explanation": ""
	},

	
	// the c to s (but only for nouns) rule
	{
		"Category": "general",
		"American": "licence",
		"AmericanForms": "licence, licences",
		"British": "license",
		"Explanation": "British English uses -ce for nouns and -se for verbs. American English tends to use -se for both (though not always, such as advice/advise)"
	},
	{
		"Category": "general",
		"American": "defense",
		"AmericanForms": "defense, defenses",
		"British": "defence",
		"Explanation": "British English uses -ce for nouns and -se for verbs. American English tends to use -se for both (though not always, such as advice/advise)"
	},
	{
		"Category": "general",
		"American": "offense",
		"AmericanForms": "offense, offenses",
		"British": "offence",
		"Explanation": "British English uses -ce for nouns and -se for verbs. American English tends to use -se for both (though not always, such as advice/advise)"
	},

	// misc alternate spellings
	{
		"Category": "general",
		"American": "percent",
		"AmericanForms": "percent, percents",
		"British": "per cent",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "plow",
		"AmericanForms": "plow, plowing",
		"British": "plough",
		"Explanation": "**might double check this one, plowing specifically"
	},
	{
		"Category": "general",
		"American": "skeptical",
		"AmericanForms": "skeptical, skeptic, skeptics, skeptically",
		"British": "sceptical",
		"Explanation": ""
	},
	{
		"Category": "general",
		"American": "while",
		"AmericanForms": "while",
		"British": "whilst",
		"Explanation": "not always, either is accepted"
	},
	{
		"Category": "general",
		"American": "among",
		"AmericanForms": "among",
		"British": "amongst",
		"Explanation": "not always, either is accepted"
	},

	{
		"Category": "general",
		"American": "aesthetic",
		"AmericanForms": "aesthetic, aesthetics",
		"British": "esthetics",
		"Explanation": "Either is fine. One vote said 'I have never seend aestetics in my life', so take that as you will."
	},
	{
		"Category": "general",
		"American": "aluminum",
		"AmericanForms": "aluminum",
		"British": "aluminium",
		"Explanation": "I always thought Brits were mispronouncing <em>aluminum</em> when they say <em>aluminium</em> (like the whole <em>nuculer</em> thing for <em>nuclear</em>), but apparently they spell it that way too!"
	},










	//needs work 
	{
		"Category": "general",
		"American": "forgot something at home",
		"AmericanForms": "forgot something at home",
		"British": "left something at home",
		"Explanation": "**need a better way to grab this one"
	},
	{
		"Category": "general",
		"American": "pick up from school",
		"AmericanForms": "pick up from school",
		"British": "collect from school",
		"Explanation": "**bad grabbing"
	},
	{
		"Category": "general",
		"American": "starchy",
		"AmericanForms": "starchy",
		"British": "stodgy",
		"Explanation": "**"
	},
	

	// slang (for me, but separated out for ease of deleting for you)
	{
		"Category": "slang",
		"American": "isn't it",
		"AmericanForms": "isn't it, ain't it",
		"British": "innit",
		"Explanation": "Is not part of the standard British accent, and is only used in dialogue."
	},
	{
		"Category": "slang",
		"American": "guys",
		"AmericanForms": "guys, you guys",
		"British": "lot, you lot, lads",
		"Explanation": "Either is used."
	},
	{
		"Category": "slang",
		"American": "stupid",
		"AmericanForms": "stupid",
		"British": "daft",
		"Explanation": "<em>Daft</em> is a nicer way to say <em>stupid</em>."
	},
	{
		"Category": "slang",
		"American": "terrified",
		"AmericanForms": "terrified",
		"British": "bricking it",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "exhausted",
		"AmericanForms": "exhausted",
		"British": "knackered",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "bad",
		"AmericanForms": "bad",
		"British": "grim, pants",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "fuck",
		"AmericanForms": "fuck",
		"British": "shag",
		"Explanation": "Specifically the act of, not the insult or the swear."
	},
	{
		"Category": "slang",
		"American": "slut",
		"AmericanForms": "slut, hoe",
		"British": "slag",
		"Explanation": "British English does use <em>slut</em> also, though <em>slag</em> can be affectionate while <em>slut</em> is less so."
	},
	{
		"Category": "slang",
		"American": "expensive",
		"AmericanForms": "expensive",
		"British": "spenny",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "steal",
		"AmericanForms": "steal, stealing",
		"British": "nick",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "great idea",
		"AmericanForms": "great idea, good idea",
		"British": "great shout",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "very",
		"AmericanForms": "very",
		"British": "bare, proper",
		"Explanation": "These are interchangable but <em>bare</em> is more London slang."
	},
	{
		"Category": "slang",
		"American": "crazy",
		"AmericanForms": "crazy",
		"British": "mental, nutter, mad",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "bro",
		"AmericanForms": "bro",
		"British": "mate",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "can't be bothered",
		"AmericanForms": "can't be bothered",
		"British": "can't be arsed",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "nightmare",
		"AmericanForms": "nightmare",
		"British": "mare",
		"Explanation": "If your car broke down, you’re having an absolute <em>mare</em>."
	},
	{
		"Category": "slang",
		"American": "middle of nowhere",
		"AmericanForms": "middle of nowhere",
		"British": "arse end of nowhere, bum fuck nowhere",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "pedophile",
		"AmericanForms": "pedo, pedos, pedophile, pedophiles",
		"British": "nonce",
		"Explanation": "I've also seen paedophile, and pedo isn't uncommon. Worth noting that nonce isn’t always meant in the literal. It’s a favourite insult, also see: noncery."
	},
	{
		"Category": "slang",
		"American": "maybe",
		"AmericanForms": "maybe, perhaps, I might do that",
		"British": "could do",
		"Explanation": "Specifically for dialogue. Not an absolute, but 'more British' than the American forms."
	},
	{
		"Category": "slang",
		"American": "wealthy",
		"AmericanForms": "wealthy, rich",
		"British": "minted",
		"Explanation": "**need more info"
	},
	{
		"Category": "slang",
		"American": "face",
		"AmericanForms": "face, faces",
		"British": "mug",
		"Explanation": ""
	},
	{
		"Category": "slang",
		"American": "lucky",
		"AmericanForms": "lucky",
		"British": "jammy",
		"Explanation": "You won the lottery? <em>Jammy</em> bastard."
	},
	{
		"Category": "slang",
		"American": "damaged",
		"AmericanForms": "damaged",
		"British": "bashed",
		"Explanation": "Used for beaten up or damaged, and can be used for objects or people. e.g., My phone is <em>bashed</em>, I need a new one."
	},
	{
		"Category": "slang",
		"American": "woman",
		"AmericanForms": "woman, broads",
		"British": "bird",
		"Explanation": "A slightly objectifying slang term for a woman. If you're talking about John's girlfriend, you might say John's <em>bird</em>."
	},
	// {
	// 	"Category": "slang",
	// 	"American": "",
	// 	"AmericanForms": "",
	// 	"British": "",
	// 	"Explanation": ""
	// },

	{
		// not sure if slang? or rather, im sure cop off is slang but im not sure hook up is used 
		"Category": "slang",
		"American": "hook up",
		"AmericanForms": "hook up, hooked up, hooking up",
		"British": "cop off",
		"Explanation": "He <em>copped off</em> with some girl at the gig."
	}
	// {
	// 	"Category": "general",
	// 	"American": "",
	// 	"AmericanForms": "",
	// 	"British": "",
	// 	"Explanation": ""
	// },

	
	

];