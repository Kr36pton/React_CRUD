import React from 'react'
import { set, useForm } from 'react-hook-form';
const EditCharacterForm = (props) => {

  console.log(props.currentCharacter)

  const { register, setValue, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: props.currentCharacter
  });

  setValue('name', props.currentCharacter.name)
  setValue('game', props.currentCharacter.game)
  setValue('year', props.currentCharacter.year)

  const onSubmit = (data, e) => {
    data.id = props.currentCharacter.id
    props.updateCharacter(props.currentCharacter.id, data)
    e.target.reset();
  }

  return (  
  <form onSubmit={handleSubmit(onSubmit)}>
    <label>Name</label>
    <input type="text" {...register("name", { required: true })}/>
    <div>
      {errors.name?.type === 'required' && "Name is a required entry"}
    </div>
    <label>Game</label>
    <input type="text" {...register("game", { required: true })}/>
    <div>
      {errors.game?.type === 'required' && "Game is a required entry"}
    </div>
    <label>Year</label>
    <input type="text" {...register("year", { required: true })}/>
    <div>
      {errors.year?.type === 'required' && "Game is a required entry"}
    </div>
    <button>Edit character</button>
  </form>
  );
}
 
export default EditCharacterForm;