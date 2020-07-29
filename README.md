CALCULAR PRESCRIÇÃO

Cuida-se de um projeto pessoal, cujo objetivo é automatizar o cálculo da prescrição da pretensão em processos cíveis. Como advogado, especialmente na área de seguros, deparo-me com a necessidade constante de calcular a prescrição, especialmente em situações que envolvem a suspensão do prazo. Como não encontrei ferramentas semelhantes, resolvi criar utilizando JavaScript.

Informações adicionais sobre o sistema:

A coluna "Ano, mês e dia" apresenta o período cheio em anos, meses e dias. Os anos e meses quebrados não são computados no cálculo.
A linha "Tempo percorrido" apresenta a diferença entre o "Período" e a "Suspensão" apenas em dias.
O sistema computa corretamente os anos bissextos, os quais têm 366 dias. Se alguma data teve como termo inicial data até 29/02 em ano bissexto, um ano completo terá 366 dias.
A cada 4 anos haverá um ano bissextos - ex.: 2020 e 2024 são anos bissextos.
