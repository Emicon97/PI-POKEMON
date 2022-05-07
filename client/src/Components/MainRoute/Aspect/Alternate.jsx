import styled from "styled-components";

const Error = styled.div`
   user-select: none;
   display: flex;
   margin-top: 2rem;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;

   background-color: rgb(255, 130, 161, .6);
   border-radius: .5%;
   border: 2px solid rgb(88, 46, 46);
   outline: 2px solid rgb(194, 94, 94);

   width: 90vw;
   height: 55rem;

   color: rgb(161, 52, 52);
   font-size: x-large;
   text-shadow: 1px 0 0 rgb(248, 221, 221), -1px 0 0 rgb(248, 221, 221),
      0 1px 0 rgb(248, 221, 221), 0 -1px 0 rgb(248, 221, 221), 1px 1px 0 rgb(248, 221, 221),
      -1px -1px 0 rgb(248, 221, 221), -1px 1px 0 rgb(248, 221, 221), 1px -1px 0 rgb(248, 221, 221);
`;
const Loader = styled.div`
   user-select: none;
   display: flex;
   margin-top: 2rem;
   justify-content: center;
   align-items: center;
   flex-wrap: wrap;

   background-color: rgb(207, 253, 255, .7);
   border-radius: .5%;
   border: 2px solid rgb(46, 78, 88);
   outline: 2px solid rgb(94, 169, 194);

   width: 90vw;
   height: 55rem;

   color: rgb(52, 130, 161);
   font-size: x-large;
   text-shadow: 1px 0 0 rgb(221, 242, 248), -1px 0 0 rgb(221, 242, 248),
      0 1px 0 rgb(221, 242, 248), 0 -1px 0 rgb(221, 242, 248), 1px 1px 0 rgb(221, 242, 248),
      -1px -1px 0 rgb(221, 242, 248), -1px 1px 0 rgb(221, 242, 248), 1px -1px 0 rgb(221, 242, 248);
`;

export { Error, Loader };

// 88, 46, 46