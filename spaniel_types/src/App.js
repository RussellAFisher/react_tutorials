import 'bulma/css/bulma.css';
import ProfileCard from "./ProfileCard";
import puppies from './images/puppies.jpg';
import mop from './images/mop.jpg';
import rbf from './images/rbf.jpg';

function App() {
    return (
        <div>
            <section className="hero is-primary">
                <div className="hero-body">
                    <p className="title">
                        Spaniel Types
                    </p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard title="Puppies" description="Pile o'puppies" image={puppies} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="MOP" description="Useful as a mop" image={mop} />
                        </div>
                        <div className="column is-4">
                            <ProfileCard title="RBF" description="Stank face McGee" image={rbf} />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default App;