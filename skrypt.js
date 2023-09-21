function changeClass(showClass)
{
    let cube = document.querySelector('.cube');
    let cubeClass = cube.classList[0];
    cube.setAttribute("class", "");
    cube.classList.add(cubeClass);
    cube.classList.add(showClass);
}



document.addEventListener('keyup', function(e) {

    let key = e.key.toLowerCase();
    let showClass = '';

    switch(key)
    {
        case '1':
            showClass = 'show-1';
            break;
        case '2':
            showClass = 'show-2';
            break;

        case '3':
            showClass = 'show-3';
            break;

        case '4':
            showClass = 'show-4';
            break;

        case '5':
            showClass = 'show-5';
            break;
			
		case '6':
            showClass = 'show-6';
            break;
			
        case 'r':
			let number = Math.floor(Math.random()*6)+1;
            showClass = 'show-'+number;
            break;
			
		case 'a':
            showClass = 'animation';
            break;
    }

    if(showClass != '') changeClass(showClass);
});