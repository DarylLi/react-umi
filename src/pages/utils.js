export const getMikaMouse = (PIXI, app)=>{
// create a background...
	const background = PIXI.Sprite.from('assets/bgplaygroud.jpg');
	const textureButton = PIXI.Texture.from('assets/mikafull3.jpg');
	const textureButtonDown = PIXI.Texture.from('assets/mikafull2.jpg');
	const textureButtonOver = PIXI.Texture.from('assets/mikafull4.jpg');
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
	const background = PIXI.Sprite.from('assets/bgplaygroud.jpg');

	// background.width = app.screen.width;
	// background.height = app.screen.height;

	// add background to stage...
	// app.stage.addChild(background);

	// create some textures from an image path
	const textureButton = PIXI.Texture.from('assets/eatemika1.jpg');
	const textureButtonOver = PIXI.Texture.from('assets/eatemika2.jpg');
	const textureButtonDown = PIXI.Texture.from('assets/eatemika3.jpg');
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
	buttons[0].scale.set(1.2);
	buttons[2].rotation = Math.PI / 10;
	buttons[3].scale.set(0.8);
	buttons[4].scale.set(0.8, 1.2);
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
