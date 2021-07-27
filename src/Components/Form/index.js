import React, { useState } from "react";
import "./styles.css";



const Form = () => {
    
    // VALOR ATUAL E A FUNÇÃO PARA MUDAR O ESTADO ATUAL DE CADA CAMPO DO FORMULÁRIO
    const [nome, setNome] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    
    // ESSA FUNÇÃO É CHAMADA NO onSubmit DO <form> E EMITE UM ALERTA CONTENDO O CONTEÚDO DOS CAMPOS DO <form>
    const handleSubmit = (e) => {
        // "e.preventDefault();" evita o refresh da página após o submit
        e.preventDefault();
        alert("Seu nome é " + nome);
        alert("Você trabalha na empresa " + empresa);
        alert("Seu email é: " + email);
        alert("Seu telefone é o: " + telefone);
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                type="text" 
                name="nome" 
                placeholder="Como gostaria de ser chamado?" 
                value={nome}
                // o .target aponta para o value desse campo do formulário
                onChange={(e) => setNome(e.target.value)} 
                required
                />
                    
                <input 
                type="text" 
                name="empresa" 
                placeholder="Em qual empresa você trabalha?" 
                value={empresa}
                // o .target aponta para o value desse campo do formulário
                onChange={(e) => setEmpresa(e.target.value)} 
                required
                />
                    
                <input 
                type="email" 
                name="email" 
                placeholder="Digite aqui o seu email" 
                value={email} 
                // o .target aponta para o value desse campo do formulário
                onChange={(e) => setEmail(e.target.value)} 
                required
                />
                    
                <input 
                type="tel" 
                name="telefone" 
                placeholder="Qual o seu telefone?" 
                value={telefone} 
                // o .target aponta para o value desse campo do formulário
                onChange={(e) => setTelefone(e.target.value)} 
                />
                    
                <input 
                type="submit" 
                id="enviar_button" 
                value="ENVIAR" 
                /> 
            </form>
        </>
    )
}

export default Form
