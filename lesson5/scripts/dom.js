        
        const list = document.querySelector('ul');
      	const input = document.querySelector('input');
      	const button = document.querySelector('button');

		  button.addEventListener('click', () => {
			if(input.value.length === 0){
				alert('Please add a chapter of the book of Mormon');
			} else{

			const inputText = input.value;
			input.value = '';
			const listItem = document.createElement('li');
        	const spanText = document.createElement('span');
        	const Btn = document.createElement('button');
			listItem.appendChild(spanText);
			spanText.textContent= inputText;
			listItem.appendChild(Btn);
			Btn.textContent= "\u274C"; 
			list.appendChild(listItem);
			Btn.addEventListener('click', () => {
				list.removeChild(listItem);
		    	});
        	}		
        	input.focus();
      	});