document.addEventListener("DOMContentLoaded",()=>{anime.timeline({}).add({targets:".welcome_cover",height:["60%","200%"],top:["-90%","100%"],easing:"easeOutCubic",duration:"1200"}).add({targets:".welcome_text h2",top:["-150%","50%"],easing:"easeOutQuad",backgroundColor:"#1a1a1d",offset:"-=600",duration:"700"}).add({targets:".loading_logo",easing:"easeInOutElastic",backgroundColor:"#c3073f"},0).add({targets:".loading_logo",easing:"easeInOutElastic",backgroundColor:"#1a1a1d"},0).add({targets:".welcome_text h2",top:["50%","150%"],backgroundColor:"#1a1a1d",easing:"easeOutQuad",offset:"+=1000",duration:"700"}).add({targets:".welcome_cover",height:["60%","200%"],top:["-90%","100%"],easing:"easeOutCubic",duration:"1200",offset:"-=400",complete:()=>{document.querySelector(".welcome_text").style.display="none",document.querySelector(".main_content").style.display="block",document.querySelector(".welcome_cover").style.position="absolute",document.querySelector(".welcome_content").style.position="absolute",document.querySelector("html").style.overflow="auto"}}).add({targets:".header_text h1,h3",translateY:[50,0],opacity:[0,1],easing:"easeOutExpo",delay:(e,t)=>150*t})});var prevScrollpos=window.pageYOffset;function closeNav(){document.querySelector("#navi-toggle").checked=!1}function currentYPosition(){return self.pageYOffset?self.pageYOffset:document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop?document.body.scrollTop:0}function elmYPosition(e){for(var t=document.getElementById(e),o=t.offsetTop,s=t;s.offsetParent&&s.offsetParent!=document.body;)o+=(s=s.offsetParent).offsetTop;return o}function test(e){closeNav();var t=currentYPosition(),o=elmYPosition(e),s=o>t?o-t:t-o;if(100>s)scrollTo(0,o);else{var n=Math.round(s/50);20<=n&&(n=20);var a=Math.round(s/25),i=o>t?t+a:t-a,r=0;if(o>t)for(var l=t;l<o;l+=a)setTimeout("window.scrollTo(0, "+i+")",r*n),(i+=a)>o&&(i=o),r++;else for(l=t;l>o;l-=a)setTimeout("window.scrollTo(0, "+i+")",r*n),(i-=a)<o&&(i=o),r++}}window.onscroll=function(){var e=window.pageYOffset;document.querySelector(".navbar").style.top=prevScrollpos>e?"0px":"-100px",prevScrollpos=e,0<window.scrollY?document.querySelector(".navbar").classList.add("shadow"):document.querySelector(".navbar").classList.remove("shadow")};const api="./keys";var config={apiKey:"./keys",authDomain:"my-website-4915f.firebaseapp.com",databaseURL:"https://my-website-4915f.firebaseio.com",projectId:"my-website-4915f",storageBucket:"my-website-4915f.appspot.com",messagingSenderId:"530688618080"};firebase.initializeApp(config);const messagesRef=firebase.database().ref("messages");function submitForm(e){e.preventDefault();const t=getValues("name"),o=getValues("email"),s=getValues("subject");console.log(t),console.log(o),console.log(s),saveMessage(t,o,s),document.querySelector(".notify").style.opacity="1",document.getElementById("name").value="",document.getElementById("email").value="",document.getElementById("subject").value="",setTimeout(function(){document.querySelector(".notify").style.opacity="0"},5e3)}function getValues(e){return document.getElementById(e).value}function saveMessage(e,t,o){messagesRef.push().set({name:e,email:t,message:o,date:(new Date).toDateString(),time:(new Date).toTimeString()})}document.getElementById("contact-form").addEventListener("submit",submitForm);class TypeWriter{constructor(e,t,o=3e3){this.words=e,this.txtElement=t,this.wait=parseInt(o,10),this.wordIndex=0,this.txt="",this.type(),this.isDeleting=!1}type(){const e=this.wordIndex%this.words.length,t=this.words[e];this.txt=this.isDeleting?t.substring(0,this.txt.length-1):t.substring(0,this.txt.length+1),this.txtElement.innerHTML=`<span class="txt">${this.txt}</span>`;let o=300;this.isDeleting&&(o/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,o=500):(o=this.wait,this.isDeleting=!0),setTimeout(()=>this.type(),o)}}function init(){const e=document.querySelector(".header_text--profession");new TypeWriter(["a Student","a Developer","a Designer","an Entrepreneur","a Tech Lover"],e,3500)}document.addEventListener("DOMContentLoaded",init);