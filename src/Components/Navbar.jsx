function Navbar() {
   
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge text-dark bg-light fs-4">BBC NEWS</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav" style={{cursor:"pointer"}}>
        <li className="nav-item">
          <div className="nav-link active" aria-current="page">Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" aria-current="page">Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" aria-current="page" >Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" aria-current="page">Sports</div>
        </li>
        <li className="nav-item">
          <div className="nav-link active" aria-current="page" >Entertainment</div>
        </li>
      </ul>
    </div>
  </div>
</nav>
  ); 
}

export default Navbar