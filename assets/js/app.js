cl=console.log;
const imgurl="https://image.tmdb.org/t/p/w1280";

request=document.getElementById("info")
result="";

movieArr.forEach(function(para){
	result+=`<div class="col-sm-3">
		      <div class="card mb-4">
			      <div class="card moviecard">
			         <figure class="moviecard">
				          <img src=${imgurl}${para.backdrop_path} alt="">
					      <figcaption class="text-white p-4 bg-dark">
					         <div class="row">
							     <div class="col-md-10">
								   <h3>
								      ${para. title}
								   </h3>
								 </div>
							     <div class="col-md-2">
								   <span class="rating">
								   ${para.vote_average}
								   </span>
								 </div>
							 </div>
					      </figcaption>
						   <div class="overview bg-white p-4">
						   <h4>overview</h4>
						     <p>
							  ${para.overview}
							 </p>
						  </div>
				      </figure>
			      </div>
			  </div>
		   </div>`
})


request.innerHTML=result;
