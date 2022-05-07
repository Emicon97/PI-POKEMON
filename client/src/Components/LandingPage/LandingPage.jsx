import { Link } from 'react-router-dom';

import { Background, Button } from "./Styles";

const LandingPage = () => {
   return (
      <Background>
         <Link to='/home'>
            <Button>Home</Button>
         </Link>
      </Background>
   );
};

export default LandingPage;