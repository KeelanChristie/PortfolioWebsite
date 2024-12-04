import './Professional Knowledge.css';
import Microsoft from '../assets/Microsoft_Suite.png';
import Affinity from '../assets/Affinity_Suite.png';
import Adobe from '../assets/Adobe_Suite.png';
import Solidworks from '../assets/Solidworks.png';
import Printing from '../assets/3dprinting.png';

function Pro() {
  return (
    <div className="pro-container">
      <header className="pro-header">
        <h1>My Professional Skills</h1>
      </header>

      <div className="pro-content">
        <section>
          <h2>Digital Skills</h2>
          <div className="pro-column-container">
            <div>
              <h3>The Microsoft Suite</h3>
              <p></p>
              <img src={Microsoft} className="pro-image" alt="Microsoft Suite" />
              <h3>The Affinity Suite</h3>
              <p></p>
              <img src={Affinity} className="pro-image" alt="Affinity Suite" />
              <h3>Adobe</h3>
              <p></p>
              <img src={Adobe} className="pro-image" alt="Adobe Suite" />
            </div>
            <div>
              <h3>Solidworks, Visualiser, Keyshot</h3>
              <p></p>
              <img src={Solidworks} className="pro-image" alt="Solidworks" />
              <h3>3D Printing</h3>
              <p></p>
              <img src={Printing} className="pro-image" alt="3D Printing" />
            </div>
          </div>
        </section>

        <section>
          <h2>Physical Skills</h2>
          <div className="pro-column-container">
            <div>
              <h3>3D Printing:</h3><p> BambuLab A1, Creality CR-10, Anet A8, Formlabs Resin Printers.</p>
              <h3>Mouldmaking:</h3> <p>Fiberglass Moulds, Plaster Moulds, One-Part, Two-Part and Matrix Moulds.</p>
              <h3>Electronics:</h3><p> Wiring, Circuitry, Soldering.</p>
            </div>
            <div>
            <h3>Finishing:</h3> <p>Sanding, Polishing, Spray Painting, Airbrushing, Hand Painting, Weathering.</p>
            <h3> Woodwork:</h3> <p>Hand Drill, Pedestal Drill, Handsaw, Tablesaw, Bandsaw, Sander, Grinder.</p>
            
            </div>
          </div>
        </section>

        <section>
          <h2>Soft Skills</h2>
          <div className="pro-column-container">
            <div>
              <p>○ Full Irish Driving License</p>
              <p>○ Product Design</p>
              <p>○ Sketching</p>
              <p>○ Graphic Design</p>
              <p>○ Visual Design</p>
              <p>○ Interaction Design</p>
            </div>
            <div>
              <p>○ Teamwork</p>
              <p>○ Presentation Skills</p>
              <p>○ Design Thinking</p>
              <p>○ Researching</p>
              <p>○ User Research</p>
              <p>○ Analysis</p>
            </div>
            <div>
              
              <p>○ Leadership</p>
              <p>○ Communication</p>
              <p>○ Attention to Detail</p>
              <p>○ Time Management</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pro;
