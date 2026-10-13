function Buttons({id} : {id: string})
{
	function turnToLight()
	{
		try
		{
			const element = document.getElementById(id);
			if (!element) throw new Error(`Element not found for id: '${id}'.`);
			element.classList.remove('dark-mode');
			element.classList.add('light-mode');
		}
		catch (error)
		{
			console.error(error);
		}
	}
	function turnToDark()
	{
		try
		{
			const element = document.getElementById(id);
			if (!element) throw new Error(`Element not found for id: '${id}'.`);
			element.classList.remove('light-mode');
			element.classList.add('dark-mode');
		}
		catch (error)
		{
			console.error(error);
		}
	}
	return (
		<>
			<button onClick={turnToLight}>Bom dia</button>
			<button onClick={turnToDark}>Boa noite</button>
		</>
	);
}

export default Buttons;