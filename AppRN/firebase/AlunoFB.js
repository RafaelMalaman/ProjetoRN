import { ConexaoFS } from './ConexaoFB';

export class AlunoFB {
    state = {
        colecao: ConexaoFS.collection('Alunos')
    };

    pegarColecao(){
        return this.state.colecao;
    }
     adicionarAluno(Alunos){
        this.state.colecao.add(Alunos);
    }

    editarAluno(Aluno){
        const {id} = Alunos;
        delete Alunos.id;

        this.state.colecao.doc(id).update(Alunos);
    }

    removedorAlunos(Alunos){
        this.state.colecao.doc(Alunos.id).delete();
    }
}
