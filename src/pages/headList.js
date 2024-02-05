import React, { useState, useEffect } from 'react';
import axios from 'axios'
// require(`assets/head/head1.png`)
// require('assets/head/head1.png')


const HeadPage = () => {
  const [curHead, setCurHead] = useState('http://all.franxxdaryl.site/dist/assets/head/head1.png');
  useEffect(()=>{
	 axios.request({
	  	method: "post",
	  	url: "http://franxxdaryl.site:1919/repeat",
		data:{mika:'123',hina:'444'}
	    })
	.then((response) => {
	console.log(response);
	});
	axios.request({
		method: "GET",
		url: "http://franxxdaryl.site:1919/mikamoods",
	  })
	  .then((response) => {
		console.log(response);
		const getCurIndex =response?.data?.mood;
		setCurHead(`http://all.franxxdaryl.site/dist/assets/head/head${getCurIndex}.png`)
	  });
 //  	setInterval(()=>{
	// 	const getCurIndex = Math.ceil(Math.random(100)*81);
	// 	if(1 <= getCurIndex && getCurIndex <= 81){
	// 		setCurHead(`http://all.franxxdaryl.site/dist/assets/head/head${getCurIndex}.png`)
	// 	}
	// },600)
  },[])
  
  return (
    <div className='mika-header-list-img-frame'>
		<img src={curHead} className='mika-header-list-img'/>
    </div>
  );
};

export default HeadPage;
