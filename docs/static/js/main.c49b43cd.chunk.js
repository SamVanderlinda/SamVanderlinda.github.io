(this["webpackJsonpprototype-page"]=this["webpackJsonpprototype-page"]||[]).push([[0],{30:function(r,e,t){},59:function(r,e,t){"use strict";t.r(e);var n=t(2),c=t.n(n),o=t(17),s=t.n(o),i=(t(30),t(4)),a=t.n(i),l=t(7),u=t(18),d=t(19),j=t(25),b=t(24),k=t(20),h=t.n(k),f=t(21),p=t(22),C=t.n(p),A=(t(53),t(0)),m=function(r){var e=r.videoID,t=r.startTime,n="https://youtube.com/embed/".concat(e,"?start=").concat(t);return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)("iframe",{src:n,title:"Embedded Video"})})},g={color:"White",backgroundColor:"#ff4931",textAlign:"center"},x={color:"Grey",textAlign:"center"},O=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("h1",{style:g,children:" Echo-Vids"}),Object(A.jsx)("h2",{style:x,children:" An Audio Recommender Platform for the Sounds in Life"})]})},V=t(23),v=t.n(V),K=[["ArsKCV3rkc4",0],["4HSkwF586ro",1],["QM4qxOYDwHo",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0]],w=function(r){Object(j.a)(t,r);var e=Object(b.a)(t);function t(r){var n;return Object(u.a)(this,t),(n=e.call(this,r))._onRecordingComplete=function(){var r=Object(l.a)(a.a.mark((function r(e){return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:v()(e,function(){var r=Object(l.a)(a.a.mark((function r(t,c){var o,s;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!t){r.next=3;break}return console.error(t),r.abrupt("return");case 3:return o=new File([e],"recording.mp3"),(s=new FormData).append("rawAudioData",o),n.state.url&&window.URL.revokeObjectURL(n.state.url),r.next=9,h.a.post("http://f6aa-35-233-154-26.ngrok.io/recommend",s,{headers:{"Content-Type":"multipart/form-data"}}).then((function(r){console.log(r),K=r.data.videos})).catch((function(r){console.log(r)}));case 9:n.setState({url:window.URL.createObjectURL(e),blob:e,vids:K});case 10:case"end":return r.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}());case 1:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),n._onRecordingError=function(r){console.log("error recording",r),n.state.url&&window.URL.revokeObjectURL(n.state.url),n.setState({url:null,blob:"",vids:[["ArsKCV3rkc4",0],["4HSkwF586ro",1],["QM4qxOYDwHo",0]]})},n.video_insert=function(){return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("br",{}),n.state.vids.map((function(r,e){return Object(A.jsx)(m,{videoID:r[0],startTime:r[1]})}))]})},n.state={url:"",blob:"",vids:[["ArsKCV3rkc4",0],["4HSkwF586ro",1],["QM4qxOYDwHo",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0],["ArsKCV3rkc4",0]]},n}return Object(d.a)(t,[{key:"render",value:function(){var r=this.state,e=r.url;r.blob;return Object(A.jsxs)("div",{children:[Object(A.jsx)(O,{}),Object(A.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",textAlign:"center",minHeight:"100vh"},children:Object(A.jsxs)("div",{children:[Object(A.jsx)(f.a,{onRecordingComplete:this._onRecordingComplete,onRecordingError:this._onRecordingError,style:{margin:"0 auto"}}),Object(A.jsx)("p",{children:"Click and hold to start recording for at least 5 seconds."}),e&&Object(A.jsxs)("div",{children:[Object(A.jsx)(C.a,{src:e,controls:!0,style:{minWidth:"500px"}}),this.video_insert()]})]})})]})}}]),t}(n.Component),y=function(r){r&&r instanceof Function&&t.e(3).then(t.bind(null,60)).then((function(e){var t=e.getCLS,n=e.getFID,c=e.getFCP,o=e.getLCP,s=e.getTTFB;t(r),n(r),c(r),o(r),s(r)}))};s.a.render(Object(A.jsx)(c.a.StrictMode,{children:Object(A.jsx)(w,{})}),document.getElementById("root")),y()}},[[59,1,2]]]);
//# sourceMappingURL=main.c49b43cd.chunk.js.map