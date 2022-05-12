import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { Background, Div, Button } from "./Aspect/SuccessSyles";

import { clearMessages, loadingTrue } from '../../Redux/actions';

const Success = () => {
   const dispatch = useDispatch();
   const success = useSelector(state => state.success);
   const history = useHistory();

   useEffect(() => {
      return () => {
         dispatch(clearMessages());
         dispatch(loadingTrue());
      };
      // eslint-disable-next-line
   }, []);

   return (
      <Background>
         <Div>
            {success ? success : '¡Muchos éxitos!'}
         </Div>
         <Button isForm={false} onClick={() => history.push('/home')}>Home</Button>
      </Background>
   )
};

export default Success;