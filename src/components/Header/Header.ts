export const Header = (): HTMLElement => {
  const headerDiv = document.createElement("div");
  headerDiv.innerHTML = `
  <style>
  @media (min-width: 90rem) {
 
    .Figures{
      width: 61.438rem;
      height: 50.5rem;
      flex-shrink: 0;
      position: relative;
    }
      .Oval, .OvalCopy, .OvalCopy2
   {
    width: 24rem;
    height:24rem;
    flex-shrink: 0;
    border-radius: 24rem;
    filter: blur(4.247rem);
   } 
   .OvalCopy2{ 
    left: -9.125rem; 
    opacity: 0.15;
    background: #FF7B40; 
    top: -7rem; 
    position: absolute; 
   }
   .Oval{
    left: 56.219rem;
     top: 6.281rem;  
    position: absolute;
    opacity: 0.28;
    background: #40FFF6;
    }
    .OvalCopy{ 
    left:56.2rem; 
    top: 23.2rem; 
    opacity: 0.1532;
    background: #FF9201;
    position: absolute; 
  
   }
  
  h1{
      width: 63.4375rem;
      left: 10.313rem; 
      top: 13.813rem; 
      position: absolute; 
      color: #191826;
      font-family: IBM Plex Sans Bold;
      font-size: 5.5rem;
      font-weight: 700;
      line-height: 5.5rem; /* 100% */
      word-wrap: break-word;
    }
    .text{
      width: 51.5625rem;
      color: #191826;
      font-family: IBM Plex Sans Reg;
      font-size: 1.25rem;
      font-weight: 400;
      line-height: 2.125rem; /* 170% */
      word-wrap: break-word;
      left: 10.313rem; 
      top: 27.313rem; 
      position: absolute;
    }  
  
  
  .logo1{  
    left: 10.3rem;
  top: 3.874rem;
  position: relative;
    width: 9.131rem;
    height: 2rem;
    flex-shrink: 0;
  }
  
  .FigureCollection{
    width: 19.5rem; 
    height: 29.25rem; 
    left: 70.5rem; 
    top: -2.5rem; 
    position: absolute;
   }
  
  .RectangleCopy2{
   width: 9.75rem;
   height: 19.5rem;
   flex-shrink: 0;
   left: 0rem; 
   top: 0rem; 
   position: absolute; 
   background: #66E2DC; 
   border-radius: 6.25rem 6.25rem 0rem 6.25rem; 
  }
  .RectangleCopy{
     width: 9.75rem;
    height: 9.75rem;
    flex-shrink: 0;
    left: 9.75rem; 
    top: 19.5rem; 
    position: absolute; 
    background: #191826; 
    border-radius: 0rem 6.25rem 6.25rem 6.25rem;}
  
  .RectangleCopy5{
    width: 4.875rem;
    height: 4.875rem;
    flex-shrink: 0;
    left:14.625rem; 
    top: 4.875rem; 
    position: absolute; 
    background: #FFB964; 
    border-radius: 2.4375rem;}
  
  .RectangleCopy7{
    width: 4.875rem;
    height: 4.875rem;
    flex-shrink: 0;
    left: 14.625rem; 
    top: 0rem; position: absolute; 
    background: #FA7453; 
    border-radius: 2.4375rem;}
  
  .RectangleCopy8{
    width: 9.75rem;
    height: 9.75rem;
    flex-shrink: 0;
    left: 0px; top: 19.5rem; position: absolute; 
    background: #FA7453; 
    border-radius: 4.875rem;
  }
  .RectangleCopy6{
    width: 4.875rem;
    height: 9.75rem;
    flex-shrink: 0; 
    left: 9.75rem; 
    top: 0rem; position: absolute; 
    background: #191826; 
    border-radius: 2.4375rem;}
  
  .RectangleCopy3{
    width: 9.75rem; 
    height:9.75rem;
     left: 9.75rem; 
     top: 9.75rem; 
     position: absolute;
     border-radius: 4.875rem; 
     border: 2px #191826 solid}
  
  .RectangleCopy4{
    width: 4.875rem; 
    height:4.875rem;
    left: 9.75rem; 
    top: 12.188rem; 
    position: absolute; 
    border-radius: 4.875rem; 
    border: 2px #191826 solid}
  
  }
  
  /* ##Device = Tablets, Ipads (portrait) */
  @media (min-width: 48rem) and (max-width: 90rem) {
  
    .Figures{
      width: 61.438rem;
      height: 50.5rem;
      flex-shrink: 0;
      left: -15.875rem;
      top: -7rem;
      position: relative;
    }
  
    .Oval, .OvalCopy, .OvalCopy2
   {
    width: 24rem;
    height:24rem;
    flex-shrink: 0;
    border-radius: 24rem;
    filter: blur(4.247rem);
   } 
   .OvalCopy2{ 
    left: 0rem; 
    opacity: 0.15;
    background: #FF7B40;
    left: 0rem; 
    top: 0rem; 
    position: absolute; 
   }
   .Oval{
    left: 37.438rem;
     top: 9.563rem;  
    position: absolute;
    opacity: 0.2825;
    background: #40FFF6;
    }
    .OvalCopy{ 
    left: 0rem; 
    top: 26.5rem; 
    opacity: 0.1532;
    background: #FF9201;
    left: 37.438rem; 
    position: absolute; 
  
   }
   .content{
    height: 20.75rem;
    flex-shrink: 0;
      left: 2.438rem;
      top: 11.813rem;
      position: absolute;
    }
    h1{
      width: 32.5rem;  
      left: 0rem; 
      top: 0rem; 
      position: absolute; 
      color: #191826;
      word-wrap: break-word;
      font-family: IBM Plex Sans Bold;
      font-size: 4rem;
      font-style: normal;
      font-weight: 700;
      line-height: 4rem; /* 100% */
      letter-spacing: -0.04544rem;
    }
    .text{
      color: #191826;
      font-family: IBM Plex Sans Reg;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.75rem; /* 155.556% */
      width:32.125rem;
      height:7rem;
      word-wrap: break-word;
     left: 0rem; 
     top: 13.75rem; 
  position: absolute;
  }  
  
  .logo1{
  width: 9.131rem;
  height: 2rem;
  flex-shrink: 0;
  left: 2.447rem;
  top: 3.874rem;
  position: absolute;
  }
  .FigureCollection{
  width: 266.67px; 
  height: 400px; 
  left: 537px; 
  top: -32px; 
  position: absolute;}
  
  .RectangleCopy2{
   width: 8.33331rem;
   height: 16.66669rem;
   flex-shrink: 0;
   left: 0rem; 
   top: 0rem; 
   position: absolute; 
   background: #66E2DC; 
   border-radius: 6.25rem 6.25rem 0rem 6.25rem; 
  }
  .RectangleCopy{
    width: 8.33331rem;
    height: 8.33331rem;
    flex-shrink: 0;
    left: 8.33rem; 
    top: 16.7rem; 
    position: absolute; 
    background: #191826; 
    border-radius: 0rem 6.25rem 6.25rem 6.25rem;}
  
  .RectangleCopy5{
    width: 4.16669rem;
    height: 4.16669rem;
    flex-shrink: 0;
    left:12.5rem; 
    top: 4.17rem; 
    position: absolute; 
    background: #FFB964; 
    border-radius: 2.4375rem;}
  
  .RectangleCopy7{
    width: 4.16669rem;
    height: 4.16669rem;
    flex-shrink: 0;
    left: 12.5rem; 
    top: 0rem; position: absolute; 
    background: #FA7453; 
    border-radius: 2.4375rem;}
  
  .RectangleCopy8{
    width: 8.33331rem;
    height: 8.33331rem;
    flex-shrink: 0;
    left: 0px; top: 16.7rem; position: absolute; 
    background: #FA7453; 
    border-radius: 4.875rem;
  }
  .RectangleCopy6{
    width: 4.16669rem;
    height: 8.33331rem;
    flex-shrink: 0; 
    left: 8.33rem; 
    top: 0rem; position: absolute; 
    background: #191826; 
    border-radius: 2.4375rem;}
  
  .RectangleCopy3{
    width: 8.333rem; 
    height: 8.333rem;
     left: 8.333rem; 
     top: 8.333rem; 
     position: absolute;
     border-radius: 4.875rem; 
     border: 2px #191826 solid}
  
  .RectangleCopy4{
    width: 4.16669rem;
    height:4.16669rem;
    left: 8.333rem; 
    top: 10.417rem; 
    position: absolute; 
    border-radius: 4.875rem; 
    border: 2px #191826 solid}
  }
  @media   (max-width: 48rem) { 
  
  .Figures{
    width: 17.58781rem;
    height: 30rem;
    flex-shrink: 0;
  left: 9.938rem; 
  top: -6.5rem; 
  position: relative;
  
  }
  .Oval, .OvalCopy
  {width: 17.58781rem;
  height: 17.58781rem;
  flex-shrink: 0;
  left: 0rem; 
   position: absolute;
  border-radius: 17.58781rem;
  filter: blur(67.95704650878906px);
  } 
  .Oval{
  top: 0rem; 
  opacity: 0.2825;
  background: #40FFF6;
  }
  .OvalCopy{
  top: 12.413rem; 
  opacity: 0.1532;
  background: #FF9201;
  }
  .content{
  height: 20rem;
  flex-shrink: 0;
    left: 1.5rem; 
    top: 8.5rem; 
    position: absolute;
  }
  
  h1{
    width: 20.4375rem;
    left: 0rem; 
    top: 0rem; 
    position: absolute; 
    color: #191826;
  
    font-family: IBM Plex Sans Bold;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: 3rem; /* 120% */
    letter-spacing: -0.02844rem;
  }
  .text{
    color: #191826;
    font-family: IBM Plex Sans Reg;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem; /* 162.5% */
    width:20.4375rem;
    height:9.75rem;
    word-wrap: break-word;
    left: 0rem; 
    top: 10.25rem; 
    position: absolute;
   }  
  
  .logo1{
   width: 9.131rem;
   height: 2rem;
   flex-shrink: 0;
   left: 1.513rem;
   top: 2.5rem;
   position: absolute;
  }
  } 
   </style>

   <div class="wrapper">
   <header>

   <img class="logo1" src ="/assets/logo.svg" >

  <div class = "Figures">
       <div class ="OvalCopy2"></div>
       <div class = "Oval"></div>
       <div class ="OvalCopy"></div>
       </div>
  <div class = "FigureCollection">  
    <div class ="RectangleCopy2"></div>
    <div class = "RectangleCopy"></div>
    <div class ="RectangleCopy5"></div>
    <div class ="RectangleCopy7"></div>
    <div class = "RectangleCopy8"></div>
    <div class ="RectangleCopy6"></div>
    <div class = "RectangleCopy3"></div>
    <div class ="RectangleCopy4"></div>
 </div>
 <div class = "content">
   <h1>
We make your music sound extraordinary.
   </h1>
     <div class = "text"> 
     A system audio equalizer specifically 
     designed for Android and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control, reverb, and more!</div> 
     </div> 
     </header>
     
 `;

  return headerDiv;
};
