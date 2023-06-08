//Tracery example by Allison Parrish
//But we'll also create a box to hold our lines as they move
particles = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(50);
}

function draw() {
//This overlay will always take us back to black - try changing it
//The alpha of 3 controls the speed of the fade - try raising and lowering it
	//This moves the particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }
	background(204, 52, 235,50);
}

//This draws the word with each mouse click
function mouseClicked() {
	var grammar = tracery.createGrammar(grammarSource); //set up tracery library
	grammar.addModifiers(tracery.baseEngModifiers); //set up English grammer properly (capitals and a/an)
	var output = grammar.flatten("#origin#"); //creates sentence from grammar source
	let p = new Particle(mouseX,mouseY,output);
    particles.push(p);

}

// grammerSource is generated using:
// http://tracery.io/ 
// See the tutorial here: http://www.crystalcodepalace.com/traceryTut.html
var grammarSource = {
	"origin": [
		"#firstbit#  #secondbit# "
	],
	"firstbit": [
		"#pronoun# do not rush toward #death#",
		"There is a kind of #abstractnoun# that #strips# whatever you do of weight and scope.",
		"Fear of death is merely the projection into the future of a fear which dates back to our first moment of life.",
		"#Three# in the #morning#.",
		"We can endure any #abstractnoun#, however destructive, provided it replaces everything.",
		"I do nothing.",
		"To defy heredity is to defy billions of years, to defy the first cell.",
		"There is a god at the outset, if not at the end, of every joy.",
		"As a general rule, men #expect# disappointment.",
		"I disentangle myself from #abstractnoun#."
	],
	"secondbit": [
		"I realize this second, then this one, then the next: I draw up the balance sheet for each minute.",
		"I need no intercessor, I shall manage alone.",
		"I cannot bear your bothering about my #abstractnoun#.",
		"#posemotion# itself, perhaps is nothing more.",
		"It is what lets me comprehend Buddha, but also what keeps me from following him.",
		"Forty years of a #adjective#, #adjective# labor of verification.",
		"For every discomfort is only an abortive metaphysical experience."
	],
	"death": [
		"death",
		"knowledge",
		"love",
		"boredom",
		"idleness",
		"fear",
		"inaction",
		"monotony",
		"alienation",
		"dread",
		"suffering",
		"detachment",
		"lucidity",
		"frustration",
		"sterility"
	],
	"morning": [
		"morning",
		"evening"
	],
	"expect": [
		"expect",
		"crave",
		"desire",
		"feel",
		"doubt",
		"long",
		"delight",
		"realize"
	],
	"abstractnoun": [
		"knowledge",
		"love",
		"suffering",
		"truth",
		"anxiety",
		"discomfort",
		"ambiguity",
		"obsession",
		"salvation",
		"appearances"
	],
	"strips": [
		"strips",
		"muddies",
		"glimpses",
		"attains",
		"wears out",
		"corrupts",
		"leaves behind"
	],
	"Three": [
		"Three",
		"Two",
		"One",
		"Four"
	],
	"destructiveverb": [
		"blow your brains out",
		"loathe our kind",
		"stop living",
		"fail"
	],
	"posemotion": [
		"satisfaction",
		"ecstasy"
	],
	"adjective": [
		"irresistible",
		"absolute",
		"miraculous",
		"inexhaustible",
		"crucial",
		"nonexistent",
		"extraordinary",
		"null",
		"supernatural",
		"unendurable",
		"dreadful",
		"extreme"
	],
	"pronoun": [
		"We",
		"Men",
		"I"
	],
	"posstate": [
		"free",
		"happy"
	],
	"negemotion": [
		"rage",
		"spite",
		"resentment",
		""
	]
};

class Particle {
  constructor(x,y,text) {
		//This sets the x value to mouse position
    this.x = x;
		//This keeps the y at mouse position
    this.y = y;
		//This sets the range of x movement - try limiting it to + or -
    this.vx = random(-1, 1);
		//This sets the range of y movement - try limiting it to + or -
    this.vy = random(-1, 1);
		//This sets the text size to be consistent
		this.size = random(15,50);
		//This sets the current line to the particle
		this.text = text;
  }

  finished() {
		//Change this to 255 if you reverse the fade
    return (this.width < 0 || this.width > windowWidth);
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    noStroke();
		textSize(this.size);
		//Try any web safe font
		textFont("Courier");
		//This centers the text on the click
		textAlign(CENTER, CENTER);
		//This sets the fill to a static color - can you make it random?
		//You can also add the outline
    //stroke(255);
		//This keeps R and G values at 255 to allow for yellows
		//Try changing it!
    fill("247, 171, 229");
		//This positions the text
    text(this.text, this.x, this.y);
  }
}