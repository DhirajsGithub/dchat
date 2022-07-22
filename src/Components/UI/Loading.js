import React from 'react'
import classes from './Loading.module.css';

const Loading = () => {
  return (
    <div class={classes.container}>
  <div class={classes.loader}>
    <div class={classes["loader--dot"]}></div>
    <div class={classes["loader--dot"]}></div>
    <div class={classes["loader--dot"]}></div>
    <div class={classes["loader--dot"]}></div>
    <div class={classes["loader--dot"]}></div>
    <div class={classes["loader--dot"]}></div>
  </div>
</div>

  )
}

export default Loading