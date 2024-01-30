import React from 'react';

function Introduction() {
  return (
    <div className="introduction">
      <div class="text-content">
        <h1>Welcome!</h1>
        <p>Hi there, I’m Michael, and I’m an enthusiastic IT Specialist, studying Computer Science at the University of Queensland. I have interests in systems administration, cyber security, programming, development, amongst a few others. <br/> <br/>
          
          Outside of that, I enjoy camping, trying to grow plants & cooking (though it’s not always as successful as I’d hope). I’m also the lead violin in a string quartet. <br/> <br/>
          
          I grew up in Brisbane, and went to school at St. Laurence’s College in South Brisbane. Since graduating, I’ve studied at the Southbank Institute of Technology and the University of Queensland.</p>
      </div>
      <div class="image-content">
        {/* Add an image if you have one */}
        <img src="http://michaeloates.me/wp-content/uploads/2023/03/NICE-IMG_1269-768x1024.jpg" alt="Your Name" />
      </div>
    </div>
  );
}

export default Introduction;
