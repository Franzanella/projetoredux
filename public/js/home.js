//VALIDAÇÃO DO FORMULÁRIO EM JAVASCRIPT 

function validar(){
	var nome = formuser.nome.value;
	var sobrenome = formuser.sobrenome.value;
	var idade = formuser.idade.value;
	var email = formuser.email.value;
	var comentario = formuser.comentario.value;
	
	if(nome == ""){
		alert('Preencha o campo nome.');
		formuser.nome.focus();
		return false;
	}
	
	if(sobrenome == ""){
		alert('Preencha o campo sobrenome.');
		formuser.sobrenome.focus();
		return false;
	}

	if(idade == ""){
		alert('Preencha o campo idade.');
		formuser.idade.focus();
		return false;
	}
	
	if(email == ""){
		alert('Preencha o campo email.');
		formuser.email.focus();
		return false;
	}

	if(comentario == ""){
		alert("Por favor, comente algo");
		formuser.comentario.focus();
		return false;
	}
	
	if (comentario.length>150){
       alert("Texto Muito Grande");
	   return false;
    }
	
	if (comentario ==""){
       alert("Erro, campo não preenchido");
       return false;
    }
}

var $doc = $('html, body');
$('.scrollSuave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});