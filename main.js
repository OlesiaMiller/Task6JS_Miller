(function($){

    var container = document.getElementById("container");
    var a = document.getElementsByClassName('container_item');
    var imgCont = document.getElementsByClassName('container_item-img');
    var img = document.getElementsByClassName('img');
    var description = document.getElementsByClassName('container_item-description');
    var price = document.getElementsByClassName('container_item-price');
    var button = document.getElementById('button');
    var newDiscription = document.getElementById('newDiscription');
    var newCost = document.getElementById('newCost');
    var download = document.getElementById('download');
    var fileName = document.getElementById('fileName');
    var form = document.getElementById('form');
    var add = document.getElementById('add');



	var imgCollect = [{name: {one: 'images/Aloe-Vera5_1.jpg', two: 'images/Aloe-Vera5_2.jpg', three: 'images/Aloe-Vera5_3.jpg'} , description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: {one: 'images/Aloe-Vera5_1.jpg', two: 'images/Aloe-Vera5_2.jpg', three: 'images/Aloe-Vera5_3.jpg'} , description: 'Aloe Vera In Mini Dolores Planter', price: '$25'},
                      {name: 'images/cactus-1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/cactus-18.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/gorshok-1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/is3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/th4.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/the-sill_1.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/the-sill_2.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'},    
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$25'}, 
                      {name: 'images/Aloe-Vera5_3.jpg', description: 'Aloe Vera In Mini Dolores Planter', price: '$100'}
]

 

var download = document.getElementById('download');
var fileName = document.getElementById('fileName');

var z = 0;
var y = 8;
// для подсчета товаров на странице

add.addEventListener('click', function() {
    form.style.display = 'block';
    add.style.display = 'none';
})// вызов формы для добавления нового товара


download.addEventListener('click', function() {
    var imgName = fileName.value;

    let newGoods = {
	    name: 'uploads/' + imgName.substring(12),
	    description: newDiscription.value,
	    price: '$' + newCost.value
        }

    imgCollect.push(newGoods);
    container.innerHTML = '';

    cellClick();
    console.log(imgCollect);

    add.style.display = 'block';
    form.style.display = 'none';
    console.log(y);
    

    }) // добавление нового товара

var cellClick = function() {
    for (let i = z; i < y; i++) {
        var n = document.createElement('div');
        n.className = 'container_item-grid';
        container.appendChild(n);

        var m = document.createElement('div');
        m.className = 'container_item-img container_item-list-img';
        n.appendChild(m);

        var l = document.createElement('img');
        l.className = 'img img-list';
        if (typeof imgCollect[i].name['one'] == "string") {
            l.setAttribute('src',imgCollect[i].name.one);
            m.appendChild(l);
        } else {
            l.setAttribute('src',imgCollect[i].name);
            m.appendChild(l);
        }
        m.appendChild(l);
        var r = document.createElement('div');
        r.className = 'container_item-description container_item-list-description';
        n.appendChild(r);

        var p = document.createElement('p');
        p.innerHTML = imgCollect[i].description;
        r.appendChild(p);

        var pr = document.createElement('div');
        pr.className = 'container_item-price container_item-list-price';
        n.appendChild(pr);

        var cost = document.createElement('p');
        cost.innerHTML = imgCollect[i].price;
        pr.appendChild(cost);

        if (typeof imgCollect[i].name['one'] == "string") {

            var colorForm = document.createElement('form');
            n.appendChild(colorForm);

            var r1 = document.createElement('input');
            r1.type = 'radio';
            r1.className = 'color-pink';
            r1.name = 'colorChecked';
            colorForm.appendChild(r1);

            var r2 = document.createElement('input');
            r2.type = 'radio';
            r2.className = 'color-green';
            r2.name = 'colorChecked';
            colorForm.appendChild(r2);

            var r3 = document.createElement('input');
            r3.type = 'radio';
            r3.className = 'color-white';
            r3.name = 'colorChecked';
            colorForm.appendChild(r3);
        }
    }
} // создание "сетки"

var changeColor = function() {

    for (let i = 0; i <img.length; i++) {

        if (typeof imgCollect[i].name['one'] == "string") {
            var one = document.getElementsByClassName('color-pink');
            var two = document.getElementsByClassName('color-green');
            var three = document.getElementsByClassName('color-white');
          

            one[i].addEventListener('click', function(){
                img[i].src = imgCollect[i].name.one;
            })
    
            two[i].addEventListener('click', function(){
                img[i].src = imgCollect[i].name.two;
            })
    
            three[i].addEventListener('click', function(){
                img[i].src = imgCollect[i].name.three;
            })


    };
console.log('hello');
}  
} // функция для индикаторов



cell.addEventListener('click', function() {

    container.innerHTML = '';
    form.style.display = 'none';
    add.style.display = 'block';

    z = 0;
    y = 8;

    cellClick();
    button.style.display = 'block';

    for (let i = 0; i < a.length; i++) {
        a[i].classList.add('container_item-grid'); 
        a[i].classList.remove('container_item-list'); 
    }

    changeColor();
});

var listClick = function() {
    for (let i = z; i < y; i++) {
        var n = document.createElement('div');
        n.className = 'container_item-list';
        container.appendChild(n);

        var m = document.createElement('div');
        m.className = 'container_item-list-img';
        n.appendChild(m);

        var l = document.createElement('img');
        l.className = 'img img-list';
        if (typeof imgCollect[i].name['one'] == "string") {
            l.setAttribute('src',imgCollect[i].name.one);
            m.appendChild(l);
        } else {
            l.setAttribute('src',imgCollect[i].name);
            m.appendChild(l);
        }
        
        var r = document.createElement('div');
        r.className = 'container_item-list-description';
        n.appendChild(r);

        var p = document.createElement('p');
        p.innerHTML = imgCollect[i].description;

        r.appendChild(p);

        var pr = document.createElement('div');
        pr.className = 'container_item-list-price';
        n.appendChild(pr);

        var cost = document.createElement('p');
        cost.innerHTML = imgCollect[i].price;

        pr.appendChild(cost);

        if (typeof imgCollect[i].name['one'] == "string") {

            var colorForm = document.createElement('form');
            colorForm.className = 'colorForm';
            n.appendChild(colorForm);

            var r1 = document.createElement('input');
            r1.type = 'radio';
            r1.className = 'color-pink';
            r1.name = 'colorChecked';
            colorForm.appendChild(r1);

            var r2 = document.createElement('input');
            r2.type = 'radio';
            r2.className = 'color-green';
            r2.name = 'colorChecked';
            colorForm.appendChild(r2);

            var r3 = document.createElement('input');
            r3.type = 'radio';
            r3.className = 'color-white';
            r3.name = 'colorChecked';
            colorForm.appendChild(r3);
        }

        
    }
} // создание "списка"


button.addEventListener('click', function() {
    z += 8;
    y += 8;

    if (y >= imgCollect.length) {
        button.style.display = 'none';
    }

    let test = document.getElementsByClassName('container_item-grid');
    test.length > 0 ? cellClick() : listClick();
    
}) // исчезание кнопки прогрузки новых изображений

list.addEventListener('click', function() {
    
    container.innerHTML = '';
    form.style.display = 'none';
    add.style.display = 'block';

    z = 0;
    y = 8;
    button.style.display = 'block';
    listClick();

    for (let i = 0; i < a.length; i++) {
        a[i].classList.add('container_item-list'); 
        a[i].classList.remove('container_item-grid'); 
        imgCont[i].classList.add('container_item-list-img');
        img[i].classList.add('img-list'); 
        description[i].classList.add('container_item-list-description'); 
        price[i].classList.add('container_item-list-price'); 

        
    }
    console.log('1');
    changeColor();
    
    console.log('2');

}) // изменение с сетки на список

var files; // переменная. будет содержать данные файлов

// заполняем переменную данными файлов, при изменении значения file поля
$('input[type=file]').on('change', function(){
	files = this.files;
});


// обработка и отправка AJAX запроса при клике на кнопку upload_files
$('.upload_files').on( 'click', function( event ){

	event.stopPropagation(); // остановка всех текущих JS событий
	event.preventDefault();  // остановка дефолтного события для текущего элемента - клик для <a> тега

	// ничего не делаем если files пустой
	if( typeof files == 'undefined' ) return;

	// создадим данные файлов в подходящем для отправки формате
	var data = new FormData();
	$.each( files, function( key, value ){
		data.append( key, value );
	});

	// добавим переменную идентификатор запроса
	data.append( 'my_file_upload', 1 );

	// AJAX запрос
	$.ajax({
		url         : './submit.php',
		type        : 'POST',
		data        : data,
		cache       : false,
		dataType    : 'json',
		// отключаем обработку передаваемых данных, пусть передаются как есть
		processData : false,
		// отключаем установку заголовка типа запроса. Так jQuery скажет серверу что это строковой запрос
		contentType : false,
		// функция успешного ответа сервера
		success     : function( respond, status, jqXHR ){

			// ОК
			if( typeof respond.error === 'undefined' ){
				// файлы загружены, делаем что-нибудь

				// покажем пути к загруженным файлам в блок '.ajax-reply'

				var files_path = respond.files;
				var html = '';
				$.each( files_path, function( key, val ){
					 html += val +'<br>';
				} )

				$('.ajax-reply').html( html );
			}
			// error
			else {
				console.log('ОШИБКА: ' + respond.error );
			}
		},
		// функция ошибки ответа сервера
		error: function( jqXHR, status, errorThrown ){
			console.log( 'ОШИБКА AJAX запроса: ' + status, jqXHR );
		}
	});
});


})(jQuery)