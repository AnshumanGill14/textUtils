import React from 'react'

export default function About(props) {
  return (
    <div className="accordion my-3 mx-3" id="accordionExample" style={{color: props.mode ==="light"?"black":"white"}}>
    <h1>About Us:</h1>
  <div className="accordion-item" style={{backgroundColor: props.mode ==="light"?"white":"#213555",color: props.mode ==="light"?"black":"white"}}>
    <h2 className="accordion-header" >
      <button style={{backgroundColor: props.mode ==="light"?"white":"#213555",color: props.mode ==="light"?"black":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseTwo">
        Aim:
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <strong>Out aim is to make user's life easier by helping you edit your texts.</strong>  To empower users with a versatile and efficient text utility website that simplifies and enhances their text-related tasks, fostering productivity and creativity.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={{backgroundColor: props.mode ==="light"?"white":"#213555",color: props.mode ==="light"?"black":"white"}}>
    <h2 className="accordion-header" >
      <button style={{backgroundColor: props.mode ==="light"?"white":"#213555",color: props.mode ==="light"?"black":"white"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Contact:
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={{backgroundColor: props.mode ==="light"?"white":"#213555",color: props.mode ==="light"?"black":"white"}}>
      <div className="accordion-body">
        <ul>
            <li><strong>Email:</strong> anshumangill14@gmail.com</li>
            <li><strong>Phone no:</strong> 8178635660</li>
        </ul>
        
      </div>
    </div>
  </div>
  
</div>
  )
}
