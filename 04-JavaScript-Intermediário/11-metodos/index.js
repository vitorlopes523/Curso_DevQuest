let usuario = {
  nome: 'Vitor',
  excluir: function() {
    console.log('O usuário, ' + this.nome + ' foi excluído!')
  }
}

usuario.excluir()