import './page.css'
import React, { useEffect } from 'react';
import { getMikaMouse, getMikaMouseEat } from './utils'
import HeadPage from './headList'

export default function HomePage() {
	// const [curPIXI, setCurPIXI] = useState(null);
	useEffect(()=>{
		// const app = new PIXI.Application({ background: '#ffeaf4', resizeTo: window });
		const getPIXI = setInterval(()=>{
			try{
				if(PIXI){
					clearInterval(getPIXI)
					const app = new PIXI.Application({ background: '#fff', resizeTo: window });
					document.getElementById('mika-playground')?.appendChild(app.view);
					getMikaMouse(PIXI, app);
					getMikaMouseEat(PIXI, app);
				}	
			}
			catch(err){
				console.log(err)
			}
		},50)

	},[])

  return (
	<>
    <div className='mika-banner-content'>
       <img src='banner.gif' width="388" className='mika-banner'/>
    </div>
	<div className='mika-banner-title'>
		<div className='mika-banner-header'>
		   <img src='assets/wao.png' width="388" className='mika-header-img'/>
		</div>
	   <div className='mika-banner-header-content'>
		   Play with Mika~⭐
	   </div>
	   <HeadPage />
	</div>
	<div id='mika-playground'>
	</div>
	</>
  );
}
