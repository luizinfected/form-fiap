document.getElementById('form').addEventListener('submit', async function (e) {
    e.preventDefault()


    let nomeUm = document.getElementById('nomeUm').value
    let nomeDois = document.getElementById('nomeDois').value
    let nomeTres = document.getElementById('nomeTres').value
    let nomeQuatro = document.getElementById('nomeQuatro').value
    let nomeCinco = document.getElementById('nomeCinco').value
    let historiaGP = document.getElementById('historiaGP').value

    const data = {
        "names": [nomeUm, nomeDois, nomeTres, nomeQuatro, nomeCinco],
        "message": historiaGP
    }

    try {
        const resposta = await fetch('https://fsdt-contact-acf4ab9867a7.herokuapp.com/contact',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
        )

        if (resposta.ok) {
            const jsonResposta = await resposta.json()
            console.log('Successo!', jsonResposta);
            alert('Formulário enviado com sucesso!!!')
        } else {
            alert('Houve um problema ao enviar o formulário!!!');
        }

    }
    catch (error) {
        alert('Houve um problema ao enviar o formulário!!!');
    }
})