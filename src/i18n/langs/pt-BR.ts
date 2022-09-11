import { flatten } from "@onepercentio/one-ui/dist/utils/flatten";
import { Values } from "features/Values/Values.types";

const valuesTranslations: {
    [V in Values]: {
        title: string,
        shortDesc: string
        fullDesc: string
    }
} = {
    quality: {
        title: "Quality first",
        shortDesc: "Sempre que a tarefa foge do trivial, <b>o teste vem primeiro</b>.",
        fullDesc: `Aqui o conceito de <quote>trivial</quote> é variável de acordo com a experiência de cada dev. 
Tenhamos como exemplo, uma integração com uma API.
- O trivial no meu caso, são os tratamentos de loading e erro. <b>Não há razão</b> para testar um padrão que funciona em outros fluxos e muitas vezes já se está generalizado.
- O mais complexo seria o resultado da resposta da API e seu efeito na UI. Na maioria dos casos, é ideal que se teste os possível cenários que essa API pode assumir.

Por isso que quanto mais complexa a tarefa (na visão do Dev) mais relevante é o teste antes do desenvolvimento. O ideal é enumerar todos os possíveis cenários no arquivo de teste antes da implementação.
O resultado desse <quote>exercício</quote> é uma visão geral das necessidades do algoritmos final.`
    },
    seamless: {
        title: "Experiência <i>Seamless</i>",
        shortDesc: "Os elementos que compooem a UI devem ter algum tipo de transição",
        fullDesc: `Aqui o conceito de <quote>Seamless</quote> é utilizado no sentido de se ter uma UI reativa, ou seja, em que os elementos tenham um ciclo de vida visualmente perceptível.
Alguns requisitos de uma UI reativa:
- A transição entre elementos devem conter uma animação de saída para o elemento que se remove, e uma para entrada do elemento que se agrega
- Na medida do possível, um elemento que muda de estado, deve o fazer transicionando propriedades próprias (por exemplo, cor de texto)
- Uma UI não deve mutar de forma repentina, por exemplo, quando se traz um dado de API. Caso seja necessária uma mutação, ele deve ser progressiva`
    },
    simplicity: {
        title: "Direto ao ponto",
        shortDesc: "O usuário não deve receber conteúdo inesperado",
        fullDesc: `Já perdi a conta de quantas vezes cliquei em um elemento inesperado dentro de aplicações por conta de mutações de UI, popups, e mudanças de estado inesperadas.
Como usuário, isso se torna frustrante e reduz a satisfação na utilização da aplicação.
Como desenvolvedores, algumas estratégias nos ajudam a limitar essas experiências
- Utilização de elementos que utilizem o espaço livre da UI
- Adoção de elementos flutuantes não interativos para previnir uma interação acidental`
    },
    adaptive: {
        title: "Responsividade",
        shortDesc: "Mais do que trabalhar com media queries, a estrutura do layout deve ser adaptável",
        fullDesc: `Atualmente priorizo trabalhar com estratégias que utilizem o mínimo de CSS possível. Dessa forma se exíme a necessidade de layouts excessivos para diversas dimensões de tela
        
Apesar do CSS nos oferecer <i>Media queries</i> o abuso das mesmas pode acabar tornando complexa a manutenção.
Existem estratégias que nos ajudam nessa tarefa de um layout adaptável para todos os dispositivos sem muito esforço:

Por exemplo:
- A combinação de max-width + width: 100% para permitir que um elemento tenho um tamanho mas se adapte a larguras menores
- Flex wrap para estruturas que utilizam flex row, mas necessitam adaptar-se a dispositivos menores
- Combinação de <i>Media queries</i> para troca de position quando um elemento deve "flutuar" dentro de um device menor`
    },
    dx: {
        title: "<i>Developer experience</i>",
        shortDesc: "Um pouco além do desenvolvimento de aplicações, o desenvolvimento baseado em nodejs nos ajuda com automatização de tarefas",
        fullDesc: `Sempre que uma tarefa é repetida mais de 1 vez, é muito provável que ela irá se repetir diversas vezes ao longo do tempo.
Logo, as vezes com um pouco de esforço sobre a construção de scripts, essas tarefas podem ser automatizadas, reduzindo muito o esforço futuro.`
    },
}

export default flatten({
    values: valuesTranslations
})