import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
// require(`assets/head/head1.png`)
// require('assets/head/head1.png')


const AnimatePage = () => {
	function getCurrentWeekday() {
	  const weekdays = [7, 1, 2, 3, 4, 5, 6];
	  const today = new Date();
	  const weekday = today.getDay();
	  return weekdays[weekday];
	}
  const [showImage, setShowImage] = useState(true);
  const [curPage, setCurPage] = useState(getCurrentWeekday(1));
  const [animateData, setAnimateData] = useState([]);
  const weekMap = {
	  1:'一',
	  2:'二',
	  3:'三',
	  4:'四',
	  5:'五',
	  6:'六',
	  7:'日'
  }
  const loadCurrent = useCallback((week)=>{
	  setCurPage(week)
	  refreshImage();
  },[curPage])
  
  const refreshImage = useCallback((week)=>{
	  setShowImage(false)
	  setTimeout(()=>{
		setShowImage(true)  
	  })
  },[curPage, loadCurrent])
  
  
  useEffect(()=>{
	  axios.request({
	    	method: "GET",
			url: "http://franxxdaryl.site/animate.json?"+(new Date().getTime())
	  })
	  .then((response) => {
	  console.log(response);
	  setAnimateData(response?.data?.sort((a,b)=>a.week-b.week) || [])
	  });
  },[])
  
  return (
    <div className='mika-animate-list' onClick={(event)=>{event.preventDefault();event.stopPropagation()}}>
		<div className='mika-animate-list-title'>
		{
			animateData.map((e:any)=>
			<div key={e.week} onClick={(event)=>{event.preventDefault();event.stopPropagation();loadCurrent(e.week)}} className={curPage == e.week ? `active` : ''}>
				{`周${weekMap[e.week]||''}`}
			</div>
			)
		}
		</div>
		<div className='mika-animate-list-animate-content'>
		{
			animateData.filter(e=>e.week === curPage)?.[0]?.animateList?.map((e:any)=>
			<div className='mika-animate-list-animate-content-card' key={e.title} onClick={(event)=>{event.preventDefault();event.stopPropagation();console.log(e.src);window.open(e.src)}}>
				<div className='img'>
					{showImage && <img src={e.img} />}
				</div>
				<div className='info'>
					<span>{e.title}</span>
					<span>{e.episodes.includes('全集')?e.episodes:`更新至${e.episodes}`}</span>
				</div>
			</div>
			)	
		}
		</div>
    </div>
  );
};

export default AnimatePage;
