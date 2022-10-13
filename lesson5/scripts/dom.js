        
        const list = document.querySelector('ul');
      	const input = document.querySelector('input');
      	const button = document.querySelector('button');
		const main = document.querySelector('main');
		const para = document.createElement('p');

		  button.addEventListener('click', () => {
			if(input.value.length === 0){
				para.textContent = 'Please add a chapter from the Book of Mormon.';
				main.appendChild(para);
			} else{
			para.textContent = '';
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