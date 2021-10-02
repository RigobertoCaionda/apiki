import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
const Page = ({inputQuantity, setInputQuant, index}) => {
	const handlePlusClick = () => {
		inputQuantity.push(index);
		setInputQuant([...inputQuantity]);
		//setInputQuant([...inputQuantity, index]);outra maneira de fazer
	}
	const handleMinusClick = () => {
		if (inputQuantity.length > 1) {
			inputQuantity.pop();
			setInputQuant([...inputQuantity]);
		}
	}

	return (
			<tr>
				<td><input type="text" /></td>
				<td><input type="text" /></td>
			<td>
				<div className="plus-less">
					<div className="plus--button" title="Adicionar linha" 
						onClick={handlePlusClick}>
							<AddCircleOutlineIcon style={{width: 20, color: '#000'}}/>
					</div>
						{inputQuantity.length > 1 &&
							<div className="less--button" title="Remover linha" 
							onClick={handleMinusClick}>
								<RemoveCircleOutlineIcon style={{width: 20, color: '#000'}}/>
							</div>
						}
						
				</div>
			</td>
		</tr>
		);
}
export default Page;