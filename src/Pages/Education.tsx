import './Education.css';

function Education() {
  return (
    <div className="education-container">
      <header className="education-header">
        <h1>Education Background</h1>
        <p> Trained Product Designer.</p>
      </header>
      <div className="education-content">
        <h2>MSc Interaction and Experience Design</h2>  
        <div className="education-text">
        <p>
        University of Limerick </p>
        <p>
        Expected Graduation: 2025 </p>
        <p>
        My master's program allows me to dive into the field of experience design, where I am learning to create intuitive, user-centered interfaces and experiences. </p>
        <p>
	       Key focuses:</p>
		     <p> ○ Advanced usability testing and user research </p>
		     <p> ○ Physical Computing with Arduino, motors and soldering </p>
         <p> ○ Human-computer interaction principles and digital storytelling </p>
         </div>
        <h2>BSc Product Design and Technology</h2>
        <div className="education-text">
        <p>
        University of Limerick </p>
        <p>
        Graduated: 2024 </p>
        <p>
        During my undergraduate studies, I developed a strong foundation in product design, from conceptualisation to the final product.
        I am happy to say I graduated with a First Class Honours (1.1). </p>
        <p>
	      Key areas of focus included: </p>
        <p>
	      	○ Design thinking and problem-solving </p>
          <p>
	      	○ Materials and manufacturing processes </p>
          <p>
	      	○ Collaborative projects that emphasised practical, real-world applications </p>
          <p>
          ○ Fabrication skills for modelmaking; including, 3D Printing, Laser Cutting, Foam Modelling and more. </p>
          </div>
      </div>
    </div>
  );
}

export default Education;