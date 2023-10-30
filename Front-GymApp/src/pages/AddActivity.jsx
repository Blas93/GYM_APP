import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import upload from '../svg/upload-svgrepo-com.svg';
import '../Css/AddActivity.css';
//import { useNavigate } from "react-router-dom";

export const AddActivity = ({ addActivity }) => {
	const [nombre, setNombre] = useState('');
	const [descripcion, setDescripcion] = useState('');
	const [tipologia, setTipologia] = useState('');
	const [grupoMuscular, setGrupoMuscular] = useState('');
	const [image, setImage] = useState();
	const [imagePreview, setImagePreview] = useState();
	const [showAdd, setShowAdd] = useState(false);

	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	const { token } = useContext(AuthContext);

	const handleSubmit = async (event) => {
		console.log('entra en el handle submit');
		event.preventDefault();
		try {
			const data = new FormData(event.target);
			await addActivity(data, token);
		} catch (error) {
			setError(error.message);
		}
	};

	const handleDeleteImage = (event) => {
		event.preventDefault();
		setImage(null);
		setImagePreview(null);
		//Reset el input file
		document.querySelector('.input-file').value = '';
	};

	const handleEdit = (event) => {
		event.preventDefault();
		setShowAdd(!showAdd);
	};

	return (
		<div>
			<h1 onClick={handleEdit}>Ejercicio a Añadir </h1>
			{showAdd && (
				<form onSubmit={handleSubmit}>
					<button type='submit' id='agregar'>
						Agregar
					</button>

					<input
						type='text'
						placeholder='Nombre'
						value={nombre}
						name='name'
						onChange={(e) => setNombre(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Descripción'
						value={descripcion}
						name='description'
						onChange={(e) => setDescripcion(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Tipología'
						value={tipologia}
						name='typology'
						onChange={(e) => setTipologia(e.target.value)}
					/>
					<input
						type='text'
						placeholder='Grupo Muscular'
						value={grupoMuscular}
						name='muscleGroup'
						onChange={(e) => setGrupoMuscular(e.target.value)}
					/>
					<label>
						<input
							type='file'
							name='image'
							accept='image/*'
							className='input-file'
							onChange={(e) => {
								const file = e.target.files[0];
								setImage(file);
								setImagePreview(URL.createObjectURL(file));
							}}
						/>
						{!image ? (
							<figure>
								<img id='subida' src={upload} alt='Select' title='Select image' />
								{/* <figcaption>Image(Optional)</figcaption> */}
							</figure>
						) : (
							<figure>
								<img
									src={imagePreview}
									alt='Preview'
									onClick={handleDeleteImage}
								/>
								<figcaption>Preview</figcaption>
							</figure>
						)}
					</label>
				</form>
			)}
		</div>
	);
};
