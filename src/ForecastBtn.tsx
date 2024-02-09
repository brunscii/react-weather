import { useEffect, useState } from "react";

export interface ForecastBtnProps{
  title       : string,
  name        : string,
  text        : string,
  color?      : string,
  className?  : string
}

function ForecastBtn( props : ForecastBtnProps ){
  return (
    <button className={props.className? props.className : ''} title = {props.title}>{props.text}</button>
  )
}

export default ForecastBtn