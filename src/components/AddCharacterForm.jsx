import React from 'react'
import { useForm } from 'react-hook-form';
const AddCharacterForm = (props) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        //console.log(data)
        //data.id = null
        props.addCharacter(data)
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
      <button>Add new character</button>
    </form>
    );
}
 
export default AddCharacterForm;