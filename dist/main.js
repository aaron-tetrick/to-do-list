(()=>{"use strict";const e=function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("div"),d=document.createElement("span"),c=document.createElement("div"),l=document.createElement("h2"),a=document.createElement("div"),s=document.createElement("form"),o=document.createElement("input"),i=document.createElement("input"),r=document.createElement("textarea"),u=document.createElement("select"),m=document.createElement("select"),p=document.createElement("div"),v=document.createElement("div"),E=document.createElement("label"),L=document.createElement("label"),h=document.createElement("label"),y=document.createElement("label"),C=document.createElement("label"),k=document.createElement("div"),g=document.createElement("div"),T=document.createElement("div"),f=document.createElement("div"),b=document.createElement("div"),x=document.createElement("option"),S=document.createElement("option"),q=document.createElement("option"),w=document.createElement("div"),M=document.createElement("button"),B=document.createElement("button");d.innerHTML="&times;",l.innerText="Add New Task",M.innerText="Add Task",B.innerText="Cancel",E.innerText="Title:",L.innerText="Date:",h.innerText="Description:",y.innerText="Priority:",C.innerText="Project:",x.innerText="High",S.innerText="Medium",q.innerText="Low",u.setAttribute("name","priority"),x.setAttribute("value","high"),S.setAttribute("value","medium"),q.setAttribute("value","low"),t.classList.add("modal"),n.classList.add("modal-content"),c.classList.add("modal-header-div"),d.classList.add("close-btn"),a.classList.add("modal-body-div"),s.classList.add("modal-form"),p.classList.add("form-div-1"),v.classList.add("form-div-2"),k.classList.add("input-div"),g.classList.add("input-div"),T.classList.add("input-div"),f.classList.add("input-div"),b.classList.add("input-div"),o.classList.add("input-element"),i.classList.add("input-element"),r.classList.add("input-element"),r.classList.add("form-description"),u.classList.add("input-element"),m.classList.add("input-element"),w.classList.add("modal-footer-div"),M.classList.add("add-btn"),B.classList.add("cancel-btn"),c.appendChild(l),c.appendChild(d),n.appendChild(c),k.appendChild(E),k.appendChild(o),g.appendChild(L),g.appendChild(i),T.appendChild(h),T.appendChild(r),f.appendChild(y),f.appendChild(u),u.appendChild(x),u.appendChild(S),u.appendChild(q),b.appendChild(C),b.appendChild(m),p.appendChild(k),p.appendChild(T),v.appendChild(g),v.appendChild(f),v.appendChild(b),s.appendChild(p),s.appendChild(v),a.appendChild(s),n.appendChild(a),w.appendChild(B),w.appendChild(M),n.appendChild(w),t.appendChild(n),e.appendChild(t)},t=function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h2"),d=document.createElement("p");n.innerText="Inbox",d.innerText="+ New Task",t.classList.add("inbox-div"),n.classList.add("title"),d.classList.add("new-task"),t.appendChild(n),t.appendChild(d),e.appendChild(t)};t(),e();const n=function(){const e=document.querySelector(".new-task"),t=document.querySelector(".close-btn"),n=document.querySelector(".modal");return{addTask:function(){n.style.display="block"},closeModal:function(){n.style.display="none"},closeModalBtn:t,cancelBtn:document.querySelector(".cancel-btn"),newTask:e}}();n.newTask.addEventListener("click",n.addTask),n.closeModalBtn.addEventListener("click",n.closeModal),n.cancelBtn.addEventListener("click",n.closeModal);const d=document.querySelector(".add-btn"),c=function(){console.log("TEST!!!")};d.addEventListener("click",c),d.addEventListener("click",n.closeModal);const l=document.querySelector(".inbox"),a=document.querySelector(".today"),s=document.querySelector(".week");l.addEventListener("click",(function(){const n=document.querySelector(".today-div"),d=document.querySelector(".week-div");if(a.className.includes("current-page"))console.log("You selected today."),n.remove();else if(s.className.includes("current-page"))console.log("You also selected today"),d.remove();else if(l.className.includes("current-page"))return;a.classList.remove("current-page"),l.classList.add("current-page"),s.classList.remove("current-page"),t(),e();const c=function(){const e=document.querySelector(".new-task"),t=document.querySelector(".close-btn"),n=document.querySelector(".modal");return{addTask:function(){n.style.display="block"},closeModal:function(){n.style.display="none"},closeModalBtn:t,cancelBtn:document.querySelector(".cancel-btn"),newTask:e}}();c.newTask.addEventListener("click",c.addTask),c.closeModalBtn.addEventListener("click",c.closeModal),c.cancelBtn.addEventListener("click",c.closeModal)})),a.addEventListener("click",(function(){const e=document.querySelector(".inbox-div"),t=document.querySelector(".week-div");if(l.className.includes("current-page"))console.log("You selected today."),console.log(e),e.remove();else if(s.className.includes("current-page"))console.log("You also selected today"),t.remove();else if(a.className.includes("current-page"))return;a.classList.add("current-page"),l.classList.remove("current-page"),s.classList.remove("current-page"),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h2");n.innerText="Today",n.classList.add("title"),t.classList.add("today-div"),t.appendChild(n),e.appendChild(t)}()})),s.addEventListener("click",(function(){const e=document.querySelector(".inbox-div"),t=document.querySelector(".today-div");if(l.className.includes("current-page"))console.log("You selected week"),e.remove();else if(a.className.includes("current-page"))console.log("You also selected week"),t.remove();else if(s.className.includes("current-page"))return;a.classList.remove("current-page"),l.classList.remove("current-page"),s.classList.add("current-page"),function(){const e=document.getElementById("content"),t=document.createElement("div"),n=document.createElement("h2");n.innerText="Week",n.classList.add("title"),t.classList.add("week-div"),t.appendChild(n),e.appendChild(t)}()}))})();