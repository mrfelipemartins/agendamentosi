$(document).ready(function() {

$("#formAgendamento").on('submit', function(e) {
	e.preventDefault();
	var cpf = $("input[name='cpf']").val();
	var nome = $("input[name='nome']").val();
	var data_nascimento = $("input[name='data_nascimento']").val();
	var email = $("input[name='email']").val();
	var telefone = $("input[name='telefone[0]']").val() + ' ' + $("input[name='telefone[1]']").val();
	var celular = $("input[name='celular[0]']").val() + ' ' + $("input[name='celular[1]']").val();
	var especialidade = $("select[name='especialidade']").find(":selected").text();
	var local = $("select[name='local'] option:selected").text();
	var medico = $("select[name='medico'] option:selected").text();
	var data_agendamento = $("select[name='data'] option:selected").text();
	var horario_agendamento = $("select[name='horario'] option:selected").text();
	var template = 'CPF: ' + cpf + '<br> Nome: ' + nome + '<br> Data de Nascimento: ' + data_nascimento + '<br> E-mail: ' + email + '<br> Telefone: ' + telefone + '<br> Celular: ' + celular + '<br> Especialidade: ' + especialidade + '<br> Local: ' + local + '<br> Médico: ' + medico + '<br> Data do Agendamento: ' + data_agendamento + '<br> Horario do Agendamento: ' + horario_agendamento; 
	$("#modalAgendamento .modal-body").html(template);
	$("#modalAgendamento").modal('show');
});
$("#confirmarAgendamento").on('click', function() {
	$("#modalAgendamento").modal('hide');
	swal('Pronto!', 'Seu agendamento foi realizado com sucesso.', 'success');
	$('#formAgendamento').trigger("reset");
});
});