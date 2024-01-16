import React, { useState, useEffect } from 'react';
// require(`assets/head/head1.png`)
// require('assets/head/head1.png')


const HeadPage = () => {
  const [curHead, setCurHead] = useState('assets/head/head1.png');
  useEffect(()=>{
  	setInterval(()=>{
		const getCurIndex = Math.ceil(Math.random(100)*81);
		if(1 <= getCurIndex && getCurIndex <= 81){
			setCurHead(`assets/head/head${getCurIndex}.png`)
		}
	},600)
  },[])
  console.log(curHead)
  
  return (
    <div className='mika-header-list-img-frame'>
		<img src={curHead} className='mika-header-list-img'/>
    </div>
  );
};

export default HeadPage;
