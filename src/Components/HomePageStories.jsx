import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';

const HomePageStories = () => {

  const [currentDate, setCurrentDate] = useState('');

  const[posts, setPosts] =useState([]);
  const[postFlag, setPostFlag] = useState(false)

  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response)=>{
          console.log(response.data);
          setPosts(response.data)
          setPostFlag(true)
      })
      .catch((error)=>{
          console.log(error);
      })

      const updateCurrentDate = () => {
        const dateObj = new Date();
        const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
        setCurrentDate(formattedDate);
      };
      updateCurrentDate();

    // Update the current date every second (for real-time effect)
    const intervalId = setInterval(updateCurrentDate, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  

  },[]);

  





  return (
    <div>

      {/*Home Main content area jasma videos hunxa */}
      <section class="category-section">
        <div class="container" data-aos="fade-up">

          <div class="section-header d-flex justify-content-between align-items-center mb-5">
            <h2>Culture</h2>
            <div><a href="category.html" class="more">See All Culture</a></div>
          </div>

          <div class="row">
            <div class="col-md-9 ">
              {/* yo div ma hamro video with additional content   (data fetch garnu parne thau) */}
              <div class="d-lg-flex post-entry-2">
             
                 <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                      <ReactPlayer
                            url="https://www.youtube.com/watch?v=Aj_hnge3vBA"
                            width="93%"
                            height="87%"
                            controls
                          />
                  {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
                </div> 
                <div>
                  <div class="post-meta"><span class="date">Culture</span> <span class="mx-1"> </span> <span>{currentDate}</span></div>
                  <div class="d-flex align-items-center author">
                    <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
                    <div class="name">
                      <h3 class="m-0 p-0">Wade Warren</h3>
                    </div>
                  </div>
                  <h3><a href="single-post.html">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                  
                </div>
              </div>
              {/* div sakinxa */}

              <div class="d-lg-flex post-entry-2">
             
             <div class="me-3 thumbnail mb-4 mb-lg-0 d-inline-block">
                  <ReactPlayer
                        url="https://www.youtube.com/watch?v=Aj_hnge3vBA"
                        width="93%"
                        height="87%"
                        controls
                      />
              {/* <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" /> */}
            </div> 
            <div >
              <div class="post-meta"><span class="date">Culture</span> <span class="mx-1"> </span> <span>{currentDate}</span></div>
              <div class="d-flex align-items-center author">
                <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
                <div class="name">
                  <h3 class="m-0 p-0">Wade Warren</h3>
                </div>
              </div>
              <h3><a href="single-post.html">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
              
            </div>
          </div>

              {/* <div class="row">
                <div class="col-lg-4">
                  <div class="post-entry-1 border-bottom">
                    <a href="single-post.html"><img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid" /></a>
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="single-post.html">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                    <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur  numquam cumque possimus</p>
                  </div>

                  <div class="post-entry-1">
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                  </div>
                </div>
                <div class="col-lg-8">
                  <div class="post-entry-1">
                    <a href="single-post.html"><img src="assets/img/post-landscape-2.jpg" alt="" class="img-fluid" /></a>
                    <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                    <h2 class="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                    <span class="author mb-3 d-block">Jenny Wilson</span>
                    <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                  </div>
                </div>
              </div> */}
            </div>
            

            <div class="col-md-3">
              <div class="post-entry-1 border-bottom">
                <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Baishak 10th '2082</span></div>
                <h2 class="mb-2"><a href="single-post.html">Chemical Engineering- Sugar</a></h2>
                <span class="author mb-3 d-block">Mr. Joshi</span>
              </div>

              <div class="post-entry-1 border-bottom">
                <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Baishak 10th '2082</span></div>
                <h2 class="mb-2"><a href="single-post.html">Social Walfare</a></h2>
                <span class="author mb-3 d-block">Mr. </span>
              </div>

              <div class="post-entry-1 border-bottom">
                <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Baishak 10th '2082</span></div>
                <h2 class="mb-2"><a href="single-post.html">Social Walfare</a></h2>
                <span class="author mb-3 d-block">Mr. Balram</span>
              </div>

              <div class="post-entry-1 border-bottom">
                <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                <h2 class="mb-2"><Link to="/storyDetails">Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </Link></h2>
                <span class="author mb-3 d-block">Mr.</span>
              </div>

              <div class="post-entry-1 border-bottom">
                <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                <h2 class="mb-2"><a href="single-post.html">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</a></h2>
                <span class="author mb-3 d-block">Mr.</span>
              </div>

              <div class="post-entry-1 border-bottom">
                <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                <h2 class="mb-2"><a href="single-post.html">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</a></h2>
                <span class="author mb-3 d-block">Mr. </span>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div >
  )
}

export default HomePageStories




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// // flex row reverse  garne for alternate post
// const HomePageStories = () => {

//   const [currentDate, setCurrentDate] = useState('');

//   const[posts, setPosts] =useState([]);
//   const[postFlag, setPostFlag] = useState(false)

//   useEffect(()=>{
//       axios.get('https://jsonplaceholder.typicode.com/posts')
//       .then((response)=>{
//           console.log(response.data);
//           setPosts(response.data)
//           setPostFlag(true)
//       })
//       .catch((error)=>{
//           console.log(error);
//       })

//       const updateCurrentDate = () => {
//         const dateObj = new Date();
//         const formattedDate = `${dateObj.getMonth() + 1}/${dateObj.getDate()}/${dateObj.getFullYear()}`;
//         setCurrentDate(formattedDate);
//       };
//       updateCurrentDate();

//     // Update the current date every second (for real-time effect)
//     const intervalId = setInterval(updateCurrentDate, 1000);

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(intervalId);
  

//   },[]);

  





//   return (
//     <div>

//       {/*Home Main content area jasma videos hunxa */}
//       <section class="category-section">
//         <div class="container" data-aos="fade-up">

//           <div class="section-header d-flex justify-content-between align-items-center mb-5">
//             <h2>Culture</h2>
//             <div><a href="category.html" class="more">See All Culture</a></div>
//           </div>

//           <div class="row">
//             <div class="col-md-9">
//               {/* yo div ma hamro video with additional content   (data fetch garnu parne thau) */}
//               <div class="d-lg-flex post-entry-2">
//                 <a href="single-post.html" class="me-4 thumbnail mb-4 mb-lg-0 d-inline-block">
//                   <img src="assets/img/post-landscape-6.jpg" alt="" class="img-fluid" />
//                 </a>
//                 <div>
//                   <div class="post-meta"><span class="date">Culture</span> <span class="mx-1"> </span> <span>{currentDate}</span></div>
//                   <div class="d-flex align-items-center author">
//                     <div class="photo"><img src="assets/img/person-2.jpg" alt="" class="img-fluid" /></div>
//                     <div class="name">
//                       <h3 class="m-0 p-0">Wade Warren</h3>
//                     </div>
//                   </div>
//                   <h3><a href="single-post.html">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
//                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                  
//                 </div>
//               </div>
//               {/* div sakinxa */}

//               <div class="row">
//                 <div class="col-lg-4">
//                   <div class="post-entry-1 border-bottom">
//                     <a href="single-post.html"><img src="assets/img/post-landscape-1.jpg" alt="" class="img-fluid" /></a>
//                     <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                     <h2 class="mb-2"><a href="single-post.html">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
//                     <span class="author mb-3 d-block">Jenny Wilson</span>
//                     <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur  numquam cumque possimus</p>
//                   </div>

//                   <div class="post-entry-1">
//                     <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                     <h2 class="mb-2"><a href="single-post.html">5 Great Startup Tips for Female Founders</a></h2>
//                     <span class="author mb-3 d-block">Jenny Wilson</span>
//                   </div>
//                 </div>
//                 <div class="col-lg-8">
//                   <div class="post-entry-1">
//                     <a href="single-post.html"><img src="assets/img/post-landscape-2.jpg" alt="" class="img-fluid" /></a>
//                     <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                     <h2 class="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
//                     <span class="author mb-3 d-block">Jenny Wilson</span>
//                     <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div class="col-md-3">
//               <div class="post-entry-1 border-bottom">
//                 <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                 <h2 class="mb-2"><a href="single-post.html">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
//                 <span class="author mb-3 d-block">Jenny Wilson</span>
//               </div>

//               <div class="post-entry-1 border-bottom">
//                 <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                 <h2 class="mb-2"><a href="single-post.html">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
//                 <span class="author mb-3 d-block">Jenny Wilson</span>
//               </div>

//               <div class="post-entry-1 border-bottom">
//                 <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                 <h2 class="mb-2"><a href="single-post.html">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
//                 <span class="author mb-3 d-block">Jenny Wilson</span>
//               </div>

//               <div class="post-entry-1 border-bottom">
//                 <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                 <h2 class="mb-2"><a href="single-post.html">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
//                 <span class="author mb-3 d-block">Jenny Wilson</span>
//               </div>

//               <div class="post-entry-1 border-bottom">
//                 <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                 <h2 class="mb-2"><a href="single-post.html">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
//                 <span class="author mb-3 d-block">Jenny Wilson</span>
//               </div>

//               <div class="post-entry-1 border-bottom">
//                 <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
//                 <h2 class="mb-2"><a href="single-post.html">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
//                 <span class="author mb-3 d-block">Jenny Wilson</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>


//     </div >
//   )
// }

// export default HomePageStories