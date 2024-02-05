import './page.css'
import React, { useEffect, useState, useCallback, Suspense  } from 'react';
import { getMikaMouse, getMikaMouseEat, getDisplayPic, tiggerMachine, mikaStar, hokaruLove } from './utils'
import anime from 'animejs/lib/anime.es.js';
// import HeadPage from './headList'
// import MikaBideo from './bideo'

const HeadPage = React.lazy(() => import('./headList'));
const MikaBideo = React.lazy(() => import('./bideo'));
const AnimateList = React.lazy(() => import('./animates'));

window._passworkExpress = '';
export default function HomePage() {
	const [showBideo, setShowBideo] = useState(true);
	// min: 1 max: 3
	const [currentPage, setCurrentPage] = useState(1);
	const [isPageLoad, setIsPageLoad] = useState(true);
	const [pixiApp, setPixiApp] = useState(null);
	const [isPc, setIsPc] = useState(true);
	const [showContent, setShowContent] = useState(false);
	
	// 鼠标指针动画
	function loadMouse(){
		let step = 0;
		const TOP1WIDTH = 40;
		const TOPHEIGHT = 27;
		const fn = () => {
		  aniLoop();
		  requestAnimationFrame(fn);
		};
		function aniLoop() {
		  step += 0.05;
		  const incrementX = Math.sin(step);
		  const incrementY = Math.cos(step);
		  scaleBox({
		    ele: "#cursor-img",
		    width: TOP1WIDTH + 6 * incrementX,// 这里的 6 10 指的是可以移动的最大步长
		    duration: 0.5
		  });
		  scaleBox({
		    ele: "#cursor-img",
		    height: TOPHEIGHT + 3 * incrementY,
		    duration: 0.5
		  });
		}
		const scaleBox = ({ ele, width, height, duration }) => {
		  let data = {
		    targets: ele,
		    direction: "alternate",
		    loop: true,
		    easing: "easeInOutSine",
		    duration
		  };
		  data = height ? { ...data, height } : { ...data, width };
		  anime(data);
		}
		fn();
		
		var rotatingCursor = (function() {

		  /* Local Variables */
		  const INTERVAL_POSITION = 5;
		  const INTERVAL_ROTATION = 100;
		  let lastCursorPos = {x: -999, y: -999};
		  let currentCursorPos = {x: -999, y: -999};
		  let lastCursorAngle = 0, cursorAngle = 0;
		  let cursorEl, cursorImageEl;


		  /* Local Functions */

		  // NOTE: I am transform two different elements here because so I can only animate the rotation with 'transition-property: transform'.
		  function setCurrentCursorProps() {
			// Apply translation (set to actual cursor position)
			cursorEl.style.transform = `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`;

			// Ensure correct rotation transition direction
			while (Math.abs(lastCursorAngle - cursorAngle) > 180) {
			  if (cursorAngle > lastCursorAngle) {
				cursorAngle -= 360;
			  } else if (cursorAngle < lastCursorAngle) {
				cursorAngle += 360;
			  }
			}
			// Apply rotation
			// cursorImageEl.style.transform = `rotate(${cursorAngle - 90}deg)`;
		  }

		  function updateCursor() {
			window.addEventListener('mousemove', event => {
			  currentCursorPos = {x: event.clientX, y: event.clientY};
			});

			// Interval for updating cursor-position
			setInterval(setCurrentCursorProps, INTERVAL_POSITION);

			// Interval for updating cursor-rotation
			setInterval(() => {
			  const delt = {
				x: lastCursorPos.x - currentCursorPos.x,
				y: lastCursorPos.y - currentCursorPos.y
			  }
			  if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;
			  cursorAngle = (Math.atan2(delt.y, delt.x) * 180 / Math.PI);

			  setCurrentCursorProps();

			  lastCursorPos = currentCursorPos;
			  lastCursorAngle = cursorAngle;
			}, INTERVAL_ROTATION);
		  }


		  return {
			'initialize' : () => {
			  cursorEl = document.querySelector('#cursor');
			  cursorImageEl = document.querySelector('#cursor > img');
			  updateCursor();
			}

		  };

		})();
		console.log(rotatingCursor)
		rotatingCursor.initialize()
		// document.addEventListener('DOMContentLoaded', rotatingCursor.initialize);
		function getCode(event){
			let music = new Audio('https://cdnimg.gamekee.com/wiki2.0/images/w_0/h_0/829/223205/2023/0/24/49584.ogg')
			window._passworkExpress += event.key;
			window._passworkExpress.includes(window._kiramikapassword) && (()=>{music && music.play(); document.removeEventListener('keydown', getCode);})();
		}
		document.addEventListener('keydown', getCode);
	}
	function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
		var flagPc = true;
		for (var v = 0; v < Agents.length; v++) {
		if (userAgentInfo.indexOf(Agents[v]) > 0) {
				flagPc = false;
				break;
			}
		}
		return flagPc;
	}
	 
	
	function sendEmail(type){
		type === 'qq' && window.open('mailto:616441509@qq.com')
		type === 'ol' && window.open('mailto:lhtisgood@outlook.com')
		type === '163' && window.open('mailto:lhtisgood@163.com')
	}
	function startLoading(){
		setShowBideo(false)
		loadPixiMain()
	}
	function loadPixiMain(){
		const getPIXI = setInterval(()=>{
			try{
				if(PIXI){
					clearInterval(getPIXI)
					const app = new PIXI.Application({ background: '#fff', resizeTo: window });
					// document.getElementById('mika-playground')?.appendChild(app.view);
					// getMikaMouse(PIXI, app);
					// getMikaMouseEat(PIXI, app);
					
					setPixiApp(getDisplayPic());
					// tiggerMachine();
					// mikaStar();
				}	
			}
			catch(err){
				console.log(err)
			}
		},50)
	}
	function reloadPanel(page){
		setIsPageLoad(false)
		setTimeout(()=>{
			setIsPageLoad(true)
			setTimeout(()=>{
				pixiApp && pixiApp.destroy(true)
				page === 1 && setPixiApp(getDisplayPic())
				page === 2 && setPixiApp(tiggerMachine())
				page === 3 && setPixiApp(mikaStar())
				page === 4 && setPixiApp(hokaruLove())
			})
		},500)
	}
	
	const getPixiReLoad = useCallback((isDown)=>{
		let page = currentPage;
		let resultPage = isDown ?  (page === (window._passworkExpress.includes(window._kiramikapassword)? 4 : 3) ? page : ++ page) : (page===1 ? page : -- page);
		setCurrentPage(resultPage);
		(resultPage !== currentPage) && reloadPanel(resultPage)
		// page === 1 && tiggerMachine()
		// page === 2 && mikaStar()
	},[currentPage, getPixiReLoadEvent])

	let getJudge = null;
	
	const getPixiReLoadEvent = useCallback((event)=>{
		if(showBideo || showContent) return
		const isDown = (event?.deltaY || 0) > 0 ? true :false;
		// console.log(event?.deltaY,isDown)
		getJudge && clearTimeout(getJudge)
		getJudge = setTimeout(()=>{
			getPixiReLoad(isDown)
		},500)
		let page = currentPage;
	},[currentPage, showBideo, showContent])
	
	const showAnimateContent = useCallback((event)=>{
		setShowContent(true);
	},[showContent])
	
	const hideAnimateContent = useCallback((event)=>{
		setShowContent(false);
	},[showContent])
	
	
	useEffect(()=>{
		setIsPc(IsPC())
		if(IsPC()){
			showBideo && loadMouse();
			document.addEventListener('wheel', getPixiReLoadEvent);
			return ()=>{
				document.removeEventListener('wheel', getPixiReLoadEvent)
			}
		}else{
			const getPIXI = setInterval(()=>{
				try{
					if(PIXI){
						clearInterval(getPIXI)
						const app = new PIXI.Application({ background: '#fff', resizeTo: window });
						mikaStar();
					}	
				}
				catch(err){
					console.log(err)
				}
			},50)
		}
		// const app = new PIXI.Application({ background: '#ffeaf4', resizeTo: window });
	},[currentPage, showBideo, showContent])
	 // <div className='mika-banner-header'>
		//     <img src='http://all.franxxdaryl.site/dist/assets/wao.png' width="388" className='mika-header-img'/>
		//  </div>
  return (
	<>
		<div id="cursor"><img id="cursor-img" alt="Cursor Hand" src="assets/mikamouse.png" /></div>
		{
			isPc && <>
			{
				showBideo && 
				<div className='mika-bideo-content' onClick={startLoading}>
					<Suspense fallback={<div>Loading...</div>}>
						<MikaBideo />
					</Suspense>
				</div>
			}
			{
				!isPageLoad && 
				<div className='mika-loading'>
					<img src='http://all.franxxdaryl.site/dist/output-onlinegiftools.gif' className='mika-loading-spin'/>
					<div className='mika-loading-bg'/>
				</div>
			}
			
			<div className={`mika-top ${currentPage !==1 ? 'isHide' : ''}`}>
				<div className='mika-banner-content'>
				</div>
				<div className='mika-banner-video' onClick={getPixiReLoad}>
					<video id="video1" autoPlay muted loop>
						<source src="http://all.franxxdaryl.site/dist/mikapunch.mp4" />
					</video>
				</div>
				<div className='mika-banner-title'>
					<Suspense fallback={<div>Loading...</div>}>
						<HeadPage />
					</Suspense>
				   <div className='mika-banner-header-content' onClick={showAnimateContent}>
				   <span>
					sensei 看看有什么番可以看吧~⭐
				   </span>
				   </div>
				</div>
			</div>
			<div className={`mika-play-content`}>
				{isPageLoad &&
					<div id='mika-playground' className={`${currentPage !==1 ?'isFullPage':''}`}>
					</div>
				}
			</div>
			{showContent 
			&& <div className={`mika-animate-content`} onClick={hideAnimateContent}>
				<AnimateList />
			</div>
			}
			<div className={`mika-banner-bottom ${currentPage !==1 ? 'isHide' : ''}`}>
				<span>页面内容仅做练习使用,如有侵权联系删除</span>
				<span>練習用にのみ使用しておりますので、権利侵害があった場合は削除のご連絡をお願い致します</span>
				<span>연습용으로만 사용되며, 위반사항이 있을 경우 연락주시면 삭제해드리겠습니다</span>
				<div className='mika-banner-emaillist'>
					<div className='mika-banner-email mika-banner-email-163' onClick={()=>sendEmail('163')}>
						<img src='assets/email3.png' className='mika-banner-email-img'></img>
					</div>
					<div className='mika-banner-email mika-banner-email-qq' onClick={()=>sendEmail('qq')}>
						<img src='assets/email.png' className='mika-banner-email-img'></img>
					</div>
					<div className='mika-banner-email mika-banner-email-ol' onClick={()=>sendEmail('ol')}>
						<img src='assets/email2.png' className='mika-banner-email-img'></img>
					</div>
				</div>
			</div>
			</>
			||
			<>
				<div id='mika-playground'></div>
				<div className={`mika-banner-bottom m ${currentPage !==1 ? 'isHide' : ''}`}>
					<span>页面内容仅做练习使用,如有侵权联系删除</span>
					<span>練習用にのみ使用しておりますので、権利侵害があった場合は削除のご連絡をお願い致します</span>
					<span>연습용으로만 사용되며, 위반사항이 있을 경우 연락주시면 삭제해드리겠습니다</span>
					<div className='mika-banner-emaillist'>
						<div className='mika-banner-email mika-banner-email-163' onClick={()=>sendEmail('163')}>
							<img src='assets/email3.png' className='mika-banner-email-img'></img>
						</div>
						<div className='mika-banner-email mika-banner-email-qq' onClick={()=>sendEmail('qq')}>
							<img src='assets/email.png' className='mika-banner-email-img'></img>
						</div>
						<div className='mika-banner-email mika-banner-email-ol' onClick={()=>sendEmail('ol')}>
							<img src='assets/email2.png' className='mika-banner-email-img'></img>
						</div>
					</div>
				</div>
			</>
		}
	</>
	
  );
}
