

 const Header = ({title}) =>{
   return (
  <header className = "container-fluid p-3">
  <div className="iconHolder" tabindex ="0">
  <div className ="icon-content">
    <p><i class="bi bi-share"></i></p>
    </div>
    </div>
    
 <div className="harmburgerIcon" tabindex ="0">
  <div className ="harmburger-content">
    <p><i class="bi bi-three-dots"></i></p>
    </div>
    </div>
    
  <div className="image-container mb-2" tabindex="0">
  <img src="./images/ijeoma1.jpg" alt="profile_pic" className="profile-pic" id="profile__img" tabindex ="1"/>
  <div className="middle">
  <p><i class="bi bi-camera"></i></p>
  </div>
  </div>
  
  <div className="Name_holder pb-5">
  <h1 id="header-title" className="text-center">{title}</h1>
  <p id='slack' style={{ display: 'none'}}>BenedictaUwabunkeonye</p>

  </div>
  </header>
  )
}

Header.defaultProps = {
  title: "Benedicta Uwabunkeonye",
}

export default Header