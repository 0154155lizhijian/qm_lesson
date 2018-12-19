function* lyrics(){     //生成器函数
    yield `But don't tell me heart`
    yield `My achy breaky heart`;
    yield `I just don't think he'd understand`;
    yield `And if you tell my heart`;
    yield `My achy breaky heart`;
    yield `He might blow up and kill this man`;
}
const achy = lyrics()   //生成器
for (const line of achy){
    console.log(line);
}