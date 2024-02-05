export const getMikaMouse = (PIXI, app)=>{
// create a background...
	const background = PIXI.Sprite.from('http://all.franxxdaryl.site/dist/assets/bgplaygroud.jpg');
	const textureButton = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/mikafull3.jpg');
	const textureButtonDown = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/mikafull2.jpg');
	const textureButtonOver = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/mikafull4.jpg');
	const buttons = [];
	console.log(document.body.offsetWidth)
	const curX = document.body.offsetWidth - 400 > 0 ? document.body.offsetWidth - 400 : 500;
	const buttonPositions = [
		curX, 545
	];

	for (let i = 0; i < 1; i++)
	{
		const button = new PIXI.Sprite(textureButton);
		button.width = 800;
		button.height = 750;
		button.anchor.set(0.5);
		button.x = buttonPositions[i * 2];
		button.y = buttonPositions[i * 2 + 1];

		// make the button interactive...
		button.eventMode = 'static';
		button.cursor = 'pointer';

		button
		// Mouse & touch events are normalized into
		// the pointer* events for handling different
		// button events.
			.on('pointerdown', onButtonDown)
			.on('pointerup', onButtonUp)
			.on('pointerupoutside', onButtonUp)
			.on('pointerover', onButtonOver)
			.on('pointerout', onButtonOut);
		app.stage.addChild(button);

		// add button to array
		buttons.push(button);
	}

	// set some silly values...
	function onButtonDown()
	{
		this.isdown = true;
		this.texture = textureButtonDown;
		this.alpha = 1;
	}

	function onButtonUp()
	{
		this.isdown = false;
		if (this.isOver)
		{
			this.texture = textureButtonOver;
		}
		else
		{
			this.texture = textureButton;
		}
	}

	function onButtonOver()
	{
		this.isOver = true;
		if (this.isdown)
		{
			return;
		}
		this.texture = textureButtonOver;
	}

	function onButtonOut()
	{
		this.isOver = false;
		if (this.isdown)
		{
			return;
		}
		this.texture = textureButton;
	}

} 

export const getMikaMouseEat = (PIXI, app)=>{
// create a background...
	const background = PIXI.Sprite.from('http://all.franxxdaryl.site/dist/assets/bgplaygroud.jpg');

	// background.width = app.screen.width;
	// background.height = app.screen.height;

	// add background to stage...
	// app.stage.addChild(background);

	// create some textures from an image path
	const textureButton = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/eatemika1.jpg');
	const textureButtonOver = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/eatemika2.jpg');
	const textureButtonDown = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/eatemika3.jpg');
	const buttons = [];

	const buttonPositions = [
		20, 0,
		495, 75,
		410, 325,
		120, 365,
		485, 215,
	];

	for (let i = 0; i < 5; i++)
	{
		const button = new PIXI.Sprite(textureButton);
		button.width = 200;
		button.height = 200;
		button.x = buttonPositions[i * 2];
		button.y = buttonPositions[i * 2 + 1];

		// make the button interactive...
		button.eventMode = 'static';
		button.cursor = 'pointer';

		button
		// Mouse & touch events are normalized into
		// the pointer* events for handling different
		// button events.
			.on('pointerdown', onButtonDown)
			.on('pointerup', onButtonUp)
			.on('pointerupoutside', onButtonUp)
			.on('pointerover', onButtonOver)
			.on('pointerout', onButtonOut);

		// Use mouse-only events
		// .on('mousedown', onButtonDown)
		// .on('mouseup', onButtonUp)
		// .on('mouseupoutside', onButtonUp)
		// .on('mouseover', onButtonOver)
		// .on('mouseout', onButtonOut)

		// Use touch-only events
		// .on('touchstart', onButtonDown)
		// .on('touchend', onButtonUp)
		// .on('touchendoutside', onButtonUp)

		// add it to the stage
		app.stage.addChild(button);

		// add button to array
		buttons.push(button);
	}

	// set some silly values...
	// buttons[0].scale.set(1.2);
	buttons[2].rotation = Math.PI / 10;
	// buttons[3].scale.set(0.8);
	// buttons[4].scale.set(0.8, 1.2);
	buttons[4].rotation = Math.PI;

	function onButtonDown()
	{
		this.isdown = true;
		this.texture = textureButtonDown;
		this.alpha = 1;
	}

	function onButtonUp()
	{
		this.isdown = false;
		if (this.isOver)
		{
			this.texture = textureButtonOver;
		}
		else
		{
			this.texture = textureButton;
		}
	}

	function onButtonOver()
	{
		this.isOver = true;
		if (this.isdown)
		{
			return;
		}
		this.texture = textureButtonOver;
	}

	function onButtonOut()
	{
		this.isOver = false;
		if (this.isdown)
		{
			return;
		}
		this.texture = textureButton;
	}

} 

export function getDisplayPic(){
	// const app = new PIXI.Application({ resizeTo: window });
	const app = new PIXI.Application({ resizeTo: document.getElementById('mika-playground') });
	document.getElementById('mika-playground')?.appendChild(app.view);
	
	// create a texture from an image path
	const texture = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/display.jpg');
	
	/* create a tiling sprite ...
	 * requires a texture, a width and a height
	 * in WebGL the image size should preferably be a power of two
	 */
	console.log(texture)
	const tilingSprite = new PIXI.TilingSprite(
	    texture,
	    app.screen.width,
	    app.screen.height,
	);
	
	app.stage.addChild(tilingSprite);
	
	let count = 0;
	
	app.ticker.add(() =>
	{
	    count += 0.005;
	
	    // tilingSprite.tileScale.x = 2 + Math.sin(count);
	    // tilingSprite.tileScale.y = 2 + Math.cos(count);
	
	    tilingSprite.tilePosition.x += 1;
	    tilingSprite.tilePosition.y += 1;
	});
	return app;
}


export function tiggerMachine(){
	
	const app = new PIXI.Application({ background: '#fbe2f0', resizeTo: window });
	
	document.getElementById('mika-playground')?.appendChild(app.view);
	
	PIXI.Assets.load([
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm1.png',
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm2.png',
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm3.png',
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm4.png',
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm5.png',
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm6.png',
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm7.png',
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm8.png',
	    'http://all.franxxdaryl.site/dist/assets/wheels/wm9.png',
		'http://all.franxxdaryl.site/dist/assets/wheels/wm10.png',
		'http://all.franxxdaryl.site/dist/assets/wheels/wm11.png'
	]).then(onAssetsLoaded);
	
	const REEL_WIDTH = 260;
	const SYMBOL_SIZE = 250;
	
	// onAssetsLoaded handler builds the example.
	function onAssetsLoaded()
	{
	    // Create different slot symbols.
	    const slotTextures = [
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm1.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm2.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm3.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm4.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm5.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm6.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm7.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm8.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm9.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm10.png'),
	        PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm11.png')
	    ];
	
	    // Build the reels
	    const reels = [];
	    const reelContainer = new PIXI.Container();
	
	    for (let i = 0; i < 5; i++)
	    {
	        const rc = new PIXI.Container();
	
	        rc.x = i * REEL_WIDTH;
	        reelContainer.addChild(rc);
	
	        const reel = {
	            container: rc,
	            symbols: [],
	            position: 0,
	            previousPosition: 0,
	            blur: new PIXI.filters.BlurFilter(),
	        };
	
	        reel.blur.blurX = 0;
	        reel.blur.blurY = 0;
	        rc.filters = [reel.blur];
	
	        // Build the symbols
	        for (let j = 0; j < 11; j++)
	        {
	            const symbol = new PIXI.Sprite(slotTextures[Math.floor(Math.random() * slotTextures.length)]);
	            // Scale the symbol to fit symbol area.
	
	            symbol.y = j * SYMBOL_SIZE;
	            symbol.scale.x = symbol.scale.y = Math.min(SYMBOL_SIZE / symbol.width, SYMBOL_SIZE / symbol.height);
	            symbol.x = Math.round((SYMBOL_SIZE - symbol.width) / 2);
	            reel.symbols.push(symbol);
	            rc.addChild(symbol);
	        }
	        reels.push(reel);
	    }
	    app.stage.addChild(reelContainer);
	
	    // Build top & bottom covers and position reelContainer
	    const margin = (app.screen.height - SYMBOL_SIZE * 3) / 2;
		console.log(app.screen.width)
	    reelContainer.y = margin;
	    reelContainer.x = Math.round(app.screen.width - REEL_WIDTH * 5)/2;
	    const top = new PIXI.Graphics();
	
	    top.beginFill('#d6e0f9', .9);
	    top.drawRect(0, 0, app.screen.width, margin);
	    const bottom = new PIXI.Graphics();
	
	    bottom.beginFill('#d6e0f9', .9);
	    bottom.drawRect(0, SYMBOL_SIZE * 3 + margin, app.screen.width, margin);
	
	    // Add play text
	    const style = new PIXI.TextStyle({
	        fontFamily: 'sans-serif',
	        fontSize: 36,
	        fontWeight: 'bold',
	        fill: ['#ffffff', '#fbe2f0'], // gradient
	        stroke: '#4a1850',
	        strokeThickness: 5,
	        dropShadow: true,
	        dropShadowColor: '#fde6f1',
	        dropShadowBlur: 4,
	        dropShadowAngle: Math.PI / 6,
	        dropShadowDistance: 6,
	        wordWrap: true,
	        wordWrapWidth: 440,
	    });
	
	    const playText = new PIXI.Text('Spin the wheels!', style);
	
	    playText.x = Math.round((bottom.width - playText.width) / 2);
	    playText.y = app.screen.height - margin + Math.round((margin - playText.height) / 2);
	    bottom.addChild(playText);
	
	    // Add header text
	    const headerText = new PIXI.Text('mika guruguru wheels~', style);
	
	    headerText.x = Math.round((top.width - headerText.width) / 2);
	    headerText.y = Math.round((margin - headerText.height) / 2);
	    top.addChild(headerText);
	
	    app.stage.addChild(top);
	    app.stage.addChild(bottom);
	
	    // Set the interactivity.
	    bottom.eventMode = 'static';
	    bottom.addListener('pointerdown', () =>
	    {
	        startPlay();
	    });
	
	    let running = false;
	
	    // Function to start playing.
	    function startPlay()
	    {
	        if (running) return;
	        running = true;
	
	        for (let i = 0; i < reels.length; i++)
	        {
	            const r = reels[i];
	            const extra = Math.floor(Math.random() * 3);
	            const target = r.position + 10 + i * 5 + extra;
	            const time = 2500 + i * 600 + extra * 600;
	
	            tweenTo(r, 'position', target, time, backout(0.5), null, i === reels.length - 1 ? reelsComplete : null);
	        }
	    }
	
	    // Reels done handler.
	    function reelsComplete()
	    {
	        running = false;
	    }
	
	    // Listen for animate update.
	    app.ticker.add((delta) =>
	    {
	    // Update the slots.
	        for (let i = 0; i < reels.length; i++)
	        {
	            const r = reels[i];
	            // Update blur filter y amount based on speed.
	            // This would be better if calculated with time in mind also. Now blur depends on frame rate.
	
	            r.blur.blurY = (r.position - r.previousPosition) * 8;
	            r.previousPosition = r.position;
	
	            // Update symbol positions on reel.
	            for (let j = 0; j < r.symbols.length; j++)
	            {
	                const s = r.symbols[j];
	                const prevy = s.y;
	
	                s.y = ((r.position + j) % r.symbols.length) * SYMBOL_SIZE - SYMBOL_SIZE;
	                if (s.y < 0 && prevy > SYMBOL_SIZE)
	                {
	                    // Detect going over and swap a texture.
	                    // This should in proper product be determined from some logical reel.
	                    s.texture = slotTextures[Math.floor(Math.random() * slotTextures.length)];
	                    s.scale.x = s.scale.y = Math.min(SYMBOL_SIZE / s.texture.width, SYMBOL_SIZE / s.texture.height);
	                    s.x = Math.round((SYMBOL_SIZE - s.width) / 2);
	                }
	            }
	        }
	    });
	}
	
	// Very simple tweening utility function. This should be replaced with a proper tweening library in a real product.
	const tweening = [];
	
	function tweenTo(object, property, target, time, easing, onchange, oncomplete)
	{
	    const tween = {
	        object,
	        property,
	        propertyBeginValue: object[property],
	        target,
	        easing,
	        time,
	        change: onchange,
	        complete: oncomplete,
	        start: Date.now(),
	    };
	
	    tweening.push(tween);
	
	    return tween;
	}
	// Listen for animate update.
	app.ticker.add((delta) =>
	{
	    const now = Date.now();
	    const remove = [];
	
	    for (let i = 0; i < tweening.length; i++)
	    {
	        const t = tweening[i];
	        const phase = Math.min(1, (now - t.start) / t.time);
	
	        t.object[t.property] = lerp(t.propertyBeginValue, t.target, t.easing(phase));
	        if (t.change) t.change(t);
	        if (phase === 1)
	        {
	            t.object[t.property] = t.target;
	            if (t.complete) t.complete(t);
	            remove.push(t);
	        }
	    }
	    for (let i = 0; i < remove.length; i++)
	    {
	        tweening.splice(tweening.indexOf(remove[i]), 1);
	    }
	});
	
	// Basic lerp funtion.
	function lerp(a1, a2, t)
	{
	    return a1 * (1 - t) + a2 * t;
	}
	
	// Backout function from tweenjs.
	// https://github.com/CreateJS/TweenJS/blob/master/src/tweenjs/Ease.js
	function backout(amount)
	{
	    return (t) => (--t * t * ((amount + 1) * t + amount) + 1);
	}
	return app;
}

export function mikaStar(){
	
	const app = new PIXI.Application({ resizeTo: window });	

	const background = PIXI.Sprite.from('http://all.franxxdaryl.site/dist/assets/candy-bg.jpg');
	const filter = new PIXI.filters.ColorMatrixFilter();
	const blurFilter = new PIXI.filters.BlurFilter();
	
	background.width = app.screen.width;
	background.height = app.screen.height;
	app.stage.addChild(background);
	background.filters = [blurFilter];
	
	const blurAmount = Math.cos(2);
	blurFilter.blur = 20 * (blurAmount);
	//     const { matrix } = filter;
	
	//     matrix[1] = Math.sin(1) * 3;
	//     matrix[2] = Math.cos(1);
	//     matrix[3] = Math.cos(1) * 1.5;
	//     matrix[4] = Math.sin(1 / 3) * 2;
	//     matrix[5] = Math.sin(1 / 2);
	//     matrix[6] = Math.sin(1 / 4);
		
	document.getElementById('mika-playground')?.appendChild(app.view);

	// Get the texture for star.
	const starTexture = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/star.png');
	const starTexture2 = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/star2.png');

	const starAmount = 1000;
	let cameraZ = 0;
	const fov = 20;
	const baseSpeed = 0.025;
	let speed = 0;
	let warpSpeed = 0;
	const starStretch = 2.5;
	const starBaseSize = 0.25;

	// Create the stars
	const stars = [];

	for (let i = 0; i < starAmount; i++)
	{
		const star = {
			sprite: (i % 2 === 0 ? (new PIXI.Sprite(starTexture)) : (new PIXI.Sprite(starTexture2))),
			z: 0,
			x: 0,
			y: 0,
		};

		star.sprite.anchor.x = 0.5;
		star.sprite.anchor.y = 0.7;
		randomizeStar(star, true);
		app.stage.addChild(star.sprite);
		stars.push(star);
	}

	function randomizeStar(star, initial)
	{
		star.z = initial ? Math.random() * 2000 : cameraZ + Math.random() * 1000 + 2000;

		// Calculate star positions with radial random coordinate so no star hits the camera.
		const deg = Math.random() * Math.PI * 2;
		const distance = Math.random() * 50 + 1;

		star.x = Math.cos(deg) * distance;
		star.y = Math.sin(deg) * distance;
	}

	// Change flight speed every 25 seconds
	setInterval(() =>
	{
		warpSpeed = warpSpeed > 0 ? 0 : 1;
	}, 25000);

	// Listen for animate update
	app.ticker.add((delta) =>
	{
		// Simple easing. This should be changed to proper easing function when used for real.
		speed += (warpSpeed - speed) / 20;
		cameraZ += delta * 10 * (speed + baseSpeed);
		for (let i = 0; i < starAmount; i++)
		{
			const star = stars[i];

			if (star.z < cameraZ) randomizeStar(star);

			// Map star 3d position to 2d with really simple projection
			const z = star.z - cameraZ;

			star.sprite.x = star.x * (fov / z) * app.renderer.screen.width + app.renderer.screen.width / 2;
			star.sprite.y = star.y * (fov / z) * app.renderer.screen.width + app.renderer.screen.height / 2;

			// Calculate star scale & rotation.
			const dxCenter = star.sprite.x - app.renderer.screen.width / 2;
			const dyCenter = star.sprite.y - app.renderer.screen.height / 2;
			const distanceCenter = Math.sqrt(dxCenter * dxCenter + dyCenter * dyCenter);
			const distanceScale = Math.max(0, (2000 - z) / 2000);

			star.sprite.scale.x = distanceScale * starBaseSize;
			// Star is looking towards center so that y axis is towards center.
			// Scale the star depending on how fast we are moving, what the stretchfactor is
			// and depending on how far away it is from the center.
			star.sprite.scale.y = distanceScale * starBaseSize
				+ distanceScale * speed * starStretch * distanceCenter / app.renderer.screen.width;
			star.sprite.rotation = Math.atan2(dyCenter, dxCenter) + Math.PI / 2;
		}
	});
	return app;
}

export function mikaSnake(){
	
	const app = new PIXI.Application({ resizeTo: window });
	
	document.getElementById('mika-playground')?.appendChild(app.view);
	
	let count = 0;
	
	// build a rope!
	const ropeLength = 918 / 20;
	
	const points = [];
	
	for (let i = 0; i < 20; i++)
	{
	    points.push(new PIXI.Point(i * ropeLength, 0));
	}
	
	const strip = new PIXI.SimpleRope(PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/wheels/wm1.png'), points);
	
	strip.x = -459;
	
	const snakeContainer = new PIXI.Container();
	
	snakeContainer.x = 400;
	snakeContainer.y = 300;
	
	snakeContainer.scale.set(800 / 1100);
	app.stage.addChild(snakeContainer);
	
	snakeContainer.addChild(strip);
	
	app.ticker.add(() =>
	{
	    count += 0.1;
	
	    // make the snake
	    for (let i = 0; i < points.length; i++)
	    {
	        points[i].y = Math.sin((i * 0.5) + count) * 30;
	        points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20;
	    }
	});

}

export function hokaruLove(){
		const app = new PIXI.Application({background: '#fbe2f0', resizeTo: window });
		
		document.getElementById('mika-playground')?.appendChild(app.view);
	// create a background...
		const textureButton = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/other/mika1.jpg');
		const buttonNew1 = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/other/mi1.png');
		const buttonNewSe = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/other/mimi1.png');
		const buttonKami = PIXI.Texture.from('http://all.franxxdaryl.site/dist/assets/other/kami1.png');
		// const buttonNew2 = PIXI.Texture.from('assets/other/mika2.jpg');
		// const buttonNew3 = PIXI.Texture.from('assets/other/mika3.jpg');
		// const buttonNew4 = PIXI.Texture.from('assets/other/mika4.jpg');
		// const buttonNew5 = PIXI.Texture.from('assets/other/mika5.jpg');
		
		let bgMap = {}
		let bgNewMap = {};
		let bgNewMapSe = {};
		let bgNewMapKa = {};
		
		for(var i=0; i<5; i++){
			bgMap[`buttonPg${i+1}`] = PIXI.Texture.from(`http://all.franxxdaryl.site/dist/assets/other/mika${i+1}.jpg`);
		}
		for(var i=0; i<10; i++){
			bgNewMap[`buttonNew${i+1}`] = PIXI.Texture.from(`http://all.franxxdaryl.site/dist/assets/other/mi${i+1}.png`);
		}
		for(var i=0; i<10; i++){
			bgNewMapSe[`bgNewMapSe${i+1}`] = PIXI.Texture.from(`http://all.franxxdaryl.site/dist/assets/other/mimi${i+1}.png`);
		}	
		for(var i=0; i<3; i++){
			bgNewMapKa[`bgNewMapKa${i+1}`] = PIXI.Texture.from(`http://all.franxxdaryl.site/dist/assets/other/kami${i+1}.png`);
		}	
		
		console.log(document.body.offsetWidth)
		console.log(bgNewMap)
		const buttonPositions = [
			0, 0
		];
	
		const button = new PIXI.Sprite(textureButton);
		button.width = 531;
		button.height = 800;
		button.x = 265;
		button.y = 20;
		// make the button interactive...
		button.eventMode = 'static';
		
		const buttonNew = new PIXI.Sprite(buttonNew1);
		buttonNew.width = 600;
		buttonNew.height = 355;
		buttonNew.x = 871;
		buttonNew.y = 20;
		
		const buttonNewSeSe = new PIXI.Sprite(buttonNewSe);
		buttonNewSeSe.width = 300;
		buttonNewSeSe.height = 500;
		buttonNewSeSe.x = 871;
		buttonNewSeSe.y = 395;
		
		const buttonNewSeSeSe = new PIXI.Sprite(buttonKami);
		buttonNewSeSeSe.width = 425;
		buttonNewSeSeSe.height = 500;
		buttonNewSeSeSe.x = 1200;
		buttonNewSeSeSe.y = 395;
		
		
		app.stage.addChild(button);
		app.stage.addChild(buttonNew);
		app.stage.addChild(buttonNewSeSe);
		app.stage.addChild(buttonNewSeSeSe);
		
		
		let count = 0;
		let count2 = 0;
		let count3 = 0;
		let count4 = 0;
		// add button to array
		app.ticker.add(() =>
		{
			count = count + 0.05;
			count2 = count2 + 0.05;
			count3 = count3 + 0.05;
			count4 = count4 + 0.05;
			if(count > 5){
				count = 0;
			}
			if(count2 > 10){
				count2 = 0;
			}
			if(count3 > 10){
				count3 = 0;
			}
			if(count4 > 3){
				count4 = 0;
			}
			if(Object.keys(bgMap).map((e,i)=>(i+1)).includes(Math.ceil(count))) button.texture = bgMap[`buttonPg${Math.ceil(count)}`]
			if(Object.keys(bgNewMap).map((e,i)=>(i+1)).includes(Math.ceil(count2))) buttonNew.texture = bgNewMap[`buttonNew${Math.ceil(count2)}`]
			if(Object.keys(bgNewMapSe).map((e,i)=>(i+1)).includes(Math.ceil(count3))) buttonNewSeSe.texture = bgNewMapSe[`bgNewMapSe${Math.ceil(count3)}`]
			if(Object.keys(bgNewMapKa).map((e,i)=>(i+1)).includes(Math.ceil(count4))) buttonNewSeSeSe.texture = bgNewMapKa[`bgNewMapKa${Math.ceil(count4)}`]
		// 	count += 0.1;
		
		// 	// make the snake
		// 	for (let i = 0; i < points.length; i++)
		// 	{
		// 		points[i].y = Math.sin((i * 0.5) + count) * 30;
		// 		points[i].x = i * ropeLength + Math.cos((i * 0.3) + count) * 20;
		// 	}
		});
		// set some silly values...
		function onButtonDown()
		{
			this.isdown = true;
			this.texture = textureButtonDown;
			this.alpha = 1;
		}
	
		function onButtonUp()
		{
			this.isdown = false;
			if (this.isOver)
			{
				this.texture = textureButtonOver;
			}
			else
			{
				this.texture = textureButton;
			}
		}
	
		function onButtonOver()
		{
			this.isOver = true;
			if (this.isdown)
			{
				return;
			}
			this.texture = textureButtonOver;
		}
	
		function onButtonOut()
		{
			this.isOver = false;
			if (this.isdown)
			{
				return;
			}
			this.texture = textureButton;
		}
}
