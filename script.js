'use strict'


var nav = document.querySelector('nav');
var nav1 = document.getElementById('nav-item-1');
var nav2 = document.getElementById('nav-item-2');
var nav3 = document.getElementById('nav-item-3');
var nav4 = document.getElementById('nav-item-4');
var nav5 = document.getElementById('nav-item-5');




const toggleNav1 = () =>{
    
    
    if(nav1.style.display === 'none' || nav1.style.display === ""){
        nav1.style.display ="block";
        nav2.style.display = "none";
        nav3.style.display = "none";
        nav4.style.display = "none";
        nav5.style.display = "none";

        nav.style.backgroundColor = "white";
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-light');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');


    }else {
        nav1.style.display ="none";
        nav.style.backgroundColor = "transparent";
        nav.classList.remove('navbar-light');
        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-light');
        nav.classList.add('navbar-dark');
    }
}


const toggleNav2 = () => {
    

    if(nav2.style.display === 'none' || nav2.style.display === ""){
        nav1.style.display ="none";
        nav2.style.display = "block";
        nav3.style.display = "none";
        nav4.style.display = "none";
        nav5.style.display = "none";

        nav.style.backgroundColor = "white";
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-light');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        console.log("hellow");



    }else {
        nav2.style.display ="none";
        nav.style.backgroundColor = "transparent";
        nav.classList.remove('navbar-light');
        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-light');
        nav.classList.add('navbar-dark');
    }
    
}

const toggleNav3 = () => {
    

    if(nav3.style.display === 'none' || nav3.style.display === ""){
        nav1.style.display ="none";
        nav2.style.display = "none";
        nav3.style.display = "block";
        nav4.style.display = "none";
        nav5.style.display = "none";


        nav.style.backgroundColor = "white";
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-light');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');
        console.log("hellow");


    }else {
        nav3.style.display ="none";
        nav.style.backgroundColor = "transparent";
        nav.classList.remove('navbar-light');
        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-light');
        nav.classList.add('navbar-dark');
    }
    
}


const toggleNav4 = () => {
    

    if(nav4.style.display === 'none' || nav4.style.display === ""){
        nav1.style.display ="none";
        nav2.style.display = "none";
        nav3.style.display = "none";
        nav4.style.display = "block";
        nav5.style.display = "none";

        nav.style.backgroundColor = "white";
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-light');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');


    }else {
        nav4.style.display ="none";
        nav.style.backgroundColor = "transparent";
        nav.classList.remove('navbar-light');
        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-light');
        nav.classList.add('navbar-dark');
    }
}


const toggleNav5 = () => {
    

    if(nav5.style.display === 'none' || nav5.style.display === ""){
        nav1.style.display ="none";
        nav2.style.display = "none";
        nav3.style.display = "none";
        nav4.style.display = "none";
        nav5.style.display = "block";

        nav.style.backgroundColor = "white";
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-light');
        nav.classList.remove('navbar-dark');
        nav.classList.add('navbar-light');


    }else {
        nav5.style.display ="none";
        nav.style.backgroundColor = "transparent";
        nav.classList.remove('navbar-light');
        nav.classList.add('bg-transparent');
        nav.classList.remove('bg-light');
        nav.classList.add('navbar-dark');
    }
    
}

const toggleNav6 = () => {
    nav1.style.display ="none";
    nav2.style.display = "none";
    nav3.style.display = "none";
    nav4.style.display = "none";
    nav5.style.display = "none";
}



var lastScrollTop = 0;
var navbar = $(".navbar");

$(window).scroll(function() {
  var st = $(this).scrollTop();

  if (nav1.style.display ==="block" || nav2.style.display === "block" || nav3.style.display === "block" || nav4.style.display === "block" || nav5.style.display === "block"){
    
    navbar.removeClass("bg-transparent");
    navbar.addClass("bg-white");
    navbar.removeClass("navbar-dark");
    navbar.addClass("navbar-light");
    navbar.removeClass("navbar-down");

  }else if (st === 0){
    navbar.addClass("bg-transparent");
    navbar.addClass("navbar-dark");


  } else if (st > lastScrollTop) {   // Determine scroll direction
    // Scrolling down
    console.log("Scrolling down");
    navbar.addClass("navbar-up");
    navbar.removeClass("bg-transparent");
    navbar.addClass("bg-white");
    navbar.removeClass("navbar-dark");
    navbar.addClass("navbar-light");
    navbar.removeClass("navbar-down");
  } else {
    // Scrolling up
    console.log("Scrolling up");
    setTimeout(function() {
      navbar.addClass("navbar-down");
      navbar.removeClass("navbar-up");
    }, 200); 
  }

  lastScrollTop = st;
});



const navbarToggleBtn = () =>{
  var smallScreenNav = document.getElementById('scrollable');
  

  if(smallScreenNav.style.display==='none' || smallScreenNav.style.display===''){
    smallScreenNav.style.display==='block'
  }else{
    smallScreenNav.style.display==='none'
  }
  
}





//firt responsive
{/* <div class="container-fluid" id="hero-section">   
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-5 fixed-top navbar-transition">
          <a class="navbar-brand" href="#">BETOLAR</a>
          
          <!-- Toggle button for small screens -->
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <!-- Toggle button for small screens -->
          <button class="navbar-toggler" type="button" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        
          <div class="collapse navbar-collapse" id="navbarNav">
            <!-- Content for smaller screens -->
            <div class="container-fluid d-lg-none bg-dark" id="scrollable">
              <ul class="navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                </li>
                
                  
                    
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">TECHNOLOGY <span class="caret"></span></a>
                      <ul class="nav-item dropdown-menu bg-dark">
                        <li><a class="nav-link" href="#">Geoprime®</a></li>
                        <li><a class="nav-link" href="#">Start using Geoprime®</a></li>
                        <li><a class="nav-link" href="#">Build with Geoprime®</a></li>
                        <li><a class="nav-link" href="#">Glossary</a></li>
        
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">SOLUTIONS <span class="caret"></span></a>
                      <ul class="nav-item dropdown-menu bg-dark">
                        <li><a class="nav-link" href="#">Concrete products</a></li>
                        <li><a class="nav-link" href="#">Construction</a></li>
                        <li><a class="nav-link" href="#">Mining</a></li>
                        <li><a class="nav-link" href="#">Waste Upcycling</a></li>
        
                      </ul>
                    </li>
                    <li class="nav-item active"><a class='nav-link' href="#">SUSTAINABILITY</a></li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">NEWS & CASES <span class="caret"></span></a>
                      <ul class="nav-item dropdown-menu bg-dark">
                        <li><a class="nav-link" href="#">Blog</a></li>
                        <li><a class="nav-link" href="#">Reference cases</a></li>
                        <li><a class="nav-link" href="#">Releases</a></li>
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">COMPANY <span class="caret"></span></a>
                      <ul class="nav-item dropdown-menu bg-dark">
                        <li><a class="nav-link" href="#">About us</a></li>
                        <li><a class="nav-link" href="#">Careers</a></li>
                        <li><a class="nav-link" href="#">Become a partner</a></li>
                        <li><a class="nav-link" href="#">Contact information</a></li>
        
                      </ul>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">INVESTORS <span class="caret"></span></a>
                      <ul class="nav-item dropdown-menu bg-dark">
                        <li><a class="nav-link" href="#">Overview</a></li>
                        <li><a class="nav-link" href="#">Investor relations</a></li>
                        <li><a class="nav-link" href="#">Investor calendar</a></li>
                        <li><a class="nav-link" href="#">Reports and presentations</a></li>
                        <li><a class="nav-link" href="#">IPO</a></li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">As an Investment <span class="caret"></span></a>
                          <ul class="nav-item dropdown-menu bg-dark">
                            <li><a class="nav-link" href="#">Summary</a></li>
                            <li><a class="nav-link" href="#">Strategy & targets</a></li>
                            <li><a class="nav-link" href="#">Markets</a></li>
                            <li><a class="nav-link" href="#">Technology</a></li>
                            <li><a class="nav-link" href="#">Risks & uncertainties</a></li>
                          </ul>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Share & Shareholders <span class="caret"></span></a>
                          <ul class="nav-item dropdown-menu bg-dark">
                            <li><a class="nav-link" href="#">Share information</a></li>
                            <li><a class="nav-link" href="#">Investment calculator</a></li>
                            <li><a class="nav-link" href="#">Shareholders</a></li>
                            <li><a class="nav-link" href="#">Management transactions</a></li>
                            <li><a class="nav-link" href="#">Authorization of the board of directors</a></li>
                            <li><a class="nav-link" href="#">Analyst and company research</a></li>
        
                            
                          </ul>
                        </li>
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Governance <span class="caret"></span></a>
                          <ul class="nav-item dropdown-menu bg-dark">
                            
                            <li><a class="nav-link" href="#">Summary</a></li>
                            <li><a class="nav-link" href="#">Article of association</a></li>
                            <li><a class="nav-link" href="#">General meeting</a></li>
                            <li><a class="nav-link" href="#">Board of directors</a></li>
                            <li><a class="nav-link" href="#">Shareholder's nomination committee</a></li>
                            <li><a class="nav-link" href="#">CEO and management team</a></li>
                            <li><a class="nav-link" href="#">Remuneration</a></li>
                            <li><a class="nav-link" href="#">Risk management</a></li>
                            <li><a class="nav-link" href="#">Insider management</a></li>
                            <li><a class="nav-link" href="#">Disclosure policy</a></li>
                            <li><a class="nav-link" href="#">Auditing</a></li>
                            <li><a class="nav-link" href="#">Certified advisor</a></li>
                          
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="#">Page 2</a></li>
                  
                
                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>
              </ul>
            </div>
        
            <!-- Content for larger screens -->
            <div class="row d-none d-lg-block ml-auto" id="nav">
        
                <div class="">
                 
                  <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active nav-text" href="#" id="navbarDropdown1" onclick="toggleNav1()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            TECHNOLOGY
                        </a>
                       
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown2" onclick="toggleNav2()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            SOLUTIONS
                        </a>
                       
                      </li>
                      <li class="nav-item"><a class="nav-link active" href="#">SUSTAINABILITY</a></li>
                      <li class="nav-item dropdown active">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown3" onclick="toggleNav3()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            NEWS & CASES
                        </a>
                       
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown4" onclick="toggleNav4()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            COMPANY
                        </a>
                       
                      </li>
                      <li class="nav-item">
                        <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown5" onclick="toggleNav5()">
                            INVESTORS
                        </a>
                      
                        
                        
                      </li>
                    </ul>
                   
                <button id="contact-btn" class="d-block fw-bold">Contact us</button>
                <!-- <a class="text-light" role="button" id="globe" href="#"><i class="fa-solid fa-globe"></i> EN</a> -->
              </div>
                    
                  </div>
                </div>
            </div>
          
        </nav>
          
        </div> */}


//not responsive
    //     <nav class="navbar navbar-expand-lg bg-transparent navbar-dark px-5 fixed-top navbar-transition">
    //     <a class="navbar-brand fw-bold fs-3 nav-text" href="#">BETOLAR</a>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item dropdown">
    //           <a class="nav-link dropdown-toggle active nav-text" href="#" id="navbarDropdown1" onclick="toggleNav1()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //               TECHNOLOGY
    //           </a>
    //           <!-- <div class="dropdown-menu">
    //             <a class="dropdown-item" href="#">Action</a>
    //             <a class="dropdown-item" href="#">Another action</a>
    //             <a class="dropdown-item" href="#">Something else here</a>
    //           </div> -->
    //         </li>
    //         <li class="nav-item dropdown">
    //           <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown2" onclick="toggleNav2()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //               SOLUTIONS
    //           </a>
    //           <!-- <div class="dropdown-menu">
    //             <a class="dropdown-item" href="#">Action</a>
    //             <a class="dropdown-item" href="#">Another action</a>
    //             <a class="dropdown-item" href="#">Something else here</a>
    //           </div> -->
    //         </li>
    //         <li class="nav-item"><a class="nav-link active" href="#" onclick="toggleNav6()">SUSTAINABILITY</a></li>
    //         <li class="nav-item dropdown active">
    //           <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown3" onclick="toggleNav3()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //               NEWS & CASES
    //           </a>
    //           <!-- <div class="dropdown-menu">
    //             <a class="dropdown-item" href="#">Action</a>
    //             <a class="dropdown-item" href="#">Another action</a>
    //             <a class="dropdown-item" href="#">Something else here</a>
    //           </div> -->
    //         </li>
    //         <li class="nav-item dropdown">
    //           <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown4" onclick="toggleNav4()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //               COMPANY
    //           </a>
    //           <!-- <div class="dropdown-menu">
    //             <a class="dropdown-item" href="#">Action</a>
    //             <a class="dropdown-item" href="#">Another action</a>
    //             <a class="dropdown-item" href="#">Something else here</a>
    //           </div> -->
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown5" onclick="toggleNav5()">
    //               INVESTORS
    //           </a>
    //           <!-- <div class="dropdown-menu">
    //             <a class="dropdown-item" href="#">Action</a>
    //             <a class="dropdown-item" href="#">Another action</a>
    //             <a class="dropdown-item" href="#">Something else here</a>
    //           </div> -->
              
              
    //         </li>
    //       </ul>
    //       <button id="contact-btn" class="d-block fw-bold">Contact us</button>
    //       <!-- <a class="text-light" role="button" id="globe" href="#"><i class="fa-solid fa-globe"></i> EN</a> -->
    //     </div>
    //   </nav>




    // finally 

       

// <div class="container-fluid">   
        
//         <nav class="navbar navbar-expand-lg navbar-dark bg-transparent px-5 fixed-top navbar-transition">
//           <a class="navbar-brand" href="#">BETOLAR</a>
          
//           <!-- Toggle button for small screens -->
//           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
        
//           <div class="collapse navbar-collapse" id="navbarNav">
//             <!-- Content for smaller screens -->
//             <div class="container-fluid d-lg-none bg-dark" id="smaller-screen-nav">
//               <ul class="navbar-nav">      
                  
//                     <li class="nav-item dropdown">
//                       <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">TECHNOLOGY <span class="caret"></span></a>
//                       <ul class="nav-item dropdown-menu bg-dark">
//                         <li><a class="nav-link" href="#">Geoprime®</a></li>
//                         <li><a class="nav-link" href="#">Start using Geoprime®</a></li>
//                         <li><a class="nav-link" href="#">Build with Geoprime®</a></li>
//                         <li><a class="nav-link" href="#">Glossary</a></li>
        
//                       </ul>
//                     </li>
//                     <li class="nav-item dropdown">
//                       <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">SOLUTIONS <span class="caret"></span></a>
//                       <ul class="nav-item dropdown-menu bg-dark">
//                         <li><a class="nav-link" href="#">Concrete products</a></li>
//                         <li><a class="nav-link" href="#">Construction</a></li>
//                         <li><a class="nav-link" href="#">Mining</a></li>
//                         <li><a class="nav-link" href="#">Waste Upcycling</a></li>
        
//                       </ul>
//                     </li>
//                     <li class="nav-item active"><a class='nav-link' href="#">SUSTAINABILITY</a></li>
//                     <li class="nav-item dropdown">
//                       <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">NEWS & CASES <span class="caret"></span></a>
//                       <ul class="nav-item dropdown-menu bg-dark">
//                         <li><a class="nav-link" href="#">Blog</a></li>
//                         <li><a class="nav-link" href="#">Reference cases</a></li>
//                         <li><a class="nav-link" href="#">Releases</a></li>
//                       </ul>
//                     </li>
//                     <li class="nav-item dropdown">
//                       <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">COMPANY <span class="caret"></span></a>
//                       <ul class="nav-item dropdown-menu bg-dark">
//                         <li><a class="nav-link" href="#">About us</a></li>
//                         <li><a class="nav-link" href="#">Careers</a></li>
//                         <li><a class="nav-link" href="#">Become a partner</a></li>
//                         <li><a class="nav-link" href="#">Contact information</a></li>
        
//                       </ul>
//                     </li>
//                     <li class="nav-item dropdown">
//                       <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">INVESTORS <span class="caret"></span></a>
//                       <ul class="nav-item dropdown-menu bg-dark">
//                         <li><a class="nav-link" href="#">Overview</a></li>
//                         <li><a class="nav-link" href="#">Investor relations</a></li>
//                         <li><a class="nav-link" href="#">Investor calendar</a></li>
//                         <li><a class="nav-link" href="#">Reports and presentations</a></li>
//                         <li><a class="nav-link" href="#">IPO</a></li>
//                         <li class="nav-item dropdown">
//                           <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">As an Investment <span class="caret"></span></a>
//                           <ul class="nav-item dropdown-menu bg-dark">
//                             <li><a class="nav-link" href="#">Summary</a></li>
//                             <li><a class="nav-link" href="#">Strategy & targets</a></li>
//                             <li><a class="nav-link" href="#">Markets</a></li>
//                             <li><a class="nav-link" href="#">Technology</a></li>
//                             <li><a class="nav-link" href="#">Risks & uncertainties</a></li>
//                           </ul>
//                         </li>
//                         <li class="nav-item dropdown">
//                           <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Share & Shareholders <span class="caret"></span></a>
//                           <ul class="nav-item dropdown-menu bg-dark">
//                             <li><a class="nav-link" href="#">Share information</a></li>
//                             <li><a class="nav-link" href="#">Investment calculator</a></li>
//                             <li><a class="nav-link" href="#">Shareholders</a></li>
//                             <li><a class="nav-link" href="#">Management transactions</a></li>
//                             <li><a class="nav-link" href="#">Authorization of the board of directors</a></li>
//                             <li><a class="nav-link" href="#">Analyst and company research</a></li>
        
                            
//                           </ul>
//                         </li>
//                         <li class="nav-item dropdown">
//                           <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Governance <span class="caret"></span></a>
//                           <ul class="dropdown-menu bg-dark">
                            
//                             <li><a class="nav-link" href="#">Summary</a></li>
//                             <li><a class="nav-link" href="#">Article of association</a></li>
//                             <li><a class="nav-link" href="#">General meeting</a></li>
//                             <li><a class="nav-link" href="#">Board of directors</a></li>
//                             <li><a class="nav-link" href="#">Shareholder's nomination committee</a></li>
//                             <li><a class="nav-link" href="#">CEO and management team</a></li>
//                             <li><a class="nav-link" href="#">Remuneration</a></li>
//                             <li><a class="nav-link" href="#">Risk management</a></li>
//                             <li><a class="nav-link" href="#">Insider management</a></li>
//                             <li><a class="nav-link" href="#">Disclosure policy</a></li>
//                             <li><a class="nav-link" href="#">Auditing</a></li>
//                             <li><a class="nav-link" href="#">Certified advisor</a></li>
                          
//                           </ul>
//                         </li>
//                       </ul>
//                     </li>
                   
//               </ul>
//             </div>
        
//             <!-- Content for larger screens -->
//             <div class="row d-none d-lg-block ml-auto" id="nav">
//               <div class="collapse navbar-collapse justify-content-around" id="navbarNav">
//                 <ul class="navbar-nav">
//                   <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle active nav-text" href="#" id="navbarDropdown1" onclick="toggleNav1()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         TECHNOLOGY
//                     </a>
                    
//                   </li>
//                   <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown2" onclick="toggleNav2()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         SOLUTIONS
//                     </a>
                   
//                   </li>
//                   <li class="nav-item"><a class="nav-link active" href="#" onclick="toggleNav6()">SUSTAINABILITY</a></li>
//                   <li class="nav-item dropdown active">
//                     <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown3" onclick="toggleNav3()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         NEWS & CASES
//                     </a>
                  
//                   </li>
//                   <li class="nav-item dropdown">
//                     <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown4" onclick="toggleNav4()" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                         COMPANY
//                     </a>
                    
//                   </li>
//                   <li class="nav-item">
//                     <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown5" onclick="toggleNav5()">
//                         INVESTORS
//                     </a>
                    
                    
                    
//                   </li>
//                 </ul>
//                 <button id="contact-btn" class="d-block fw-bold">Contact us</button>
//                 <!-- <a class="text-light" role="button" id="globe" href="#"><i class="fa-solid fa-globe"></i> EN</a> -->
//               </div> 
//             </div>
          
//         </nav>
          
//       </div>