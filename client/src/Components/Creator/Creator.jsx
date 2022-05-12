import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Background, Form, Label, Input, Div, Span, TypeContainer, MiniButton } from "./Aspect/Styles.jsx";
import { Button } from "./Aspect/SuccessSyles";

import { getTypes, postFakemon, loadingTrue, clearMessages } from "../../Redux/actions";

const Creator = () => {
   const dispatch = useDispatch();
   const types = useSelector(state => state.types);
   const errorMessage = useSelector(state => state.error);
   const successMessage = useSelector(state => state.success);
   const loading = useSelector(state => state.loading);

   const history = useHistory();

   const [ req, setReq ] = useState({
      name: '',
      hp: '',
      attack: '',
      defense: '',
      speed: '',
      height: '',
      weight: '',
      sprite: '',
      types: []
   });
   const [ error, setError ] = useState({
      name: undefined,
      hp: undefined,
      attack: undefined,
      defense: undefined,
      speed: undefined,
      height: undefined,
      weight: undefined,
      sprite: undefined
   });
   const [ go, setGo ] = useState({});
   const [ checkbox, setCheckbox ] = useState();

   useEffect(() => {
      dispatch(clearMessages())
      dispatch(getTypes());
      return () => dispatch(loadingTrue());
      // eslint-disable-next-line
   }, []);

   useEffect(() => {
      validation(req);
      // eslint-disable-next-line
   }, [req]);

   useEffect(() => {
      handleMessage(errorMessage, successMessage);
      // eslint-disable-next-line
   }, [errorMessage, successMessage]);

   const handleInput = e => {
      setReq({
         ...req,
         [e.target.name]: e.target.value
      });
   };
   
   const handleType = e => {
      let type = e.target.value;
      if (e.target.checked) {
         if (req.types.length === 2) {
            setReq({
               ...req,
               types: req.types.pop()
            });
            checkbox.checked = false;
         }
         setReq({
            ...req,
            types: [ ...req.types, type ]
         });
         setCheckbox(document.getElementById(type));
      } else {
         setReq({
            ...req,
            types: req.types.filter(t => t !== type)
         });
      }
   };

   const validation = () => {
      let url = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
      
      let name =  '';
      let hp = '';
      let attack = '';
      let defense = '';
      let speed = '';
      let height ='';
      let weight ='';
      let sprite = '';

      
      if (!req.name) {
         name = '¡Ponele a tu Pokémon un nombre que te guste!';
      } else if (req.name.length > 18) {
         name = '¡Es difícil recordar ese nombre!';
      }
      if (req.hp > 999 || req.hp < 0) {
         hp = '¡Esa estadística es injusta!';
      }
      if (req.attack > 999 || req.attack < 0) {
         attack = '¡Esa estadística es injusta!';
      }
      if (req.defense > 999 || req.defense < 0) {
         defense = '¡Esa estadística es injusta!';
      }
      if (req.speed > 999 || req.speed < 0) {
         speed = '¡Esa estadística es injusta!';
      }
      if (req.height > 4999 || req.height < 0) {
         height ='¡Esa altura es imposible!';
      }
      if (req.weight > 49999 || req.weight < 0) {
         weight = '¡Ese peso es imposible!';
      }
      if (req.sprite && !url.test(req.sprite)) {
         sprite ='¡Esa no es una URL!';
      }
      setError({
         name,
         hp,
         attack,
         defense,
         speed,
         height,
         weight,
         sprite
      });
      if (Object.keys(go).length) {
         setGo({
            name,
            hp,
            attack,
            defense,
            speed,
            height,
            weight,
            sprite
         });
      }
   };

   const handleSubmit = e => {
      e.preventDefault()

      for (let x in req) {
         if (x !== 'name' && x !== 'sprite' && x !== 'types') {
            if (!req[x]){
               req[x] = 0;
            }
         }
      }

      setGo({});
      setGo(error);

      let errorList = 0     
      for (let err in error) {
         if (error[err]) {
            errorList++;
         }
      }

      if (!errorList) {
         dispatch(loadingTrue(true));
         dispatch(postFakemon(req));
      }
   };

   const handleMessage = (suc, err) => {
      if (suc || err) {
         if (successMessage && req.name.length) {
            return history.push('/success');
         }
         setGo(errors => {
            return {
               ...errors,
               name: errorMessage
            };
         });
      }
      dispatch(clearMessages());
   };
   
   return (
      <Background>
         <Form isLoading={loading} onSubmit={e => handleSubmit(e)}>
         {loading === true ? <Span isLoading={true} >Registrando datos</Span> :
         <>
            <Div isTitle={true} >¡CREÁ TU PROPIO POKÉMON!</Div>
            <Label>Nombre</Label>
            <Div>
            <Input type="text" value={req.name} name="name" hasErrors={go.name}
               placeholder="Campo obligatorio" onChange={e => handleInput(e)} />
                  {go.name ? <Span>{go.name}</Span> : null}
            </Div>
                     <p/>
            <Label>―Estadísticas:</Label>
            <Label>Puntos de salud</Label>
            <Div>
            <Input type="number" value={req.hp} name="hp"
               placeholder="Ingrese un parámetro" onChange={e => handleInput(e)} />
                  {go.hp ? <Span>{go.hp}</Span> : null}
                     <br/>
            </Div>
            <Label>Ataque</Label>
            <Div>
            <Input type="number" value={req.attack} name="attack"
               placeholder="Ingrese un parámetro" onChange={e => handleInput(e)} />
                  {go.attack ? <Span>{go.attack}</Span> : null}
            </Div>
            <Label>Defensa</Label>
            <Div>
            <Input type="number" value={req.defense} name="defense"
               placeholder="Ingrese un parámetro" onChange={e => handleInput(e)} />
                  {go.defense ? <Span>{go.defense}</Span> : null}
            </Div>
            <Label>Velocidad</Label>
            <Div>
            <Input type="number" value={req.speed} name="speed"
               placeholder="Ingrese un parámetro" onChange={e => handleInput(e)} />
                  {go.speed ? <Span>{go.speed}</Span> : null}
            </Div>
            <Label>Altura</Label>
            <Div>
            <Input type="number" value={req.height} name="height"
               placeholder="Ingrese un parámetro" onChange={e => handleInput(e)} />
                  {go.height ? <Span>{go.height}</Span> : null}
            </Div>
            <Label>Peso</Label>
            <Div>
            <Input type="number" value={req.weight} name="weight"
               placeholder="Ingrese un parámetro" onChange={e => handleInput(e)} />
                  {go.weight ? <Span>{go.weight}</Span> : null}
            </Div><br/><br/>
            <Label>Imagen</Label>
            <Div>
            <Input type="url" value={req.sprite} name="sprite"
               placeholder="Ingrese un parámetro" onChange={e => handleInput(e)} />
                  {go.sprite ? <Span>{go.sprite}</Span> : null}
                     <br/><br/><br/>
            </Div>
            <Label>Tipos:</Label><br/>
            <TypeContainer >
            {types && types.map((type) => {
               let labelName = type.name[0].toUpperCase() + type.name.slice(1);
               type = type.name;
                  return (
                     <div key={type}>
                        <Label>{labelName}</Label>
                        <Input id={type} value={type} type="checkbox"
                           placeholder="Ingrese un parámetro" isCheckbox={true}
                              onChange={e => handleType(e)}/><br/>
                     </div>
               );
            })}
            </TypeContainer>
            <MiniButton type="submit" value="¡Crear Fakemon!">―⬤—</MiniButton></>}
         </Form>
         <Button isForm={true} onClick={() => history.push('/home')}>Home</Button>
      </Background>
   )
};

export default Creator;