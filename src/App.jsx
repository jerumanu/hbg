

import './App.css'

function App() {
  

  return (
    <>
      <div className="container-fluid" >
      <nav className="navbar">
      <div  className="logo">HBG</div>

    <ul className="nav-links">

      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

      <div className="menu">
      <li><a href="/">About</a></li>
        <li><a href="/">products</a></li>
        <li><a href="/">Impact</a></li>
        <li><a href="/">Contact</a></li>
      </div>
    </ul>
  </nav>
  <section className='home'>
    <div className="card p-3 d-flex" style={{width: '80rem' ,height: '35rem' }}>
      <div className="card-body bg-secondary p-5" >
      <h2 className='card-title  text-center pt-5 ' >WHY BUY SOMETHING YOU ALREADY  OWN?</h2>
      <h4 className='card-subtitle text-center  '>Turn your waste into <a href='#'> free</a> gas and liquid fertilizer  </h4>
      <a  className='btn text-center  pt-5' href="#"> learn more</a>
      </div>
      
    

    </div>
    <div className="home-content p-3 mt-5" >
      <p className="paragraph-1 text-center  pt-4">
        we believe everybody should cook like they do in the city 
      </p>
      <p className="paragraph-2 text-center ">
        On  a modern  gas stove .No charcoal.No wood.No smoke. <a href='#'> And no money</a> 
      </p>
    </div>
  </section>
<section className="about">
  <h2 className='text-center pt-5' style={{fontWeight:700,textTransform:'uppercase'}}> Too Good To Be True</h2>
    <h4 className='text-center '>No just simple science! </h4>
    {/* <img src="./assets/Screenshot from 2023-06-02 13-17-06.png" alt="" /> */}

    <div className="row-fluid">
    <div className="span9">

                <div className="venn-container">
{/* 
                        <div className="venncirctop">
                        <a className="venntxttop" href="#">Studies in Curriculum</a>
                        </div>
      
                
                        <div className="venncirclft">
                        <a className="venntxtlft" href="#">Studies in Diversity</a>
                        </div>
                 */}
                        <div className="venncircrt">
                        <a className="venntxtrt" href="#">Studies in Digital Learning</a>
                        </div>
            

                        <div className="venncircbtm">
                        <a className="venntxtbtm" href="#">Studies in Educational Leadership & Policy</a>
                        </div>
                        </div>
                        </div>
                        </div>
  <div className="row">
    <div className="col">
      1 of 3
    </div>
    <div className="col">
      2 of 3
    </div>
    <div className="col">
      3 of 3
    </div>
  
    
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-6 offset-sm-3">
        <div className="circle"></div>
        <div className="circle" style={{position: "relative", top: "-100px;"}}></div>
      </div>
    </div>
  </div>
</section>
      </div>
      
    
    
    </>
  )
}

export default App
