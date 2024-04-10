const btn1 = document.querySelector ('#bt1')
const btn2 = document.querySelector ('#bt2')
const btn3 = document.querySelector ('#bt3')
const btn4 = document.querySelector ('#bt4')

const ig = document.querySelector ('#img')
const desc = document.querySelector ('#descricao')

btn1.addEventListener ('click', ()=>{
    desc.textContent = 'Um viúvo segue o conselho de um amigo e conhece várias mulheres para espantar a solidão. Seu plano parece funcionar quando uma garota linda e misteriosa entra em sua vida, mas aos poucos a moça revela um lado mortal.   Data de lançamento: 03/03/2000 | 1h 55min | Drama, Terror, Suspense | Direção: Takashi Miike | Elenco: Ryo Ishibashi, Jun Kunimura, Miyuki Matsuda | Título original Ôdishon'
    ig.src = '/images/p29706_p_v8_ad.jpg'
})

btn2.addEventListener ('click', ()=> {
    desc.textContent = 'Susie Bannion, uma jovem bailarina americana, vai para a prestigiada Markos Tanz Company, em Berlim. No mesmo dia de sua chegada, a também dançarina Patricia desaparece misteriosamente. Tendo um progresso extraordinário e se destacando logo em seu teste, com a orientação de Madame Blanc, Susie acaba fazendo amizade com outra dançarina, Sara, que compartilha com ela todas as suas suspeitas obscuras e ameaçadoras do conceituado local.  Data de lançamento: 11/04/2019 | 2h 32min | Terror | Direção: Luca Guadagnino| Roteiro David Kajganich | Elenco: Dakota Johnson, Tilda Swinton, Mia Goth | Título original Suspiria '
    ig.src = '/images/Suspiria.jpg'
})

btn3.addEventListener ('click', ()=>{
    desc.textContent = 'Presa em uma fazenda isolada, Pearl deve cuidar de seu pai doente sob a vigilância de sua mãe. Desejando a vida glamouroso que ela viu nos filmes, as tentações e repressões de Pearl colidem.  Data de lançamento: 09/03/2023 | 1h 43min | Terror | Direção: Ti West | Roteiro Mia Goth, Ti West | Elenco: Mia Goth, David Corenswet, Tandi Wright '
    ig.src = '/images/Pearl.jpg'
})

btn4.addEventListener ('click', ()=>{
    desc.textContent = 'Duas jovens que foram vítimas de abuso quando crianças embarcam em uma sangrenta jornada de vingança e acabam envolvidas em um caminho obscuro.  Data de lançamento: 15/04/2009 | 1h 39min | Terror, Suspense | Direção: Pascal Laugier  | Roteiro Pascal Laugier | Elenco: Mylène Jampanoï, Morjana Alaoui, Catherine Bégin | Título original Martyrs  '
    ig.src = '/images/Martyrs.jpg'
})